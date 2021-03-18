<template>
  <v-app>
    <Header v-if="isLogin" />
    <Sidebar v-if="isLogin" />
    <v-main class="content mx-0 mx-md-2">
      <nuxt />
      <Footer v-if="isLogin" />
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import Header from '~/components/component/Header'
import Sidebar from '~/components/component/Sidebar'
import Footer from '~/components/component/Footer'

import getLocale from '~/javascript/GetLocale'
// import initializeApp from '~/javascript/FBInitialize.js'
import 'firebase/auth'

export default {
  name: 'Layout',
  components:
    {
      Footer,
      Header,
      Sidebar
    },
  data () {
    return {
      isLogin: false
    }
  },
  created () {
    // initializeApp()

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLogin = true

        const self = this
        getLocale(firebase.auth().currentUser.uid)
          .then(function (value) {
            self.$i18n.locale = value
          })
          .catch(function (error) {
            console.error(error.message)
          })

        if (this.$route.path === '/signin' || this.$route.path === '/') {
          this.$router.push({ path: '/inbox' })
        }
      } else {
        this.isLogin = false

        if (this.$route.path !== '/signin' && this.$route.path !== '/signup') {
          this.$router.push({ path: '/signin' })
        }
      }
    })
  }
}
</script>

<style lang="scss">
@import '@/styles/app.scss';

body {
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--v-greyTint-base);
    border-radius: 36px;
    border: none;
  }
}

.v-main__wrap {
  padding: 70px $content-padding $content-padding;
}
</style>
