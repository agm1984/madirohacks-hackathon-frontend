<template>
    <div class="pt-16 pb-24 px-4">
        <NavTopLinks />

        <div class="pt-8">
            <client-only>
                <v-date-picker v-model="selectedDate" title-position="left" is-expanded />
            </client-only>
        </div>

        {{ selectedDate }}

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
