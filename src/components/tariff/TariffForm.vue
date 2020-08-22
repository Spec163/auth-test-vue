<template>
  <div>
    <!--    добавить правило ввода (не меньше 3 символов :rule) https://vuetifyjs.com/en/components/inputs/#inputs  -->
    <v-text-field label="Введите название тарифа" v-model="tariff.title" hide-details="auto"/>
    <v-text-field type="number" label="Введите стоимость" v-model="tariff.price" hide-details="auto"/>
    <v-text-field type="number" label="Введите кол-во минут разговора" v-model="tariff.call" hide-details="auto"/>
    <v-text-field type="number" label="Введите кол-во СМС" v-model="tariff.sms" hide-details="auto"/>
    <v-text-field type="number" label="Введите кол-во интернет трафика" v-model="tariff.internet" hide-details="auto"/>
    <v-btn @click="save" class="mt-5 mb-8" block color="red" dark>Добавить тариф</v-btn>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Tariff from '../../models/tariff'

export default {
  name: "TariffForm",
  props: ['tariffAttr'],
  data() {
    return {
      tariff: new Tariff()
    }
  },
  watch: {
    tariffAttr(newVal) {
      this.tariff.title = newVal.title
      this.tariff.price = newVal.price
      this.tariff.call = newVal.call
      this.tariff.sms = newVal.sms
      this.tariff.internet = newVal.internet
      this.tariff.id = newVal.id
    }
  },
  methods: {
    ...mapActions(['ADD_TARIFF_ACTION', 'UPDATE_TARIFF_ACTION']),
    save() {
      const tariff = {
        id: this.tariff.id, title: this.tariff.title, price: this.tariff.price,
        call: this.tariff.call, sms: this.tariff.sms, internet: this.tariff.internet
      }
      if (this.tariff.id) {
        this.UPDATE_TARIFF_ACTION(tariff)
      } else {
        this.ADD_TARIFF_ACTION(tariff)
      }
      this.tariff.title = ''
      this.tariff.price = ''
      this.tariff.call = ''
      this.tariff.sms = ''
      this.tariff.internet = ''
      this.tariff.id = ''
    }
  }
}
</script>

<style scoped>

</style>
