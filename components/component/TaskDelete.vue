<template>
  <div id="taskDelete">
    <DeleteButton @buttonClick="deleteTask">
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
  name: 'TaskDelete',
  components: {
    DeleteButton
  },
  props: ['getTask'],
  data () {
    return {
      selectedTask: null
    }
  },
  watch: {
    getTask: {
      handler (newValue, oldValue) {
        this.selectedTask = this.getTask
      },
      deep: true
    }
  },
  methods: {
    ...mapActions('layout', ['ALERT_DIALOG_MESSAGE']),
    deleteTask () {
      const self = this
      // firestore update
      firebase.firestore().collection('tasks').doc(this.selectedTask).update({
        deleted: true
      })
        .then(function () {
          // self.$router.push(self.localeRoute({ path: '/task' }))
          self.$router.go(-1)
        })
        .catch(function (error) {
          // console.error(error)
          this.ALERT_DIALOG_MESSAGE(error.message)
        })
    }
  }
}
</script>
