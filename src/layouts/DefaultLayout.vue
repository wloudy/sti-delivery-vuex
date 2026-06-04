<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import OrderDialog from '../components/OrderDialog.vue'
import AppFooter from '../components/AppFooter.vue'
import { useOrder } from '../composables/useOrder'

const route = useRoute()
const store = useStore()
const { openOrder } = useOrder()
const drawer = ref(false)

const navLinks = [
  { title: 'Главная', name: 'home' },
  { title: 'Услуги', name: 'services' },
  { title: 'Флот', name: 'fleet' },
  { title: 'Заказы', name: 'orders', badge: true },
  { title: 'Как это работает', name: 'how' },
  { title: 'О нас', name: 'about' },
]

const orderOpen = computed({
  get: () => store.state.ui.orderDialogOpen,
  set: (value) => {
    if (value) openOrder()
    else store.dispatch('ui/closeOrderDialog')
  },
})

const snackbarVisible = computed({
  get: () => store.state.ui.snackbar.visible,
  set: (value) => {
    if (!value) store.dispatch('ui/hideSnackbar')
  },
})

const snackbarText = computed(() => store.state.ui.snackbar.message)
const snackbarColor = computed(() => store.state.ui.snackbar.color)
const ordersCount = computed(() => store.getters['orders/ordersCount'])

function closeDrawer() {
  drawer.value = false
}
</script>

<template>
  <v-app-bar flat color="rgba(0,0,0,0.85)" class="border-b border-red">
    <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />

    <RouterLink :to="{ name: 'home' }" class="d-flex align-center text-decoration-none text-white ms-2">
      <v-avatar color="primary" size="40">
        <span class="font-weight-black text-body-2">STI</span>
      </v-avatar>
      <v-app-bar-title class="title-font font-weight-black text-h5">
        STI RUSH
      </v-app-bar-title>
    </RouterLink>

    <v-spacer />

    <v-btn
      v-for="link in navLinks"
      :key="link.name"
      :to="{ name: link.name }"
      variant="text"
      class="d-none d-md-inline-flex"
      :active="route.name === link.name"
    >
      {{ link.title }}
      <v-badge
        v-if="link.badge && ordersCount > 0"
        :content="ordersCount"
        color="primary"
        inline
        class="ms-2"
      />
    </v-btn>

    <v-btn
      href="tel:+79991234567"
      variant="tonal"
      prepend-icon="mdi-phone"
      class="d-none d-sm-inline-flex me-2"
    >
      +7 (999) 123-45-67
    </v-btn>

    <v-btn color="primary" prepend-icon="mdi-lightning-bolt" @click="openOrder()">
      Заказать
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list nav>
      <v-list-item
        v-for="link in navLinks"
        :key="link.name"
        :title="link.title"
        :to="{ name: link.name }"
        :active="route.name === link.name"
        @click="closeDrawer"
      >
        <template v-if="link.badge && ordersCount > 0" #append>
          <v-chip size="x-small" color="primary">{{ ordersCount }}</v-chip>
        </template>
      </v-list-item>
      <v-divider class="my-2" />
      <v-list-item
        href="tel:+79991234567"
        prepend-icon="mdi-phone"
        title="+7 (999) 123-45-67"
      />
    </v-list>
  </v-navigation-drawer>

  <v-main>
    <RouterView />
    <AppFooter />
  </v-main>

  <OrderDialog v-model="orderOpen" />

  <v-snackbar
    v-model="snackbarVisible"
    :color="snackbarColor"
    :timeout="5000"
    location="top"
  >
    {{ snackbarText }}
    <template #actions>
      <v-btn variant="text" @click="store.dispatch('ui/hideSnackbar')">OK</v-btn>
    </template>
  </v-snackbar>
</template>
