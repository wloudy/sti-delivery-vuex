export default {
  namespaced: true,

  state: () => ({
    orderDialogOpen: false,
    snackbar: {
      visible: false,
      message: '',
      color: 'success',
    },
  }),

  mutations: {
    SET_ORDER_DIALOG(state, open) {
      state.orderDialogOpen = open
    },

    SHOW_SNACKBAR(state, { message, color = 'success' }) {
      state.snackbar = { visible: true, message, color }
    },

    HIDE_SNACKBAR(state) {
      state.snackbar.visible = false
    },
  },

  actions: {
    openOrderDialog({ commit, dispatch }, vehicleSlug = null) {
      if (vehicleSlug) {
        dispatch('orders/setPreferredVehicle', vehicleSlug, { root: true })
      }
      commit('SET_ORDER_DIALOG', true)
    },

    closeOrderDialog({ commit }) {
      commit('SET_ORDER_DIALOG', false)
      commit('orders/SET_ERROR', null, { root: true })
    },

    showSnackbar({ commit }, payload) {
      commit('SHOW_SNACKBAR', payload)
    },

    hideSnackbar({ commit }) {
      commit('HIDE_SNACKBAR')
    },
  },
}
