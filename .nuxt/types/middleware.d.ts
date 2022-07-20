import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}