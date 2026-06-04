import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'stiDark',
    themes: {
      stiDark: {
        dark: true,
        colors: {
          background: '#09090b',
          surface: '#18181b',
          primary: '#dc2626',
          secondary: '#27272a',
          accent: '#10b981',
          error: '#ef4444',
          info: '#3b82f6',
          success: '#10b981',
          warning: '#f59e0b',
        },
      },
    },
  },
})
