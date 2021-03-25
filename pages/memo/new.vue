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
              <MemoEditForm :send-memo="inputMemo" />
            </v-card-text>
          </v-card>

          <div class="my-4">
            <MemoDelete :get-memo="inputMemo" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MemoEditForm from '@/components/component/MemoEditForm.vue'
import MemoDelete from '@/components/component/MemoDelete.vue'

export default {
  components: {
    MemoEditForm,
    MemoDelete
  },
  props: {
    memoId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // relayMemo: null,
      inputMemo: ''
    }
  },
  mounted () {
    // this.inputMemo = this.memoId
    this.inputMemo = this.$route.params.memoid
  }
}
</script>
