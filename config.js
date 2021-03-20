const hostApi = process.env.NODE_ENV === 'development' ? 'http://localhost' : 'https://sing-generator-node.herokuapp.com'
const portApi = process.env.NODE_ENV === 'development' ? 8080 : ''
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ''}/api`
const redirectUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/vue-material' : 'https://demo.flatlogic.com/vue-material'

export default {
  light: {
    primary: '#536dfe',
    primaryConst: '#536dfe',
    secondary: '#FF5C93',
    secondaryConst: '#FF5C93',
    error: '#6e6e6e',
    warning: '#FFC260',
    success: '#3CD4A0',
    successConst: '#3CD4A0',
    info: '#9013FE',
    greyDefault: '#e0e0e0',
    greyBold: '#4a4a4a',
    greyBoldConst: '#4a4a4a',
    greyMedium: '#6e6e6e',
    greyTint: '#b9b9b9',
    default: '#e0e0e0',
    iconColor: '#FFFFFF59'
  },
  dark: {
    primary: '#536dfe',
    primaryConst: '#536dfe',
    secondary: '#FF5C93',
    secondaryConst: '#FF5C93',
    success: '#3CD4A0',
    successConst: '#3CD4A0',
    error: '#bfbfbf',
    greyDefault: '#23232d',
    greyMedium: '#bfbfbf',
    greyBold: '#d6d6d6',
    greyBoldConst: '#4a4a4a',
    greyTint: '#9b9b9b',
    default: '#e0e0e0'
  },
  hostApi,
  portApi,
  baseURLApi,
  redirectUrl,
  isBackend: process.env.VUE_APP_BACKEND,
  remote: 'https://sing-generator-node.herokuapp.com',
  auth: {
    email: 'admin@flatlogic.com',
    password: 'password'
  }
}
