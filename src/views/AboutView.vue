<script setup>
import CtaBanner from '../components/CtaBanner.vue'
</script>

<template>
  <v-container class="py-16">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-chip color="primary" variant="outlined" class="mb-3">О НАС</v-chip>
        <h1 class="text-h3 font-weight-black title-font mb-6">STI RUSH</h1>

        <p class="text-h6 text-medium-emphasis mb-6">
          Демонстрационная служба доставки на спортивных Subaru. Проект создан для
          учебного задания с использованием Vue Router 4 и Vuetify.
        </p>

        <v-expansion-panels variant="accordion">
          <v-expansion-panel title="Миссия">
            <v-expansion-panel-text>
              Доставлять быстрее обычных курьеров — за счёт полного привода, мощных
              моторов и маршрутов без пробок (почти).
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel title="Технологии проекта">
            <v-expansion-panel-text>
              Vue 3, Vue Router 4, Vuex 4 (модули orders/ui, actions, getters,
              plugin для localStorage), Vuetify 4, Vite.
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel title="Контакты">
            <v-expansion-panel-text>
              Телефон:
              <a href="tel:+79991234567" class="text-primary">+7 (999) 123-45-67</a>.
              Москва и Московская область.
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>

  <CtaBanner />
</template>
