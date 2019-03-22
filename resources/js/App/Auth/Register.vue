<template>
    <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <!-- Nested Row within Card Body -->
                    <div class="row">
                        <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div class="col-lg-7">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form class="user">
                                    <div class="form-group row text-center">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input v-model="user.first_name" v-validate="'required'" name="first_name"
                                                   :class="{'is-invalid' : errors.has('first_name')}"
                                                   type="text" class="form-control form-control-user"
                                                   id="exampleFirstName" placeholder="First Name">
                                            <span v-show="errors.has('first_name')" class="text-danger small">{{ errors.first('first_name') }}</span>
                                        </div>
                                        <div class="col-sm-6">
                                            <input v-model="user.last_name" v-validate="'required'" name="last_name"
                                                   :class="{'is-invalid' : errors.has('last_name')}"
                                                   type="text" class="form-control form-control-user"
                                                   id="exampleLastName" placeholder="Last Name">
                                            <span v-show="errors.has('last_name')" class="text-danger small">{{ errors.first('last_name') }}</span>
                                        </div>
                                    </div>
                                    <div class="form-group text-center">
                                        <input v-model="user.email" v-validate="'required|email'" name="email"
                                               :class="{'is-invalid' : errors.has('email')}"
                                               type="email" class="form-control form-control-user"
                                               id="exampleInputEmail" placeholder="Email Address">
                                        <span v-show="errors.has('email')" class="text-danger small">{{ errors.first('email') }}</span>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" class="form-control form-control-user"
                                                   name="password" ref="password"
                                                   v-model="user.password" v-validate="'required'"
                                                   :class="{'is-invalid' : errors.has('password')}"
                                                   id="exampleInputPassword" placeholder="Password">
                                            <span v-show="errors.has('password')" class="text-danger small">{{ errors.first('password') }}</span>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="password" class="form-control form-control-user"
                                                   name="password_confirmation"
                                                   v-model="user.password_confirmation" v-validate="'required|confirmed:password'"
                                                   data-vv-as="password"
                                                   :class="{'is-invalid' : errors.has('password_confirmation')}"
                                                   id="exampleRepeatPassword" placeholder="Repeat Password">
                                            <span v-show="errors.has('password_confirmation')" class="text-danger small">{{ errors.first('password_confirmation') }}</span>
                                        </div>
                                    </div>
                                    <a @click="submit" class="btn btn-primary btn-user btn-block">
                                        Register Account
                                    </a>
                                    <hr>
                                    <a href="index.html" class="btn btn-google btn-user btn-block">
                                        <i class="fab fa-google fa-fw"></i> Register with Google
                                    </a>
                                    <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                        <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                    </a>
                                </form>
                                <hr>
                                <div class="text-center">
                                    <router-link class="small" :to="{ name: 'forgot-password' }">Forgot Password?
                                    </router-link>
                                </div>
                                <div class="text-center">
                                    <router-link class="small" :to="{ name: 'login' }">Already have an account? Login!
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
    import * as registerService from '../../services/register.service'
    import { mapActions} from 'vuex'

    export default {
        name: "RegisterComponent",
        mounted() {
            console.log('Load Register Component')
        },
        data() {
            return {
                user: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                }
            }
        },
        methods: {
            ...mapActions([
                'getCurrent', 'getRoles'
            ]),
            submit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        let password = this.user.password;
                        registerService.make(this.user)
                            .then(response => {
                                console.log('RegisterComponent response', response);
                                let email = response.data.user.email;
                                authService.makeLogin({
                                    email: email,
                                    password: password
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
                            });
                        return;
                    }
                    // alert('Correct them errors!');
                });
            }
        }
    }
</script>
<style scoped>
    a:not([href]):not([tabindex]) {
         color: #ffffff;
    }
</style>