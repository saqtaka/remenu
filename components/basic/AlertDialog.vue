<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template> -->

      <v-card rounded="xl">
        <v-card-title class="headline grey lighten-2">
          Message
        </v-card-title>

        <v-card-text class="pa-3 ma-3">
          {{ alertDialogMessage }}
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="ALERT_DIALOG_MESSAGE(null)"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      dialog: false
    }
  },
  computed: mapState({
    ...mapState('layout', {
      alertDialogMessage: state => state.alertDialogMessage
    })
  }),
  watch: {
    alertDialogMessage (newValue, oldValue) {
      // console.log('new', newValue)
      // console.log('old', oldValue)
      this.dialog = newValue
      if (newValue) {
        this.dialog = true
      } else {
        this.dialog = false
      }
    }
  },
  created () {
    // console.log(this.alertDialogMessage)
    this.dialog = this.alertDialogMessage
  },
  methods: {
    ...mapActions('layout', ['ALERT_DIALOG_MESSAGE'])
  }
}
</script>
