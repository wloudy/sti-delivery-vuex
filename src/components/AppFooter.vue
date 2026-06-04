<template>
  <v-footer color="black" class="py-12">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <RouterLink :to="{ name: 'home' }" class="text-decoration-none text-white">
            <div class="d-flex align-center ga-3 mb-4">
              <v-avatar color="primary" size="36">
                <span class="font-weight-bold text-caption">STI</span>
              </v-avatar>
              <span class="text-h5 font-weight-black title-font">STI RUSH</span>
            </div>
          </RouterLink>
          <p class="text-medium-emphasis">Доставка на Subaru STI.</p>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <div class="text-primary text-caption font-weight-bold mb-3">СЕРВИС</div>
          <v-list density="compact" bg-color="transparent" class="pa-0">
            <v-list-item :to="{ name: 'services' }" title="Услуги" />
            <v-list-item :to="{ name: 'fleet' }" title="Флот" />
            <v-list-item :to="{ name: 'orders' }" title="Мои заказы" />
            <v-list-item :to="{ name: 'how' }" title="Как заказать" />
          </v-list>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <div class="text-primary text-caption font-weight-bold mb-3">КОМПАНИЯ</div>
          <v-list density="compact" bg-color="transparent" class="pa-0">
            <v-list-item :to="{ name: 'about' }" title="О нас" />
            <v-list-item title="Водители" disabled />
            <v-list-item title="Вакансии" disabled />
          </v-list>
        </v-col>

        <v-col cols="12" md="3">
          <div class="text-primary text-caption font-weight-bold mb-3">КОНТАКТЫ</div>
          <v-btn
            href="tel:+79991234567"
            variant="text"
            class="text-h6 px-0 title-font"
          >
            +7 (999) 123-45-67
          </v-btn>
          <p class="text-medium-emphasis text-body-2">Москва и МО</p>
          <div class="d-flex ga-2 mt-4">
            <v-btn icon="mdi-telegram" variant="text" color="primary" />
            <v-btn icon="mdi-vk" variant="text" color="primary" />
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-8" />

      <p class="text-center text-caption text-medium-emphasis">
        © 2026 STI RUSH. Демонстрационный сайт на Vue Router и Vuetify.
      </p>
    </v-container>
  </v-footer>
</template>
