<template>
  <div>
    <v-text-field
      v-model="habitName"
      :rules="habitNameRules"
      :label="$t('input_habitName')"
      required
      :value="habitName"
      @change="sendData"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'habitNameProp',
    event: 'inputField'
  },
  props: {
    habitNameProp: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      habitName: this.habitNameProp,
      habitNameRules: [
        v => !!v || this.$t('error_require'),
        v => (v && v.length <= 100) || this.$t('error_inputCount', { num: '100' })
      ]
    }
  },
  watch: {
    habitNameProp: {
      handler (newValue, oldValue) {
        this.habitName = newValue
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
