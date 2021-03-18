<template>
  <div>
    <v-text-field
      v-model="password"
      outlined
      :rules="passwordRules"
      :label="this.$t('input_password')"
      :type="show ? 'text' : 'password'"
      required
      :value="password"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      @change="sendData"
      @click:append="show = !show"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'passwordProp',
    event: 'inputField'
  },
  props: {
    passwordProp: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      password: this.passwordProp,
      passwordRules: [
        v => !!v || this.$t('error_require'),
        v => (v && v.length <= 100) || this.$t('error_inputCount', { num: '100' })
      ],
      show: false
    }
  },
  watch: {
    passwordProp: {
      handler (newValue, oldValue) {
        this.password = newValue
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
