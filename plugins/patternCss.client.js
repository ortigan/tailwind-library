import PatternCSS from 'pattern.css/dist/pattern.css'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PatternCSS)
})