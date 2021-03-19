<template>
  <!-- <v-btn @click.stop="buttonClick" depressed color="primary">
        <v-icon color=white>mdi-check</v-icon>
    </v-btn> -->
  <v-progress-circular :indeterminate="flag" :value="100" color="primary" @click.stop="buttonClick" />
</template>

<script>
export default {
  data () {
    return {
      flag: false
    }
  },
  methods: {
    buttonClick () {
      this.flag = true

      const self = this
      this.sleep(1, function () {
        self.flag = false
        self.$emit('buttonClick')
      })
    },
    sleep (waitSecond, callbackFunciotn) {
      let spanedSec = 0

      const id = setInterval(function () {
        spanedSec++

        if (spanedSec >= waitSecond) {
          clearInterval(id)

          if (callbackFunciotn) { callbackFunciotn() }
        }
      }, 1000)
    }
  }
}
</script>
