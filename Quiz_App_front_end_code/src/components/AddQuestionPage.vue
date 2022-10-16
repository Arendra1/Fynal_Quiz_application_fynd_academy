<template>
    <div class="outermost h-screen bg-black">
        <!-- <h1 class="font-sans text-2xl text-white font-bold flex justify-center pt-2">Add a new Quiz</h1> -->

        <div class="z-10 h-76 w-full p-10 border-2 flex border-[#f3f7f7] top-4 text-white  bg-[#131417]" id="profile">
            <div
                class="form flex flex-col w-fit border-2 border-green-300 justify-center items-center space-y-8 p-6 ml-[30vw] ">
                <h1 class="font-bold font-mono text-2xl text-green-500">ADD NEW<span class=" text-yellow-500">
                        QUESTION</span>
                </h1>
                <div class="flex flex-col space-y-2">
                    <label class="font-bold font-mono text-md" for="">Question</label>
                    <input
                        class="h-12 w-96 px-10 text-black rounded-sm  border-2 border-[#f3f7f7] hover:focus cursor-pointer"
                        type="text" v-model="question">
                </div>
                <div class="flex flex-col space-y-2">
                    <label class="font-bold font-mono text-md" for="">Option 1</label>
                    <input
                        class="h-12 w-96 px-10 text-black rounded-sm  border-2 border-[#f3f7f7] hover:focus cursor-pointer"
                        type="text" v-model="a">
                </div>
                <div class="flex flex-col space-y-2">
                    <label class="font-bold font-mono text-md" for="">Option 2</label>
                    <input
                        class="h-12 w-96 px-10 text-black rounded-sm  border-2 border-[#f3f7f7] hover:focus cursor-pointer"
                        type="text" v-model="b">
                </div>
                <div class="flex flex-col space-y-2">
                    <label class="font-bold font-mono text-md" for="">Option 3</label>
                    <input
                        class="h-12 w-96 px-10 text-black rounded-sm  border-2 border-[#f3f7f7] hover:focus cursor-pointer"
                        type="text" v-model="c">
                </div>
                <div class="flex flex-col space-y-2">
                    <label class="font-bold font-mono text-md" for="">Option 4</label>
                    <input
                        class="h-12 w-96 px-10 text-black rounded-sm  border-2 border-[#f3f7f7] hover:focus cursor-pointer"
                        type="text" v-model="d">
                </div>
                <div class="flex flex-col space-y-2"><label class="font-bold font-mono text-md" for="">Answer </label>
                    <select v-model="answer"
                        class="h-12 w-96 px-10 text-black rounded-sm bg-[#f3f7f7] border-2 border-[#f3f7f7] hover:focus cursor-pointer">
                        <option value="Select Answer" disabled selected>Select Answer</option>
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>
                        <option value="d">d</option>
                    </select>
                </div>
                <div class="btn flex space-x-10">
                    <button @click="addQuestion()"
                        class="btn h-10 w-32 mt-4 font-bold  border-2 border-green-500 flex justify-center items-center text-green-500  rounded-sm hover:border-yellow-500 hover:text-yellow-500 ">
                        Add Question
                    </button>
                    <button @click="goBack()"
                        class="btn h-10 w-32 mt-4 font-bold  border-2 border-green-500 flex justify-center items-center text-green-500  rounded-sm hover:border-yellow-500 hover:text-yellow-500 ">
                         Go Back
                    </button>
                </div>
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
    data() {

        return {

            question: '',
            a: '',
            b: '',
            c: '',
            d: '',
            answer: ''

        }
    },

    methods: {

        goBack() {
            console.log("goBack Function Invoked");
            localStorage.removeItem('quizName');
            this.$router.push({ path: '/teacherHome', replace: true });

        },

        async addQuestion() {

            console.log("Add Question function called");
            const question = this.question;
            const a = this.a;
            const b = this.b;
            const c = this.c;
            const d = this.d;
            const answer = this.answer;

            const doc = {
                question,
                a,
                b,
                c,
                d,
                answer
            }

            console.log("Data Recieved from Body : ", doc);



            if (question && a && b && c && d && answer) {
                const quizName = localStorage.getItem('quizName');
                let bodyObj = { quizName };

                const result = await axios.post('http://localhost:8000/api/quiz/getQuizByName', bodyObj);
                console.log(result);

                        //   const response = await axios.post('http://localhost:8000/api/id/addId',doc);
                        //   console.log( "Response from AddId ",response);
                        //   if(response.message == "Quiz Added Successfully")
                        //   {
                        //     Vue.$toast.open('Question Added Successfully');

                        //   }
                        //   else{

                        //     Vue.$toast.open('Quiz already Exists');
                        //   }

                    }
                    else {

                        Vue.$toast.open('ALL fields are required');
                    }

            }


        }

    }
</script>
    
<style>

</style>