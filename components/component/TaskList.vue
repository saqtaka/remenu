<template>
  <div id="taskList">
    <div class="mt-1 mr-1 pt-1 pr-1 text-right">
      <span class="primary--text">{{ this.totalTime }}{{ $t('minute') }}</span>
    </div>
    <TaskCard
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
import TaskCard from '@/components/component/TaskCard.vue'
import FBAddHabitTrigger from '@/javascript/FBHabitTrigger.js'
import FBUpsertDailyReport from '@/javascript/FBDailyReport.js'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  name: 'TaskList',
  components: {
    TaskCard
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
          this.totalTime = this.totalTime + Number(task.timeRequired)
        }
      }
    }
  },
  created () {
    // login状態が変更されたら
    firebase.auth().onAuthStateChanged((user) => {
      // loginしてたら
      if (user) {
        // firebase
        //     .firestore()
        //     .collection("task")
        //     .where("uid", "==", `${user.uid}`)
        //     .where("completed", "==", false)
        //     .orderBy('created')
        //     .get()
        //     .then(snapshot => {
        //         snapshot.forEach(doc => {
        //             // this.tasks.push({
        //             //     id: doc.id,
        //             //     title: doc.data().task
        //             // });
        //             this.tasks.push({
        //                 id: doc.id,
        //                 title: doc.data().task
        //             });
        //         });
        //     });

        firebase
          .firestore()
          .collection('tasks')
          .where('uid', '==', `${user.uid}`)
          .where('completed', '==', false)
          .where('deleted', '==', false)
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
        .firestore()
        .collection('tasks')
        .doc(this.tasks[this.selectedIndex].id)
        .update({
          completed: true
        })
        .then(function () {
          const date = new Date()
          FBUpsertDailyReport(firebase.auth().currentUser.uid, date, selectedHabitId)

          if (selectedHabitId) {
            FBAddHabitTrigger(selectedHabitId, selectedCount, date)
          }
        })
        .catch(function (error) {
          console.error(error)
        })

      this.tasks.splice(this.selectedIndex, 1)
    },
    goToEdit (index) {
      this.selectedIndex = index

      this.$router.push({ path: `taskeditor/${this.tasks[index].id}` })
    },
    displayTitle (text) {
      return text.split(/\n/)[0]
    }
  }
}
</script>
