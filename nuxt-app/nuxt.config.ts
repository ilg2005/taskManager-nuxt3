import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    css: ['@/assets/theme.css'],
    build: {
        transpile: ['moment']
    },
    router: {
        options: {
            linkActiveClass: 'active',
            linkExactActiveClass: 'active'
        }
    }
})
