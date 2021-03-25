<template>
  <div>
    <p>loadnig...</p>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  mounted () {
    firebase.auth().signInAnonymously()
      .then(() => {
        // Signed in..
        this.$router.push('/habit')
      })
      .catch((error) => {
        // const errorCode = error.code
        // const errorMessage = error.message
        console.error(error.message)
        // ...
      })
  }
}
</script>
