<template>
  <div id="habitList">
    <HabitCard
      v-for="(habit, index) in habits"
      :key="index"
      :habit-data="habit"
      :data-selected="index == selectedIndex"
      @clearButton="selectHabit(index)"
    />
  </div>
</template>

<script>
import HabitCard from '@/components/component/HabitCard.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  name: 'HabitList',
  components: {
    HabitCard
  },
  data () {
    return {
      habits: [
        {
          id: null,
          title: null
        }
      ],
      selectedIndex: 0
    }
  },
  created () {
    this.viewList()
  },
  methods: {
    selectHabit (index) {
      this.selectedIndex = index

      // this.$router.push(this.localeRoute({ path: `habit/${this.habits[index].id}` }))
      // this.$router.push(this.localeRoute({ name: 'habit', params: { habitid: index } }))
      this.$router.push(this.localeRoute({ path: `/habit/${this.habits[index].id}` }))
    },
    displayTitle (text) {
      return text.split(/\n/)[0]
    },
    viewList () {
      firebase.auth().onAuthStateChanged((user) => {
        // loginしてたら
        if (user) {
          firebase
            .firestore()
            .collection('habits')
            .where('uid', '==', firebase.auth().currentUser.uid)
            .where('completed', '==', false)
            .orderBy('created')
            .onSnapshot((snapshot) => {
              snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                  this.habits.push({
                    id: change.doc.id,
                    title: change.doc.data().name
                  })
                }
              })
            })
        }
      })
      this.habits.splice(this.selectedIndex, 1)
    }
  }
}
</script>
