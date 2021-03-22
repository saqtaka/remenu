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
      :append-icon="show ? mdiEyeSvgPath : mdiEyeOffSvgPath"
      @change="sendData"
      @click:append="show = !show"
    />
  </div>
</template>

<script>
import { mdiEye } from '@mdi/js'
import { mdiEyeOff } from '@mdi/js'

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
      show: false,
      mdiEyeSvgPath: mdiEye,
      mdiEyeOffSvgPath: mdiEyeOff
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
