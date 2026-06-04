<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

defineProps({
  modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const store = useStore()

const submitting = computed(() => store.state.orders.submitting)
const error = computed(() => store.state.orders.error)
const vehicleLabel = computed(() => store.state.orders.draft.vehicleLabel)

const pickup = computed({
  get: () => store.state.orders.draft.pickup,
  set: (value) =>
    store.dispatch('orders/updateDraftField', { field: 'pickup', value }),
})

const delivery = computed({
  get: () => store.state.orders.draft.delivery,
  set: (value) =>
    store.dispatch('orders/updateDraftField', { field: 'delivery', value }),
})

const cargo = computed({
  get: () => store.state.orders.draft.cargo,
  set: (value) =>
    store.dispatch('orders/updateDraftField', { field: 'cargo', value }),
})

function close() {
  store.dispatch('ui/closeOrderDialog')
  emit('update:modelValue', false)
}

async function submit() {
  await store.dispatch('orders/submitOrder')
}
</script>

<template>
  <v-dialog
    :model-value="modelValue"
    max-width="520"
    persistent
    @update:model-value="!$event && close()"
  >
    <v-card rounded="xl">
      <v-card-title class="d-flex align-center justify-space-between pa-6">
        <span class="text-h5 font-weight-bold">Новый заказ</span>
        <v-btn icon="mdi-close" variant="text" :disabled="submitting" @click="close" />
      </v-card-title>

      <v-card-text class="px-6 pb-2">
        <v-alert
          v-if="vehicleLabel"
          type="info"
          variant="tonal"
          density="compact"
          class="mb-4"
          icon="mdi-car-sports"
        >
          Машина: <strong>{{ vehicleLabel }}</strong>
        </v-alert>

        <v-alert v-if="error" type="error" variant="tonal" density="compact" class="mb-4">
          {{ error }}
        </v-alert>

        <v-text-field
          v-model="pickup"
          label="Откуда забрать"
          placeholder="Адрес ресторана / магазина"
          prepend-inner-icon="mdi-map-marker-outline"
          variant="outlined"
          class="mb-4"
          :disabled="submitting"
        />
        <v-text-field
          v-model="delivery"
          label="Куда доставить"
          placeholder="Ваш адрес"
          prepend-inner-icon="mdi-home-map-marker"
          variant="outlined"
          class="mb-4"
          :disabled="submitting"
        />
        <v-textarea
          v-model="cargo"
          label="Что доставить"
          placeholder="Описание груза..."
          prepend-inner-icon="mdi-package-variant"
          variant="outlined"
          rows="3"
          :disabled="submitting"
        />
      </v-card-text>

      <v-divider />

      <v-card-actions class="pa-6">
        <v-btn
          variant="outlined"
          size="large"
          class="flex-grow-1"
          :disabled="submitting"
          @click="close"
        >
          Отмена
        </v-btn>
        <v-btn
          color="primary"
          size="large"
          class="flex-grow-1"
          :loading="submitting"
          @click="submit"
        >
          Отправить заказ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
