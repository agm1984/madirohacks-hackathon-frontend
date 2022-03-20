<template>
    <div class="pt-16 pb-24 px-4">
        <NavTopLinks />

        <h2 class="text-lg font-bold text-black pt-8 pb-2">
            Upcoming
        </h2>

        <div class="grid grid-cols-2 gap-4">
            <div v-for="appointment in upcomingAppointments" :key="`appointment-${appointment.id}`" class="flex bg-white shadow-md rounded-2xl p-2">
                <i v-if="appointment.type === 'assessment'" class="ph-address-book ph-3x text-brand-200"></i>
                <i v-if="appointment.type === 'prescription'" class="ph-pill ph-3x text-brand-200"></i>
                <i v-if="appointment.type === 'vaccination'" class="ph-syringe ph-3x text-brand-200"></i>

                <div class="pl-1">
                    <h3 class="text-base font-bold">
                        {{ appointment.type.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) }}
                    </h3>

                    <div class="text-xs">
                        {{ appointment.appointment_at }}
                    </div>
                </div>
            </div>
        </div>

        <h2 class="text-lg font-bold text-black pt-8 pb-2">
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
