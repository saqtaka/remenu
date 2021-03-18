<template>
  <div>
    <v-text-field
      v-model="emailAddress"
      outlined
      :rules="emailAddressRules"
      :label="$t('input_emailAddress')"
      required
      :value="emailAddress"
      @change="sendData"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'emailAddressProp',
    event: 'inputField'
  },
  props: {
    emailAddressProp: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      emailAddress: this.emailAddressProp,
      emailAddressRules: [
        v => !!v || this.$t('error_require'),
        v => (v && v.length <= 100) || this.$t('error_inputCount', { num: '100' }),
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  watch: {
    emailAddressProp: {
      handler (newValue, oldValue) {
        this.emailAddress = newValue
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
