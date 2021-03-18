<template>
  <v-footer class="px-0 mt-2" color="transparent">
    <v-row no-gutters />
  </v-footer>
</template>

<script>
// import config from '@/config'

export default {
  name: 'Footer',

  data: () => ({
    // config,
    icons: [
      { icon: 'mdi-twitter', link: 'https://twitter.com/saqtaka' },
      { icon: 'mdi-github', link: 'https://github.com/saqtaka/' }

    ],
    links: [
      { text: 'Tasbit', link: 'https://tasbit.net' },
      { text: 'Blog', link: 'https://portability.info' }
    ]
  })
}
</script>

<style lang="scss">
@import "~/styles/app";
.v-footer {
  .row {
    justify-content: center;
    @include media-breakpoint-up(sm) {
      justify-content: space-between;
    }
    .v-btn {
      .v-btn__content {
        letter-spacing: 0.01em;
      }
    }
  }
}
</style>
