# STI RUSH — доставка на Subaru

Учебный проект: лендинг службы доставки на Subaru с **Vue 3**, **Vue Router 4**, **Vuex 4** и **Vuetify 4**.

- Курс по роутеру: [Vue Router 4 for Everyone](https://vueschool.io/courses/vue-router-4-for-everyone)
- Курс по Vuex: [Vuex for Everyone](https://vueschool.io/courses/vuex-for-everyone)

## Маршруты (Vue Router)

| Путь | Имя (`name`) | Страница |
|------|----------------|----------|
| `/` | `home` | Главная |
| `/services` | `services` | Услуги |
| `/fleet` | `fleet` | Список флота |
| `/fleet/:slug` | `fleet-detail` | Карточка машины |
| `/orders` | `orders` | **Мои заказы (Vuex)** |
| `/how` | `how` | Как это работает |
| `/about` | `about` | О нас |

## Vuex (store)

Два **именованных модуля** в `src/store/`:

### `orders`

| Тип | Примеры |
|-----|---------|
| **state** | `draft`, `orders[]`, `submitting`, `error` |
| **getters** | `draftIsValid`, `ordersCount`, `recentOrders`, `lastOrder` |
| **mutations** | `SET_DRAFT_FIELD`, `ADD_ORDER`, `RESET_DRAFT`, `SET_PREFERRED_VEHICLE` |
| **actions** | `submitOrder` (async, имитация API), `updateDraftField`, `clearAllOrders` |

### `ui`

| Тип | Примеры |
|-----|---------|
| **state** | `orderDialogOpen`, `snackbar` |
| **actions** | `openOrderDialog`, `closeOrderDialog`, `showSnackbar` |

### Plugin

`persistOrders` — сохраняет список заказов в `localStorage` через `store.subscribe`.

### Как проверить в UI

1. Нажмите **Заказать**, заполните адреса → отправьте.
2. Откройте **Заказы** — появится карточка с номером `STI-48291`.
3. На странице машины (**Флот** → карточка) — «Заказать на этой машине» записывает авто в черновик через Vuex.
4. Счётчик заказов в меню **Заказы** (badge) берётся из getter `ordersCount`.

## Запуск

```bash
npm install --ignore-scripts
npm run dev
```

Если `npm run dev` падает с ошибкой про Python:

```bash
node node_modules/vite/bin/vite.js
```

Сборка: `npm run build`

## Публикация на GitHub

```bash
git add .
git commit -m "STI RUSH: Vue Router + Vuex + Vuetify"
git push
```

Репозиторий должен быть **public**.

## Структура

```
src/
├── store/
│   ├── index.js
│   ├── modules/orders.js
│   ├── modules/ui.js
│   └── plugins/persistOrders.js
├── router/index.js
├── views/OrdersView.vue
└── components/OrderDialog.vue
```

## Стек

- Vue 3
- Vue Router 4
- Vuex 4
- Vuetify 4
- Vite
