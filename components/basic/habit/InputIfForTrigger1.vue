<template>
  <div>
    <v-text-field
      v-model="ifForTrigger1"
      :rules="ifForTrigger1Rules"
      :label="this.$t('input_habitIfForTrigger1')"
      required
      :value="ifForTrigger1"
      @change="sendData"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'ifForTrigger1Prop',
    event: 'inputField'
  },
  props: {
    ifForTrigger1Prop: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      ifForTrigger1: this.ifForTrigger1Prop,
      ifForTrigger1Rules: [
        v => (v && v.length <= 100) || this.$t('error_inputCount', { num: '100' })
      ]
    }
  },
  watch: {
    ifForTrigger1Prop: {
      handler (newValue, oldValue) {
        this.ifForTrigger1 = newValue
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
