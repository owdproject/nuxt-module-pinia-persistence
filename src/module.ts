import { addPlugin, createResolver } from '@nuxt/kit'
import type { NuxtModule } from '@nuxt/schema'
import { defineDesktopModule } from 'nuxt-desktop/kit'

const module: NuxtModule<any> = defineDesktopModule({
  meta: {
    name: 'desktop-module-pinia-persistence',
    configKey: 'piniaPersistence',
  },
  setup() {
    const { resolve } = createResolver(import.meta.url)

    addPlugin({
      src: resolve('./runtime/plugin'),
      mode: 'client',
    })
  },
})

export default module
