<template>
  <div>
    <v-app-bar
      color="white"
      fixed
    >
      <!-- <v-app-bar-nav-icon /> -->
      <v-toolbar-title>
        Remenu
      </v-toolbar-title>

      <v-spacer />

      <div class="mx-1">
        <v-btn color="primary" @click="clickLang">
          {{ lang }}
        </v-btn>
      </div>

      <div class="mx-1">
        <v-btn color="primary" to="/signin">
          LOGIN
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
