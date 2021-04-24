// export default {
//   namespaced: true,
//   state: {
//     drawer: true,
//     theme: false
//   },
//   mutations: {
//     toggleDrawer (state) {
//       state.drawer = !state.drawer
//     },
//     toggleTheme (state) {
//       state.theme = !state.theme
//     }
//   },
//   actions: {
//     TOGGLE_DRAWER ({ commit }) {
//       commit('toggleDrawer')
//     },
//     TOGGLE_THEME ({ commit }) {
//       commit('toggleTheme')
//     }
//   },
//   getters: {
//     DRAWER_STATE (state) {
//       return state.drawer
//     },
//     THEME_STATE (state) {
//       return state.theme
//     }
//   }
// }

export const state = () => ({
  drawer: false,
  theme: false,
  isProgressLinear: false,
  alertDialogMessage: null,
  snackbarMessage: null
})
export const mutations = {
  toggleDrawer (state) {
    state.drawer = !state.drawer
  },
  toggleTheme (state) {
    state.theme = !state.theme
  },
  showProgressLinear (state, value) {
    state.isProgressLinear = value
  },
  alertDialogMessage (state, value) {
    state.alertDialogMessage = value
  },
  snackbarMessage (state, value) {
    state.snackbarMessage = value
  }
}
export const actions = {
  TOGGLE_DRAWER ({ commit }) {
    commit('toggleDrawer')
  },
  TOGGLE_THEME ({ commit }) {
    commit('toggleTheme')
  },
  SHOW_PROGRESSLINEAR ({ commit }, value) {
    commit('showProgressLinear', value)
  },
  ALERT_DIALOG_MESSAGE ({ commit }, value) {
    commit('alertDialogMessage', value)
  },
  SNACKBAR_MESSAGE ({ commit }, value) {
    commit('snackbarMessage', value)
  }
}
export const getters = {
  DRAWER_STATE (state) {
    return state.drawer
  },
  THEME_STATE (state) {
    return state.theme
  }
}
