import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom" | "full"
declare module "G:/Ortigan/tailwind component nuxt3/tailwind-library/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}