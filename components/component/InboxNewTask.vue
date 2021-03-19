<template>
  <div id="newTask">
    <v-card>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit="addTask"
        >
          <v-text-field
            v-model="inputTask"
            :rules="inputTaskRules"
            :label="this.$t('new_inbox')"
            required
            validate-on-blur="true"
            clearable="true"
          />
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import addTask from '@/javascript/AddTask.js'

export default {
  name: 'NewTask',
  components: {
  },
  data () {
    return {
      inputTask: null,
      errorMessage: null,
      valid: true,
      inputTaskRules: [
        v => !!v || this.$t('error_require'),
        v => (v && v.length <= 50) || '50文字以内で入力してください。'
      ]
    }
  },
  methods: {
    addTask (e) {
      e.preventDefault()

      if (this.checkForm()) {
        const date = new Date()
        addTask(this.inputTask, null, date)
        this.inputTask = null
      } else {
        alert(this.errorMessage)
      }
      this.errorMessage = null
    },
    checkForm () {
      if (this.inputTask) {
        return true
      } else {
        if (!this.inputTask) {
          this.errorMessage = 'タスクを入力して下さい'
        }
        return false
      }
    }
  }
}
</script>
