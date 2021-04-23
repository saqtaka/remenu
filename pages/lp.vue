<template>
  <div>
    <Hero2 />
    <v-container class="px-0">
      <v-row justify="center" align="center">
        <v-col cols="11" sm="10" md="9">
          <div class="text-center">
            <TopView
              class="mt-6"
            />
            <Feature />
            <Pricing />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Hero2 from '~/components/component/landingPage/Hero2.vue'
import Feature from '~/components/component/landingPage/Feature.vue'
import Pricing from '~/components/component/landingPage/Pricing.vue'
import TopView from '~/components/component/TopView.vue'

export default {
  components: {
    // Logo,
    // VuetifyLogo,
    TopView,
    Hero2,
    Feature,
    Pricing
  },
  layout () {
    return 'welcome2'
  }
}
</script>
