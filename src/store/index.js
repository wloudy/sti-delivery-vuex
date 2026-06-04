import { createStore } from 'vuex'
import orders from './modules/orders'
import ui from './modules/ui'
import persistOrders from './plugins/persistOrders'

export default createStore({
  modules: {
    orders,
    ui,
  },
  plugins: [persistOrders],
})
