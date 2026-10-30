import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/nuxt-theme-nova',
  modules: ['@owdproject/nuxt-module-pinia-persistence'],
  apps: ['@owdproject/nuxt-app-todo'],
  systemBar: { enabled: true, startButton: true },
})
