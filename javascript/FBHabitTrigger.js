// import FBAddTask from '@/javascript/FBTask.js'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default function FBAddHabitTrigger (id, count, date) {
  firebase.firestore().collection('habitTriggers').add({
    habitId: id,
    date,
    created: firebase.firestore.FieldValue.serverTimestamp(),
    uid: firebase.auth().currentUser ? firebase.auth().currentUser.uid : 'nobody',
    count
  })
    .then((doc) => {
    })
    .catch((error) => {
      console.error(error)
    })
}
