<template>
    <div class="">
        <div class="main h-fit bg-[#131417] py-20 px-60 overflow-hidden">
            <h1 class="mx-96 font-bold text-green-600 text-3xl font-sans mb-4">Quiz<span
                    class="text-yellow-500">Mania</span>
            </h1>
            <div
                class="outerdiv bg-white mt-4 p-4 mx-60 space-y-8 w-1/2 h-auto flex flex-col justify-center items-center rounded-sm">
                <div class="heading font-bold  text-2xl font-mono">Sign Up</div>
                <div class="form flex flex-col space-y-8">
                    <input
                        class="h-12 w-96 px-10 rounded-sm bg-[#f3f7f7] border-2 border-[#f3f7f7] hover:focus cursor-pointer"
                        type="text" v-model="name" placeholder="Enter your name">
                    <input
                        class="h-12 w-96 px-10 rounded-sm bg-[#f3f7f7] border-2 border-[#f3f7f7] hover:focus cursor-pointer"
                        type="email" v-model="email" placeholder="Enter your email">
                    <select v-model="accessLevel"
                        class="h-12 w-96 px-10  rounded-sm bg-[#f3f7f7] border-2 border-[#f3f7f7] hover:focus cursor-pointer">
                        <option value="Select Access Level" disabled selected>Select Access Level</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Student">Student</option>
                    </select>
                    <select v-model="domain"
                        class="h-12 w-96 px-10 text-black rounded-sm bg-[#f3f7f7] border-2 border-[#f3f7f7] hover:focus cursor-pointer">
                        <option value="Select Access Level" disabled selected>Select domain</option>
                        <option value="Aptitude">Aptitude</option>
                        <option value="DSA">DSA</option>
                        <option value="Programming">Programming</option>
                    </select>
                    <input class="h-12 w-96 px-10 rounded-sm bg-[#f3f7f7] border-2 border-[#f3f7f7]" type="password"
                        v-model="password" placeholder="Your password">
                    <input class="h-12 w-96 px-10 rounded-sm bg-[#f3f7f7] border-2 border-[#f3f7f7]" type="password"
                        v-model="password_confirmation" placeholder="Confirm password">
                </div>
                <div class="button">
                    <button @click="register()"
                        class="btn  bg-[#1ba94c] text-white font-bold w-20 h-10 rounded-sm hover:bg-green-700">
                        <router-link to="/" exact>Sign Up</router-link>
                    </button>
                </div>
                <div class="login flex   ">
                    <p class="font-semibold  mb-4 text-black mr-2">Already have an account ?</p>
                    <a href="#" class="text-green-800 font-bold   hover:text-green-700">
                        <router-link to="/login" exact>Login here</router-link>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Vue from 'vue';
import Config from '../config.js';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import axios from 'axios';
Vue.use(VueToast);
export default {
    name: 'HelloWorld',
    data() {
        return {
            name: '',
            email: '',
            accessLevel: '',
            domain:'',
            password: '',
            password_confirmation: '',


        }
    },
    methods: {

        checkInput() {
            if (this.name && this.email &&  this.domain && this.accessLevel && this.password && this.password_confirmation) {
                if (this.password === this.password_confirmation) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        },

        async register() {
            this.checkInput();
            if (this.name && this.email && this.domain && this.accessLevel && this.password && this.password_confirmation) {
                if (this.password === this.password_confirmation) {
                    if (this.password.length >= 6 && this.password.length <= 15) {
                        Vue.$toast.open('Successfully Created Account');
                    }
                    else {
                        Vue.$toast.open('Password length is less than 6');

                    }
                }
                else {
                    Vue.$toast.open('Password and Confirm Password does not  match');
                }
            }
            else {
                Vue.$toast.open('All Fields are required');
            }


            // Backend registration
            const newUser = {
                name: this.name,
                email: this.email,
                accessLevel: this.accessLevel,
                domain : this.domain,
                password: this.password,
                password_confirmation: this.password_confirmation

            }
            console.log(newUser);

            const response = await axios.post(`${Config.base_url}/user/register`, newUser).then((result) => {
                return result.data;
            }).catch((error) => {
                console.log(error);
            })

            console.log(response.message);
            if (response.message == "Registration Successfull") {
                console.log("Registration Successfull");
                this.$router.push({ path: '/login', replace: true })
            }


        }
    }

}
</script>
  
<style>

</style>