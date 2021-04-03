<template>
  <div class="text-center">
    <!-- <v-btn
      dark
      color="orange darken-2"
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn> -->

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ snackbarMessage }}

      <template #action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="SNACKBAR_MESSAGE(null)"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    snackbar: false,
    text: 'My timeout is set to 2000.',
    timeout: 2000
  }),
  computed: mapState({
    ...mapState('layout', {
      snackbarMessage: state => state.snackbarMessage
    })
  }),
  watch: {
    snackbarMessage (newValue, oldValue) {
      // console.log('new', newValue)
      // console.log('old', oldValue)
      this.snackbar = newValue
      if (newValue) {
        this.snackbar = true
      } else {
        this.snackbar = false
      }
    },
    snackbar (newValue, oldValue) {
      if (!newValue) {
        this.SNACKBAR_MESSAGE(null)
      }
    }
  },
  created () {
    // console.log(this.snackbarMessage)
    this.snackbar = this.snackbarMessage
  },
  methods: {
    ...mapActions('layout', ['SNACKBAR_MESSAGE'])
  }
}
</script>
