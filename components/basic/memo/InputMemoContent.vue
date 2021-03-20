<template>
  <div>
    <v-textarea
      v-model="memoContent"
      :rules="memoContentRules"
      :label="this.$t('input_memoContent')"
      required
      :value="memoContent"
      @change="sendData"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'memoContentProp',
    event: 'inputField'
  },
  props: {
    memoContentProp: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      memoContent: this.memoContentProp,
      memoContentRules: [
        v => !!v || this.$t('error_require'),
        v => (v && v.length <= 2000) || this.$t('error_inputCount', { num: '2000' })
      ]
    }
  },
  watch: {
    memoContentProp: {
      handler (newValue, oldValue) {
        this.memoContent = newValue
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
