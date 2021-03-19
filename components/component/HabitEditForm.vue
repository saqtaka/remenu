<template>
  <div>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <div>
        <InputHabitName v-model="selectedHabit.title" />
        <Heading5 class="mt-6">
          トリガー用 if then
        </Heading5>
        <IfForTrigger1 v-model="selectedHabit.ifForTrigger1" />
        <ThenForTrigger1 v-model="selectedHabit.thenForTrigger1" />
        <Heading5 class="mt-6">
          リカバリー用 if then
        </Heading5>
        <IfForRecovery1 v-model="selectedHabit.ifForRecovery1" />
        <ThenForRecovery1 v-model="selectedHabit.thenForRecovery1" />
      </div>
      <BasicButton @buttonClick="saveHabit">
        {{ $t('btn_save') }}
      </BasicButton>
    </v-form>
  </div>
</template>

<script>
import BasicButton from '@/components/basic/BasicButton.vue'
import Heading5 from '@/components/basic/Heading5.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'

import InputHabitName from '@/components/basic/habit/InputHabitName.vue'
import IfForTrigger1 from '@/components/basic/habit/InputIfForTrigger1.vue'
import ThenForTrigger1 from '@/components/basic/habit/InputThenForTrigger1.vue'
import IfForRecovery1 from '@/components/basic/habit/InputIfForRecovery1.vue'
import ThenForRecovery1 from '@/components/basic/habit/InputThenForRecovery1.vue'

export default {
  name: 'NewHabit',
  components: {
    BasicButton,
    InputHabitName,
    IfForTrigger1,
    ThenForTrigger1,
    IfForRecovery1,
    ThenForRecovery1,
    Heading5
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
        // const self = this
        // firebase
        //   .firestore()
        //   .collection('habits')
        //   .doc(this.sendHabit)
        //   .get()
        //   .then(function (doc) {
        //     self.selectedHabit.title = doc.data().name
        //     self.selectedHabit.ifForTrigger1 = doc.data().ifForTrigger1
        //     self.selectedHabit.thenForTrigger1 = doc.data().thenForTrigger1
        //     self.selectedHabit.ifForRecovery1 = doc.data().ifForRecovery1
        //     self.selectedHabit.thenForRecovery1 = doc.data().thenForRecovery1
        //   })
      },
      deep: true
    }
  },
  created () {
    this.habitid = this.$route.params.habitid
    const self = this
    firebase
      .firestore()
      .collection('habits')
      .doc(this.habitid)
      .get()
      .then(function (doc) {
        self.selectedHabit.title = doc.data().name
        self.selectedHabit.ifForTrigger1 = doc.data().ifForTrigger1
        self.selectedHabit.thenForTrigger1 = doc.data().thenForTrigger1
        self.selectedHabit.ifForRecovery1 = doc.data().ifForRecovery1
        self.selectedHabit.thenForRecovery1 = doc.data().thenForRecovery1
      })
  },
  methods: {
    saveHabit (e) {
      // e.preventDefault()

      const self = this
      // firestore update
      firebase.firestore().collection('habits').doc(this.habitid).update({
        name: self.selectedHabit.title,
        ifForTrigger1: self.selectedHabit.ifForTrigger1 ? self.selectedHabit.ifForTrigger1 : '',
        thenForTrigger1: self.selectedHabit.thenForTrigger1 ? self.selectedHabit.thenForTrigger1 : '',
        ifForRecovery1: self.selectedHabit.ifForRecovery1 ? self.selectedHabit.ifForRecovery1 : '',
        thenForRecovery1: self.selectedHabit.thenForRecovery1 ? self.selectedHabit.thenForRecovery1 : ''
      })
        .then(function () {
          self.$router.push({ path: '/habit' })
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  }
}
</script>
