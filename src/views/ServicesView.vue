<script setup>
import { services } from '../data/content'
import CtaBanner from '../components/CtaBanner.vue'
</script>

<template>
  <v-sheet color="secondary" class="py-16">
    <v-container>
      <div class="text-center mb-12">
        <v-chip color="primary" variant="outlined" class="mb-3">ЧТО ДОСТАВЛЯЕМ</v-chip>
        <h1 class="text-h3 font-weight-black title-font">
          Любой груз • Любая точка
        </h1>
        <p class="text-medium-emphasis mt-4 max-w-2xl mx-auto">
          Маршрут <code>/services</code> — отдельная страница Vue Router.
        </p>
      </div>

      <v-row>
        <v-col v-for="service in services" :key="service.title" cols="12" md="4">
          <v-card class="h-100" rounded="xl" hover>
            <v-card-item>
              <template #prepend>
                <v-avatar :color="service.color" variant="tonal" size="56">
                  <v-icon :icon="service.icon" size="28" />
                </v-avatar>
              </template>
              <v-card-title class="text-h5">{{ service.title }}</v-card-title>
            </v-card-item>
            <v-card-text class="text-medium-emphasis">
              {{ service.text }}
            </v-card-text>
            <v-list density="compact" class="pb-4">
              <v-list-item
                v-for="item in service.items"
                :key="item"
                :title="item"
                prepend-icon="mdi-check-circle"
                class="text-accent"
              />
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

  <CtaBanner />
</template>
