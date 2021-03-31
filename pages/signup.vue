<template>
  <v-container class="py-6">
    <div class="text-center">
      <h2 class="text-h4 mb-3">
        {{ $t('signup_title') }}
      </h2>
      <div style="width: 80px; height: 4px" class="mb-3 secondary mx-auto" />
    </div>

    <v-card class="pa-3 mx-auto" max-width="500" rounded="xl">
      <v-card-title>
        <v-divider class="my-1" />
        <div class="mx-2">
          {{ $t('signup_sub') }}
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
          <v-btn block class="success" :disabled="!valid" x-large @click="SignUp">
            {{ $t('signup_button') }}
          </v-btn>
        </v-form>

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
import firebase from 'firebase/app'
import 'firebase/auth'

import { mapActions } from 'vuex'
import InputEmailAddress from '@/components/basic/account/InputEmailAddress.vue'
import InputPassword from '@/components/basic/account/InputPassword.vue'

// import { mapState } from 'vuex'

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
      emailAddress: null,
      password: null,
      valid: true
    }
  },
  // computed: mapState({
  //   ...mapState('layout', {
  //     isProgressLinear: state => state.isProgressLinear
  //   })
  // }),
  created () {
    // console.log(this.$route.query.lang)
    if (this.$route.query.lang === 'ja') {
      this.$i18n.locale = 'ja-JP'
    } else if (this.$route.query.lang === 'en') {
      this.$i18n.locale = 'en-US'
    }
    // console.log(this.$i18n.locale)
  },
  methods: {
    ...mapActions('layout', ['SHOW_PROGRESSLINEAR']),
    SignUp () {
      this.SHOW_PROGRESSLINEAR(true)
      firebase.auth().createUserWithEmailAndPassword(this.emailAddress, this.password)
        .then((user) => {
          this.$router.push({ path: '/inbox' })
        })
        .catch((error) => {
          this.SHOW_PROGRESSLINEAR(false)
          console.error(error.code)
          console.error(error.message)
        })
    },
    SignInGoogle () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().languageCode = 'en'

      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          // var credential = result.credential

          // This gives you a Google Access Token. You can use it to access the Google API.
          // var token = credential.accessToken
          // The signed-in user info.
          // var user = result.user
          // ...
        }).catch((error) => {
          // Handle Errors here.
          // var errorCode = error.code
          // var errorMessage = error.message
          console.error(error.code)
          console.error(error.message)
          // The email of the user's account used.
          // var email = error.email
          // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential
          // ...
        })
    }
  }
}
</script>
