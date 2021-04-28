<template>
  <v-row justify="center" align="center">
    <v-col cols="11" sm="10" md="9">
      <div class="text-center">
        <!-- <logo /> -->
        <!-- <vuetify-logo /> -->
        <Hero />
        <TopView
          class="mt-6"
        />
        <Feature />
        <Pricing />
      </div>
    </v-col>
  </v-row>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Hero from '~/components/component/landingPage/Hero.vue'
import Feature from '~/components/component/landingPage/Feature.vue'
import Pricing from '~/components/component/landingPage/Pricing.vue'
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
