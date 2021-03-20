<template>
  <div id="memoList">
    <MemoCard
      v-for="(memo, index) in memos"
      :key="index"
      :memo-data="memo"
      :data-selected="index == selectedIndex"
      @clearButton="selectMemo(index)"
    />
  </div>
</template>

<script>
import MemoCard from '@/components/component/MemoCard.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  name: 'MemoList',
  components: {
    MemoCard
  },
  data () {
    return {
      memos: [
        {
          id: null,
          title: null
        }
      ],
      selectedIndex: 0
    }
  },
  created () {
    // login状態が変更されたら
    firebase.auth().onAuthStateChanged((user) => {
      // loginしてたら
      if (user) {
        firebase
          .firestore()
          .collection('memos')
          .where('uid', '==', `${user.uid}`)
          .where('deleted', '==', false)
          .orderBy('created')
          .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
              if (change.type === 'added') {
                this.memos.push({
                  id: change.doc.id,
                  title: change.doc.data().memo
                })
              }
            })
          })

        this.memos.splice(this.selectedIndex, 1)
      }
    })
  },
  methods: {
    selectMemo (index) {
      this.selectedIndex = index

      this.$router.push({ path: `memoeditor/${this.memos[index].id}` })
    }
  }
}
</script>
