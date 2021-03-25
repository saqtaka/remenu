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
              <HabitEditForm :send-habit="inputHabit" />
            </v-card-text>
          </v-card>
          <div class="my-4">
            <HabitDelete :get-habit="inputHabit" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HabitEditForm from '@/components/component/HabitEditForm.vue'
import HabitDelete from '@/components/component/HabitDelete.vue'

export default {
  name: 'HabitEditorPage',
  components: {
    HabitEditForm,
    HabitDelete
  },
  props: {
    habitId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      inputHabit: ''
    }
  },
  mounted () {
    // this.inputHabit = this.habitId
    this.inputHabit = this.$route.params.habitid
  }
}
</script>
