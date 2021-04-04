import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import AddTask from '@/javascript/AddTask'
export default {
  created () {
    this.updateHabit()
  },
  methods: {
    updateHabit () {
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
            .where('completed', '==', false)
            .where('deleted', '==', false)
            .where('date', '<', new Date(todayString + ' 00:00'))
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                //   this.dailyReports.push({
                //     id: change.doc.id,
                //     date: change.doc.data().date ? change.doc.data().date.toDate() : '',
                //     taskCount: change.doc.data().taskCount ? change.doc.data().taskCount : 0,
                //     habitCount: change.doc.data().habitCount ? change.doc.data().habitCount : 0
                //   })
                if (doc.data().habitId) {
                  // console.log(change.doc.id)
                  AddTask(doc.data().name, doc.data().habitId, new Date(todayString + ' 00:00'))
                  // 期限の切れた習慣を削除
                  this.deleteTask(doc.id)
                }
              })
            })
        }
      })
    //   this.dailyReports.splice(this.selectedIndex, 1)
    },
    deleteTask (taskId) {
      // firestore update
      firebase.firestore().collection('tasks').doc(taskId).update({
        deleted: true
      })
        .then(function () {
        })
        .catch(function (error) {
          // console.error(error)
          this.ALERT_DIALOG_MESSAGE(error.message)
        })
    }
  }
}
