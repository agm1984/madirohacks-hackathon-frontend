<template>
    <div
        :class="['fixed h-16 bg-brand-100 w-full z-10', {
            'h-screen': isMenuOpen,
            'border-b': !isMenuOpen
        }]"
    >
        <div class="h-16 flex justify-between items-center px-4">
            <button @click="openNav">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
                    <path d="M 0.889 0 C 0.653 0 0.427 0.094 0.26 0.26 C 0.094 0.427 0 0.653 0 0.889 C 0 1.125 0.094 1.351 0.26 1.517 C 0.427 1.684 0.653 1.778 0.889 1.778 L 22.222 1.778 C 22.458 1.778 22.684 1.684 22.851 1.517 C 23.017 1.351 23.111 1.125 23.111 0.889 C 23.111 0.653 23.017 0.427 22.851 0.26 C 22.684 0.094 22.458 0 22.222 0 Z M 0 8 C 0 7.764 0.094 7.538 0.26 7.371 C 0.427 7.205 0.653 7.111 0.889 7.111 L 22.222 7.111 C 22.458 7.111 22.684 7.205 22.851 7.371 C 23.017 7.538 23.111 7.764 23.111 8 C 23.111 8.236 23.017 8.462 22.851 8.629 C 22.684 8.795 22.458 8.889 22.222 8.889 L 0.889 8.889 C 0.653 8.889 0.427 8.795 0.26 8.629 C 0.094 8.462 0 8.236 0 8 Z M 0 15.111 C 0 14.875 0.094 14.649 0.26 14.483 C 0.427 14.316 0.653 14.222 0.889 14.222 L 22.222 14.222 C 22.458 14.222 22.684 14.316 22.851 14.483 C 23.017 14.649 23.111 14.875 23.111 15.111 C 23.111 15.347 23.017 15.573 22.851 15.74 C 22.684 15.906 22.458 16 22.222 16 L 0.889 16 C 0.653 16 0.427 15.906 0.26 15.74 C 0.094 15.573 0 15.347 0 15.111 Z" fill="rgb(7,7,47)"></path>
                </svg>
            </button>

            <div class="text-2xl font-extrabold font-manrope">
                HEALTHLINK
            </div>

            <div>
                <button v-show="!isMenuOpen" @click="() => {}">
                    <i class="ph-gear-six ph-2x"></i>
                </button>
                <button v-show="isMenuOpen" @click="closeNav">
                    <i class="ph-x ph-2x"></i>
                </button>
            </div>
        </div>

        <div v-show="isMenuOpen" class="pt-16">
            <div class="flex px-4 py-2 border-b">
                <i class="ph-activity ph-2x"></i>

                <span class="text-xl ml-4">
                    Activity
                </span>
            </div>

            <div class="flex px-4 py-2 border-b">
                <i class="ph-messenger-logo ph-2x"></i>

                <span class="text-xl ml-4">
                    Messages
                </span>
            </div>

            <div class="flex px-4 py-2 border-b">
                <i class="ph-calendar ph-2x"></i>

                <span class="text-xl ml-4">
                    Calendar
                </span>
            </div>

            <div class="flex px-4 py-2 border-b">
                <i class="ph-check-circle ph-2x"></i>

                <span class="text-xl ml-4">
                    Check-Ins
                </span>
            </div>

            <div class="flex px-4 py-2 border-b">
                <i class="ph-speaker-low ph-2x"></i>

                <span class="text-xl ml-4">
                    Talk
                </span>
            </div>

            <div class="flex px-4 py-2 border-b">
                <i class="ph-cell-signal-full ph-2x"></i>

                <span class="text-xl ml-4">
                    Reception
                </span>
            </div>

            <div class="flex px-4 py-2 border-b">
                <i class="ph-gear-six ph-2x"></i>

                <span class="text-xl ml-4">
                    Settings
                </span>
            </div>

            <div class="flex px-4 py-2 border-b">
                <i class="ph-heart ph-2x"></i>

                <span class="text-xl ml-4">
                    Support
                </span>
            </div>

            <div class="flex px-4 py-2 border-b">
                <i class="ph-phone ph-2x"></i>

                <span class="text-xl ml-4">
                    Contact
                </span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {},

    data() {
        return {
            isMenuOpen: false,
        };
    },

    computed: {},

    methods: {
        openNav() {
            this.isMenuOpen = true;
        },

        closeNav() {
            this.isMenuOpen = false;
        },
    },

};
</script>
