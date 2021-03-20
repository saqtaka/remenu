import firebase from 'firebase/app'
import 'firebase/firestore'

export default function FBAddMemo (name) {
  firebase.firestore().collection('memos').add({
    uid: firebase.auth().currentUser ? firebase.auth().currentUser.uid : 'nobody',
    memo: name,
    created: firebase.firestore.FieldValue.serverTimestamp(),
    deleted: false
  })
    .then((doc) => {
    })
    .catch((error) => {
      console.error(error)
    })
}
