<template>
  <div class="">
    <div class="main h-fit bg-[#131417] py-40 px-60 overflow-hidden">
      <h1 class="mx-96 font-bold text-green-600 text-3xl font-sans mb-4">Quiz<span class="text-yellow-500">Mania</span>
      </h1>
      <div class="outerdiv bg-white  mx-60 space-y-8 w-1/2 h-96 flex flex-col justify-center items-center rounded-sm">
        <div class="heading font-bold text-2xl font-mono">Log In</div>
        <div class="form flex flex-col space-y-8">
          <input class="h-12 w-96 px-10 rounded-sm bg-[#f3f7f7] border-2 border-[#f3f7f7] hover:focus cursor-pointer"
            type="email" v-model="email" id="" placeholder="Your username or email">
          <input class="h-12 w-96 px-10 rounded-sm bg-[#f3f7f7] border-2 border-[#f3f7f7]" type="password" v-model="password" name="" id=""
            placeholder="Your password">
        </div>
        <div class="button">
          <button  @click="logInCheck()"  class="btn  bg-[#1ba94c] text-white font-bold w-20 h-10 rounded-sm hover:bg-green-700">
            Log In
          </button>
        </div>
        <div class="register flex ">
          <p class="font-semibold  text-black mr-2">Not have an account ?</p>
          <a href="#" class="text-green-700 font-bold"><router-link to="/" exact>Register here</router-link></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Config from '../config.js';
import axios from 'axios';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import setAuthHeader from '@/utils/setAuthHeader';
Vue.use(VueToast);
export default {
  name: 'LogInPage',
  data() {
    return {
      email: '',
      password: '',
      success: false
    }
  },
  methods: {
    checkInput() {

      if (this.email && this.password) {
        if(this.email.length <= 6 || this.password.length < 6)
        {
          this.success = false;
          return false;
        }
        else{
          this.success = true;
          return true;
        }

      }
      else {
        this.success = false;
        return false;
      }
    },

     login(){

      // Toast for required details to be filled by the user
      if ( this.email && this.password ) {
        if(this.email.length <= 6 || this.password.length < 6)
        {
          // console.log(this.success);
          Vue.$toast.open('Enter valid Email or Password');
        }
      }

    },

    async logInCheck()
    {

      this.checkInput();
      this.login();
      const newUser = {
        email: this.email,
        password: this.password
      }


      // Fetching data from the backend using axios
      const response = await axios.post(`${Config.base_url}/user/login`, newUser).then((result)=>{
        // console.log(result);
        return result.data;
      }).then((data)=>{
          // console.log(data.user);
        Vue.$toast.open(`${data.message}`);
          return data;
      }).catch((error)=>{
        console.log("Error is as follows");
        console.log(error);
        this.success = false;
      })

      console.log(response.user);
      console.log(response.token);

      if(response.user){
          console.log(response.user.accessLevel);
          if(response.user.accessLevel == "Student"){
              this.$router.push({path:'/home'  , replace:true})

          }
          else{
            this.$router.push({path: '/teacherHome' , replace:true})
            
          }
          localStorage.setItem("jwtToken" , response.token);
          setAuthHeader(response.token);
          return true;
      }
      else{
        return false;
      }
      
    }

  }

  
}
</script>

<style>

</style>