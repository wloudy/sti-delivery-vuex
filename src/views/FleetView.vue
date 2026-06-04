<script setup>
import { fleet } from '../data/content'
import CtaBanner from '../components/CtaBanner.vue'
</script>

<template>
  <v-container class="py-16">
    <v-row class="mb-8" align="end">
      <v-col cols="12" md="7">
        <v-chip color="primary" variant="outlined" class="mb-3">НАШ ФЛОТ</v-chip>
        <h1 class="text-h3 font-weight-black title-font">
          Спортивные машины доставки
        </h1>
      </v-col>
      <v-col cols="12" md="5">
        <p class="text-medium-emphasis">
          Каждая машина оснащена термобоксами, GPS и трекингом. Нажмите на карточку —
          откроется динамический маршрут <code>/fleet/:slug</code>.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="car in fleet" :key="car.slug" cols="12" sm="6" lg="3">
        <RouterLink
          :to="{ name: 'fleet-detail', params: { slug: car.slug } }"
          class="text-decoration-none"
        >
          <v-card rounded="xl" hover class="fleet-card h-100">
            <v-img :src="car.img" height="200" cover />
            <v-card-text>
              <div class="d-flex justify-space-between align-start">
                <div>
                  <div class="text-primary text-caption font-weight-bold">
                    {{ car.model }}
                  </div>
                  <div class="text-h6 font-weight-bold text-white">{{ car.name }}</div>
                </div>
                <div class="text-end">
                  <div class="text-accent font-weight-bold">{{ car.power }}</div>
                  <div class="text-caption text-medium-emphasis">{{ car.note }}</div>
                </div>
              </div>
              <p class="text-medium-emphasis text-body-2 mt-3 mb-0">{{ car.desc }}</p>
              <v-btn
                variant="text"
                color="primary"
                size="small"
                class="px-0 mt-2"
                append-icon="mdi-arrow-right"
              >
                Подробнее
              </v-btn>
            </v-card-text>
          </v-card>
        </RouterLink>
      </v-col>
    </v-row>
  </v-container>

  <CtaBanner />
</template>
