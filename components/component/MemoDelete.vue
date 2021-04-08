<template>
  <div>
    <DeleteButton @buttonClick="deleteMemo">
      {{ $t('btn_delete') }}
    </DeleteButton>
  </div>
</template>

<script>
import DeleteButton from '@/components/basic/DeleteButton.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'

import { mapActions } from 'vuex'

export default {
  components: {
    DeleteButton
  },
  props: ['getMemo'],
  data () {
    return {
      selectedMemo: null
    }
  },
  watch: {
    getMemo: {
      handler (newValue, oldValue) {
        this.selectedMemo = this.getMemo
      },
      deep: true
    }
  },
  methods: {
    ...mapActions('layout', ['ALERT_DIALOG_MESSAGE']),
    deleteMemo () {
      const self = this
      // firestore update
      firebase.firestore().collection('memos').doc(this.selectedMemo).update({
        deleted: true
      })
        .then(function () {
          self.$router.push(self.localeRoute({ path: '/memo' }))
        })
        .catch(function (error) {
          this.ALERT_DIALOG_MESSAGE(error.message)
        })
    }
  }
}
</script>
