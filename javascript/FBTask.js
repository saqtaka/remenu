import firebase from 'firebase/app'
import 'firebase/firestore'

export default function FBAddTask (name, habitId) {
  firebase.firestore().collection('tasks').add({
    name, // this.inputHabit,
    created: firebase.firestore.FieldValue.serverTimestamp(),
    date: habitId ? firebase.firestore.FieldValue.serverTimestamp() : null,
    uid: firebase.auth().currentUser ? firebase.auth().currentUser.uid : 'nobody',
    timeRequired: Number(0),
    completed: false,
    deleted: false,
    count: habitId ? Number(0) : null,
    habitId// doc.id
  })
    .then((doc) => {
    })
    .catch((error) => {
      console.error(error)
    })
}
