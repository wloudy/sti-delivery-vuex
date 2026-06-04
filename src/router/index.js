import { createRouter, createWebHistory } from 'vue-router'
import { getFleetBySlug } from '../data/content'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
          meta: { title: 'Главная' },
        },
        {
          path: 'services',
          name: 'services',
          component: () => import('../views/ServicesView.vue'),
          meta: { title: 'Услуги' },
        },
        {
          path: 'fleet',
          name: 'fleet',
          component: () => import('../views/FleetView.vue'),
          meta: { title: 'Флот' },
        },
        {
          path: 'fleet/:slug',
          name: 'fleet-detail',
          component: () => import('../views/FleetDetailView.vue'),
          props: true,
          meta: { title: 'Автомобиль' },
          beforeEnter(to) {
            if (!getFleetBySlug(to.params.slug)) {
              return { name: 'not-found' }
            }
          },
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('../views/OrdersView.vue'),
          meta: { title: 'Мои заказы' },
        },
        {
          path: 'how',
          name: 'how',
          component: () => import('../views/HowView.vue'),
          meta: { title: 'Как это работает' },
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
          meta: { title: 'О нас' },
        },
        {
          path: ':pathMatch(.*)*',
          name: 'not-found',
          component: () => import('../views/NotFoundView.vue'),
          meta: { title: 'Страница не найдена' },
        },
      ],
    },
  ],
})

router.beforeEach((to) => {
  let title = to.meta.title || 'STI RUSH'
  if (to.name === 'fleet-detail') {
    const car = getFleetBySlug(to.params.slug)
    if (car) title = `${car.model} ${car.name}`
  }
  document.title = title === 'STI RUSH' ? title : `${title} • STI RUSH`
})

export default router
