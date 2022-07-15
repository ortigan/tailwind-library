import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom" | "full"
declare module "/Users/paragchirde/Desktop/Ortigan/Ortigan Internal Gigs/Tailwindcss Component Library/component-library/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}