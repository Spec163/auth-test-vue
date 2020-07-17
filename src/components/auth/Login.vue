<template>
    <div>
        <v-form name="form" @submit.prevent="handleLogin">
            <v-container>
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
                        @click="handleLogin"
                >
                    <span>Login</span>
                </v-btn>
            </v-container>
        </v-form>

    </div>
</template>

<script>
    import User from '../../models/user'
    import {mapActions} from 'vuex'

    export default {
        name: 'Login',
        data() {
            return {
                user: new User('', ''),
                show: false,
            };
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            }
        },
        created() {
            if (this.loggedIn) {
                this.$router.push('/profile');
            }
        },
        methods: {
            ...mapActions ([
                'LOGIN'
            ]),
            handleLogin() {
                if (this.user.login && this.user.password) {
                    this.LOGIN(this.user).then(
                        () => {
                            this.$router.push('/profile');
                        }
                    );
                }
            }
        }
    };
</script>

<style scoped>
    label {
        display: block;
        margin-top: 10px;
    }
</style>