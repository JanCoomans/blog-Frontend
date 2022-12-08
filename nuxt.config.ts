// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/strapi'],
    strapi: {
        url: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
        prefix: '/api',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt'
    },
    app: {
        head: {
            title: 'JanCoomans app',
            meta: [
                { name: "description", content: 'personal blog of Jan Coomans. Made with Nuxt.js and Strapi CMS.'}
            ],
            script: [
                {
                    src: "https://kit.fontawesome.com/71017b4565.js"
                }
            ],
            link: [
                { rel: 'stylesheet', href: '' }
            ]
        }
    },
    runtimeConfig: {
        //currencyKey: process.env.CURRENCY_API_KEY,
        public: {}
    }
})