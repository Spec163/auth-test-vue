<template>
    <div>
        <v-btn @click="starter" :disabled="isButtonDisabled">Start</v-btn>

        <v-spacer></v-spacer>
        <v-btn @click="stopTimer">Stop</v-btn>
    </div>
</template>

<script>
    export default {
        name: "Call",
        data() {
            return {
                currentTime: 10,
                timer: null,
                isButtonDisabled: false,
                canSend: false,
                send: ''
            }
        },

        destroyed() {
            this.stopTimer()
        },
        methods: {
            starter() {
                this.isButtonDisabled = true
                this.currentTime = 10
                this.startTimer()
            },
            startTimer() {
                this.timer = setInterval(() => {
                    this.currentTime--
                }, 1100)
            },
            stopTimer() {
                this.isButtonDisabled = false
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