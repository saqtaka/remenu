<template>
  <div>
    <v-text-field
      v-model="taskName"
      :rules="taskNameRules"
      :label="$t('input_taskName')"
      required
      :value="taskName"
      @change="sendData"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'taskNameProp',
    event: 'inputField'
  },
  props: {
    taskNameProp: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      taskName: this.taskNameProp,
      taskNameRules: [
        v => !!v || this.$t('error_require'),
        v => (v && v.length <= 100) || this.$t('error_inputCount', { num: '100' })
      ]
    }
  },
  watch: {
    taskNameProp: {
      handler (newValue, oldValue) {
        this.taskName = newValue
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
