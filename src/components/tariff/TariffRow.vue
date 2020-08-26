<template>
  <v-card class="my-2 text-settings" width="850px">
    <v-main class="yellow darken-3 black--text pt-8">
      <div class="main-block">
        <v-card-title primary-title>
          <h2>{{ tariff.title }}</h2>
        </v-card-title>

        <!--  Запретить показывать кнопки если роль != admin    -->
        <v-card-actions>

          <v-btn
              dark
              small
              @click="dialog = !dialog"
          >
            Сменить тариф
          </v-btn>

          <v-btn
              v-if="IS_ADMIN_ROLE"
              @click="edit" class="ma-2"
              outlined
              small
              fab
              color="deep-purple accent-4"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
              v-if="IS_ADMIN_ROLE"
              @click="del"
              small
              fab
              outlined
              color="deep-purple accent-4"
          >
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
    <template>
      <v-dialog v-model="dialog" max-width="350px">
        <v-card>
          <v-card-text>
            <h2 class="pa-4 text-card-title"> Вы хотите перейти на тарифф: <br> {{ tariff.title }}?</h2>

          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="6">
              <div class="text-center my-2">
                <v-btn
                    class="font-weight-bold"
                    text
                    color="primary"
                    @click="changeTariff"
                >
                  Да
                </v-btn>
              </div>
            </v-col>

            <v-col cols="12" sm="6">
              <div class="text-center my-2">
                <v-btn
                    class="font-weight-bold"
                    text
                    color="primary"
                    @click="dialog = false"
                >
                  Нет
                </v-btn>
              </div>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>

  </v-card>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "TariffRow",
  props: [
    'tariff',
    'editTariff',
    'changeAccountTariff',
  ],

  data() {
    return {
      dialog: false,
      message: '',
    }
  },

  computed: {
    ...mapGetters(['IS_ADMIN_ROLE']),
  },

  methods: {
    ...mapActions([
      'REMOVE_TARIFF_ACTION',
    ]),
    edit() {
      this.editTariff(this.tariff)
    },
    del() {
      console.log(this.tariff)
      this.REMOVE_TARIFF_ACTION(this.tariff)
    },
    changeTariff() {
      this.dialog = false
      this.changeAccountTariff(this.tariff)
    },
  }
}
</script>

<style scoped>
.main-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.text-settings {
  font-size: 26px;
  color: black;
}

.text-card-title {
  line-height: 30px;
  color: black;
}
</style>
