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
            <h2 class="text-lg font-bold">
                Browse
            </h2>

            <div class="grid grid-cols-2 gap-x-8 gap-y-4 pt-4">
                <div v-for="cat in categories" :key="`category-${cat.id}`">
                    <img :src="cat.image" class="object-cover rounded-2xl">
                    <div class="text-base font-medium text-black">
                        {{ cat.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {},

    data() {
        return {
            categories: [
                { id: 1, name: 'Tests', image: 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg', url: '' },
                { id: 2, name: 'Medication', image: 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg', url: '' },
                { id: 3, name: 'Supplies', image: 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg', url: '' },
                { id: 4, name: 'Resources', image: 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg', url: '' },
                { id: 5, name: 'Outbreaks', image: 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg', url: '' },
                { id: 6, name: 'Support', image: 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg', url: '' },
            ],
        };
    },

    computed: {},

    methods: {},

};
</script>
