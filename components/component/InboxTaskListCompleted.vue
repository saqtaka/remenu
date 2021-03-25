<template>
  <div>
    <div v-if="tasks.length" class="mt-1 mr-1 pt-1 pr-1 text-right">
      <span class="primary--text">{{ totalTime }}{{ $t('minute') }}</span>
    </div>
    <TaskCardCompleted
      v-for="(task, index) in tasks"
      :key="index"
      :task-data="task"
      :data-selected="index == selectedIndex"
      @clearButton="selectTask(index)"
      @editButton="goToEdit(index)"
    />
  </div>
</template>

<script>
import TaskCardCompleted from '@/components/component/TaskCardCompleted.vue'
import FBAddHabitTrigger from '@/javascript/FBHabitTrigger.js'
import FBUpsertDailyReport from '@/javascript/FBDailyReport.js'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  components: {
    TaskCardCompleted
  },
  data () {
    return {
      tasks: [
        {
          id: null,
          title: null,
          habitId: null,
          date: null,
          count: null,
          timeRequired: null
        }
      ],
      selectedIndex: 0,
      totalTime: 0
    }
  },
  watch: {
    tasks: {
      handler (newValue, oldValue) {
        this.totalTime = 0

        for (const task of newValue) {
          this.totalTime += task.timeRequired
        }
      }
    }
  },
  created () {
    // login状態が変更されたら
    firebase.auth().onAuthStateChanged((user) => {
      // loginしてたら
      if (user) {
        const today = new Date()
        const y = today.getFullYear()
        const m = ('00' + (today.getMonth() + 1)).slice(-2)
        const d = ('00' + today.getDate()).slice(-2)
        const todayString = y + '/' + m + '/' + d

        firebase
          .firestore()
          .collection('tasks')
          .where('uid', '==', `${user.uid}`)
          .where('completed', '==', true)
          .where('deleted', '==', false)
          .where('date', '>=', new Date(todayString + ' 00:00'))
          .where('date', '<=', new Date(todayString + ' 23:59'))
          .orderBy('date', 'desc')
          .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
              if (change.type === 'added') {
                this.tasks.push({
                  id: change.doc.id,
                  title: change.doc.data().name,
                  habitId: change.doc.data().habitId,
                  date: change.doc.data().date ? change.doc.data().date.toDate() : '',
                  count: change.doc.data().habitId ? change.doc.data().count : '',
                  timeRequired: change.doc.data().timeRequired ? change.doc.data().timeRequired : ''
                })
              }
            })
          })

        this.tasks.splice(this.selectedIndex, 1)
      }
    })
  },
  methods: {
    selectTask (index) {
      this.selectedIndex = index

      const selectedHabitId = this.tasks[this.selectedIndex].habitId
      // var selectedTaskTitle = this.tasks[this.selectedIndex].title;
      const selectedCount = this.tasks[this.selectedIndex].count

      // firestore update
      // let self = this;
      firebase
        .firestore().collection('tasks')
        .doc(this.tasks[this.selectedIndex].id)
        .update({
          completed: true
        })
        .then(function () {
          const date = new Date()
          FBUpsertDailyReport(firebase.auth().currentUser.uid, date, selectedHabitId)

          if (selectedHabitId) {
            FBAddHabitTrigger(selectedHabitId, selectedCount)
          }
        })
        .catch(function (error) {
          console.error(error)
        })

      this.tasks.splice(this.selectedIndex, 1)
    },
    goToEdit (index) {
      this.selectedIndex = index

      this.$router.push({ path: `task/${this.tasks[index].id}` })
    },
    displayTitle (text) {
      return text.split(/\n/)[0]
    }
  }
}
</script>
