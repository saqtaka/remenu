<template>
  <v-app dark>
    <LandingPageHeader />
    <v-main>
      <!-- <v-container class="ma-0 pa-0"> -->
      <nuxt />
    </v-main>
    <LandingPageFooter />
  </v-app>
</template>

<script>
import LandingPageHeader from '@/components/component/landingPage/LandingPageHeader.vue'
import LandingPageFooter from '@/components/component/landingPage/LandingPageFooter.vue'

export default {
  components: {
    LandingPageHeader,
    LandingPageFooter
  }
}
</script>

<style lang="scss">
@import '@/styles/app.scss';

// .v-main__wrap {
//   padding: 50px 0px 0px;
// }
</style>
