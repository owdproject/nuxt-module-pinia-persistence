import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/theme-nova',
  modules: ['@owdproject/nuxt-persistence-pinia'],
  apps: ['@owdproject/app-todo'],
  systemBar: { enabled: true, startButton: true },
})
