<template>
  <div>
    <v-date-picker
      v-model="dates"
      multiple
      readonly
    />
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import dayjs from 'dayjs'

export default {
  props: {
    habitIdProp: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    dates: [],
    habitId: ''
  }),
  watch: {
    habitIdProp: {
      handler (newValue, oldValue) {
        this.getDates(newValue)
      }
    }
  },
  methods: {
    getDates () {
      const self = this
      firebase
        .firestore()
        .collection('habitLatestLists')
        .doc(this.habitIdProp)
        .onSnapshot((doc) => {
          self.dates = doc.data().latestList.map(function (value) {
            return dayjs(new Date(value.toDate())).format('YYYY-MM-DD')
          })
        })
    }
  }
}
</script>
