<template>
    <div>
        <v-btn dark color="primary" @click="info">INFO</v-btn>

        <v-row justify="center">
            <v-text-field
                    type="number"
                    v-model="toPhoneNumber"
                    outlined
                    counter
                    label="Номер телефона"
            ></v-text-field>
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
                    <v-card-title class="headline">Вызов {{ toPhoneNumber }}</v-card-title>
                    <v-card-text>расчёты {{ expenses }} </v-card-text>
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
    // Увеличение в секунду
    import MaxServiceCost from '../../models/max-service-cost'
    import Order from '../../models/Order'
    import BillingService from '../../services/billing-service/billing-service'

    const callPerTimeUnit = 1;
    // const smsPerTimeUnit = 1;
    // const internetPerTimeUnit = 1;

    export default {
        name: "Call",
        data() {
            return {
                maxNumberCallMinutes: 0,
                // maxNumberSms: 0,
                // maxNumberInternet: 0,
                maxServiceCost: new MaxServiceCost('', '', '', ''),
                order: new Order('', '', ''),
                serviceId: 1,
                timer: null,
                canSend: false,
                send: '',
                dialog: false,
                expenses: 0,
                toPhoneNumber: 0
            }
        },

        destroyed() {
            this.stopTimer()
        },
        methods: {
            /*
            * Запрос info делать при переходе на домен billing
            *
            */
            info() {
                BillingService.expenses(this.maxServiceCost)
                .then(response => {
                    this.maxServiceCost = response.data
                    console.log(this.maxServiceCost)
                })
            },
            stopOrderTimer() {
                this.dialog = false
                this.stopTimer()
            },
            starter() {
                this.maxNumberCallMinutes = this.maxServiceCost.maxCall
                this.startTimer()
            },
            startTimer() {
                this.timer = setInterval(() => {
                    this.maxNumberCallMinutes--
                }, 200)
            },
            stopTimer() {
                this.maxServiceCost.maxCall = this.maxServiceCost.maxCall - this.expenses
                this.order.serviceId = this.serviceId
                this.order.expenses = this.expenses
                this.expenses = 0

                BillingService.billingOrder(this.order)
                clearTimeout(this.timer)
            },
        },
        watch: {
            maxNumberCallMinutes(time) {
                this.expenses += callPerTimeUnit
                if (time === 0 || time <= 0) {
                    this.stopTimer()
                }
            }
        },
    }
</script>

<style scoped>

</style>