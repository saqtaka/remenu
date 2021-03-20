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
          <TaskList />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NewTask from '@/components/component/NewTask.vue'
import TaskList from '@/components/component/TaskList.vue'

export default {
  components: {
    NewTask,
    TaskList
  }
}
</script>
