<template>
    <div class="pt-16 pb-24 px-4">
        <NavTopLinks />

        <div class="pt-8">
            <b-input
                v-model="searchTerms"
                placeholder="Search..."
            ></b-input>
        </div>

        <div class="flex flex-col pt-4">
            <div v-for="patient in filteredPatients" :key="`patient-${patient.id}`" class="flex bg-white shadow-md rounded-2xl p-4 mb-4">
                <div
                    :class="['flex items-center justify-center p-4 rounded-lg', {
                        'bg-blue-100': patient.gender === 'male',
                        'bg-pink-100': patient.gender === 'female',
                    }]"
                >
                    <i :class="`ph-gender-${patient.gender} ph-3x`"></i>
                </div>

                <div class="w-full pl-4">
                    <div class="flex justify-between">
                        <h3 class="text-lg font-bold">
                            {{ patient.name }}
                        </h3>

                        <button @click="() => handleBookmark(patient.id)">
                            <i
                                :class="['ph-bookmark ph-2x', {
                                    'text-brand-200': patient.is_bookmarked,
                                }]"
                            ></i>
                        </button>
                    </div>

                    <div class="text-sm">
                        Visited at: {{ patient.visited_at }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Patients',
        };
    },
    props: {},

    data() {
        return {
            searchTerms: '',
            patients: [
                { id: 1, gender: 'female', name: 'Olamide G.', visited_at: 'March 20th, 2022 07:36AM WAT', is_bookmarked: false },
                { id: 2, gender: 'female', name: 'Ayotunde F.', visited_at: 'March 20th, 2022 07:36AM WAT', is_bookmarked: false },
                { id: 3, gender: 'male', name: 'Shoyebi M.', visited_at: 'March 20th, 2022 07:36AM WAT', is_bookmarked: false },
                { id: 4, gender: 'female', name: 'Oluwatoke A.', visited_at: 'March 20th, 2022 07:36AM WAT', is_bookmarked: false },
                { id: 5, gender: 'male', name: 'Adeniyi R.', visited_at: 'March 20th, 2022 07:36AM WAT', is_bookmarked: false },
                { id: 6, gender: 'male', name: 'Bayowa P.', visited_at: 'March 20th, 2022 07:36AM WAT', is_bookmarked: false },
            ],
        };
    },

    computed: {
        filteredPatients() {
            if (!this.searchTerms) {
                return this.patients;
            }

            return this.patients.filter((patient) => {
                return (
                        patient.name.match(new RegExp(this.searchTerms, 'i'))
                    )
                })
        },
    },

    methods: {
        handleBookmark(patientId) {
            const index = this.patients.findIndex(patient => patient.id === patientId);
            this.patients[index].is_bookmarked = !this.patients[index].is_bookmarked;
        },
    },

};
</script>
