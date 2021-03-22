<template>
  <v-row justify="center" align="center">
    <v-col cols="10" sm="8" md="6">
      <div class="text-center">
        <TopView />
        <!-- <logo /> -->
        <!-- <vuetify-logo /> -->
        <Hero />
        <Feature />
        <Pricing />
      </div>
    </v-col>
  </v-row>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Hero from '@/components/component/LandingPage/Hero.vue'
import Feature from '@/components/component/LandingPage/Feature.vue'
import Pricing from '@/components/component/LandingPage/Pricing.vue'
import TopView from '~/components/component/TopView.vue'
export default {
  components: {
    // Logo,
    // VuetifyLogo,
    TopView,
    Hero,
    Feature,
    Pricing
  },
  layout () {
    return 'welcome'
  }
}
</script>
