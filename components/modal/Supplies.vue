<template>
    <div class="bg-white pb-8 rounded-2xl">
        <div class="flex items-center justify-between border-b py-2 px-4">
            <h2 class="text-xl font-bold">
                Supplies
            </h2>

            <button @click="closeSupplies">
                <i class="ph-x ph-2x"></i>
            </button>
        </div>

        <div class="py-4 px-4">
            <div class="rounded-full w-full h-2 bg-gray-300">
                <div class="rounded-full h-2 bg-brand-200" :style="`width: ${supplyTotals.percent}%`"></div>
            </div>

            <div class="w-full flex justify-between text-xs pt-1">
                <div>0%</div>

                <div class="absolute" :style="`left: ${supplyTotals.percent}%`">
                    {{ Math.round(supplyTotals.percent) }}%
                </div>

                <div>100%</div>
            </div>
        </div>

        <div class="px-4">
            <div v-for="item in supplies" :key="`supply-${item.id}`" class="flex justify-between">
                <div>
                    {{ item.name }}
                </div>

                <div>
                    {{ item.units_left }}/{{ item.units_ordered }}
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: '',

    props: {},

    data() {
        return {
            supplies: [
                { id: 1, name: 'Small Bandages', units_left: 2, units_ordered: 50 },
                { id: 2, name: 'Medium Bandages', units_left: 5, units_ordered: 50 },
                { id: 3, name: 'Large Bandages', units_left: 10, units_ordered: 50 },
                { id: 4, name: 'Gauze Rolls', units_left: 2, units_ordered: 12 },
                { id: 5, name: 'Latex Gloves (Boxes)', units_left: 3, units_ordered: 30 },
                { id: 6, name: 'Surgical Masks', units_left: 97, units_ordered: 250 },
                { id: 7, name: 'Medical Tape', units_left: 4, units_ordered: 12 },
                { id: 8, name: 'Gel Ice Packs', units_left: 1, units_ordered: 10 },
                { id: 9, name: 'Aspirin (Bottles)', units_left: 1, units_ordered: 5 },
            ],
        };
    },

    computed: {
        supplyTotals() {
            return this.supplies.reduce((acc, item) => {
                acc.units_left += item.units_left;
                acc.units_ordered += item.units_ordered;
                acc.percent = (acc.units_left / acc.units_ordered * 100);
                return acc;
            }, {
                units_left: 0,
                units_ordered: 0,
                percent: 0,
            });
        },
    },

    mounted() {
        setTimeout(this.checkSupplyCount, 3000);
    },

    beforeDestroy() {
        clearTimeout(this.checkSupplyCount);
    },

    methods: {
        closeSupplies() {
            this.$emit('close');
        },

        checkSupplyCount() {
            const lowSupplyPercentThreshold = 30;
            if (this.supplyTotals.percent < lowSupplyPercentThreshold) {
                this.$buefy.dialog.confirm({
                    title: 'Supplies Low',
                    message: `You are running low on medical supplies. Do you want to autofill your order now?`,
                    cancelText: 'Later',
                    confirmText: 'Yes',
                    type: 'is-info',
                    onConfirm: this.autofillOrderCompleted,
                });
            }
        },

        autofillOrderCompleted() {
            this.$buefy.dialog.confirm({
                title: 'Order Sent',
                message: `Your order has been sent.`,
                confirmText: 'Ok',
                type: 'is-info',
                canCancel: false,
            });
        },
    },

};
</script>
