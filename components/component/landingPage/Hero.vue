<template>
  <div>
    <v-sheet class="bg-sheet pb-8" elevation="3">
      <v-container class="py-12 py-lg-16 text-center">
        <v-row justify="center">
          <v-col cols="12">
            <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h2 mt-md-12">
              {{ $t('heading_message1') }}<span class="primary--text">{{ $t('heading_message2') }}</span>{{ $t('heading_message3') }}
            </h1>
            <h2 class="text-h6 text-sm-h5 text--lighten-2 mt-4 ">
              {{ $t('heading_sub') }}
            </h2>
          </v-col>
          <v-col cols="12">
            <v-layout wrap justify-center>
              <v-img
                :src="require('@/assets/images/20944172.jpg')"
                alt=""
                class="roundeds mb-6"
              />
            </v-layout>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>
