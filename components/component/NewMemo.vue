<template>
  <div id="newMemo">
    <v-card rounded="lg">
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit="addMemo"
        >
          <v-text-field
            v-model="inputMemo"
            :rules="inputMemoRules"
            :label="$t('new_memo')"
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
import FBAddMemo from '@/javascript/FBMemo.js'

export default {
  name: 'NewMemo',
  components: {
  },
  data () {
    return {
      inputMemo: null,
      errorMessge: null,
      valid: true,
      inputMemoRules: [
        v => !!v || this.$t('error_require'),
        v => (v && v.length <= 50) || '50文字以内で入力してください。'
      ]
    }
  },
  methods: {
    addMemo (e) {
      e.preventDefault()

      if (this.checkForm()) {
        FBAddMemo(this.inputMemo)
        this.inputMemo = null
      } else {
        alert(this.errorMessage)
      }
      this.errorMessage = null
    },
    checkForm () {
      if (this.inputMemo) {
        return true
      } else {
        if (!this.inputMemo) {
          this.errorMessage = 'メモを入力して下さい'
        }
        return false
      }
    }
  }
}
</script>
