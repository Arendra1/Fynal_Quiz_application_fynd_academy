<template>
  <div class="outermost h-screen bg-black">
    <!-- <h1 class="font-sans text-2xl text-white font-bold flex justify-center pt-2">Add a new Quiz</h1> -->

    <div class="z-10 h-76 w-full p-10 border-2 flex border-[#f3f7f7] top-4 text-white  bg-[#131417]" id="profile">
      <div
        class="form flex flex-col w-fit border-2 border-green-300 justify-center items-center space-y-8 p-6 ml-[30vw] ">
        <h1 class="font-bold font-mono text-2xl text-green-500">ADD A <span class=" text-yellow-500">NEW QUIZ</span>
        </h1>
        <div class="flex flex-col space-y-2">
          <label class="font-bold font-mono text-md" for="">Quiz Name </label>
          <input class="h-12 w-96 px-10 text-black rounded-sm  border-2 border-[#f3f7f7] hover:focus cursor-pointer"
            type="text" v-model="quizName">
        </div>
        <div class="flex flex-col space-y-2"><label class="font-bold font-mono text-md" for="">Category </label>
          <select v-model="category"
            class="h-12 w-96 px-10 text-black rounded-sm bg-[#f3f7f7] border-2 border-[#f3f7f7] hover:focus cursor-pointer">
            <option value="Select Access Level" disabled selected>Select domain</option>
            <option value="Aptitude">Aptitude</option>
            <option value="DSA">DSA</option>
            <option value="Programming">Programming</option>
          </select>
        </div>
        <div class="flex flex-col space-y-2"><label class="font-bold font-mono text-md" for="">Difficulty Level</label>
          <select v-model="difficultyLevel"
            class="h-12 w-96 px-10 text-black rounded-sm bg-[#f3f7f7] border-2 border-[#f3f7f7] hover:focus cursor-pointer">
            <option value="Select Level" disabled selected>Select level</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <button @click="addQuiz()"
          class="btn h-10 w-40 mt-4 font-bold  border-2 border-green-500 flex justify-center items-center text-green-500  rounded-sm hover:border-yellow-500 hover:text-yellow-500 ">
          <router-link to="/addQuiz" exact>Add Quiz</router-link>
        </button>
      </div>



    </div>
  </div>
</template>
  
<script>
import Vue from 'vue';
import axios from 'axios';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);

export default {

  name: 'AddQuizPage',
  data() {

    return {

      quizName: '',
      category: '',
      difficultyLevel: ''

    }
  },

  methods:{

    async addQuiz(){

      console.log("Add Quiz function called");
      const quizName = this.quizName;
      const category = this.category;
      const difficultyLevel = this.difficultyLevel;

      const doc = {
        quizName,
        category,
        difficultyLevel
      }

      console.log("Data Recieved from Body : ", doc);


      if(quizName && category && difficultyLevel)
      {
        const response = await axios.post('http://localhost:8000/api/id/addId',doc);
        console.log( "Response from AddId ",response);
        if(response.message == "Quiz Added Successfully")
        {
          Vue.$toast.open('Quiz Added Successfully');
          localStorage.setItem('quizName' ,quizName );
          this.$router.push({path:'/addQuestion', replace:true})

        }
        else{
          
          Vue.$toast.open('Quiz already Exists');
        }
        
      }
      else{

        Vue.$toast.open('ALL fields are required');
      }

      


    }
    

  }

}
</script>
  
<style>

</style>