<template>
    <div class="bg-white rounded-2xl">
        <div class="flex items-center justify-between border-b py-2 px-4">
            <h2 class="text-xl font-bold">
                Logbook Entry
            </h2>

            <button @click="closeLog">
                <i class="ph-x ph-2x"></i>
            </button>
        </div>

        <div class="flex flex-col py-4 px-4">
            <div class="flex">
                <div class="w-1/2 font-semibold">Name:</div>
                <div class="w-1/2 text-right">{{ patient.name }}</div>
            </div>

            <div class="flex pt-1">
                <div class="w-1/2 font-semibold">Date:</div>
                <div class="w-1/2 text-right">March 20th, 2022</div>
            </div>

            <div class="flex pt-1">
                <div class="w-1/2 font-semibold">Time:</div>
                <div class="w-1/2 text-right">07:57 AM WAT</div>
            </div>

            <div class="flex pt-1">
                <div class="w-1/2 font-semibold">Entry type:</div>
                <div class="w-1/2">
                    <b-select v-model="newNote.type" expanded>
                        <option value="assessment">Assessment</option>
                        <option value="prescription">Prescription</option>
                        <option value="vaccination">Vaccination</option>
                    </b-select>
                </div>
            </div>

            <div class="flex flex-col pt-1">
                <div class="font-semibold">Notes:</div>
                <b-input
                    v-model="newNote.note"
                    type="textarea"
                    :maxlength="500"
                    placeholder="Type your note..."
                ></b-input>
            </div>

            <div>
                <button class="w-full standard-button" @click="handleSave">
                    Save
                </button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        patient: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            newNote: {
                type: 'assessment',
                note: '',
            },
        };
    },

    computed: {},

    methods: {
        closeLog() {
            this.$emit('close');
        },

        handleSave() {
            this.$emit('save', this.newNote);

            this.$emit('close');
        },
    },

};
</script>
