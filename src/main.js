require('./Main.css')

import Vue from 'vue'
import Vuex from 'vuex'
import Vuesax from 'vuesax'
import PatternCSS from 'pattern.css/dist/pattern.css'

import 'vuesax/dist/vuesax.css'
import DefaultLayout from '~/layouts/Default.vue'
import ComponentPad from './components/Utils/ComponentPad.vue'
import CodeButton from './components/Utils/CodeButton.vue'
import HideCodeButton from './components/Utils/HideCodeButton.vue'
import CopyButton from './components/Utils/CopyButton.vue'


import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; 
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-liquid'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-scss'

export default function (Vue, { router, head, isClient, appOptions  }) {
  Vue.use(Vuex)
  appOptions.store = new Vuex.Store({
    state: {
      theme: 'dark'
    },
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('ShowCodeButton', CodeButton)
  Vue.component('HideCodeButton', HideCodeButton)
  Vue.component('CopyButton', CopyButton)
  Vue.use(Vuesax, {
    // options here
  })
  Vue.use(PatternCSS)
   Vue.component("ComponentPad",ComponentPad)
   
   Vue.use(Prism)
   

}
