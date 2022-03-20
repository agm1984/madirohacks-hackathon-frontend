<template>
    <div class="px-4 pt-16 pb-24">
        <h2 class="pt-8 pb-2 text-lg font-bold text-black">
            Inbox
        </h2>

        <div class="">
            <b-input
                v-model="searchTerms"
                placeholder="Search..."
            ></b-input>
        </div>

        <div class="pt-4">
            <div v-for="message in filteredMessages" :key="`message-${message.id}`" class="flex flex-col p-4 mb-4 bg-white shadow-md rounded-2xl">
                <div class="flex justify-between">
                    <div>
                        <div class="text-lg font-bold">
                            {{ message.subject }} <span v-if="message.replied" class="text-xs text-brand-200">Replied</span>
                        </div>

                        <div class="text-sm text-gray-400">
                            {{ message.received_at }}
                        </div>
                    </div>

                    <button @click="() => openMessage(message)">
                        <i class="ph-chat-dots ph-2x text-brand-200"></i>
                    </button>
                </div>

                <div class="pt-2">
                    {{ message.content }}
                </div>
            </div>
        </div>

        <b-modal v-model="isSendingMessage" :can-cancel="false">
            <ModalComposeMessage
                :message="repliedToMessage"
                @save="saveMessage"
                @close="closeMessage"
            />
        </b-modal>

    </div>
</template>

<script>
export default {
    props: {},

    data() {
        return {
            searchTerms: '',
            messages: [
                { id: 1, subject: 'New medical supplies', content: 'Hey, we need to get some new medical supplies in. We are running low.', received_at: 'March 20th, 2022 07:36AM WAT', replied: false },
                { id: 2, subject: 'Bad mole', content: 'Greetings Dr. Monife, yesterday I discovered a large mole on my back that wasn\'t there last year. I think we should check it out.', received_at: 'March 20th, 2022 07:36AM WAT', replied: true },
                { id: 3, subject: 'Pain at vaccination site', content: 'Hi Doctor, my arm hurts where the lady jabbed it yesterday.', received_at: 'March 20th, 2022 07:36AM WAT', replied: false },
                { id: 4, subject: 'Annual visit', content: 'Do you have any openings in the next week. I would like to check in and see my current health state.', received_at: 'March 20th, 2022 07:36AM WAT', replied: false },
            ],
            isSendingMessage: false,
            repliedToMessage: null,
        };
    },

    computed: {
        filteredMessages() {
            if (!this.searchTerms) {
                return this.messages;
            }

            return this.messages.filter((message) => {
                return (
                        message.subject.match(new RegExp(this.searchTerms, 'i')) ||
                        message.content.match(new RegExp(this.searchTerms, 'i'))
                    )
                })
        },
    },

    methods: {
        openMessage(message) {
            this.repliedToMessage = message;
            this.isSendingMessage = true;
        },

        closeMessage() {
            this.isSendingMessage = false;
        },

        saveMessage(newMessage) {
            const index = this.messages.findIndex(message => message.id === newMessage.id);
            this.messages[index].replied = true;
        },
    },

};
</script>
