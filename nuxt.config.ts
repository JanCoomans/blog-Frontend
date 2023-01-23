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
            title: 'Jan Coomans',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { name: "description", content: 'personal portfolio of Jan Coomans. Made with Nuxt.js, tailwind CSS and Strapi CMS.'}
            ],
            link: [
            ],
        }
    },
    runtimeConfig: {
        public: {
            fileserver: process.env.STRAPI_URL,
        }
    },
})