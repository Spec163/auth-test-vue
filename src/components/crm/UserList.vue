<template>
    <div>
        <v-btn @click="clickInfo">info</v-btn>
        <p>{{ GET_USERS_INFO}}</p>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "UserList",

        computed: {
            ...mapGetters([
                'GET_USERS_INFO'
            ])
        },
        methods: {
            ...mapActions([
                'GET_USERS_INFO_FROM_API'
            ]),
            clickInfo() {
                console.log('ggggg')
            }
        },
        mounted() {
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