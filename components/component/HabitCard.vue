<template>
  <v-card
    class="my-2"
    rounded="xl"
    @click="clearButton"
  >
    <v-card-title class="pa-1">
      <v-container class="pa-0 ma-0">
        <v-row align="center" class="pa-0 ma-0">
          <v-col justify="center" cols="2" sm="1" class="pa-0 ma-0">
            <div>
              <AchivementRate :habit-id-prop="habitData.id" />
            </div>
          </v-col>
          <v-col class="pa-0 ma-0">
            <div class="ma-1 text-left">
              <span class="body-1">{{ habitData.title }}</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-title>
  </v-card>
</template>

<script>
import AchivementRate from '@/components/basic/habit/AchivementRate.vue'

export default {
  components: {
    AchivementRate
  },
  // props: ['habitData'],
  props: {
    habitData: {
      type: Object,
      required: true,
      default () {
        return { id: null, title: null }
      }
    }
  },
  methods: {
    clearButton () {
      this.$emit('clearButton')
    }
  }
}
</script>
