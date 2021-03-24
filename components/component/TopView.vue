<template>
  <div>
    <v-sheet class="bg-sheet pb-8" elevation="3">
      <v-container class="py-12 py-lg-16 text-center">
        <v-row justify="center">
          <v-col cols="12">
            <h2 class="text-h4 primary--text mt-2">
              if thenプランで習慣を管理
            </h2>
          </v-col>
          <v-col cols="8">
            <div>
              <v-text-field
                v-model="ifDisplayValue"
                :loading="isIfLoading"
              />
              <v-text-field
                v-model="thenDisplayValue"
                :loading="isThenLoading"
              />
            </div>
          </v-col>
          <v-col cols="12">
            <div>
              <h3>Remenuはif thenプランで習慣を管理できるWebアプリです。</h3>
              <v-divider />
              <div class="mt-6">
                <h4>if thenプランとは？</h4>
                <div class="text-left mx-16">
                  <p>if then プランはもし「こういう状況になったら、こういう行動をとる」というのを自分の中に条件付けすることで、目標達成を促進する方法です。</p>
                  <p>例えば、「お風呂に入る前に、腕立て伏せをする」</p>
                  <p>というようにアクションをとる状況を事前に決めておくことで、行動を起こすことができる確率が大幅に上がります。</p>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12">
            <div>
              <v-btn to="/signup">
                新しい方法で習慣を管理する
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <div />
  </div>
</template>

<script>
export default {
  data () {
    return {
      ifDisplayValue: '',
      thenDisplayValue: '',
      isIfLoading: false,
      isThenLoading: false,
      ifArray: [
        'ご飯を食べる前に',
        '寝る前に',
        '朝起きたら',
        'お昼休憩に',
        '買い物に行った後に',
        '学校から帰ってきたら',
        '会社から帰ってきたら',
        '夜、食器を洗ったら',
        '子供が寝たら',
        'Twitterを見たら'
      ],
      thenArray: [
        '腕立て伏せを5回する',
        'ストレッチを5分する',
        '英単語を3つ覚える',
        'サプリを飲む',
        '本を1ページ読む',
        '部屋を片づける',
        'ニュースを読む',
        'メールの返信をする',
        'スクワットを10回する',
        '10分勉強する'
      ],
      count: 0
    }
  },
  created () {
    const setDisplay = () => {
      if (this.count === 0) {
        // if loading
        this.ifDisplayValue = ''
        this.isIfLoading = true
        this.count = 1
      } else if (this.count === 1) {
        // if value change
        this.isIfLoading = false
        this.ifDisplayValue = this.ifArray[Math.floor(Math.random() * this.ifArray.length)]
        this.count = 2
      } else if (this.count === 2) {
        // then loading
        this.thenDisplayValue = ''
        this.isThenLoading = true
        this.count = 3
      } else if (this.count === 3) {
        // then value change
        this.isThenLoading = false
        this.thenDisplayValue = this.thenArray[Math.floor(Math.random() * this.thenArray.length)]
        this.count = 0
      }
    }
    setInterval(setDisplay, 3000)
  }
}
</script>
