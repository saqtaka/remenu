<template>
  <div>
    <v-text-field
      v-model="ifForRecovery1"
      :rules="ifForRecovery1Rules"
      :label="this.$t('input_habitIfForRecovery1')"
      required
      :value="ifForRecovery1"
      @change="sendData"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'ifForRecovery1Prop',
    event: 'inputField'
  },
  props: {
    ifForRecovery1Prop: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      ifForRecovery1: this.ifForRecovery1Prop,
      ifForRecovery1Rules: [
        v => (v && v.length <= 100) || this.$t('error_inputCount', { num: '100' })
      ]
    }
  },
  watch: {
    ifForRecovery1Prop: {
      handler (newValue, oldValue) {
        this.ifForRecovery1 = newValue
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
