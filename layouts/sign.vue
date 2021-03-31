<template>
  <v-app>
    <ProgressLinear />
    <v-main class="content mx-0 mx-md-2">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import ProgressLinear from '@/components/basic/ProgressLinear.vue'

export default {
  components: {
    ProgressLinear
  }
}
</script>
