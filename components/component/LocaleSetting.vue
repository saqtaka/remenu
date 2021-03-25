<template>
  <v-card height="300" rounded="xl">
    <v-card-text>
      <div class="locale">
        <v-select
          v-model="locale"
          :items="items"
          @change="selectChange"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import getLocale from '@/javascript/GetLocale'

export default {
  data () {
    return {
      locale: '',
      items: [{
        text: 'English',
        value: 'en-US'
      },
      {
        text: '日本語',
        value: 'ja-JP'
      }]
    }
  },
  mounted () {
    // console.log('get1')
    const self = this
    firebase.auth().onAuthStateChanged((user) => {
      getLocale(firebase.auth().currentUser.uid)
        .then(function (value) {
          self.locale = value
        })
        .catch(function (error) {
          console.error(error)
        })
    })
  },
  methods: {
    selectChange () {
      this.$i18n.locale = this.locale

      firebase
        .firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set({
          uid: firebase.auth().currentUser.uid,
          locale: this.locale
        }, { merge: true })
        .then(function (docRef) {
          console.log('success')
        })
        .catch(function (error) {
          console.error(error.message)
        })
    }
  }
}
</script>
