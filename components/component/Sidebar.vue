<template>
  <v-navigation-drawer
    v-model="DRAWER_STATE"
    app
    clipped
    :mini-variant="!DRAWER_STATE"
    :width="sidebarWidth"
    :permanent="$vuetify.breakpoint.lgAndUp"
    :temporary="$vuetify.breakpoint.mdAndDown"
    :mini-variant-width="sidebarMinWidth"
    :class="{'drawer-mini': !DRAWER_STATE}"
  >
    <v-list>
      <template v-for="(item, i) in items">
        <v-row
          v-if="item.heading"
          :key="item.heading"
          align="center"
        >
          <v-col cols="6">
            <span
              style="padding-left: 32px"
              class="text-body-1 subheader"
              :class="(item.heading && DRAWER_STATE) ? 'show ' : 'hide'"
            >
              {{ item.heading }}
            </span>
          </v-col>
          <v-col
            cols="6"
            class="text-center"
          />
        </v-row>
        <v-divider
          v-else-if="item.divider"
          :key="i"
          dark
          class="my-4"
        />
        <v-list-group
          v-else-if="item.children && DRAWER_STATE"
          :key="item.title"
          v-model="item.model"
          color="primary"
        >
          <template #prependIcon>
            <v-icon size="24" class="mr-0" color="greyTint">
              {{ item.icon }}
            </v-icon>
          </template>
          <template #activator>
            <v-list-item-content>
              <v-badge v-if="item.badge" content="New" color="secondary" />
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(child, i) in item.children"
            :key="i"
            :to="child.link"
            link
            class="pl-12"
            @click="child.action ? child.action() : null"
          >
            <v-list-item-action v-if="child.icon" class="mr-2">
              <v-icon size="">
                {{ child.icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ child.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item
          v-else
          :key="item.text"
          color="primary"
          :to="item.link === '#' ? '' : item.link"
          link
          @click="item.action ? item.action() : null"
        >
          <v-list-item-action class="mr-6">
            <v-icon
              :size="item.size ? item.size : 24"
              :color="item.color ? item.color : 'greyTint'"
            >
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              link
            >
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider
        dark
        style="margin-top: 240px"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

import { mdiHome, mdiCheck, mdiCached, mdiBookOpen, mdiClipboardText, mdiInformationOutline, mdiExitToApp } from '@mdi/js'
// import { mdiHome, mdiCheck, mdiCached, mdiBookOpen, mdiClipboardText, mdiAccountCircleOutline, mdiInformationOutline, mdiExitToApp } from '@mdi/js'

export default {
  props: {
    source: String
  },
  data () {
    return {
      sidebarWidth: 240,
      sidebarMinWidth: 96,
      dialog: false,
      chat: false,
      chatMessage: ''
    }
  },
  computed: {
    ...mapState('layout', {
      drawer: state => state.drawer
    }),
    DRAWER_STATE: {
      get () {
        return this.drawer
      },
      set (newValue) {
        if (newValue === this.drawer) { return }
        this.TOGGLE_DRAWER()
      }
    },
    items () {
      return [
        { title: this.$t('inbox'), icon: mdiHome, link: this.localeRoute('inbox') },
        { title: this.$t('task'), icon: mdiCheck, link: this.localeRoute('task') },
        { title: this.$t('habit'), icon: mdiCached, link: this.localeRoute('habit') },
        { title: this.$t('memo'), icon: mdiBookOpen, link: this.localeRoute('memo') },
        { title: this.$t('report'), icon: mdiClipboardText, link: this.localeRoute('report') },
        // { title: this.$t('setting'), icon: mdiAccountCircleOutline, link: '/setting' },
        { title: this.$t('license'), icon: mdiInformationOutline, link: this.localeRoute('license') },
        { divider: true },
        { title: 'LOGOUT', icon: mdiExitToApp, action: () => this.logOut() }
      ]
    }
  },
  methods: {
    ...mapActions(
      'layout', ['TOGGLE_DRAWER']
    ),
    logOut () {
      // window.localStorage.setItem('authenticated', false)
      firebase.auth().signOut()
      this.$router.push('/signin')
    },
    addSection () {
      this.dialog = true
    }
  }
}
</script>

<style src="./Sidebar.scss" lang="scss"/>
