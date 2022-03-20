<template>
    <div class="px-4 pt-16 pb-24">
        <NavTopLinks />

        <h2 class="pt-8 pb-2 text-lg font-bold text-black">
            Upcoming
        </h2>

        <div class="grid grid-cols-2 gap-4">
            <div v-for="appointment in upcomingAppointments" :key="`appointment-${appointment.id}`" class="flex p-2 bg-white shadow-md rounded-2xl">
                <i v-if="appointment.type === 'assessment'" class="ph-address-book ph-3x text-brand-200"></i>
                <i v-if="appointment.type === 'prescription'" class="ph-pill ph-3x text-brand-200"></i>
                <i v-if="appointment.type === 'vaccination'" class="ph-syringe ph-3x text-brand-200"></i>

                <div class="pl-1">
                    <h3 class="text-base font-bold">
                        {{ appointment.type.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) }}
                    </h3>

                    <div class="text-xs text-gray-400">
                        {{ appointment.appointment_at }}
                    </div>
                </div>
            </div>
        </div>

        <h2 class="pt-8 pb-2 text-lg font-bold text-black">
            Calendar
        </h2>

        <div class="">
            <client-only>
                <v-date-picker v-model="selectedDate" title-position="left" is-expanded />
            </client-only>
        </div>

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Schedule',
        };
    },
    props: {},

    data() {
        return {
            upcomingAppointments: [
                { id: 1, type: 'assessment', appointment_at: 'March 20th, 2022 07:36AM WAT' },
                { id: 2, type: 'prescription', appointment_at: 'March 20th, 2022 07:36AM WAT' },
                { id: 3, type: 'vaccination', appointment_at: 'March 20th, 2022 07:36AM WAT' },
                { id: 4, type: 'assessment', appointment_at: 'March 20th, 2022 07:36AM WAT' },
            ],
            selectedDate: null,
        };
    },

    computed: {},

    watch: {
        selectedDate() {
            console.log('date', this.selectedDate);
        },
    },

    methods: {},

};
</script>

<style>
.vc-container {
    border: none;
    @apply shadow-md;
}
</style>
