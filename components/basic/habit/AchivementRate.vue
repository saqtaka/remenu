<template>
  <div>
    {{ achivementRate }}%
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  props: {
    habitIdProp: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      achivementRate: 0
    }
  },
  created () {
    const self = this
    // firebase
    //   .firestore()
    //   .collection('habitLatestLists')
    //   .doc(this.habitIdProp)
    //   .get()
    //   .then(function (doc) {
    //     self.achivementRate = doc.data().achivementRate
    //   })

    firebase
      .firestore()
      .collection('habitLatestLists')
      .doc(this.habitIdProp)
      .onSnapshot((doc) => {
        self.achivementRate = doc.data().achivementRate
      })
    //
  }
}
</script>
