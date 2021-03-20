<template>
  <div>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <div>
        <InputMemoContent v-model="inputMemo" />
      </div>
      <BasicButton @buttonClick="saveMemo">
        {{ $t('btn_save') }}
      </BasicButton>
    </v-form>
  </div>
</template>

<script>
import BasicButton from '@/components/basic/BasicButton.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'

import InputMemoContent from '@/components/basic/memo/InputMemoContent.vue'

export default {
  name: 'NewMemo',
  components: {
    BasicButton,
    InputMemoContent
  },
  props: ['sendMemo'],
  data () {
    return {
      newMemo:
        {
          id: null,
          title: null
        },
      inputMemo: '',
      valid: true,
      memoid: ''
    }
  },
  watch: {
    sendMemo: {
      handler (newValue, oldValue) {
        // const self = this
        // firebase
        //   .firestore()
        //   .collection('memos')
        //   .doc(this.sendMemo)
        //   .get()
        //   .then(function (doc) {
        //     self.inputMemo = doc.data().memo
        //   })
      },
      deep: true
    }
  },
  created () {
    this.memoid = this.$route.params.memoid
    const self = this
    firebase
      .firestore()
      .collection('memos')
      .doc(this.memoid)
      .get()
      .then(function (doc) {
        self.inputMemo = doc.data().memo
      })
  },
  methods: {
    saveMemo (e) {
      // e.preventDefault()

      const self = this
      // firestore update
      firebase.firestore().collection('memos').doc(this.memoid).update({
        memo: self.inputMemo
      })
        .then(function () {
          self.$router.push({ path: '/memo' })
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
  /* .memoContent {
    height: 500px;
  } */
</style>
