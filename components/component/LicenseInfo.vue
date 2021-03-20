<template>
  <div>
    <v-card v-for="(license, key) in licenses" :key="key" class="my-2" @click="onLicenseClick(license)">
      <v-card-text>
        <div>{{ key }} {{ license.publisher }} ({{ license.licenses }})</div>
        <div>{{ license.repository }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import licensesJson from '../../license.json'

export default {
  data () {
    return {
      licenses: licensesJson
    }
  },
  methods: {
    onLicenseClick (license) {
      window.open(license.repository, '_system')
    }
  }
}
</script>
