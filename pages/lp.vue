<template>
  <div>
    <Hero2 />
    <v-banner color="white">
      <v-sheet>
        <div class="ma-5 ma-md-10">
          <p class="text-md-h5 text-sm-h6">
            Remenuは習慣化に大きく効果があるif thenプランニングで習慣を管理できるWebアプリです。
          </p>
          <p class="text-md-h5 text-sm-h6">
            ログイン不要で始められます。
          </p>
        </div>
      </v-sheet>
      <template #actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >
          if thenプランニングについて
        </v-btn>
      </template>
    </v-banner>
    <v-container class="px-0">
      <v-row justify="center" align="center">
        <!-- <v-col cols="11" sm="10" md="9">
          <div class="text-center">
            <TopView
              class="mt-6"
            />
            <Feature />
            <Pricing />
          </div>
        </v-col> -->
        <v-col v-for="item in items" :key="item.if" cols="12" sm="6" md="4">
          <v-card class="mx-2" height="180" rounded="xl">
            <div class="pt-10 px-10">
              <v-icon>{{ item.ifIcon }}</v-icon>
              {{ item.if }}
            </div>
            <div class="pt-3 px-10">
              <v-icon>{{ item.thenIcon }}</v-icon>
              {{ item.then }}
            </div>
            <div class="pt-3 px-10 d-flex flex-row-reverse">
              <v-btn color="primary" @click="goLink(item.if, item.then)">
                習慣を編集する
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { mdiWeatherSunny, mdiHuman } from '@mdi/js'
import Hero2 from '~/components/component/landingPage/Hero2.vue'
// import Feature from '~/components/component/landingPage/Feature.vue'
// import Pricing from '~/components/component/landingPage/Pricing.vue'
// import TopView from '~/components/component/TopView.vue'

export default {
  components: {
    // Logo,
    // VuetifyLogo,
    // TopView,
    Hero2
    // Feature,
    // Pricing
  },
  layout () {
    return 'welcome2'
  },
  data () {
    return {
      mdiWeatherSunnySvgPath: mdiWeatherSunny,
      mdiHumanSvgPath: mdiHuman
    }
  },
  computed: {
    items () {
      return [
        { if: '朝起きたら', ifIcon: mdiWeatherSunny, then: 'ストレッチする', thenIcon: mdiHuman },
        { if: 'asa', ifIcon: mdiWeatherSunny, then: 'stre', thenIcon: mdiHuman }
      ]
    }
  },
  methods: {
    goLink (pram1, pram2) {
      this.$router.push(this.localeRoute({ path: '/habit/new', query: { if: pram1, then: pram2 } }))
    }
  }
}
</script>
