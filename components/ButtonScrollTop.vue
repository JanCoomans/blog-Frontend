<template>
    <div id="scrollBtn" class="fixed opacity-0 transition-opacity pr-7 bottom-5 right-0 7xlp:right-hover-content z-50">
        <div @click="scrollTop" class="w-16 h-16 rounded-full bg-secondary cursor-pointer relative">
            <svg class="stroke-accent w-full h-full">
                <circle id="btnOutline" cx="32" cy="32" r="30" stroke-width="3" fill="none" />
            </svg>
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            scrollBtn: undefined,
            scrollBtnPath: undefined,
        }
    },
    created() {
    },
    mounted() {
        this.scrollBtn = document.getElementById("scrollBtn");
        this.scrollBtnPath = document.getElementById("btnOutline");
        document.addEventListener('scroll', this.handleScroll);
    },
    computed: {
        halfWindowHeight: function () {
            return window.innerHeight / 2;
        },
    },
    methods: {
        handleScroll() {
            this.buttonFade();
            this.updateButtonProgress();
        },
        buttonFade() {
            if (window.scrollY > this.halfWindowHeight) {
                this.scrollBtn.style.opacity = "1";
            } else {
                this.scrollBtn.style.opacity = "0";
            }
        },
        updateButtonProgress() {
            let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            let pathLength = this.scrollBtnPath.getTotalLength();
            let drawlength = pathLength * scrollPercentage;

            this.scrollBtnPath.style.strokeDasharray = pathLength;
            this.scrollBtnPath.style.strokeDashoffset = pathLength;
            this.scrollBtnPath.style.strokeDashoffset = pathLength - drawlength;
        },
    },
    beforeMount() {
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<script setup>
function scrollTop() {
    window.scrollTo(0, 0);
}
</script>

<style lang="scss" scoped>
#scrollBtn circle {
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
}
</style>