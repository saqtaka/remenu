<template>
  <div>
    <v-select
      v-model="taskTimeRequired"
      :items="items"
      :label="this.$t('input_taskTimeRequired')"
      dense
      required
      :value="taskTimeRequired"
      @change="sendData"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'taskTimeRequiredProp',
    event: 'inputField'
  },
  props: {
    taskTimeRequiredProp: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      taskTimeRequired: this.taskTimeRequiredProp,
      taskTimeRequiredRules: [
        v => (v && v.length <= 100) || this.$t('error_inputCount', { num: '100' })
      ],
      items: [5, 15, 30, 60]
    }
  },
  watch: {
    taskTimeRequiredProp: {
      handler (newValue, oldValue) {
        this.taskTimeRequired = newValue
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
