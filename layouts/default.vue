<template>
    <div class="text-slate-100">
        <ButtonScrollTop></ButtonScrollTop>

        <header tabindex="1"
            class="z-40 font-dmmono fixed w-full bg-primary-900 bg-opacity-95 backdrop-blur-xl md:py-0 py-6 px-7">
            <nav
                class="max-w-7xl mx-auto md:h-20 flex flex-col md:flex-row md:justify-between md:items-center overflow-hidden">
                <div class="flex justify-between items-center">
                    <NuxtLink to="/" class="font-bold text-lg md:text-xl lg:text-2xl after:hidden text-accent">Jan<span
                            class="font-normal text-sm opacity-80">Coomans</span></NuxtLink>
                    <div class="cursor-pointer md:hidden" @click="isNavbarActive = !isNavbarActive">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <ul :class="[isNavbarActive ? 'h-80 pt-12' : 'h-0']"
                    class="md:h-auto flex md:flex-row flex-col items-center justify-between md:gap-8 lg:gap-12 font-normal text-sm lg:text-base md:pt-0 transition-all duration-300">

                    <li v-for="link in header.attributes.navigation" :key="link.id"
                        :class="{ 'btn-accent py-1 px-6': link.button }">
                        <NuxtLink :to="link.page.data.attributes.uri_path"
                            :class="[link.button ? 'btn' : 'header-link']">{{ link.page.data.attributes.title }}
                        </NuxtLink>
                    </li>

                    <li v-for="link in header.attributes.custom_link" :key="link.id"
                        :class="{ 'btn-accent py-1 px-6': link.button }">
                        <NuxtLink :to="link.URL" target="_blank" :class="[link.button ? 'btn' : 'header-link']">{{
                            link.tag
                        }}</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <div class="bg-primary-900 h-19 md:h-20"><!-- Header filler --></div>

        <!-- Output page content -->
        <slot></slot>

        <!-- Footer Wave -->
        <div class="relative">
            <svg class="absolute -translate-y-full w-full sm:h-7 md:h-9 h-6" preserveAspectRatio="none"
                viewBox="0 0 1920 35">
                <path class="fill-accent" d="M1405.8,15.5c-92.8,3.1-182.7,8.8-275.2,12.2c-131.8,4.9-269.1,5.2-400.7,0.1C602,23,469.3,11,342.9,4.9
		        C230.9-0.5,108.5-2.7,0,4.1v31h1920v-11C1756.1,12.7,1578.2,9.8,1405.8,15.5L1405.8,15.5z" />
                <path class="fill-primary-900" d="M1405.8,18.5c-92.8,3.1-182.7,8.8-275.2,12.2c-131.8,4.9-269.1,5.2-400.7,0.1C602,26,469.3,14,342.9,7.9
		        C230.9,2.5,108.5,0.3,0,7.1v28h1920v-8C1756.1,15.7,1578.2,12.8,1405.8,18.5L1405.8,18.5z" />
            </svg>
        </div>
        <footer>
            <div class="w-full p-7 text-center bg-primary-900 font-dmmono text-xs">
                <h5>{{ footer.attributes.text }}</h5>
            </div>
        </footer>
    </div>
</template>


<script setup>
    const { find } = useStrapi()
    const { data: header } = await find('header?populate=deep')
    const { data: footer } = await find('footer')
    const isNavbarActive = ref(0);
</script>


<style scoped>
.router-link-exact-active {
    position: relative;
}
</style>