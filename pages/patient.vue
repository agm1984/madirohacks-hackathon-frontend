<template>
    <div class="pt-16 pb-24 px-4">
        <div class="bg-white shadow-md rounded-2xl flex flex-col p-4 mt-4">
            <div class="flex">
                <div
                    :class="['flex items-center justify-center p-4 rounded-lg', {
                        'bg-blue-100': (patient.gender === 'male'),
                        'bg-pink-100': (patient.gender === 'female'),
                    }]"
                >
                    <i :class="`ph-gender-${patient.gender} ph-3x`"></i>
                </div>

                <div class="w-full pl-4">
                    <div class="flex justify-between">
                        <h3 class="text-lg font-bold">
                            {{ patient.name }}
                        </h3>

                        <button @click="handleBookmark">
                            <i
                                :class="['ph-bookmark ph-2x', {
                                    'text-brand-200': patient.is_bookmarked,
                                }]"
                            ></i>
                        </button>
                    </div>

                    <div class="text-sm text-gray-400">
                        Last visited: {{ patient.visited_at }}
                    </div>
                </div>
            </div>

            <div class="flex pt-2">
                <div class="w-1/2 font-semibold">Sex:</div>
                <div class="w-1/2">{{ formattedGender }}</div>
            </div>

            <div class="flex pt-1">
                <div class="w-1/2 font-semibold">Age:</div>
                <div class="w-1/2">{{ patient.age }}</div>
            </div>

            <div class="flex pt-1">
                <div class="w-1/2 font-semibold">Location:</div>
                <div class="w-1/2">{{ patient.location }}</div>
            </div>

            <div class="flex pt-1">
                <div class="w-1/2 font-semibold">Health conditions:</div>
                <div class="w-1/2">{{ patient.health_conditions }}</div>
            </div>

            <div class="flex pt-1">
                <div class="w-1/2 font-semibold">Allergies:</div>
                <div class="w-1/2">{{ patient.allergies }}</div>
            </div>
        </div>

        <div class="pt-8">
            <button class="w-full standard-button" @click="createLog">
                Create new patient log
            </button>
        </div>

        <h2 class="text-lg font-bold text-black pt-8 pb-2">
            Browse
        </h2>

        <div class="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
                <img src="https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg" class="object-cover rounded-2xl">
                <div class="text-base font-medium text-black">
                    Assessments
                </div>
            </div>

            <div class="">
                <img src="https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg" class="object-cover rounded-2xl">
                <div class="text-base font-medium text-black">
                    Medication
                </div>
            </div>

            <div class="">
                <img src="https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg" class="object-cover rounded-2xl">
                <div class="text-base font-medium text-black">
                    Tests
                </div>
            </div>
        </div>

        <h2 class="text-lg font-bold text-black pt-8 pb-2">
            History
        </h2>

        <div class="">
            <div v-for="log in patient.history" :key="`history-${log.id}`" class="flex items-center justify-between bg-white shadow-md rounded-2xl p-4 mb-4">
                <div class="flex flex-col">
                    <h3 class="text-lg font-bold">
                        {{ log.type.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) }}
                    </h3>

                    <div class="text-gray-400 text-sm">
                        {{ log.logged_at }}
                    </div>
                </div>

                <div>
                    <i class="ph-caret-right ph-2x text-brand-200"></i>
                </div>
            </div>
        </div>

        <b-modal v-model="isCreatingLog" :can-cancel="false">
            <ModalCreatePatientLog
                :patient="patient"
                @save="saveLog"
                @close="closeLog"
            />
        </b-modal>

    </div>
</template>

<script>
export default {
    props: {},

    data() {
        return {
            patient: {
                gender: 'female',
                name: 'Ayotunde F.',
                visited_at: 'March 20th, 2022 07:36AM WAT',
                is_bookmarked: false,
                age: 37,
                location: 'Umuluwe, Nigeria',
                health_conditions: 'Diabetes; Psoriasis',
                allergies: 'N/A',
                history: [
                    { id: 1, type: 'assessment', logged_at: 'March 20th, 2022 07:36AM WAT' },
                    { id: 2, type: 'assessment', logged_at: 'March 19th, 2022 09:36AM WAT' },
                    { id: 4, type: 'prescription', logged_at: 'March 18th, 2022 03:36PM WAT' },
                    { id: 3, type: 'vaccination', logged_at: 'March 17th, 2022 09:18AM WAT' },
                ],
            },
            isCreatingLog: false,
        };
    },

    computed: {
        formattedGender() {
            if (this.patient.gender === 'male') return 'Male';
            if (this.patient.gender === 'female') return 'Female';
        },
    },

    methods: {
        handleBookmark() {
            this.patient.is_bookmarked = !this.patient.is_bookmarked;
        },

        createLog() {
            this.isCreatingLog = true;
        },

        closeLog() {
            this.isCreatingLog = false;
        },

        saveLog(newNote) {
            this.patient.history.unshift({
                id: this.patient.history.length + 1,
                ...newNote,
                logged_at: 'March 20th, 2022 03:36PM WAT',
            })
        },
    },

};
</script>
