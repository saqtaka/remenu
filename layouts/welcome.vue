<template>
  <v-app dark>
    <LandingPageHeader />
    <v-main>
      <v-container class="px-0">
        <nuxt />
      </v-container>
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
