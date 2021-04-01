<template>
  <v-progress-linear
    :active="progressLinear"
    :indeterminate="progressLinear"
    color="secondary"
  />
  <!-- <div /> -->
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      progressLinear: this.isProgressLinear
    }
  },
  computed: mapState({
    ...mapState('layout', {
      isProgressLinear: state => state.isProgressLinear
    })
  }),
  watch: {
    isProgressLinear (newValue, oldValue) {
      this.progressLinear = newValue
    }
  },
  created () {
    this.progressLinear = this.isProgressLinear
  }
}
</script>
