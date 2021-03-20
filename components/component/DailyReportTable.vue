<template>
  <tr>
    <th v-if="dailyReportData.date">
      {{ dailyReportData.date.toLocaleDateString() }}
    </th>
    <td>{{ dailyReportData.taskCount }}</td>
    <td>{{ dailyReportData.habitCount }}</td>
    <td>{{ dailyReportData.taskCount + dailyReportData.habitCount }}</td>
  </tr>
</template>

<script>
export default {
  // props: ['dailyReportData'],
  props: {
    dailyReportData: {
      type: Object,
      required: true,
      default () {
        return {
          id: null,
          date: null,
          taskCount: null,
          habitCount: null
        }
      }
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
