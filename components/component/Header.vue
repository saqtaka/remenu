<template>
  <v-app-bar
    elevation="0"
    class="main-header"
    height="64"
    fixed
    color="primary"
    dark
  >
    <v-btn icon class="mx-1" @click.stop="TOGGLE_DRAWER">
      <template v-if="DRAWER_STATE">
        <v-icon size="28" :class="$vuetify.theme.dark ? 'primary--text' : null">
          mdi-arrow-left
        </v-icon>
      </template>
      <template v-else>
        <v-icon size="28" :class="$vuetify.theme.dark ? 'primary--text' : null">
          mdi-menu
        </v-icon>
      </template>
    </v-btn>
    <img src="/img/icons/v-logo-small.png" alt="" height="30" class="mr-1">
    <v-toolbar-title :class="$vuetify.theme.dark ? 'primary--text' : null">
      Remenu
    </v-toolbar-title>
    <v-spacer />

    <v-menu
      min-width="180"
      offset-y
      bottom
      left
      nudge-bottom="10"
    />
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from 'vuex'
// import config from '@/config'

export default {
  name: 'Header',
  data: () => ({
    // config,
    searchCollapse: true,
    notifications: [
      { text: 'Check out this awesome ticket', icon: 'mdi-tag', color: 'warning' },
      { text: 'What is the best way to get ...', icon: 'mdi-thumb-up', color: 'success' },
      { text: 'This is just a simple notification', icon: 'mdi-flag', color: 'error' },
      { text: '12 new orders has arrived today', icon: 'mdi-cart', color: 'primary' }
    ],
    messages: [
      { text: 'JH', name: 'Jane Hew', message: 'Hey! How is it going?', time: '09:32', color: 'warning' },
      { text: 'LB', name: 'Lloyd Brown', message: 'Check out my new Dashboard', time: '10:02', color: 'success' },
      { text: 'MW', name: 'Mark Winstein', message: 'I want rearrange the appointment', time: '12:16', color: 'error' },
      { text: 'LD', name: 'Liana Dutti', message: 'Good news from sale department', time: '14:56', color: 'primary' }
    ],
    account: [
      { text: 'Profile', icon: 'mdi-account', color: 'greyTint' },
      { text: 'Task', icon: 'mdi-thumb-up', color: 'greyTint' },
      { text: 'Messages', icon: 'mdi-flag', color: 'greyTint' }
    ],
    notificationsBadge: true,
    messageBadge: true
  }),
  computed: {
    ...mapState('layout',
      { drawer: state => state.drawer }
    ),
    DRAWER_STATE: {
      get () {
        return this.drawer
      }
    }
  },
  methods: {
    ...mapActions('layout', ['TOGGLE_DRAWER']),
    ...mapActions('auth', ['logoutUser'])
  }
}
</script>

<style lang="scss">
@import "@/styles/app";
.main-header {
  .v-list {
    .v-list-item:hover {
      background-color: #F3F5FF;
      &:before {
        opacity: 0;
      }

    }
    .v-list-item:hover .v-list-item__icon {
      .v-icon {
        color: rgba(var(--v-primary-base), 0.8)!important;
      }
    }
    .link-item {
      cursor: pointer;
    }
  }
  .greeting-text {
    font-size: 14px;
    span {
      font-weight: 600;
    }
  }
}
</style>
