<template>
  <div>
    <v-card
      class="my-2"
      rounded="xl"
      @click="clickEditButton"
    >
      <v-card-text class="pa-1">
        <v-container class="pa-0 ma-0">
          <v-row align="center" class="pa-0 ma-0">
            <v-col justify="center" cols="2" sm="1" class="pa-0 ma-0">
              <div>
                <CheckButton class="mt-2 mb-2 ml-2 mr-2" color="success" @buttonClick="clickClearButton" />
              </div>
            </v-col>
            <v-col class="pa-0 ma-0">
              <div class="ma-1 text-left">
                <span class="body-1">{{ taskData.title }}</span>
              </div>
              <div class="text-left">
                <span
                  v-if="taskData.date"
                  class="mt-1 mb-1 ml-1 mr-1 caption blue--text"
                >
                  {{ taskData.date.toLocaleDateString() }}
                </span>

                <span
                  v-if="taskData.count"
                  class="mt-1 mb-1 ml-1 mr-1 caption red--text"
                >
                  {{ taskData.count }}
                </span>

                <span
                  v-if="taskData.timeRequired"
                  class="mt-1 mb-1 ml-1 mr-1 caption green--text"
                >
                  {{ taskData.timeRequired }}分
                </span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import CheckButton from '@/components/basic/CheckButton.vue'

export default {
  name: 'TaskCard',
  components: {
    CheckButton
  },
  // props: ['taskData'],
  props: {
    taskData: {
      type: Object,
      required: true,
      default () {
        return {
          id: null,
          title: null,
          habitId: null,
          date: null,
          count: null,
          timeRequired: null
        }
      }
    }
  },
  data () {
    return {
      isToday: false
    }
  },
  created () {
    let today = new Date()
    today = today.setHours(0, 0, 0, 0)

    let date = new Date(this.taskData.date)
    date = date.setHours(0, 0, 0, 0)

    if (date === today) {
      this.isToday = true
    }
  },
  methods: {
    clickClearButton () {
      this.$emit('clearButton')
    },
    clickEditButton () {
      this.$emit('editButton')
    }
  }
}
</script>
