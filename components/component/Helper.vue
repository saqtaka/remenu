<template>
  <div class="text-center">
    <v-card rounded="xl" class="px-0">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-center">
              Color Theme
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action class="justify-center mr-0" style="width: 100%">
            <v-radio-group v-model="radios">
              <v-radio color="primary" value="radio-1" class="mb-0 mr-5" @click="mainTheme" />
              <v-radio color="secondary" value="radio-2" class="mb-0 mr-5" @click="secondTheme" />
              <v-radio color="success" value="radio-3" class="mb-0" @click="thirdTheme" />
            </v-radio-group>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-center">
              Dark Mode
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action class="justify-center mr-0" style="width: 100%">
            <v-switch v-model="switcher" color="secondary" />
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
    <!-- </v-menu> -->
  </div>
</template>

<script>
import config from '@/config'
import { mapActions } from 'vuex'

export default {
  name: 'Helper',
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    config,
    radios: 'radio-1',
    mode: false,
    switcher: false
  }),

  methods: {
    ...mapActions(['TOGGLE_THEME']),
    mainTheme () {
      if (this.$vuetify.theme.dark) {
        this.TOGGLE_THEME()
        this.$vuetify.theme.dark = false
        this.$vuetify.theme.themes.light.primary = config.light.primary
        this.switcher = false
      } else {
        this.$vuetify.theme.themes.light.primary = this.config.light.primary
      }
    },
    secondTheme () {
      if (this.$vuetify.theme.dark) {
        this.TOGGLE_THEME()
        this.$vuetify.theme.dark = false
        this.$vuetify.theme.themes.light.primary = config.light.secondary
        this.switcher = false
      } else {
        this.$vuetify.theme.themes.light.primary = this.config.light.secondary
      }
    },
    thirdTheme () {
      if (this.$vuetify.theme.dark) {
        this.TOGGLE_THEME()
        this.$vuetify.theme.dark = false
        this.$vuetify.theme.themes.light.primary = config.light.success
        this.switcher = false
      } else {
        this.$vuetify.theme.themes.light.primary = this.config.light.success
      }
    }
  },
  watch: {
    switcher (newValue) {
      this.TOGGLE_THEME()
      this.$vuetify.theme.dark = newValue
    }
  }
}
</script>

<style src="./Helper.scss" lang="scss"></style>
