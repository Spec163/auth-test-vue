<template>
    <div>
        <v-btn @click="clickInfo">info</v-btn>
        <p>{{ GET_USERS_INFO}}</p>

        <user-list-item
            v-for="user in GET_USERS_INFO"
            :key="user.id"
            :user_data="user"
            @replenishBalance="replenishBalance"
        />

    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import UserListItem from './UserListItem'
    import Balance from '../../models/balance'
    import UserInfo from '../../models/users-info'
    import BalanceReplenishmentService from '../../services/billing-service/balance-replenishment-service'

    export default {
        name: "UserList",
        data() {
            return {
                balance: new Balance('', 0),
                userInfo: new UserInfo(
                    '', 0, '', '',
                    0, 0, 0, 0
                )
            }
        },
        components: {
            UserListItem
        },

        computed: {
            ...mapGetters([
                'GET_USERS_INFO'
            ])
        },
        methods: {
            ...mapActions([
                'GET_USERS_INFO_FROM_API',
                'UPDATE_USERS_INFO_BALANCE'
            ]),
            clickInfo() {
                console.log('ggggg')
            },
            replenishBalance(newUserInfo, money) {

                this.balance.phoneNumber = newUserInfo.phoneNumber
                this.balance.money = parseInt(money)
                this.userInfo = newUserInfo

                BalanceReplenishmentService.replenish(this.balance)

                this.UPDATE_USERS_INFO_BALANCE(this.userInfo)
            }
        },
        // Fixed bug: вызов после инициализации реактивности
        created() {
            this.GET_USERS_INFO_FROM_API()
                .then(response => {
                    if (response.data) {
                        console.log('Data arrived!')
                    }
                })
        }
    }
</script>

<style scoped>

</style>