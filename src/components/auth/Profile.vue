<template>
    <div>
        <h3>Token from vuex: </h3>
        <h4 class="get-info"> {{ GET_USER_TOKEN }} <br/> {{GET_USER_ROLE}} </h4>

        <h3>Info from back-end: </h3>
        <p class="get-info">{{ content }}</p>
    </div>
</template>

<script>
    import UserService from '../../services/requests/user-service'
    import {mapGetters} from 'vuex'

    export default {
        name: "Profile",
        data() {
            return {
                content: ''
            };
        },
        computed: {
            ...mapGetters([
                'GET_USER_TOKEN',
                'GET_USER_ROLE'
            ]),
        },
        mounted() {
            UserService.getUserInfo().then(
                response => {
                    this.content = response.data;
                })
        },
    }
</script>

<style scoped>
    .get-info {
        text-align: justify;
        color: red;
        width: 1000px;
        word-break: break-all;
    }
    h3 {
        color: darkblue;
        font-family: "Arial Black";
        text-align: left;
        margin-right: 20px;
    }
</style>