<script setup>
import { computed } from 'vue'
import { getFleetBySlug } from '../data/content'
import { useOrder } from '../composables/useOrder'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

const { openOrder } = useOrder()
const car = computed(() => getFleetBySlug(props.slug))
</script>

<template>
  <v-container v-if="car" class="py-16">
    <v-btn
      :to="{ name: 'fleet' }"
      variant="text"
      prepend-icon="mdi-arrow-left"
      class="mb-6"
    >
      Назад к флоту
    </v-btn>

    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="car.img" rounded="xl" cover max-height="400" />
      </v-col>
      <v-col cols="12" md="6">
        <v-chip color="primary" variant="outlined" class="mb-3">
          {{ car.model }}
        </v-chip>
        <h1 class="text-h3 font-weight-black title-font mb-4">
          {{ car.name }}
        </h1>
        <p class="text-h6 text-accent font-weight-bold mb-2">{{ car.power }}</p>
        <p class="text-medium-emphasis mb-2">{{ car.note }}</p>
        <p class="text-body-1 mb-6">{{ car.details }}</p>

        <v-alert type="info" variant="tonal" class="mb-6">
          Параметр маршрута: <strong>{{ slug }}</strong>
          (именованный маршрут <code>fleet-detail</code>, props: true)
        </v-alert>

        <v-btn
          color="primary"
          size="large"
          prepend-icon="mdi-send"
          @click="openOrder(slug)"
        >
          Заказать на этой машине
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
