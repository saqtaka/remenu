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
          <v-card rounded="xl">
            <v-card-text>
              <TaskEditForm :send-task="inputTask" />
            </v-card-text>
          </v-card>
          <div class="my-4">
            <TaskDelete :get-task="inputTask" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TaskEditForm from '~/components/component/TaskEditForm.vue'
import TaskDelete from '~/components/component/TaskDelete.vue'

export default {
  components: {
    TaskEditForm,
    TaskDelete
  },
  props: {
    taskId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      inputTask: ''
    }
  },
  mounted () {
    // this.inputTask = this.taskId
    this.inputTask = this.$route.params.taskid
  }
}
</script>
