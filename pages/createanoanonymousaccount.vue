<template>
  <div>
    <p>loadnig...</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  mounted () {
    firebase.auth().signInAnonymously()
      .then(() => {
        // Signed in..
        this.$router.push(this.localeRoute({ path: '/habit' }))
      })
      .catch((error) => {
        // const errorCode = error.code
        this.ALERT_DIALOG_MESSAGE(error.message)
      })
  },
  methods: {
    ...mapActions('layout', ['ALERT_DIALOG_MESSAGE'])
  }
}
</script>
