<template>
    <div>

        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            @click="starter"
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"
                    >
                        Call
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title class="headline">Название услуги</v-card-title>
                    <v-card-text>расчёты</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red" large icon @click="stopOrderTimer">
                            <v-icon>phone_callback</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Call",
        data() {
            return {
                currentTime: 10,
                timer: null,
                canSend: false,
                send: '',
                dialog: false
            }
        },

        destroyed() {
            this.stopTimer()
        },
        methods: {
            stopOrderTimer() {
                this.dialog = false
                this.stopTimer()
            },
            starter() {
                this.currentTime = 10
                this.startTimer()
            },
            startTimer() {
                this.timer = setInterval(() => {
                    this.currentTime--
                }, 1000)
            },
            stopTimer() {
                console.log('this.timer:  ',this.timer)
                clearTimeout(this.timer)
            },
        },
        watch: {
            currentTime(time) {
                console.log('time:  ', time);
                if (time === 0 || time <= 0) {
                    this.stopTimer()
                }
            }
        },
    }
</script>

<style scoped>

</style>