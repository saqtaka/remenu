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
  drawer: true,
  theme: false,
  isProgressLinear: false
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
