<template>
    <v-card class="my-2 text-settings" width="850px">
        <v-main class="yellow darken-3 black--text pt-8">
            <div class="main-block">
                <v-card-title primary-title>
                    <h2>{{ tariff.title }}</h2>
                </v-card-title>
                <!--  Запретить показывать кнопки если роль != admin    -->
                <v-card-actions>
                    <v-btn @click="edit" class="ma-2" outlined small fab color="deep-purple accent-4">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn @click="del" small fab outlined color="deep-purple accent-4">
                        <v-icon color="deep-purple accent-4">delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>
            <v-card-text>

                <v-simple-table height="120px" class="yellow darken-3 black--text title">
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-left">Стоимость</th>
                            <th class="text-left">Кол-во минут</th>
                            <th class="text-left">Кол-во СМС</th>
                            <th class="text-left">Кол-во интернет трафика</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{{ tariff.price }} руб</td>
                            <td>{{ tariff.call }} мин</td>
                            <td>{{ tariff.sms }} смс</td>
                            <td>{{ tariff.internet }} Гб</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
        </v-main>
    </v-card>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "TariffRow",
        props: ['tariff', 'editTariff'],
        methods: {
            ...mapActions(['REMOVE_TARIFF_ACTION']),
            edit() {
                this.editTariff(this.tariff)
            },
            del() {
              console.log(this.tariff)
              this.REMOVE_TARIFF_ACTION(this.tariff)
            }
        }
    }
</script>

<style scoped>
    .main-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 22px;
    }
    .text-settings {
        font-size: 26px;
        color: black;
    }
</style>
