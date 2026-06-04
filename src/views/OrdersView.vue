<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useOrder } from '../composables/useOrder'

const store = useStore()
const { openOrder } = useOrder()

const orders = computed(() => store.getters['orders/recentOrders'])
const ordersCount = computed(() => store.getters['orders/ordersCount'])
const hasOrders = computed(() => store.getters['orders/hasOrders'])

function clearOrders() {
  store.dispatch('orders/clearAllOrders')
}

function formatDate(iso) {
  return new Date(iso).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>

<template>
  <v-container class="py-16">
    <v-row class="mb-8" align="center">
      <v-col cols="12" md="8">
        <v-chip color="primary" variant="outlined" class="mb-3">VUEX STORE</v-chip>
        <h1 class="text-h3 font-weight-black title-font">Мои заказы</h1>
        <p class="text-medium-emphasis mt-3">
          Список хранится в модуле <code>orders</code> (state + getters). После отправки
          заказ попадает через mutation <code>ADD_ORDER</code>, action
          <code>submitOrder</code> имитирует API. Данные сохраняются в
          <code>localStorage</code> плагином store.
        </p>
      </v-col>
      <v-col cols="12" md="4" class="d-flex flex-wrap ga-3 justify-md-end">
        <v-btn color="primary" prepend-icon="mdi-plus" @click="openOrder()">
          Новый заказ
        </v-btn>
        <v-btn
          v-if="hasOrders"
          variant="outlined"
          color="error"
          prepend-icon="mdi-delete-outline"
          @click="clearOrders"
        >
          Очистить
        </v-btn>
      </v-col>
    </v-row>

    <v-alert v-if="!hasOrders" type="info" variant="tonal" class="mb-6">
      Заказов пока нет. Оформите доставку — счётчик в шапке обновится через getter
      <code>ordersCount</code>.
    </v-alert>

    <v-chip v-else class="mb-6" color="accent" variant="flat">
      Всего заказов: {{ ordersCount }}
    </v-chip>

    <v-row>
      <v-col v-for="order in orders" :key="order.id" cols="12" md="6">
        <v-card rounded="xl" variant="outlined">
          <v-card-title class="d-flex align-center justify-space-between">
            <span class="title-font">{{ order.id }}</span>
            <v-chip size="small" color="success" variant="flat">В пути</v-chip>
          </v-card-title>
          <v-card-text>
            <v-list density="compact" class="bg-transparent">
              <v-list-item
                prepend-icon="mdi-map-marker-outline"
                :title="order.pickup"
                subtitle="Откуда"
              />
              <v-list-item
                prepend-icon="mdi-home-map-marker"
                :title="order.delivery"
                subtitle="Куда"
              />
              <v-list-item
                v-if="order.cargo"
                prepend-icon="mdi-package-variant"
                :title="order.cargo"
                subtitle="Груз"
              />
              <v-list-item
                v-if="order.vehicleLabel"
                prepend-icon="mdi-car-sports"
                :title="order.vehicleLabel"
                subtitle="Машина"
              />
            </v-list>
            <p class="text-caption text-medium-emphasis mt-2 mb-0">
              {{ formatDate(order.createdAt) }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
