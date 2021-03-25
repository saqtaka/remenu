<template>
  <div id="newHabit">
    <v-card rounded="lg">
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit="addHabit"
        >
          <v-text-field
            v-model="inputHabit"
            :rules="inputHabitRules"
            :label="$t('new_habit')"
            required
            validate-on-blur
            clearable
          />
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import FBAddHabit from '@/javascript/FBHabit.js'

export default {
  name: 'NewHabit',
  components: {
  },
  data () {
    return {
      inputHabit: null,
      errorMessage: null,
      valid: true,
      inputHabitRules: [
        v => !!v || this.$t('error_require'),
        v => (v && v.length <= 50) || '50文字以内で入力してください。'
      ]
    }
  },
  methods: {
    addHabit (e) {
      e.preventDefault()

      if (this.checkForm()) {
        FBAddHabit(this.inputHabit)
        this.inputHabit = null
      } else {
        alert(this.errorMessage)
      }
      this.errorMessage = null
    },
    checkForm () {
      if (this.inputHabit) {
        return true
      } else {
        if (!this.inputHabit) {
          this.errorMessage = '習慣を入力して下さい'
        }
        return false
      }
    }
  }
}
</script>
