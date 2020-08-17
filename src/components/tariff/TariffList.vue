<template>
    <v-container>
        <v-layout align-content-space-around justify-start column>
<!--            <tariff-form :tariffAttr="tariff" />-->
            <tariff-row v-for="(tariff, index) in SORTED_TARIFFS"
                        :key="`tariff.id - ${index}`"
                        :tariff="tariff"
                        :editTariff="editTariff" />
        </v-layout>
    </v-container>
</template>

<script>
    import TariffRow from './TariffRow'
    // import TariffForm from './TariffForm'
    import {mapActions, mapGetters} from 'vuex'
    import Tariff from '../../models/tariff'

    export default {
        name: "TariffList",
        components: {
            TariffRow,
            // TariffForm
        },
        data() {
            return {
                tariff: new Tariff,

            }
        },
        computed: mapGetters(['SORTED_TARIFFS']),
        methods: {
            ...mapActions([
                'GET_TARIFFS_FROM_API',
            ]),
            editTariff(tariff) {
                this.tariff = tariff
            }
        },

        created() {
            this.GET_TARIFFS_FROM_API()
                .then(response => {
                    if (response.data) {
                        console.log('Tariff arrived!', response.data)
                    }
                })
        }
    }
</script>

<style scoped>

</style>
