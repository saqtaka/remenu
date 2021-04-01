<template>
  <v-app>
    <ProgressLinear />
    <v-main class="content mx-0 mx-md-2">
      <nuxt />
    </v-main>
    <AlertDialog />
  </v-app>
</template>

<script>
import ProgressLinear from '@/components/basic/ProgressLinear.vue'
import AlertDialog from '@/components/basic/AlertDialog.vue'

export default {
  components: {
    ProgressLinear,
    AlertDialog
  }
}
</script>
