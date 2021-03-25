<template>
  <div id="taskEditorForm">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <div>
        <InputTaskName v-model="selectedTask.title" />
        <InputTaskDeadline v-model="selectedTask.dateForDisplay" />
        <InputTaskTimeRequired v-model="selectedTask.timeRequired" />
        <InputTaskMemo v-model="selectedTask.memo" />
      </div>
      <BasicButton :disabled="!valid" @buttonClick="saveTask">
        {{ $t('btn_save') }}
      </BasicButton>
    </v-form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import BasicButton from '~/components/basic/BasicButton.vue'
import 'firebase/firestore'
// import $ from 'jquery'
// import 'jquery-ui/ui/widgets/datepicker'

import InputTaskName from '~/components/basic/task/InputTaskName.vue'
import InputTaskMemo from '~/components/basic/task/InputTaskMemo.vue'
import InputTaskDeadline from '~/components/basic/task/InputTaskDeadline.vue'
import InputTaskTimeRequired from '~/components/basic/task/InputTaskTimeRequired.vue'

export default {
  name: 'TaskEditorForm',
  components: {
    BasicButton,
    InputTaskName,
    InputTaskMemo,
    InputTaskDeadline,
    InputTaskTimeRequired
  },
  props: {
    sendTask: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selectedTask:
        {
          title: null,
          date: null,
          dateForDisplay: null,
          timeRequired: null,
          memo: null
        },
      valid: true,
      taskid: ''
    }
  },
  watch: {
    sendTask: {
      handler (newValue, oldValue) {
        this.taskid = this.sendTask

        const self = this
        firebase
          .firestore()
          .collection('tasks')
          .doc(this.sendTask)
          .get()
          .then(function (doc) {
            self.selectedTask.title = doc.data().name
            self.selectedTask.date = doc.data().date

            let dateTemp
            let y
            let m
            let d
            if (self.selectedTask.date) {
              dateTemp = new Date(self.selectedTask.date.toDate())

              // var today = new Date()
              y = dateTemp.getFullYear()
              m = ('00' + (dateTemp.getMonth() + 1)).slice(-2)
              d = ('00' + dateTemp.getDate()).slice(-2)
            }

            self.selectedTask.dateForDisplay = dateTemp ? y + '-' + m + '-' + d : null
            self.selectedTask.timeRequired = doc.data().timeRequired
            self.selectedTask.memo = doc.data().memo
          })
      },
      deep: true
    }
  },
  created () {
    // this.taskid = this.$route.params.taskid
    // const self = this
    // firebase
    //   .firestore()
    //   .collection('tasks')
    //   .doc(this.taskid)
    //   .get()
    //   .then(function (doc) {
    //     self.selectedTask.title = doc.data().name
    //     self.selectedTask.date = doc.data().date

    //     let dateTemp
    //     let y
    //     let m
    //     let d
    //     if (self.selectedTask.date) {
    //       dateTemp = new Date(self.selectedTask.date.toDate())

    //       // var today = new Date()
    //       y = dateTemp.getFullYear()
    //       m = ('00' + (dateTemp.getMonth() + 1)).slice(-2)
    //       d = ('00' + dateTemp.getDate()).slice(-2)
    //     }

    //     self.selectedTask.dateForDisplay = dateTemp ? y + '-' + m + '-' + d : null
    //     self.selectedTask.timeRequired = doc.data().timeRequired
    //     self.selectedTask.memo = doc.data().memo
    //   })
  },
  // created: function () {
  //   $(function () {
  //     $('#datepicker').datepicker(
  //       {
  //         dateFormat: 'yy/mm/dd',
  //         onSelect: function () {
  //           var e = document.createEvent('HTMLEvents')
  //           e.initEvent('input', false, true)
  //           this.dispatchEvent(e)
  //         }
  //       })
  //   })
  // },
  methods: {
    saveTask (e) {
      // e.preventDefault()

      const self = this
      // firestore update
      firebase.firestore().collection('tasks').doc(this.taskid).update({
        name: self.selectedTask.title ? self.selectedTask.title : '',
        date: self.selectedTask.dateForDisplay ? new Date(self.selectedTask.dateForDisplay) : null,
        timeRequired: self.selectedTask.timeRequired ? Number(self.selectedTask.timeRequired) : Number(0),
        memo: self.selectedTask.memo ? self.selectedTask.memo : null
      })
        .then(function () {
          // self.$router.push({ path: '/task' })
          self.$router.go(-1)
        })
    }
  }
}
</script>

<style scoped>
    /* textarea {
        width: 80%;
        height: 250px;
    } */
</style>
