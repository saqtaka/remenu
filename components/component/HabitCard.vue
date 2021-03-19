<template>
  <v-card class="my-2" @click="clearButton">
    <v-card-title>
      <div class="body-1">
        {{ habitData.title }}
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  // props: ['habitData'],
  props: {
    habitData: {
      type: Object,
      required: true,
      default () {
        return { id: null, title: null }
      }
    }
  },
  methods: {
    clearButton () {
      this.$emit('clearButton')
    }
  }
}
</script>
