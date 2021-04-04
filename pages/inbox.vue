<template>
  <div>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
        >
          <NewTask />
          <InboxTaskList />
          <InboxTaskListCompleted />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import updateHabit from '../mixins/updateHabit'
import NewTask from '~/components/component/InboxNewTask.vue'
import InboxTaskList from '~/components/component/InboxTaskList.vue'
import InboxTaskListCompleted from '~/components/component/InboxTaskListCompleted.vue'

export default {
  name: 'TaskPage',
  components: {
    NewTask,
    InboxTaskList,
    InboxTaskListCompleted
  },
  mixins: [updateHabit]
  // layout () {
  //   return 'Layout'
  // }
}
</script>
