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
          <DailyReport />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DailyReport from '@/components/component/DailyReport.vue'

export default {
  name: 'ReportPage',
  components: {
    DailyReport
  }
}
</script>
