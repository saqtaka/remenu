import firebase from 'firebase/app'
import 'firebase/firestore'

export default function FBUpsertReport (uid, date, habitId) {
  const today = new Date(date.setHours(0, 0, 0, 0))

  firebase.firestore()
    .collection('dailyReports')
    .where('uid', '==', `${uid}`)
    .where('date', '==', today)
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        firebase.firestore().collection('dailyReports').add({
          uid: firebase.auth().currentUser ? firebase.auth().currentUser.uid : 'nobody',
          // dateString: date.toLocaleDateString(),
          date: today,
          habitCount: habitId ? 1 : 0,
          taskCount: habitId ? 0 : 1,
          created: firebase.firestore.FieldValue.serverTimestamp()
        })
          .then((doc) => {
          })
          .catch((error) => {
            console.error(error)
          })
      } else {
        snapshot.forEach((doc) => {
          firebase.firestore().collection('dailyReports').doc(doc.id).update({
            habitCount: habitId ? doc.data().habitCount + 1 : doc.data().habitCount,
            taskCount: habitId ? doc.data().taskCount : doc.data().taskCount + 1
          })
            .then(function () {
            })
            .catch(function (error) {
              console.error(error)
            })
        })
      }
    })
    .catch((error) => {
      console.error(error)
    })
}
