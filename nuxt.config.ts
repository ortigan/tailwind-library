import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app:{
        head:{
            "script":[
                {
                    src:'https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/prism.min.js',
                    "data-manual":true
                },
                {
                    src:'https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js',
                    "data-manual":true
                },
            ], 
            "link":[
                {
                    href:'https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/themes/prism-tomorrow.min.css',
                    crossorigin:"anonymous", 
                    referrerpolicy:"no-referrer",
                    rel:"stylesheet"
                },
            ]
        }
    },
    build:{
        postcss:{
            postcssOptions:{
                plugins:{
                    tailwindcss:{},
                    autoprefixer:{}
                }
            }
        }
    },
    css:[
        "/assets/css/tailwind.css"
    ],
    buildModules: ['@pinia/nuxt'],
    plugins:[
        '~/plugins/patternCss.client.js',
        '~/plugins/utils.client.js',
        '~/plugins/mitt.client.js',
        
    ],
})
