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
          cols="12"
          sm="6"
        >
          <v-card rounded="xl">
            <v-card-text>
              <HabitEditForm :send-habit="inputHabit" />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          class="text-center"
          cols="12"
          sm="6"
        >
          <v-card rounded="xl">
            <v-card-text>
              <HabitCalendar :habit-id-prop="inputHabit" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="text-center"
        >
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
import HabitCalendar from '@/components/component/HabitCalendar.vue'

export default {
  name: 'HabitEditorPage',
  // nuxtI18n: {
  //   paths: {
  //     en: '/habit/:habitid',
  //     ja: '/habit/:habitid'
  //   }
  // },
  components: {
    HabitEditForm,
    HabitDelete,
    HabitCalendar
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
