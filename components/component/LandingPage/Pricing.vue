<template>
  <v-container class="pt-16 pt-md-16 pb-10 px-0">
    <v-responsive max-width="700" class="mx-auto text-center">
      <h2 class="text-h3 text-lg-h2">
        {{ $t('price_title') }}
      </h2>
      <div class="text-h4 primary--text mt-2">
        {{ $t('price_sub') }}
      </div>
    </v-responsive>

    <v-row
      class="mt-10"
      align="center"
      justify="center"
      dense
    >
      <v-col
        v-for="(plan, i) in plans"
        :key="i"
      >
        <v-layout justify-center>
          <v-card
            class="text-body-1"
            elevation="4"
            rounded="xl"
            outlined
            :max-width="300"
            :min-height="600"
          >
            <v-sheet class="pa-4 text-center">
              <div class="mb-6">
                <div class="text-h6 font-weight-bold text-uppercase">
                  {{ plan.title }}
                </div>
              </div>
              <div v-if="plan.price">
                <div class="d-flex justify-center ml-n3">
                  <div class="font-weight-regular text-h4 mr-1" style="margin-top: 4px">
                    {{ $t('currency') }}
                  </div>
                  <div class="text-h1">
                    {{ plan.price }}
                  </div>
                </div>
                <div class="grey--text justify-end overline">
                  / {{ $t('per') }}
                </div>
              </div>
              <div v-else class="text-h6 my-2">
                A personalized approach to your business needs
              </div>
            </v-sheet>
            <!-- <div class="text-center">
              <v-chip v-if="plan.highlight" color="secondary" class="mb-n3 overline font-weight-bold" small>Popular</v-chip>
            </div> -->
            <v-divider />
            <v-sheet class="pa-4" color="surface">
              <div class="my-6 text-h6">
                <div v-for="(feat, j) in plan.features" :key="j" class="d-flex align-center my-1">
                  <v-icon color="success" class="mr-2">
                    mdi-check
                  </v-icon>
                  <span v-if="feat.value" class="font-weight-black mr-1">{{ feat.value }}</span>
                  <span class="text-truncate">{{ feat.label }}</span>
                </div>
              </div>
              <v-btn
                x-large
                block
                outlined
                :dark="plan.highlight"
                :class="[plan.highlight && 'secondary']"
                :to="plan.to"
              >
                {{ plan.price ? $t('price_button') : 'Contact Sales' }}
              </v-btn>
            </v-sheet>
          </v-card>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      plans: [{
        highlight: true,
        title: this.$t('plan_name1'),
        price: this.$t('price1'),
        to: '/createanoanonymousaccount',
        features: [{
          value: '',
          label: this.$t('price_feature1')
        }, {
          value: '',
          label: this.$t('price_feature2')
        }]
      },
      {
        highlight: true,
        title: this.$t('plan_name2'),
        price: this.$t('price1'),
        to: '/signup',
        features: [{
          value: '',
          label: this.$t('price_feature1')
        }, {
          value: '',
          label: this.$t('price_feature2')
        }, {
          value: '',
          label: this.$t('price_feature3')
        }, {
          value: '',
          label: this.$t('price_feature4')
        }, {
          value: '',
          label: this.$t('price_feature5')
        }]
      }]
    }
  },
  methods: {
    clickSignup () {
      window.open('https://my.tasbit.net', '_blank')
    }
  }
}
</script>
