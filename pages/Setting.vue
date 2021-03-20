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
          cols="12"
          sm="6"
          class="text-center"
        >
          <LocaleSetting />
          <!-- <SelectLocale></SelectLocale> -->
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <Helper />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import SelectLocale from '@/components/basic/SelectLocale.vue'

import Helper from '@/components/component/Helper'
import LocaleSetting from '@/components/component/LocaleSetting'

export default {
  name: 'SettingPage',
  components: {
    // SelectLocale
    Helper,
    LocaleSetting
  }
}
</script>
