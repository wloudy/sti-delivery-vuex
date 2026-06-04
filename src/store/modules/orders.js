import { getFleetBySlug } from '../../data/content'

const emptyDraft = () => ({
  pickup: '',
  delivery: '',
  cargo: '',
  vehicleSlug: null,
  vehicleLabel: null,
})

export default {
  namespaced: true,

  state: () => ({
    draft: emptyDraft(),
    orders: [],
    submitting: false,
    error: null,
    nextOrderNumber: 48291,
  }),

  getters: {
    draftIsValid: (state) =>
      state.draft.pickup.trim().length > 0 && state.draft.delivery.trim().length > 0,

    ordersCount: (state) => state.orders.length,

    recentOrders: (state) => [...state.orders].reverse().slice(0, 10),

    lastOrder: (state) =>
      state.orders.length ? state.orders[state.orders.length - 1] : null,

    hasOrders: (state) => state.orders.length > 0,
  },

  mutations: {
    SET_DRAFT_FIELD(state, { field, value }) {
      state.draft[field] = value
    },

    RESET_DRAFT(state) {
      state.draft = emptyDraft()
    },

    SET_PREFERRED_VEHICLE(state, slug) {
      const car = getFleetBySlug(slug)
      state.draft.vehicleSlug = slug
      state.draft.vehicleLabel = car ? `${car.model} ${car.name}` : null
    },

    ADD_ORDER(state, order) {
      state.orders.push(order)
    },

    SET_ORDERS(state, orders) {
      state.orders = orders
    },

    CLEAR_ORDERS(state) {
      state.orders = []
    },

    SET_SUBMITTING(state, value) {
      state.submitting = value
    },

    SET_ERROR(state, message) {
      state.error = message
    },

    INCREMENT_ORDER_NUMBER(state) {
      state.nextOrderNumber += 1
    },
  },

  actions: {
    updateDraftField({ commit }, payload) {
      commit('SET_DRAFT_FIELD', payload)
    },

    setPreferredVehicle({ commit }, slug) {
      commit('SET_PREFERRED_VEHICLE', slug)
    },

    async submitOrder({ commit, state, getters, dispatch }) {
      if (!getters.draftIsValid) {
        commit('SET_ERROR', 'Укажите адрес забора и адрес доставки')
        return null
      }

      commit('SET_SUBMITTING', true)
      commit('SET_ERROR', null)

      try {
        await new Promise((resolve) => setTimeout(resolve, 700))

        const order = {
          id: `STI-${state.nextOrderNumber}`,
          pickup: state.draft.pickup.trim(),
          delivery: state.draft.delivery.trim(),
          cargo: state.draft.cargo.trim(),
          vehicleSlug: state.draft.vehicleSlug,
          vehicleLabel: state.draft.vehicleLabel,
          status: 'in_transit',
          createdAt: new Date().toISOString(),
        }

        commit('ADD_ORDER', order)
        commit('INCREMENT_ORDER_NUMBER')
        commit('RESET_DRAFT')

        dispatch(
          'ui/showSnackbar',
          {
            message: `Заказ принят! Ближайший STI в пути. Номер ${order.id}`,
            color: 'success',
          },
          { root: true },
        )
        dispatch('ui/closeOrderDialog', null, { root: true })

        return order
      } catch {
        commit('SET_ERROR', 'Не удалось отправить заказ. Попробуйте снова.')
        return null
      } finally {
        commit('SET_SUBMITTING', false)
      }
    },

    clearAllOrders({ commit }) {
      commit('CLEAR_ORDERS')
    },
  },
}
