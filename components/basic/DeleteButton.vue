<template>
  <v-btn depressed color="warning" @click="buttonClick">
    <slot />
  </v-btn>
</template>

<script>
export default {
  methods: {
    buttonClick () {
      this.$emit('buttonClick')
    }
  }
}
</script>
