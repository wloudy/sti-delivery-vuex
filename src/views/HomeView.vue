<script setup>
import { heroImage, heroStats } from '../data/content'
import { useOrder } from '../composables/useOrder'
import CtaBanner from '../components/CtaBanner.vue'

const { openOrder } = useOrder()
</script>

<template>
  <v-parallax :src="heroImage" height="100vh" class="hero-parallax">
    <div class="hero-overlay d-flex align-center fill-height">
      <v-container class="py-16">
        <v-row>
          <v-col cols="12" md="8" lg="7">
            <v-chip
              color="primary"
              variant="flat"
              prepend-icon="mdi-circle"
              class="mb-6 text-uppercase"
              size="small"
            >
              Доставка быстрее, чем WRX STI
            </v-chip>

            <h1 class="text-h2 text-md-h1 font-weight-black title-font mb-6">
              ДОСТАВКА НА
              <span class="text-primary">SUBARU</span>
            </h1>

            <p class="text-h6 text-medium-emphasis mb-8">
              Еда, посылки, продукты, документы и многое другое. Наши STI, WRX и
              Forester доставят молниеносно.
            </p>

            <div class="d-flex flex-wrap ga-4 mb-12">
              <v-btn
                color="primary"
                size="x-large"
                prepend-icon="mdi-send"
                @click="openOrder"
              >
                Оформить заказ
              </v-btn>
              <v-btn
                :to="{ name: 'fleet' }"
                size="x-large"
                variant="outlined"
              >
                Наш флот
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </div>

            <v-row dense>
              <v-col
                v-for="stat in heroStats"
                :key="stat.label"
                cols="12"
                sm="4"
              >
                <div
                  :class="stat.color ? `text-${stat.color}` : ''"
                  class="text-h4 font-weight-bold title-font"
                >
                  {{ stat.value }}
                </div>
                <div class="text-medium-emphasis text-body-2">
                  {{ stat.label }}
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-parallax>

  <v-container class="py-12">
    <v-row>
      <v-col cols="12" md="4">
        <v-card rounded="xl" variant="tonal" color="primary" class="h-100 pa-6">
          <v-icon icon="mdi-food" size="40" class="mb-4" />
          <h3 class="text-h6 font-weight-bold mb-2">Услуги</h3>
          <p class="text-medium-emphasis text-body-2 mb-4">
            Еда, посылки, продукты — любой сегмент доставки.
          </p>
          <v-btn :to="{ name: 'services' }" variant="text" append-icon="mdi-arrow-right">
            Подробнее
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card rounded="xl" variant="tonal" color="secondary" class="h-100 pa-6">
          <v-icon icon="mdi-car-sports" size="40" class="mb-4" />
          <h3 class="text-h6 font-weight-bold mb-2">Флот STI</h3>
          <p class="text-medium-emphasis text-body-2 mb-4">
            WRX STI, 22B, Forester STI и Legacy GT.
          </p>
          <v-btn :to="{ name: 'fleet' }" variant="text" append-icon="mdi-arrow-right">
            Смотреть флот
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card rounded="xl" variant="tonal" class="h-100 pa-6">
          <v-icon icon="mdi-lightning-bolt" size="40" class="mb-4" />
          <h3 class="text-h6 font-weight-bold mb-2">За 3 клика</h3>
          <p class="text-medium-emphasis text-body-2 mb-4">
            Оформление, подача машины, трекинг в реальном времени.
          </p>
          <v-btn :to="{ name: 'how' }" variant="text" append-icon="mdi-arrow-right">
            Как это работает
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <CtaBanner />
</template>
