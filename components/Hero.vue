<template>
    <div class="bg-gradient-to-b from-primary-900 to-primary-700 h-auto px-7 pt-7 xs:pt-12 sm:pt-17 pb-24 xs:pb-28 lg:pb-35">
        <div class="max-w-7xl mx-auto relative">
            <div class="absolute top-0 right-0 inline-block z-0  opacity-80 md:opacity-100">
                <HeroDecorationTR></HeroDecorationTR>
            </div>
            <div class="absolute bottom-0 left-0 inline-block z-0 opacity-80 md:opacity-100">
                <HeroDecorationBL></HeroDecorationBL>
            </div>
            <div class="sm:px-19 pt-16 pb-18 xs:py-14 relative">
                <div
                    class="flex items-center gap-4 text-accent text-sm md:text-base font-dmmono mb-5 lg:mb-7 opacity-90">
                    <h4 class="w-min xs:w-auto">I'm Jan Coomans</h4>
                    <div class="bg-slate-100 h-px w-9"></div>
                    <h4 class="w-min xs:w-auto">Available for work</h4>
                </div>
                <h1 id="heroHeadline" class="font-dmsans font-bold mb-7 xs:mb-8 md:mb-12">
                    <p>Front-end <br> web developer</p>
                </h1>
                <div class="max-w-5xl w-full md:mx-auto text-justify md:text-start">
                    <h3 id="heroDescription"
                        class="text-gray-300 opacity-80 lg:text-lg font-dmmono text-base font-light md:font:normal leading-6 mb-12 sm:mb-14">
                        I'm a new Front-end web developer.
                        Capable of delivering efficient and responsive websites according to design.
                        Helpful in UI/UX and eager to learn.
                    </h3>
                </div>
                <div
                    class="py-2 sm:py-3 lg:py-4 w-36 sm:w-40 lg:w-48 mx-auto text-center btn-accent font-dmmono font-medium lg:text-lg">
                    <h3>My work</h3>
                </div>
                <div
                    class="absolute bottom-0 right-0 z-0 md:pr-inherit flex md:flex-col gap-5 md:gap-4 lg:gap-5 items-center">
                    <div class="hidden md:block w-3px h-20 lg:h-24 bg-accent mx-auto"></div>
                    <div class="h-7 w-7 cursor-pointer hover:fill-accent fill-slate-100">
                        <svg class="h-full w-full flex items-center" viewBox="0 0 28 28">
                            <path class="fill-inherit"
                                d="M19.88 9.24055H8.12004C7.67204 9.24055 7.28004 9.60454 7.28004 10.0805V10.3605L13.636 13.5244C13.86 13.6364 14.14 13.6364 14.392 13.5244L20.72 10.3605V10.0805C20.72 9.60454 20.356 9.24055 19.88 9.24055ZM15.372 15.5404C14.952 15.7644 14.476 15.8764 14 15.8764C13.524 15.8764 13.048 15.7644 12.628 15.5404L7.28004 12.8804V17.9203C7.28004 18.3963 7.67204 18.7603 8.12004 18.7603H19.88C20.356 18.7603 20.72 18.3963 20.72 17.9203V12.8804L15.372 15.5404ZM14 15.8484C13.524 15.8484 13.048 15.7364 12.628 15.5124L7.28004 12.8525V17.8923C7.28004 18.3683 7.67204 18.7323 8.12004 18.7323H19.88C20.356 18.7323 20.72 18.3683 20.72 17.8923V12.8525L15.372 15.5124C14.952 15.7364 14.476 15.8484 14 15.8484ZM19.88 9.24055H8.12004C7.67204 9.24055 7.28004 9.60454 7.28004 10.0805V10.3605L13.636 13.5244C13.86 13.6364 14.14 13.6364 14.392 13.5244L20.72 10.3605V10.0805C20.72 9.60454 20.356 9.24055 19.88 9.24055ZM13.972 0.000826724C6.24406 0.0568251 -0.0279064 6.32864 9.33858e-05 14.0004C9.33858e-05 21.7282 6.30005 28 14.056 28C21.812 27.972 28.0279 21.7282 27.9999 13.9444C27.9719 6.24465 21.616 -0.0831708 13.972 0.000826724ZM22.9599 17.9203C22.9599 19.6282 21.5879 21.0002 19.88 21.0002H8.12004C6.41205 21.0002 5.04006 19.6282 5.04006 17.9203V10.0805C5.04006 8.37258 6.41205 7.00062 8.12004 7.00062H19.88C21.5879 7.00062 22.9599 8.37258 22.9599 10.0805V17.9203ZM14 15.8484C13.524 15.8484 13.048 15.7364 12.628 15.5124L7.28004 12.8525V17.8923C7.28004 18.3683 7.67204 18.7323 8.12004 18.7323H19.88C20.356 18.7323 20.72 18.3683 20.72 17.8923V12.8525L15.372 15.5124C14.952 15.7364 14.476 15.8484 14 15.8484ZM19.88 9.24055H8.12004C7.67204 9.24055 7.28004 9.60454 7.28004 10.0805V10.3605L13.636 13.5244C13.86 13.6364 14.14 13.6364 14.392 13.5244L20.72 10.3605V10.0805C20.72 9.60454 20.356 9.24055 19.88 9.24055Z" />
                        </svg>
                    </div>
                    <div class="h-7 w-7 cursor-pointer hover:fill-accent fill-slate-100">
                        <svg class="h-full w-full flex items-center" viewBox="0 0 28 28">
                            <path class="fill-inherit"
                                d="M25.9273 0H2.06719C0.924219 0 0 0.902344 0 2.01797V25.9766C0 27.0922 0.924219 28 2.06719 28H25.9273C27.0703 28 28 27.0922 28 25.982V2.01797C28 0.902344 27.0703 0 25.9273 0ZM8.30703 23.8602H4.15078V10.4945H8.30703V23.8602ZM6.22891 8.67344C4.89453 8.67344 3.81719 7.59609 3.81719 6.26719C3.81719 4.93828 4.89453 3.86094 6.22891 3.86094C7.55781 3.86094 8.63516 4.93828 8.63516 6.26719C8.63516 7.59062 7.55781 8.67344 6.22891 8.67344ZM23.8602 23.8602H19.7094V17.3633C19.7094 15.8156 19.682 13.8195 17.5492 13.8195C15.3891 13.8195 15.0609 15.5094 15.0609 17.2539V23.8602H10.9156V10.4945H14.8969V12.3211H14.9516C15.5039 11.2711 16.8602 10.1609 18.8781 10.1609C23.0836 10.1609 23.8602 12.9281 23.8602 16.5266V23.8602Z" />
                        </svg>
                    </div>
                    <div class="h-7 w-7 cursor-pointer hover:fill-accent fill-slate-100">
                        <svg class="h-full w-full flex items-center" viewBox="0 0 28 28">
                            <path class="fill-inherit"
                                d="M27.7211 8.40004C27.7211 8.40004 27.4477 6.46957 26.6055 5.62191C25.5391 4.50629 24.3469 4.50082 23.8 4.43519C19.8844 4.15082 14.0055 4.15082 14.0055 4.15082H13.9945C13.9945 4.15082 8.11562 4.15082 4.2 4.43519C3.65313 4.50082 2.46094 4.50629 1.39453 5.62191C0.552344 6.46957 0.284375 8.40004 0.284375 8.40004C0.284375 8.40004 0 10.6696 0 12.9336V15.0555C0 17.3196 0.278906 19.5891 0.278906 19.5891C0.278906 19.5891 0.552344 21.5196 1.38906 22.3672C2.45547 23.4828 3.85547 23.4446 4.47891 23.5649C6.72109 23.7782 14 23.8438 14 23.8438C14 23.8438 19.8844 23.8328 23.8 23.5539C24.3469 23.4883 25.5391 23.4828 26.6055 22.3672C27.4477 21.5196 27.7211 19.5891 27.7211 19.5891C27.7211 19.5891 28 17.325 28 15.0555V12.9336C28 10.6696 27.7211 8.40004 27.7211 8.40004ZM11.107 17.6313V9.76175L18.6703 13.7102L11.107 17.6313Z" />
                        </svg>
                    </div>
                    <div class="h-7 w-7 cursor-pointer hover:fill-accent fill-slate-100">
                        <svg class="h-full w-full flex items-center" viewBox="0 0 28 28">
                            <path class="fill-inherit"
                                d="M14.0004 0.583313C10.6768 0.585037 7.46225 1.76218 4.93145 3.90426C2.40064 6.04633 0.718656 9.01366 0.186237 12.2756C-0.346182 15.5376 0.305683 18.8816 2.02528 21.7095C3.74489 24.5375 6.42008 26.665 9.57252 27.7118C10.268 27.8409 10.53 27.4098 10.53 27.0433C10.53 26.6768 10.5161 25.6142 10.5114 24.4524C6.61673 25.2938 5.79375 22.8089 5.79375 22.8089C5.15855 21.1953 4.24051 20.7712 4.24051 20.7712C2.9701 19.9091 4.33557 19.9252 4.33557 19.9252C5.74275 20.0243 6.48228 21.3613 6.48228 21.3613C7.72951 23.4889 9.75798 22.8734 10.5555 22.5138C10.6806 21.6125 11.0446 20.9994 11.4457 20.6513C8.33457 20.301 5.06581 19.1069 5.06581 13.773C5.04653 12.3896 5.56279 11.0519 6.50778 10.0364C6.36405 9.68607 5.88416 8.27075 6.64455 6.34832C6.64455 6.34832 7.81992 5.97489 10.4952 7.77516C12.7899 7.15121 15.2109 7.15121 17.5056 7.77516C20.1786 5.97489 21.3516 6.34832 21.3516 6.34832C22.1143 8.26614 21.6345 9.68146 21.4907 10.0364C22.4387 11.052 22.956 12.3921 22.935 13.7776C22.935 19.1231 19.6593 20.301 16.5435 20.6444C17.0443 21.0778 17.4917 21.9237 17.4917 23.2238C17.4917 25.0863 17.4755 26.5846 17.4755 27.0433C17.4755 27.4144 17.7282 27.8478 18.4376 27.7118C21.5904 26.6649 24.2658 24.537 25.9854 21.7085C27.705 18.8801 28.3565 15.5357 27.8235 12.2734C27.2904 9.01108 25.6076 6.04373 23.076 3.90202C20.5443 1.76031 17.329 0.583944 14.005 0.583313H14.0004Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>
#heroHeadline {
    font-size: clamp(2rem, 6.5vw + 2rem, 5rem);
    line-height: calc(6vw + 2.5rem);
}

@media only screen and (min-width: 576px) {
    #heroHeadline {
        line-height: 5rem;
    }
}

@media only screen and (min-width: 640px) {
    #heroHeadline {
        font-size: clamp(3rem, 7vw + 1rem, 5rem);
        line-height: 5rem;
    }
}

@media only screen and (min-width: 768px) {
    #heroDescription {
        width: calc(50% + 80px);
    }

    #heroHeadline {
        font-size: calc(7.8vw + 1rem);
        line-height: 6.5rem;
    }
}

@media only screen and (min-width: 1024px) {
    #heroDescription {
        width: calc(50% + 96px); // Add 50% of the button width. 
    }

    #heroHeadline {
        font-size: 7rem;
        line-height: 9.5rem;
    }
}
</style>