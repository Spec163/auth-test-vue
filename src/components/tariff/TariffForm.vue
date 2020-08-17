<!--
<template>
    <div>
        &lt;!&ndash;    добавить правило ввода (не меньше 3 символов :rule) https://vuetifyjs.com/en/components/inputs/#inputs  &ndash;&gt;
        <v-text-field label="Введите название тарифа" v-model="title" hide-details="auto" />
        <v-text-field label="Введите стоимость" v-model="price" hide-details="auto" />
        <v-text-field label="Введите кол-во минут разговора" v-model="calls" hide-details="auto" />
        <v-text-field label="Введите кол-во СМС" v-model="sms" hide-details="auto" />
        <v-text-field label="Введите кол-во интернет трафика" v-model="internet" hide-details="auto" />
        <v-btn @click="save" class="mt-5 mb-8" block color="red" dark>Добавить тариф</v-btn>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import Tariff from '../../models/tariff'
    export default {
        name: "TariffForm",
        props: ['tariffAttr'],
        data() {
            return {
                tariff: new Tariff
            }
        },
        watch: {
            tariffAttr(newVal) {
                this.tariff.title = newVal.title
                this.tariff.price = newVal.price
                this.tariff.calls = newVal.calls
                this.tariff.sms = newVal.sms
                this.tariff.internet = newVal.internet
                this.tariff.id = newVal.id
            }
        },
        methods: {
            ...mapActions(['addTariffAction', 'updateTariffAction']),
            save() {
                const tariff = {id: this.id, title: this.title, price: this.price,
                    calls: this.calls, sms: this.sms, internet: this.internet}
                if (this.id) {
                    this.updateTariffAction(tariff)
                } else {
                    this.addTariffAction(tariff)
                }
                this.tariff.title = ''
                this.tariff.price = ''
                this.tariff.calls = ''
                this.tariff.sms = ''
                this.tariff.internet = ''
                this.tariff.id = ''
            }
        }
    }
</script>

<style scoped>

</style>-->
