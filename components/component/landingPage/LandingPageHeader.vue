<template>
  <div>
    <v-app-bar
      id="app-bar-landing"
      color="white"
      fixed
    >
      <!-- <v-app-bar-nav-icon /> -->
      <img src="/v-logo-small.png" alt="" height="30" class="mr-1">
      <v-toolbar-title>
        <div class="white--text">
          Remenu
        </div>
      </v-toolbar-title>

      <v-spacer />

      <div class="mx-1">
        <v-btn color="primary" @click="toSignUp">
          登録
        </v-btn>
      </div>
      <div class="mx-1">
        <v-btn id="btn-transparent" @click="toSignIn">
          <div class="white--text">
            ログイン
          </div>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  computed: {
    lang () {
      if (this.$i18n.locale === 'en') {
        return '日本語'
      } else {
        return 'English'
      }
      // return this.$i18n.lang
    }
  },
  methods: {
    toSignUp () {
      this.$router.push(this.localeRoute({ name: 'signup' }))
    },
    toSignIn () {
      this.$router.push(this.localeRoute({ name: 'signin' }))
    },
    clickLang () {
      if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'ja'
        // this.$router.push({ path: '/ja' })
        // this.$router.push({ path: '/' })
      } else {
        this.$i18n.locale = 'en'
        // this.$router.push({ path: '/en' })
      }
    }
  }
}
</script>

<style scoped>
#app-bar-landing {
  background-color: rgba(0,0,255,0) !important;
  box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 20%);
}

#btn-transparent {
  background-color: rgba(0,0,255,0.5) !important;
  box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 20%);
}
</style>
