export const heroImage =
  'https://upload.wikimedia.org/wikipedia/commons/8/8f/Subaru_Impreza_22B_STi-Version.jpg'

export const heroStats = [
  { value: '15', label: 'минут среднее время', color: 'primary' },
  { value: '24/7', label: 'Без выходных', color: undefined },
  { value: '100%', label: 'AWD в любую погоду', color: 'accent' },
]

export const services = [
  {
    icon: 'mdi-food',
    color: 'orange',
    title: 'Еда и напитки',
    text: 'Из ресторанов, кафе, магазинов. Горячее останется горячим благодаря термобоксам STI.',
    items: ['Макдоналдс, KFC, Суши', 'Продукты из Пятерочки', 'Алкоголь (18+)'],
  },
  {
    icon: 'mdi-package-variant-closed',
    color: 'info',
    title: 'Посылки и грузы',
    text: 'Документы, цветы, мелкий груз до 150 кг. Полная страховка.',
    items: ['Wildberries / Ozon', 'Цветы и подарки', 'Междугородние перевозки'],
  },
  {
    icon: 'mdi-cart-outline',
    color: 'purple',
    title: 'Любой сегмент',
    text: 'Аптеки, зоомагазины, автозапчасти, электроника и даже шины.',
    items: ['Нет ограничений', 'Только скорость'],
  },
]

export const fleet = [
  {
    slug: 'wrx-sti',
    model: 'Impreza',
    name: 'WRX STI',
    power: '320 л.с.',
    note: '0-100 за 4.8с',
    desc: 'Идеален для города. Максимальная манёвренность.',
    details:
      'Седан WRX STI — флагман городской доставки: полный привод, коробка с двойным сцеплением, термобокс в багажнике.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/2011_Subaru_Impreza_WRX_STI_sedan_front_--_2011_DC.jpg/330px-2011_Subaru_Impreza_WRX_STI_sedan_front_--_2011_DC.jpg',
  },
  {
    slug: '22b-sti',
    model: 'Impreza',
    name: '22B STI',
    power: '280+ л.с.',
    note: 'Widebody легенда',
    desc: 'Эксклюзив. Широкий кузов для максимальной устойчивости.',
    details:
      'Лимитированная 22B — для VIP-заказов и срочных посылок, когда важна стабильность на высокой скорости.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Subaru_Impreza_22B_STi-Version.jpg/1280px-Subaru_Impreza_22B_STi-Version.jpg',
  },
  {
    slug: 'forester-sti',
    model: 'Forester',
    name: 'STI',
    power: '260 л.с.',
    note: 'Кроссовер',
    desc: 'Для больших заказов и плохих дорог. Клиренс + полный привод.',
    details:
      'Forester STI перевозит крупногабарит и тяжёлые заказы до 150 кг — идеален зимой и за городом.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2005_Subaru_Forester_STI_%28front%29.jpg/250px-2005_Subaru_Forester_STI_%28front%29.jpg',
  },
  {
    slug: 'legacy-gt',
    model: 'Legacy',
    name: 'GT',
    power: '300 л.с.',
    note: 'Седан',
    desc: 'Комфорт и скорость. Для дальних доставок.',
    details:
      'Legacy GT — междугородние маршруты и длинные рейсы с комфортом для хрупких грузов.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Subaru_Wagon_Racing.jpg/250px-Subaru_Wagon_Racing.jpg',
  },
]

export const steps = [
  { title: 'Оформляете заказ', text: 'Через сайт или приложение. Укажите адрес и фото груза.' },
  { title: 'Ближайший STI стартует', text: 'Система подбирает машину с ближайшим водителем.' },
  { title: 'Получаете груз', text: 'Трекинг в реальном времени + фото доставки.' },
]

export function getFleetBySlug(slug) {
  return fleet.find((car) => car.slug === slug)
}
