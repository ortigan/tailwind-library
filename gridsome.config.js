const tailwind = require('tailwindcss')
const postcssPlugins = [
    tailwind(),
]

module.exports = {
    siteName: '',
    siteDescription: "",
    siteUrl: '',
    titleTemplate: '%s',
    icon: 'src/favicon.png',
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
    plugins: []
}