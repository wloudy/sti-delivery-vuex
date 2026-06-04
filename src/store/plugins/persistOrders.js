const STORAGE_KEY = 'sti-rush-orders'

export default function persistOrders(store) {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const orders = JSON.parse(saved)
      if (Array.isArray(orders)) {
        store.commit('orders/SET_ORDERS', orders)
      }
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY)
  }

  store.subscribe((mutation, state) => {
    if (
      mutation.type === 'orders/ADD_ORDER' ||
      mutation.type === 'orders/CLEAR_ORDERS' ||
      mutation.type === 'orders/SET_ORDERS'
    ) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.orders.orders))
    }
  })
}
