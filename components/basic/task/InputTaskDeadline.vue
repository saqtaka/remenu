<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template #activator="{ on, attrs }">
        <v-text-field
          v-model="taskDeadline"
          :prepend-icon="mdiCalendarSvgPath"
          v-bind="attrs"
          readonly
          v-on="on"
        />
      </template>
      <v-date-picker
        ref="picker"
        v-model="taskDeadline"
        @change="save"
      />
    </v-menu>
  </div>
</template>

<script>
// import $ from 'jquery'
// import 'jquery-ui/ui/widgets/datepicker'
import { mdiCalendar } from '@mdi/js'

export default {
  model: {
    prop: 'taskDeadlineProp',
    event: 'inputField'
  },
  props: {
    taskDeadlineProp: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      taskDeadline: this.taskDeadlineProp,
      menu: false,
      mdiCalendarSvgPath: mdiCalendar
    }
  },
  watch: {
    taskDeadlineProp: {
      handler (newValue, oldValue) {
        this.taskDeadline = newValue
      }
    }
  },
  // created: function () {
  //   $(function () {
  //     $('#datepicker').datepicker(
  //       {
  //         dateFormat: 'yy/m/d',
  //         onSelect: function () {
  //           var e = document.createEvent('HTMLEvents')
  //           e.initEvent('input', false, true)
  //           this.dispatchEvent(e)
  //         }
  //       })
  //   })
  // },
  methods: {
    sendData (e) {
      this.$emit('inputField', e)
    },
    save (taskDeadline) {
      this.$refs.menu.save(taskDeadline)
      this.sendData(taskDeadline)
    }
  }
}
</script>
