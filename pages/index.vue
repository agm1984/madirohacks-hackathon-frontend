<template>
    <div class="pt-16 pb-24 px-4">
        <div class="flex justify-center items-center pt-4">
            <img src="https://www.tubefilter.com/wp-content/uploads/2018/07/doctor-mike.jpg" class="h-16 w-16 object-cover rounded-full">

            <div class="pl-4">
                <h1 class="text-xl font-semibold">
                    Dr. Monife
                </h1>

                <span class="text-sm">Physician ID #60238346</span>
            </div>
        </div>

        <NavTopLinks />

        <div class="pt-8">
            <h2 class="text-lg font-bold text-black pb-2">
                Browse
            </h2>

            <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                    <img src="https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg" class="object-cover rounded-2xl">
                    <div class="text-base font-medium text-black">
                        Tests
                    </div>
                </div>

                <div>
                    <img src="https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg" class="object-cover rounded-2xl">
                    <div class="text-base font-medium text-black">
                        Medication
                    </div>
                </div>

                <button @click="openSupplies" class="text-left">
                    <img src="https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg" class="object-cover rounded-2xl">
                    <div class="text-base font-medium text-black">
                        Supplies
                    </div>
                </button>

                <div>
                    <img src="https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg" class="object-cover rounded-2xl">
                    <div class="text-base font-medium text-black">
                        Resources
                    </div>
                </div>

                <div>
                    <img src="https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg" class="object-cover rounded-2xl">
                    <div class="text-base font-medium text-black">
                        Outbreaks
                    </div>
                </div>

                <div>
                    <img src="https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg" class="object-cover rounded-2xl">
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
