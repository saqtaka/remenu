<template>
  <div>
    <DeleteButton @buttonClick="deleteHabit">
      {{ $t('btn_delete') }}
    </DeleteButton>
  </div>
</template>

<script>
import DeleteButton from '@/components/basic/DeleteButton.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  name: 'HabitList',
  components: {
    DeleteButton
  },
  props: ['getHabit'],
  data () {
    return {
      selectedHabit: null
    }
  },
  watch: {
    getHabit: {
      handler (newValue, oldValue) {
        this.selectedHabit = this.getHabit
      },
      deep: true
    }
  },
  methods: {
    deleteHabit () {
      const self = this
      // firestore update
      firebase.firestore().collection('habits').doc(this.selectedHabit).update({
        completed: true
      })
        .then(function () {
          self.$router.push(self.localeRoute({ name: 'habit' }))
        })
        .catch()
    }
  }
}
</script>
