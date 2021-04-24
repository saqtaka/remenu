<template>
  <div>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <div>
        <InputHabitName v-model="selectedHabit.title" />
        <!-- <Heading5 class="mt-6">
          トリガー用 if then
        </Heading5> -->
        <IfForTrigger1 v-model="selectedHabit.ifForTrigger1" />
        <ThenForTrigger1 v-model="selectedHabit.thenForTrigger1" />
        <!-- <Heading5 class="mt-6">
          リカバリー用 if then
        </Heading5>
        <IfForRecovery1 v-model="selectedHabit.ifForRecovery1" />
        <ThenForRecovery1 v-model="selectedHabit.thenForRecovery1" /> -->
      </div>
      <BasicButton @buttonClick="saveHabit">
        {{ $t('btn_save') }}
      </BasicButton>
    </v-form>
  </div>
</template>

<script>
import BasicButton from '@/components/basic/BasicButton.vue'
// import Heading5 from '@/components/basic/Heading5.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'

import InputHabitName from '@/components/basic/habit/InputHabitName.vue'
import IfForTrigger1 from '@/components/basic/habit/InputIfForTrigger1.vue'
import ThenForTrigger1 from '@/components/basic/habit/InputThenForTrigger1.vue'
// import IfForRecovery1 from '@/components/basic/habit/InputIfForRecovery1.vue'
// import ThenForRecovery1 from '@/components/basic/habit/InputThenForRecovery1.vue'

import { mapActions } from 'vuex'
import FBAddTask from '@/javascript/FBTask.js'

export default {
  name: 'NewHabit',
  components: {
    BasicButton,
    InputHabitName,
    IfForTrigger1,
    ThenForTrigger1
    // IfForRecovery1,
    // ThenForRecovery1,
    // Heading5
  },
  props: ['sendHabit'],
  data () {
    return {
      selectedHabit:
      {
        title: null,
        ifForTrigger1: null,
        thenForTrigger1: null,
        ifForRecovery1: null,
        thenForRecovery1: null
      },
      // v-form
      valid: true,
      habitid: ''
    }
  },
  watch: {
    sendHabit: {
      handler (newValue, oldValue) {
        if (this.$route.params.habitid) {
          this.habitid = newValue
          const self = this
          firebase
            .firestore()
            .collection('habits')
            .doc(this.sendHabit)
            .get()
            .then(function (doc) {
              self.selectedHabit.title = doc.data().name
              self.selectedHabit.ifForTrigger1 = doc.data().ifForTrigger1
              self.selectedHabit.thenForTrigger1 = doc.data().thenForTrigger1
              self.selectedHabit.ifForRecovery1 = doc.data().ifForRecovery1
              self.selectedHabit.thenForRecovery1 = doc.data().thenForRecovery1
            })
        }
      },
      deep: true
    }
  },
  created () {
    if (this.$route.query.if) {
      this.selectedHabit.title = this.$route.query.if + this.$route.query.then
      this.selectedHabit.ifForTrigger1 = this.$route.query.if
      this.selectedHabit.thenForTrigger1 = this.$route.query.then
    }
  },
  methods: {
    ...mapActions('layout', ['ALERT_DIALOG_MESSAGE']),
    saveHabit (e) {
      // e.preventDefault()

      const self = this

      if (this.$route.params.habitid) {
      // firestore update
        firebase.firestore().collection('habits').doc(this.habitid).update({
          name: self.selectedHabit.title,
          ifForTrigger1: self.selectedHabit.ifForTrigger1 ? self.selectedHabit.ifForTrigger1 : '',
          thenForTrigger1: self.selectedHabit.thenForTrigger1 ? self.selectedHabit.thenForTrigger1 : '',
          ifForRecovery1: self.selectedHabit.ifForRecovery1 ? self.selectedHabit.ifForRecovery1 : '',
          thenForRecovery1: self.selectedHabit.thenForRecovery1 ? self.selectedHabit.thenForRecovery1 : ''
        })
          .then(function () {
            self.$router.push(self.localeRoute({ name: 'habit' }))
          })
          .catch(function (error) {
            self.ALERT_DIALOG_MESSAGE(error.message)
          })
      } else {
        firebase.firestore().collection('habits').add({
          name: self.selectedHabit.title,
          ifForTrigger1: self.selectedHabit.ifForTrigger1 ? self.selectedHabit.ifForTrigger1 : '',
          thenForTrigger1: self.selectedHabit.thenForTrigger1 ? self.selectedHabit.thenForTrigger1 : '',
          ifForRecovery1: self.selectedHabit.ifForRecovery1 ? self.selectedHabit.ifForRecovery1 : '',
          thenForRecovery1: self.selectedHabit.thenForRecovery1 ? self.selectedHabit.thenForRecovery1 : '',
          created: firebase.firestore.FieldValue.serverTimestamp(),
          uid: firebase.auth().currentUser ? firebase.auth().currentUser.uid : 'nobody',
          completed: false
        })
          .then(function (doc) {
            FBAddTask(self.selectedHabit.title, doc.id)
            self.$router.push(self.localeRoute({ name: 'habit' }))
          })
          .catch(function (error) {
            self.ALERT_DIALOG_MESSAGE(error.message)
          })
      }
    }
  }
}
</script>
