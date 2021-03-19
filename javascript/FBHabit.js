import FBAddTask from '@/javascript/FBTask.js'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default function FBAddHabit (name) {
  firebase.firestore().collection('habits').add({
    name,
    created: firebase.firestore.FieldValue.serverTimestamp(),
    uid: firebase.auth().currentUser ? firebase.auth().currentUser.uid : 'nobody',
    completed: false
  })
    .then((doc) => {
      FBAddTask(name, doc.id)
    })
    .catch((error) => {
      console.error(error)
    })
}
