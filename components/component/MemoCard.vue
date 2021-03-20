<template>
  <v-card class="my-2" @click="clearButton">
    <v-card-title>
      <div v-if="memoData.id" class="body-1">
        {{ memoData.title.substr(0,40) }}...
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    memoData: {
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
