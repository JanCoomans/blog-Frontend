<template>
    <main>
        <Hero></Hero>

        <!-- Wave seperator -->
        <div class="relative">
            <svg class="absolute -translate-y-full w-full sm:h-12 lg:h-18 min-h-9 fill-primary-900"
                preserveAspectRatio="none" viewBox="0 0 1920 72">
                <path class="fill-inherit"
                    d="M1405.78 35.1137C1312.98 42.1655 1223.12 54.8051 1130.58 62.4713C998.752 73.3986 861.472 74.0587 729.856 62.7261C601.952 51.74 469.328 24.9445 342.944 11.331C230.864 -0.746548 108.496 -5.72006 -2.86102e-05 9.37039V72L1920 72V54.1254C1756.05 28.7323 1578.22 22.1574 1405.78 35.1137V35.1137Z" />
            </svg>
        </div>

        <div class="bg-primary-900 flex flex-col gap-30">
            <div id="projects" class="anchor"><!-- Filler --></div>
            <Projects></Projects>
            <Skills id="skills" class="anchor"></Skills>
            <div class="mb-8"><!-- Filler --></div>
        </div>

        <!-- Contact waves seperator -->
        <div id="contact" class="anchor relative">
            <svg class="absolute -translate-y-full w-full sm:h-18 lg:h-30 min-h-12 fill-secondary"
                preserveAspectRatio="none" viewBox="0 0 1920 120" fill="none">
                <g>
                    <path opacity="0.25"
                        d="M1920 120V73.71C1843.54 51.51 1754.26 41.54 1667.2 45.71C1554.62 51.08 1449.07 79.02 1336.32 83.21C1218.18 87.57 1100.26 66.33 987.2 47.95C876.368 29.95 765.92 23.07 652.16 34.87C594.32 40.87 540.4 52.71 485.04 64.21C336.816 95 139.2 134.29 -2.86102e-05 67.53V120L1920 120Z" />
                    <path opacity="0.5"
                        d="M1920 120V104.19C1899.2 83.08 1875.78 63.14 1843.7 47.95C1760.94 8.73 1656 9 1560.67 28.42C1510.83 38.57 1464.53 54.49 1417.2 68.22C1351.73 87.22 1281.63 114.22 1207.87 117.89C1149.86 120.74 1094.43 108.47 1050.11 86.33C999.28 60.94 950.4 24.33 884.304 13.33C819.6 2.54 754.144 20.02 693.696 37.61C633.248 55.2 573.44 76.61 506.624 80.66C411.056 86.51 325.376 57.78 236.384 41.82C188.064 33.16 141.984 35.65 97.04 49.32C61.152 60.21 20.24 76.25 -2.86102e-05 98.56V120L1920 120Z" />
                    <path
                        d="M1920 120V114.37C1680.11 61 1417.46 48.68 1158.67 77.43C1089.87 85.07 1023.9 97.55 954.496 103.89C860.096 112.52 774.528 91.65 689.6 68.49C595.312 42.78 502.4 24.76 398.08 30C259.632 37 122.144 75.71 -2.86102e-05 114.81V120L1920 120Z" />
                </g>
            </svg>
        </div>

        <Contact></Contact>
    </main>

</template>

<script>
// Highlight header links when target comes in viewport
export default {
    data: function () {
        return {
            anchors: [],
            anchorLinks: [],
        }
    },
    created() {
    },
    mounted() {
        this.anchors = Array.from(document.getElementsByClassName("anchor"));
        this.anchorLinks = Array.from(document.getElementsByClassName("header-link"));

    },
    computed: {
        halfWindowHeight: function() {
            return window.innerHeight/2;
        },
    },
    methods: {
        handleScroll() {
            let focusSection;
            // Get closest element to bottom of viewport
            this.anchors.forEach((section) => {
                if (section.offsetTop < (window.scrollY + this.halfWindowHeight)) {
                    focusSection = section;
                }
            });
            // Remove highlight
            this.anchorLinks.forEach(link => {
                link.classList.remove('active-link');
            });
            // Add highlight
            if (typeof focusSection !== 'undefined') {
                this.anchorLinks.forEach(link => {
                    if (link.getAttribute("href") === `/#${focusSection.getAttribute('id')}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<script setup>
    //const { find } = useStrapi()
    //const { data } = await find('welcome-message')
</script>

<style scoped>

</style>