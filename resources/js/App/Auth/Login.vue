<template>
    <!-- Outer Row -->
    <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <!-- Nested Row within Card Body -->
                    <div class="row">
                        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                        <div class="col-lg-6">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <form class="user" @submit.prevent="submit" method="post">
                                    <div class="form-group">
                                        <input v-model="email" type="email" class="form-control form-control-user"
                                               v-validate="'required|email'" name="email"
                                               :class="{'is-invalid' : errors.has('email')}"
                                               id="exampleInputEmail" aria-describedby="emailHelp"
                                               placeholder="Enter Email Address...">
                                        <span v-show="errors.has('email')" class="text-danger small">{{ errors.first('email') }}</span>
                                    </div>
                                    <div class="form-group">
                                        <input v-model="password" type="password" class="form-control form-control-user"
                                               v-validate="'required'" name="password"
                                               :class="{'is-invalid' : errors.has('password')}"
                                               id="exampleInputPassword" placeholder="Password">
                                        <span v-show="errors.has('password')" class="text-danger small">{{ errors.first('password') }}</span>
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox small">
                                            <input type="checkbox" class="custom-control-input" id="customCheck"
                                                   v-model="remember">
                                            <label class="custom-control-label" for="customCheck">Remember Me</label>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary btn-user btn-block" type="submit">
                                        Login
                                    </button>
                                    <hr>
                                    <a href="index.html" class="btn btn-google btn-user btn-block">
                                        <i class="fab fa-google fa-fw"></i> Login with Google
                                    </a>
                                    <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                        <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                    </a>
                                </form>
                                <hr>
                                <div class="text-center">
                                    <router-link class="small" :to="{ name: 'forgot-password' }">Forgot Password?
                                    </router-link>
                                </div>
                                <div class="text-center">
                                    <router-link class="small" :to="{ name: 'register' }">Create an Account!
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as authService from '../../services/auth.service'

    import { mapActions} from 'vuex'

    export default {
        name: "LoginComponent",
        mounted() {
            console.log('Component Login mounted.')
        },
        data() {
            return {
                email: '',
                password: '',
                remember: false
            }
        },
        methods: {
            ...mapActions([
                'getCurrent', 'getRoles'
            ]),
            submit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        authService.makeLogin({
                            email: this.email,
                            password: this.password
                        }).then(response => {
                            console.log('authService.makeLogin', response)
                        }).then(() => {
                            this.getCurrent().then(() => {
                                this.getRoles().then().catch((error) => {
                                    console.log('getRoles error', error)
                                });
                            })
                                .catch((error) => {
                                    console.log('getCurrent error', error)
                                });
                        })
                            .catch((error) => {
                                console.log('authService.makeLogin error', error)
                            });
                        return;
                    }
                    // alert('Correct them errors!');
                });

            }
        }
    }
</script>