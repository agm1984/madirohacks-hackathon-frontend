<template>
    <div class="flex justify-center pt-4">
        <NuxtLink
            :to="{ name: 'patients' }"
            :class="['', {
                'standard-button': isPatientsActive,
                'standard-button-inactive': !isPatientsActive,
            }]"
        >
            Patients
        </NuxtLink>

        <NuxtLink
            :to="{ name: 'logbook' }"
            :class="['ml-4', {
                'standard-button': isLogbookActive,
                'standard-button-inactive': !isLogbookActive,
            }]"
        >
            Logbook
        </NuxtLink>

        <NuxtLink
            :to="{ name: 'schedule' }"
            :class="['ml-4', {
                'standard-button': isScheduleActive,
                'standard-button-inactive': !isScheduleActive,
            }]"
        >
            Schedule
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: '',

    props: {},

    data() {
        return {};
    },

    computed: {
        isPatientsActive() {
            return (this.$route.name === 'patients');
        },

        isLogbookActive() {
            return (this.$route.name === 'logbook');
        },

        isScheduleActive() {
            return (this.$route.name === 'schedule');
        },
    },

    methods: {},

};
</script>
