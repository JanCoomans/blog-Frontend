<template>
    <div class="max-w-8xl mx-auto w-full bg-dotted">
        <div class="py-24 px-7 inset-0 bg-radial-fade">
            <div class="max-w-7xl  mx-auto py-12 relative w-full">
                <div class="absolute top-0 left-0 inline-block z-0 test">
                    <svg width="76" height="76" viewBox="0 0 80 80">
                        <path class="fill-accent"
                            d="M-4 5C-4 0.0294373 0.0294373 -4 5 -4H80V4H5C4.44772 4 4 4.44772 4 5H-4ZM80 80H0H80ZM-4 80V5C-4 0.0294373 0.0294373 -4 5 -4V4C4.44772 4 4 4.44772 4 5V80H-4ZM80 0V80V0Z" />
                    </svg>
                </div>
                
                <div></div>

                <div class="absolute bottom-0 right-0 inline-block z-0 test">
                    <svg width="76" height="76" viewBox="0 0 80 80">
                        <path class="fill-accent"
                            d="M84 75C84 79.9706 79.9706 84 75 84L0 84V76L75 76C75.5523 76 76 75.5523 76 75H84ZM0 0L80 0L0 0ZM84 0L84 75C84 79.9706 79.9706 84 75 84V76C75.5523 76 76 75.5523 76 75L76 0H84ZM0 80L0 0L0 80Z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.bg-dotted {
    background-image:
        radial-gradient(white 3px, transparent 0);
    background-size: 40px 40px;
    background-position: left -25px right -25px;
}

.bg-radial-fade {
    background: radial-gradient(closest-side, rgba(var(--primary-900-rgb), 0.6), var(--primary-900) 95%);
}
</style>