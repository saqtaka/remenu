import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - remenu',
    title: 'remenu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/firebase'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
    vueI18n: {
      fallbackLocale: 'ja',
      messages: {
        en: {
          hello: 'hello!!',
          plural: 'You have {n, plural, =0{no messages} one{1 message} other{# messages}}.',
          select: '{gender, select, male{He} female{She} other{They}} liked this.',
          number: 'Current Percent: {current, number, percent}',
          time: 'Current Time: {current, time, short}',
          task: 'Task',
          habit: 'Habit',
          inbox: 'Inbox',
          memo: 'Memo',
          report: 'Report',
          setting: 'Setting',
          license: 'License',
          btn_save: 'Save',
          btn_delete: 'delete',
          input_emailAddress: 'email',
          input_password: 'password',
          input_taskName: 'Task name',
          input_taskMemo: 'Memo',
          input_taskDeadline: 'Deadline',
          input_taskTimeRequired: 'Time required',
          input_habitName: 'Habit name',
          input_habitIfForRecovery1: 'If for recovery',
          input_habitIfForTrigger1: 'If for trigger',
          input_habitThenForRecovery1: 'Then for recovery',
          input_habitThenForTrigger1: 'Then for trigger',
          input_memoContent: 'Memo',
          new_task: 'New task',
          new_habit: 'New habit',
          new_memo: 'New memo',
          new_inbox: 'New today task',
          error_require: 'This is a required input.',
          error_inputCount: 'max count {num}',
          report_date: 'Data',
          report_taskCount: 'Task count',
          report_habitCount: 'Habit count',
          report_totalCount: 'Total count',
          minute: 'min',
          signin_title: 'Tasbit Your Account',
          signin_sub: 'Sign In',
          signin_button: 'Sign In',
          signin_forget: 'Forgot your password?',
          signup_title: 'Tasbit Sign Up',
          signup_sub: 'New Account',
          signup_button: 'CREATE ACCOUNT',
          agree: 'By signing up, you agree to the',
          terms: 'Terms of Service',
          privacy: 'Privacy Policy'
        },
        ja: {
          hello: 'こんにちは！！',
          select: '{gender, select, male{彼} female{彼女} other{彼ら}} はこれを好きです。',
          number: '現在パーセンテージ {current, number, percent}',
          time: '現在時刻: {current, time, medium}',
          task: 'タスク',
          habit: '習慣',
          inbox: 'トレイ',
          memo: 'メモ',
          report: 'レポート',
          setting: '設定',
          license: 'ライセンス',
          btn_save: '保存',
          btn_delete: '削除',
          input_emailAddress: 'メールアドレス',
          input_password: 'パスワード',
          input_taskName: 'タスク',
          input_taskMemo: 'メモ',
          input_taskDeadline: '期限',
          input_taskTimeRequired: '所要時間',
          input_habitName: '習慣',
          input_habitIfForRecovery1: 'こうなったら(リカバリー用)',
          input_habitIfForTrigger1: 'こうなったら',
          input_habitThenForRecovery1: 'こうする(リカバリー用)',
          input_habitThenForTrigger1: 'こうする',
          input_memoContent: 'メモ',
          new_task: 'タスクを追加',
          new_habit: '習慣を追加',
          new_memo: 'メモを追加',
          new_inbox: '今日のタスクを追加',
          error_require: '必須入力です。',
          error_inputCount: '{num}文字以内で入力してください。',
          report_date: '日付',
          report_taskCount: 'タスク',
          report_habitCount: '習慣',
          report_totalCount: '合計',
          minute: '分',
          signin_title: 'Tasbit ログイン',
          signin_sub: 'ログイン',
          signin_button: 'ログインする',
          signin_forget: 'パスワードを忘れた方はこちら',
          signup_title: 'Tasbit ユーザー作成',
          signup_sub: '新規登録',
          signup_button: 'ユーザーを作成する',
          agree: 'ログインすることで、あなたは以下の内容に同意するものとします。',
          terms: '利用規約',
          privacy: 'プライバシーポリシー'
        }
      }
    }
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyCNd1yzV31939F-a0i_2M_fmTH9vKZqGCA',
      authDomain: 'tasbit-81cf6.firebaseapp.com',
      projectId: 'tasbit-81cf6',
      storageBucket: 'tasbit-81cf6.appspot.com',
      messagingSenderId: '<messagingSenderId>',
      appId: '880433504326',
      measurementId: 'G-R95KFBRPB9'
    },
    services: {
      auth: true // Just as example. Can be any other service.
    }
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
