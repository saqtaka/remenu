import firebase from 'firebase'

export default async function GetLocale (uid) {
  let returnValue = null

  await firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .get()
    .then(function (doc) {
      returnValue = Promise.resolve(doc.data().locale)
    })
    .catch(function (error) {
      console.error(error)
      returnValue = Promise.resolve(null)
    })
  return await returnValue
}
