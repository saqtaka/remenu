<template>
  <div>
    <v-container fluid class="mx-1">
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
        >
          <NewHabit />
          <HabitList />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NewHabit from '@/components/component/NewHabit.vue'
import HabitList from '@/components/component/HabitList.vue'

export default {
  name: 'HabitPage',
  components: {
    NewHabit,
    HabitList
  },
  methods: {
    getHabit (newHabit) {
      this.relayHabit = newHabit
    }
  }
}
</script>
