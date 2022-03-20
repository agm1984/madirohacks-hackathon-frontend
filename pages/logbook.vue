<template>
    <div class="pt-16 pb-24 px-4">
        <NavTopLinks />

        <div class="flex justify-between pt-8">
            <div class="flex items-center">
                <div class="h-4 w-4 bg-green-500 rounded-full"></div>
                <span class="ml-2">Low risk</span>
            </div>

            <div class="flex items-center">
                <div class="h-4 w-4 bg-yellow-400 rounded-full"></div>
                <span class="ml-2">Moderate risk</span>
            </div>

            <div class="flex items-center">
                <div class="h-4 w-4 bg-red-400 rounded-full"></div>
                <span class="ml-2">High risk</span>
            </div>
        </div>

        <div class="pt-4 flex flex-col">
            <div v-for="log in logbook" :key="`log-${log.id}`" class="flex justify-between bg-white shadow-md rounded-2xl p-4 mb-4">
                <div class="flex flex-col">
                    <h3 class="text-lg font-bold">
                        {{ log.name }}
                    </h3>

                    <div class="text-gray-400 text-sm">
                        Visited at: {{ log.visited_at }}
                    </div>
                </div>

                <div>
                    <div
                        :class="['h-4 w-4 rounded-full', {
                            'bg-green-500': (log.risk === 'low'),
                            'bg-yellow-400': (log.risk === 'moderate'),
                            'bg-red-400': (log.risk === 'high'),
                        }]"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Logbook',
        };
    },
    props: {},

    data() {
        return {
            logbook: [
                { id: 1, gender: 'female', name: 'Olamide G.', visited_at: 'March 20th, 2022 07:36AM WAT', risk: 'high' },
                { id: 2, gender: 'female', name: 'Ayotunde F.', visited_at: 'March 20th, 2022 07:36AM WAT', risk: 'high' },
                { id: 3, gender: 'male', name: 'Shoyebi M.', visited_at: 'March 20th, 2022 07:36AM WAT', risk: 'low' },
                { id: 4, gender: 'female', name: 'Oluwatoke A.', visited_at: 'March 20th, 2022 07:36AM WAT', risk: 'moderate' },
                { id: 5, gender: 'male', name: 'Adeniyi R.', visited_at: 'March 20th, 2022 07:36AM WAT', risk: 'low' },
                { id: 6, gender: 'male', name: 'Bayowa P.', visited_at: 'March 20th, 2022 07:36AM WAT', risk: 'high' },
                { id: 7, gender: 'female', name: 'Ayokunumi M.', visited_at: 'March 20th, 2022 07:36AM WAT', risk: 'high' },
                { id: 8, gender: 'female', name: 'Ifedayo E.', visited_at: 'March 20th, 2022 07:36AM WAT', risk: 'high' },
                { id: 9, gender: 'male', name: 'Teleayo D.', visited_at: 'March 20th, 2022 07:36AM WAT', risk: 'low' },
                { id: 10, gender: 'female', name: 'Tiaraoluwa P.', visited_at: 'March 20th, 2022 07:36AM WAT', risk: 'moderate' },
                { id: 11, gender: 'male', name: 'Modurodoluwa S.', visited_at: 'March 20th, 2022 07:36AM WAT', risk: 'low' },
                { id: 12, gender: 'male', name: 'Tomori W.', visited_at: 'March 20th, 2022 07:36AM WAT', risk: 'high' },
            ],
        };
    },

    computed: {},

    methods: {},

};
</script>
