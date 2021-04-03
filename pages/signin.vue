<template>
  <v-container class="py-6">
    <div class="text-center">
      <h2 class="text-h4 mb-3">
        {{ $t('signin_title') }}
      </h2>
      <div style="width: 80px; height: 4px" class="mb-3 secondary mx-auto" />
    </div>

    <v-card class="pa-3 mx-auto" max-width="500" rounded="xl">
      <v-card-title>
        <v-divider class="my-1" />
        <div class="mx-2">
          {{ $t('signin_sub') }}
        </div>
        <v-divider class="my-1" />
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <InputEmailAddress v-model="emailAddress" />
          <InputPassword v-model="password" />
          <v-btn block class="success" :disabled="!valid" x-large @click="SignIn">
            {{ $t('signin_button') }}
          </v-btn>
        </v-form>

        <div class="text-center mt-2 text-body-2">
          <router-link to="#">
            {{ $t('signin_forget') }}
          </router-link>
        </div>
        <div class="text-overline text-uppercase mt-3 text-center">
          <v-responsive max-width="280" class="mx-auto">
            <div>
              {{ $t('agree') }}
            </div>
            <div>
              <a href="https://ja.blog.tasbit.net/terms/">{{ $t('terms') }}</a> & <a href="https://ja.blog.tasbit.net/privacy/">{{ $t('privacy') }}</a>
            </div>
          </v-responsive>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
// import firebase from 'firebase/app'
// import 'firebase/auth'

import { mapActions } from 'vuex'
import InputEmailAddress from '~/components/basic/account/InputEmailAddress.vue'
import InputPassword from '~/components/basic/account/InputPassword.vue'

export default {
  components: {
    InputEmailAddress,
    InputPassword
  },
  layout () {
    return 'sign'
  },
  data () {
    return {
      emailAddress: '',
      password: '',
      valid: false,
      errorMessage: this.$t('error_default')
    }
  },
  created (e) {
    this.$fire.auth.onAuthStateChanged((user) => {
      if (user) {
        this.$router.push(this.localeRoute({ name: 'inbox' }))
      }
    })
    // if (this.$route.query.lang === 'ja') {
    //   this.$i18n.locale = 'ja-JP'
    // } else if (this.$route.query.lang === 'en') {
    //   this.$i18n.locale = 'en-US'
    // }
    // console.log(this.$i18n.locale)
  },
  methods: {
    ...mapActions('layout', ['SHOW_PROGRESSLINEAR']),
    ...mapActions('layout', ['ALERT_DIALOG_MESSAGE']),
    SignIn () {
      try {
        this.SHOW_PROGRESSLINEAR(true)
        this.$fire.auth.signInWithEmailAndPassword(this.emailAddress, this.password)
          .then((user) => {
            this.$router.push(this.localeRoute({ name: 'inbox' }))
          })
          .catch((error) => {
            this.SHOW_PROGRESSLINEAR(false)
            // console.error(error.code)
            // console.error(error.message)
            this.ALERT_DIALOG_MESSAGE(error.message)
          })
      } catch (e) {
        // console.error(e)
        this.ALERT_DIALOG_MESSAGE('ログインエラーが発生しました。やり直してください。')
      }
    },
    SignInGoogle () {
      const provider = new this.$fire.auth.GoogleAuthProvider()
      this.$fire.auth().languageCode = 'en'

      this.$fire.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          // var credential = result.credential

          // This gives you a Google Access Token. You can use it to access the Google API.
          // var token = credential.accessToken
          // The signed-in user info.
          // var user = result.user
          // ...
        }).catch(() => {
        // }).catch((error) => {

          // console.error(error.code)
          // console.error(error.message)
          window.alert(this.errorMessage)
          // The email of the user's account used.
          // var email = error.email
          // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential
        })
    }
  }
}
</script>
