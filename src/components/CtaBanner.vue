<script setup>
import { useOrder } from '../composables/useOrder'

const { openOrder } = useOrder()
</script>

<template>
  <v-sheet class="py-16 cta-sheet" rounded="0">
    <v-container class="text-center">
      <h2 class="text-h3 text-md-h2 font-weight-black title-font mb-8">
        Готовы к максимальной скорости?
      </h2>
      <v-btn
        color="white"
        size="x-large"
        class="text-black"
        append-icon="mdi-arrow-right"
        @click="openOrder"
      >
        Запустить доставку
      </v-btn>
      <p class="text-medium-emphasis mt-6 title-font">
        Среднее время подачи — 7 минут
      </p>
    </v-container>
  </v-sheet>
</template>
