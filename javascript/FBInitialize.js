import * as firebase from 'firebase'

export default function initializeApp () {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyCNd1yzV31939F-a0i_2M_fmTH9vKZqGCA',
    authDomain: 'tasbit-81cf6.firebaseapp.com',
    databaseURL: 'https://tasbit-81cf6.firebaseio.com',
    projectId: 'tasbit-81cf6',
    storageBucket: 'tasbit-81cf6.appspot.com',
    messagingSenderId: '880433504326',
    appId: '1:880433504326:web:c9a02a5ffe31d04f5b6a47',
    measurementId: 'G-R95KFBRPB9'
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  // firebase.firestore().enablePersistence({ synchronizeTabs: true }).then(() => {
  // })
}
