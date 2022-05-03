require('./Main.css')
import Vue from 'vue'
import Vuesax from 'vuesax'
import PatternCSS from 'pattern.css/dist/pattern.css'

import 'vuesax/dist/vuesax.css'
import DefaultLayout from '~/layouts/Default.vue'
import ComponentPad from './components/Utils/ComponentPad.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Vuesax, {
    // options here
  })
  Vue.use(PatternCSS)
   Vue.component("ComponentPad",ComponentPad)
   
   

}
