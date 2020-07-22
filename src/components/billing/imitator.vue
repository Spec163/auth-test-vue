<template>
    <div>
        <h2>Имитация</h2>
        <v-row justify="center">
            <v-col cols="12" sm="6" md="3">
                <v-text-field
                        type="number"
                        v-model="toPhoneNumber"
                        outlined
                        counter
                        label="Номер собеседника"
                ></v-text-field>
                <v-dialog v-model="dialog" persistent max-width="290">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                                @click="startCall"
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
            </v-col>
            <v-col></v-col>
            <v-col cols="12" sm="6" md="3">
                <v-text-field
                        type="number"
                        v-model="toPhoneNumber"
                        outlined
                        counter
                        label="Номер адресата"
                ></v-text-field>
                <v-dialog v-model="dialog" persistent max-width="290">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                                @click="startSms"
                                color="primary"
                                dark
                                v-bind="attrs"
                                v-on="on"
                        >
                            SMS
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
            </v-col>
            <v-col></v-col>
            <v-col cols="12" sm="6" md="3">
                <v-dialog v-model="dialog" persistent max-width="290">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                                @click="startInternet"
                                color="red"
                                dark
                                large
                                v-bind="attrs"
                                v-on="on"
                        >
                            Internet
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="headline">Имитируем услугу</v-card-title>
                        <v-card-text>Потрачено: {{ expenses }} </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="red" large icon @click="stopOrderTimer">
                                <v-icon>phone_callback</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    // Увеличение в секунду
    import MaxServiceCost from '../../models/max-service-cost'
    import Order from '../../models/Order'
    import BillingService from '../../services/billing-service/billing-service'

    const callPerTimeUnit = 1;
    const smsPerTimeUnit = 1;
    const internetPerTimeUnit = 100;
    let expensesPerTimeUnit = 0;

    export default {
        name: "Call",
        data() {
            return {
                maxOrder: 0,
                maxServiceCost: new MaxServiceCost('', '', '', ''),
                order: new Order('', '', ''),
                serviceId: 0,
                timer: null,
                canSend: false,
                send: '',
                dialog: false,
                expenses: 0,
                toPhoneNumber: ''
            }
        },

        destroyed() {
            this.stopTimer()
        },
        methods: {
            /*
            * Сделать вызов info() при переходе на домен billing
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

            startCall() {
                this.info()
                setTimeout(() => { // фикс ошибки демонстрации расходов в окне вызова
                    this.serviceId = 1
                    expensesPerTimeUnit = callPerTimeUnit
                    this.maxOrder = this.maxServiceCost.maxCall
                    this.startTimer()
                }, 1000)
            },
            startSms() {
                this.info()
                setTimeout(() => {
                    this.serviceId = 2
                    expensesPerTimeUnit = smsPerTimeUnit
                    this.maxOrder = this.maxServiceCost.maxSms
                    this.startTimer()
                }, 1000)
            },
            startInternet() {
                this.info()
                setTimeout(() => {
                    this.serviceId = 3
                    expensesPerTimeUnit =internetPerTimeUnit
                    this.maxOrder = this.maxServiceCost.maxInternet
                    this.startTimer()
                }, 1000)
            },

            startTimer() {
                this.timer = setInterval(() => {
                    this.maxOrder--
                }, 200)
            },
            stopTimer() {
                // Вычет затрат
                if (this.serviceId === 1) {
                    this.maxServiceCost.maxCall = this.maxServiceCost.maxCall - this.expenses
                } else if (this.serviceId === 2) {
                    this.maxServiceCost.maxSms = this.maxServiceCost.maxSms - this.expenses
                } else if (this.serviceId === 3) {
                    this.maxServiceCost.maxInternet = this.maxServiceCost.maxInternet - this.expenses
                }
                this.order.serviceId = this.serviceId
                this.order.expenses = this.expenses
                this.expenses = 0

                BillingService.billingOrder(this.order)
                clearTimeout(this.timer)
            },
        },
        watch: {
            maxOrder(time) {
                this.expenses += expensesPerTimeUnit
                if (time === 0 || time <= 0) {
                    this.stopTimer()
                }
            }
        },
    }
</script>

<style scoped>

</style>