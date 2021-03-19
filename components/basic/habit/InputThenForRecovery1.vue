<template>
  <div>
    <v-text-field
      v-model="thenForRecovery1"
      :rules="thenForRecovery1Rules"
      :label="this.$t('input_habitThenForRecovery1')"
      required
      :value="thenForRecovery1"
      @change="sendData"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'thenForRecovery1Prop',
    event: 'inputField'
  },
  props: {
    thenForRecovery1Prop: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      thenForRecovery1: this.thenForRecovery1Prop,
      thenForRecovery1Rules: [
        v => (v && v.length <= 100) || this.$t('error_inputCount', { num: '100' })
      ]
    }
  },
  watch: {
    thenForRecovery1Prop: {
      handler (newValue, oldValue) {
        this.thenForRecovery1 = newValue
      }
    }
  },
  methods: {
    sendData (e) {
      this.$emit('inputField', e)
    }
  }
}
</script>
