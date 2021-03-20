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
          <v-card>
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
  name: 'MemoEditorPage',
  components: {
    MemoEditForm,
    MemoDelete
  },
  props: ['memoId'],
  data () {
    return {
      // relayMemo: null,
      inputMemo: ''
    }
  },
  mounted () {
    this.inputMemo = this.memoId
  }
}
</script>
