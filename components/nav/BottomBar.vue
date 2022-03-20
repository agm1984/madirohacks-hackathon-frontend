<template>
    <div class="fixed bottom-0 w-full flex justify-around bg-brand-400 border-t p-4">
        <NuxtLink
            :to="{ name: 'logbook' }"
            :class="['flex flex-col items-center', {
                'active-link': isLogbookActive,
                'text-gray-400': !isLogbookActive,
            }]"
        >
            <i class="ph-notebook ph-2x"></i>
            <span class="text-sm">Logbook</span>
        </NuxtLink>

        <NuxtLink
            :to="{ name: 'index' }"
            :class="['flex flex-col items-center', {
                'active-link': isHomeActive,
                'text-gray-400': !isHomeActive,
            }]"
        >
            <i class="ph-house ph-2x"></i>
            <span class="text-sm">Home</span>
        </NuxtLink>

        <NuxtLink
            :to="{ name: 'inbox' }"
            :class="['flex flex-col items-center', {
                'active-link': isInboxActive,
                'text-gray-400': !isInboxActive,
            }]"
        >
            <i class="ph-envelope ph-2x"></i>
            <span class="text-sm">Inbox</span>
        </NuxtLink>

    </div>
</template>

<script>
export default {
    props: {},

    data() {
        return {};
    },

    computed: {
        isLogbookActive() {
            return (this.$route.name === 'logbook');
        },

        isHomeActive() {
            return (this.$route.name === 'index');
        },

        isInboxActive() {
            return (this.$route.name === 'inbox');
        },
    },

    methods: {},

};
</script>

<style>
.active-link {
    color: #024FE8 !important;
}
</style>
