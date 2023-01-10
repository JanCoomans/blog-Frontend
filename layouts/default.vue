<template>
    <div class="text-slate-100">
        <header class="z-50 font-dmmono fixed w-full bg-primary-900 bg-opacity-95 backdrop-blur-xl md:py-0 py-6 px-7">
            <nav
                class="max-w-7xl mx-auto md:h-20 flex flex-col md:flex-row md:justify-between md:items-center overflow-hidden">
                <div class="flex justify-between items-center">
                    <NuxtLink to="/" class="font-bold text-lg after:hidden text-accent">Jan<span
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

                    <li>
                        <NuxtLink to="/" class="header-link">Projects</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="header-link">Skills</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" class="header-link">Contact</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/etc" class="header-link">Blog</NuxtLink>
                    </li>
                    <li class="btn-accent py-1 px-6">
                        <NuxtLink to="/resume" class="btn">Resume</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <div class="bg-primary-900 h-19 md:h-20"><!-- Header filler --></div>

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