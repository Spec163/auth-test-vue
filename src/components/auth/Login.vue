<template>
    <div class="col-md-12">
        <div class="card card-container">
            <form name="form" @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="login">Login</label>
                    <input
                            v-model="user.login"
                            type="text"
                            name="login"
                    />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                            v-model="user.password"
                            type="password"
                            name="password"
                    />
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block" :disabled="loading">
                        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                        <span>Login</span>
                    </button>
                </div>
            </form>
        </div>
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
                loading: false
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
                this.loading = true;
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