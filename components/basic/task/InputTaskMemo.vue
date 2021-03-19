<template>
  <div>
    <v-textarea
      v-model="memoName"
      :rules="memoNameRules"
      :label="$t('input_taskMemo')"
      required
      :value="memoName"
      @change="sendData"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'memoNameProp',
    event: 'inputField'
  },
  props: {
    memoNameProp: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      memoName: this.memoNameProp,
      memoNameRules: [
        v => (v && v.length <= 500) || this.$t('error_inputCount', { num: '500' })
      ]
    }
  },
  watch: {
    memoNameProp: {
      handler (newValue, oldValue) {
        this.memoName = newValue
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
