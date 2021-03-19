<template>
  <v-btn depressed color="primary" @click.stop="buttonClick">
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
