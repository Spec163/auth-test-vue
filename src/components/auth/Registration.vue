<template>
    <div>
        <h3>{{ message }}</h3>
        <v-form name="form" @submit.prevent="registration">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="8" md="4"></v-col>
                <v-col cols="12" sm="8" md="4">
                    <v-text-field
                            v-model="user.phoneNumber"
                            type="text"
                            label="Phone Number"
                            counter
                            outlined
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col cols="12" sm="8" md="4"></v-col>
                <v-col cols="12" sm="8" md="4">
                    <v-text-field
                            v-model="user.login"
                            type="text"
                            label="Login"
                            counter
                            outlined
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" sm="8" md="4"></v-col>
                <v-col cols="12" sm="8" md="4">
                    <v-text-field
                            v-model="user.password"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                            name="password"
                            label="Password"
                            counter
                            outlined
                            @click:append="show = !show"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-btn
                    width="100px"
                    rounded
                    color="primary"
                    dark
                    @click="registration"
            >
                <span>Login</span>
            </v-btn>
        </v-container>
        </v-form>
    </div>
</template>

<script>
    import User from '../../models/user'
    import AuthService from '../../services/auth-service'

    export default {
        name: "Registration",
        data() {
            return {
                user: new User('', '', ''),
                successful: false,
                show: false,
                message: '' // Сообщение в которое возвращается тело ошибки при регистрации
            };
        },
        methods: {
            registration() {
                AuthService.register(this.user)
                    .then(response => {
                        if (response.status === 200) {
                            this.$router.push('/login');
                        } else {
                            // Убрать ошибку из консоли
                            this.message = response.data
                            console.log(this.message)
                        }
                    })
            }
        }
    }
</script>

<style scoped>

</style>