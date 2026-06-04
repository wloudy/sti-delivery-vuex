import { useStore } from 'vuex'

/** Открыть диалог заказа; опционально — slug машины из флота */
export function useOrder() {
  const store = useStore()

  function openOrder(vehicleSlug = null) {
    store.dispatch('ui/openOrderDialog', vehicleSlug)
  }

  return { openOrder }
}
