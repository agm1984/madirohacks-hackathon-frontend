<template>
    <div class="bg-white rounded-2xl">
        <div class="flex items-center justify-between px-4 py-2 border-b">
            <h2 class="text-xl font-bold">
                Compose Message
            </h2>

            <button @click="closeMessage">
                <i class="ph-x ph-2x"></i>
            </button>
        </div>

        <div class="flex flex-col px-4 py-4">
            <div class="flex flex-col">
                <div class="font-semibold">Subject:</div>
                <div class="">
                    <b-input
                        v-model="newMessage.subject"
                        placeholder="Type a subject"
                    ></b-input>
                </div>
            </div>

            <div class="flex flex-col pt-2">
                <div class="font-semibold">Notes:</div>
                <b-input
                    v-model="newMessage.content"
                    type="textarea"
                    :maxlength="500"
                    placeholder="Type your message..."
                ></b-input>
            </div>

            <div class="pt-4">
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
        message: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            newMessage: {
                subject: '',
                content: '',
            },
        };
    },

    computed: {},

    methods: {
        closeMessage() {
            this.$emit('close');
        },

        handleSave() {
            this.$emit('save', {
                id: this.message.id,
                ...this.newMessage,
            });

            this.$emit('close');
        },
    },

};
</script>
