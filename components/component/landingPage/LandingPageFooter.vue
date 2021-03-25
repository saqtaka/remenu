<template>
  <div>
    <v-footer color="transparent">
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="4">
            <div class="text-h6 font-weight-bold text-uppercase mb-5">
              Account
            </div>
            <div class="d-flex mb-2">
              <v-icon color="secondary lighten-1" class="mr-2">
                {{ mdiTwitterSvgPath }}
              </v-icon>
              <a href="https://twitter.com/saqtaka" class="text-decoration-none secondary--text text--lighten-2">@saqtaka</a>
            </div>
            <div class="d-flex mb-2">
              <v-icon color="secondary lighten-1" class="mr-2">
                {{ mdiGithubSvgPath }}
              </v-icon>
              <a href="https://github.com/saqtaka" class="text-decoration-none secondary--text text--lighten-2">@saqtaka</a>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-h6 font-weight-bold text-uppercase mb-5">
              blog
            </div>
            <div class="d-flex mb-2">
              <v-icon color="secondary lighten-1" class="mr-2">
                {{ mdiPostSvgPath }}
              </v-icon>
              <a href="https://saqtaka.com" class="text-decoration-none secondary--text text--lighten-2">saqtaka.com</a>
            </div>
            <!-- <div class="d-flex mb-2">
              <v-icon color="secondary lighten-1" class="mr-2">
                {{ mdiPostSvgPath }}
              </v-icon>
              <a href="https://portability.info" class="text-decoration-none secondary--text text--lighten-2">portability.info</a>
            </div> -->
            <div class="d-flex mb-2">
              <v-icon color="secondary lighten-1" class="mr-2">
                {{ mdiPostSvgPath }}
              </v-icon>
              <a href="https://memo.portability.info" class="text-decoration-none secondary--text text--lighten-2">memo.portability.info</a>
            </div>
            <!-- <div class="d-flex mb-2">
              <v-icon color="secondary lighten-1" class="mr-2">
                {{ mdiPostSvgPath }}
              </v-icon>
              <a href="https://en.blog.tasbit.net" class="text-decoration-none secondary--text text--lighten-2">en.blog.tasbit.net</a>
            </div> -->
            <!-- <div class="d-flex mb-2">
              <v-icon color="secondary lighten-1" class="mr-2">
                {{ mdiPostSvgPath }}
              </v-icon>
              <a href="https://ja.blog.tasbit.net" class="text-decoration-none secondary--text text--lighten-2">ja.blog.tasbit.net</a>
            </div> -->
          </v-col>
        </v-row>
        <v-divider class="my-4" />
        <a href="http://www.freepik.com">Top image designed by vectorjuice / Freepik</a>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import { mdiPost, mdiTwitter, mdiGithub } from '@mdi/js'
export default {
  data () {
    return {
      mdiPostSvgPath: mdiPost,
      mdiTwitterSvgPath: mdiTwitter,
      mdiGithubSvgPath: mdiGithub,
      links: [{
        label: 'Overview',
        to: '#'
      }, {
        label: 'Features',
        to: '#'
      }, {
        label: 'Pricing',
        to: '#'
      }, {
        label: 'Documentation',
        to: '#'
      }, {
        label: 'News',
        to: '#'
      }, {
        label: 'FAQ',
        to: '#'
      }, {
        label: 'About us',
        to: '#'
      }, {
        label: 'Carrers',
        to: '#'
      }, {
        label: 'Press',
        to: '#'
      }]
    }
  }
}
</script>
