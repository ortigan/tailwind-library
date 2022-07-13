import Vue from 'vue'
import PatternCSS from 'pattern.css/dist/pattern.css'
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
import ComponentPad from '~/components/Utils/ComponentPad.vue'
import CodeButton from '~/components/Utils/CodeButton.vue'
import HideCodeButton from '~/components/Utils/HideCodeButton.vue'
import CopyButton from '~/components/Utils/CopyButton.vue'

Vue.component('ShowCodeButton', CodeButton)
Vue.component('HideCodeButton', HideCodeButton)
Vue.component('CopyButton', CopyButton)
Vue.use(PatternCSS)
   Vue.component("ComponentPad",ComponentPad)
   
   Vue.use(Prism)