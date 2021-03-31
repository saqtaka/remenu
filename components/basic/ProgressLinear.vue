<template>
  <v-progress-linear
    v-if="isProgressLinear"
    indeterminate
    color="secondary"
  />
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
  computed: mapState({
    ...mapState('layout', {
      isProgressLinear: state => state.isProgressLinear
    })
  })
}
</script>
