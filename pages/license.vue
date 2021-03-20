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
          class="text-center"
        >
          <LicenseInfo />
          <!-- <SelectLocale></SelectLocale> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import SelectLocale from '@/components/basic/SelectLocale.vue'

import LicenseInfo from '@/components/component/LicenseInfo'

export default {
  name: 'SettingPage',
  components: {
    LicenseInfo
  }
}
</script>
