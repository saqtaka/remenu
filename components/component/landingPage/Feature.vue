<template>
  <!-- <v-sheet color="transparent"> -->
  <v-container class="pt-16 pt-md-16 pb-10 px-0">
    <v-responsive max-width="900" class="mx-auto text-center">
      <h2 class="text-h3 text-lg-h2">
        {{ $t('feature_title') }}
      </h2>
      <div class="text-h4 primary--text mt-2">
        {{ $t('feature_sub1') }}
      </div>
    </v-responsive>

    <v-row
      class="mt-3"
      align="center"
      justify="center"
      dense
    >
      <v-col
        v-for="(item, i) in features"
        :key="i"
        cols="12"
      >
        <v-card
          class="py-4 px-2"
          outlined
          elevation="4"
          rounded="xl"
        >
          <div>
            <div>
              <div class="text-h5 font-weight-bold">
                {{ item.title }}
              </div>
              <div class="font-weight-regular mt-1">
                {{ item.description }}
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- </v-sheet> -->
</template>

<script>
export default {
  data () {
    return {
      features: [{
        icon: 'mdi-check',
        title: this.$t('feature1_title'),
        description: this.$t('feature1_detail')
      }, {
        icon: 'mdi-clock-outline',
        title: this.$t('feature2_title'),
        description: this.$t('feature2_detail')
      }, {
        icon: 'mdi-email',
        title: this.$t('feature3_title'),
        description: this.$t('feature3_detail')
      }, {
        icon: 'mdi-chart-box-outline',
        title: this.$t('feature4_title'),
        description: this.$t('feature4_detail')
      }, {
        icon: 'mdi-book-open',
        title: this.$t('feature5_title'),
        description: this.$t('feature5_detail')
      }]
    }
  }
}
</script>
