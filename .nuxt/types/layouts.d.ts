import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom" | "full"
declare module "D:/ortigan/tailwind-library-nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}