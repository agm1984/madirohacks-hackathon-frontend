<template>
    <div class="px-4 pt-16 pb-24">
        <div class="flex items-center justify-center pt-4">
            <img src="https://images.unsplash.com/photo-1643297654416-05795d62e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80" class="object-cover w-16 h-16 rounded-full">

            <div class="pl-4">
                <h1 class="text-xl font-semibold">
                    Dr. Monife
                </h1>

                <span class="text-sm">Physician ID #60238346</span>
            </div>
        </div>

        <NavTopLinks />

        <div class="pt-8">
            <h2 class="pb-2 text-lg font-bold text-black">
                Browse
            </h2>

            <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                    <div class="flex items-center justify-center h-32 text-white shadow-2xl rounded-3xl bg-brand-500">
                        <i class="ph-test-tube ph-4x"></i>
                    </div>
                    <div class="text-base font-medium text-black">
                        Tests
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-center h-32 text-white shadow-2xl rounded-3xl bg-brand-500">
                        <i class="ph-pill ph-4x"></i>
                    </div>
                    <div class="text-base font-medium text-black">
                        Medication
                    </div>
                </div>

                <button @click="openSupplies" class="text-left">
                    <div class="flex items-center justify-center h-32 text-white shadow-2xl rounded-3xl bg-brand-500">
                        <i class="ph-first-aid-kit ph-4x"></i>
                    </div>
                    <div class="text-base font-medium text-black">
                        Supplies
                    </div>
                </button>

                <div>
                    <div class="flex items-center justify-center h-32 text-white shadow-2xl rounded-3xl bg-brand-500">
                        <i class="ph-books ph-4x"></i>
                    </div>
                    <div class="text-base font-medium text-black">
                        Resources
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-center h-32 text-white shadow-2xl rounded-3xl bg-brand-500">
                        <i class="ph-chart-line-up ph-4x"></i>
                    </div>
                    <div class="text-base font-medium text-black">
                        Outbreaks
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-center h-32 text-white shadow-2xl rounded-3xl bg-brand-500">
                        <i class="ph-heart-straight ph-4x"></i>
                    </div>
                    <div class="text-base font-medium text-black">
                        Support
                    </div>
                </div>
            </div>
        </div>

        <b-modal v-model="isViewingSupplies" :can-cancel="false">
            <ModalSupplies @close="closeSupplies" />
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {},

    data() {
        return {
            isViewingSupplies: false,
        };
    },

    computed: {},

    methods: {
        openSupplies() {
            this.isViewingSupplies = true;
        },

        closeSupplies() {
            this.isViewingSupplies = false;
        },
    },

};
</script>
