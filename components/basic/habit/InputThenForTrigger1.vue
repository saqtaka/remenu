<template>
  <div>
    <v-text-field
      v-model="thenForTrigger1"
      :rules="thenForTrigger1Rules"
      :label="this.$t('input_habitThenForTrigger1')"
      required
      :value="thenForTrigger1"
      @change="sendData"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'thenForTrigger1Prop',
    event: 'inputField'
  },
  props: {
    thenForTrigger1Prop: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      thenForTrigger1: this.thenForTrigger1Prop,
      thenForTrigger1Rules: [
        v => (v && v.length <= 100) || this.$t('error_inputCount', { num: '100' })
      ]
    }
  },
  watch: {
    thenForTrigger1Prop: {
      handler (newValue, oldValue) {
        this.thenForTrigger1 = newValue
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
