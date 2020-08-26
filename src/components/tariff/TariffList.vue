<template>
  <v-container>
    <v-layout align-content-space-around justify-start column>
      <tariff-form v-if="IS_ADMIN_ROLE" :tariffAttr="tariff"/>

      <v-col cols="12" sm="4">
        <v-text-field
            class="pa-3"
            v-model="search"
            append-icon="mdi-magnify"
            label="Введите название тарифа"
            single-line
            hide-details
        ></v-text-field>
      </v-col>

      <tariff-row v-for="(tariff, index) in filteredTariffs"
                  :key="`tariff.id - ${index}`"
                  :tariff="tariff"
                  :editTariff="editTariff"
                  :changeAccountTariff="changeAccountTariff"
      />
    </v-layout>
  </v-container>
</template>

<script>
import TariffRow from './TariffRow'
import TariffForm from './TariffForm'
import {mapActions, mapGetters} from 'vuex'
import Tariff from '../../models/tariff'
import BillingService from '../../services/billing-service/billing-service'

export default {
  name: "TariffList",
  components: {
    TariffRow,
    TariffForm
  },
  data() {
    return {
      search: '',
      tariff: new Tariff,
    }
  },
  computed: {
    ...mapGetters(['SORTED_TARIFFS', 'IS_ADMIN_ROLE']),
    filteredTariffs() {
      return this.SORTED_TARIFFS.filter(tariff => {
        return tariff.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions([
      'GET_TARIFFS_FROM_API',
    ]),
    editTariff(tariff) {
      this.tariff = tariff
    },
    changeAccountTariff(tariff) {

      // this.CHANGE_ACCOUNT_TARIFF_ACTION(this.tariff)
      BillingService.changeUserTariff(tariff.id)
          .then(
              status => {
                if (status === 200) {
                  this.myTariff = tariff.title
                  console.log('new tariff:  ', this.myTariff)
                }
              }
          )
    }
  },

  created() {
    // this.myTariff = this.GET_ACCOUNT_TARIFF_TITLE
    // console.log('myTariff: ', this.myTariff)
    this.GET_TARIFFS_FROM_API()
        .then(response => {
          if (response.data) {
            console.log('Tariffs arrived!', response.data)
          }
        })
  }
}
</script>

<style scoped>

</style>
