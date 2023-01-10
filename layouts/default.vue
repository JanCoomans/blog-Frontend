<template>
    <div class="text-slate-100">
        <header class="z-50 font-dmmono fixed w-full bg-primary-900 bg-opacity-95 backdrop-blur-xl md:py-0 py-6 px-7">
            <nav class="max-w-7xl mx-auto md:h-20 flex flex-col md:flex-row md:justify-between md:items-center overflow-hidden">
                <div class="flex justify-between items-center">
                    <NuxtLink to="/" class="font-bold text-lg after:hidden text-accent">Jan<span class="font-normal text-sm opacity-80">Coomans</span></NuxtLink>
                    <div class="cursor-pointer md:hidden" @click="isNavbarActive = !isNavbarActive">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                          </svg>
                    </div>
                </div>
                <ul :class="[isNavbarActive ? 'h-72 pt-8' : 'h-0']"
                    class="md:h-auto flex md:flex-row flex-col items-center justify-between md:gap-8 lg:gap-12 font-normal text-sm lg:text-base md:pt-0 transition-all duration-300">

                    <li><NuxtLink to="/" class="header-link">Projects</NuxtLink></li>
                    <li><NuxtLink to="/about" class="header-link">Skills</NuxtLink></li>
                    <li><NuxtLink to="/contact" class="header-link">Contact</NuxtLink></li>
                    <li><NuxtLink to="/etc" class="header-link">Blog</NuxtLink></li>
                    <li class="btn-accent py-1 px-6"><NuxtLink to="/resume" class="btn">Resume</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- Output page content -->
        <slot></slot>
    </div>
</template>

<script setup>
const isNavbarActive = ref(0);

</script>

<style scoped>
    .router-link-exact-active {
        position: relative;
    }
</style>