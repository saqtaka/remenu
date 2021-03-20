<template>
  <div id="dailyReport">
    <div class=" ">
      <v-card>
        <v-card-text>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  {{ $t('report_date') }}
                </th>
                <th scope="col">
                  {{ $t('report_taskCount') }}
                </th>
                <th scope="col">
                  {{ $t('report_habitCount') }}
                </th>
                <th scope="col">
                  {{ $t('report_totalCount') }}
                </th>
              </tr>
            </thead>
            <tbody>
              <DailyReportTable
                v-for="(dailyReport, index) in dailyReports"
                :key="index"
                :daily-report-data="dailyReport"
                :data-selected="index == selectedIndex"
                @clearButton="selectDailyReport(index)"
                @editButton="goToEdit(index)"
              />
            </tbody>
          </table>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import DailyReportTable from '@/components/component/DailyReportTable.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export default {
  name: 'DailyReport',
  components: {
    DailyReportTable
  },
  data () {
    return {
      dailyReports: [
        {
          id: null,
          date: null,
          taskCount: null,
          habitCount: null
        }
      ],
      selectedIndex: 0
    }
  },
  created () {
    // login状態が変更されたら
    firebase.auth().onAuthStateChanged((user) => {
      // loginしてたら
      if (user) {
        firebase
          .firestore()
          .collection('dailyReports')
          .where('uid', '==', `${firebase.auth().currentUser.uid}`)
          .orderBy('date', 'desc')
          .limit(7)
          .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
              if (change.type === 'added') {
                this.dailyReports.push({
                  id: change.doc.id,
                  date: change.doc.data().date ? change.doc.data().date.toDate() : '',
                  taskCount: change.doc.data().taskCount ? change.doc.data().taskCount : 0,
                  habitCount: change.doc.data().habitCount ? change.doc.data().habitCount : 0
                })
              }
            })
          })
      }
    })
    this.dailyReports.splice(this.selectedIndex, 1)
  }
}
</script>
