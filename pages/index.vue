<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <TopView />
        <!-- <logo /> -->
        <!-- <vuetify-logo /> -->
      </div>
    </v-col>
  </v-row>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import TopView from '~/components/component/TopView.vue'

export default {
  layout () {
    return 'welcome'
  },
  components: {
    // Logo,
    // VuetifyLogo,
    TopView
  }
}
</script>
