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
          <NewMemo />
          <MemoList />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NewMemo from '@/components/component/NewMemo.vue'
import MemoList from '@/components/component/MemoList.vue'

export default {
  name: 'MemoPage',
  components: {
    NewMemo,
    MemoList
  }
}
</script>
