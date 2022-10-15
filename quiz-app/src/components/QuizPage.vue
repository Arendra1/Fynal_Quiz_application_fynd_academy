<template>
  <div class="outermost h-screen bg-[#131417] -mt-16">
    <!-- <h1 class="font-sans text-2xl text-white font-bold flex justify-center pt-2">Welcome to the Quiz Page</h1> -->

    <!-- sample quiz start -->

    <div class="flex w-full h-screen justify-center items-center "  id="app">
        <p v-if="success" >{{currentQuiz()}}</p>
        <p v-else ></p>
        <div class="w-full max-w-xl">
            <h1 class="font-bold text-5xl text-center text-indigo-700">Attemp Quiz</h1>
            <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
                <div v-if="index < count">
                    <p class="text-2xl font-bold">
                        {{questions[index]['question']}}
                    </p>
                    <!-- <label :for="key" class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg"
                        v-for="(answer , key) in questions[index]['answers']" :key="key" >
                        <input type="radio" :id="key" class="hidden" :value="key" @change="answered($event)"
                            :disabled=" selectedAnswer != '' ">
                        {{answer}}
                    </label> -->
                    <!-- <label for="key" class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg"
                     v-for="(answer, key) in questions[index]['answers']" :key="key" ></label> -->

                     <label :for="key" class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg"
                        v-for="answer , key in questions[index]['answers']" :key="key" :class="{'hover:bg-gray-100 cursor-pointer' :  selectedAnswer == ''  } &&
                     {'bg-red-200': selectedAnswer == key} &&
                     {'bg-green-200' : key == questions[index]['correctAnswer'] && selectedAnswer != ''}">
                        <input type="radio" :id="key" class="hidden" :value="key" @change="answered($event)"
                            :disabled=" selectedAnswer != '' ">
                        {{answer}}
                    </label>

                    <div class="mt-6 flow-root">
                        <button
                            class="float-right px-5 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full"
                            v-show="selectedAnswer != '' && (index < (count - 1))" @click="nextQuestion()">
                            Next &gt;
                        </button>
                        <button
                            class="float-right px-5 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full"
                            v-show="selectedAnswer != '' && (index === count - 1)" @click="showResults()">
                            Result
                        </button>
                    </div>
                </div>
                <div v-else>
                    <h2 class="text-bold text-3xl">Results</h2>
                    <div class="flex justify-start space-x-4 mt-6">
                        <p>Correct Answers : <span class="text-2xl text-green-700 font-bold"> {{correctAnswer}}</span>
                        </p>
                        <p>Wrong Answers : <span class="text-2xl text-red-700 font-bold"> {{wrongAnswer}}</span></p>
                    </div>
                </div>
                <div class="mt-6 flow-root">
                    <button
                        class="float-right px-5 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full"
                        v-show=" selectedAnswer != '' && index == count "
                        @click="resetQuiz()">
                         Finish
                    </button>
                </div>
            </div>
        </div>
    </div>


    <!-- sample quiz end -->

  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'QuizPage',
  data(){
        return{
            success: true,
            totalScore:0,
            index : 0,
            count : 3,
            correctAnswer: 0,
            wrongAnswer: 0,
            selectedAnswer : "",
            questions : [
                {
                    question : 'Which one of the following is an application of Stack Data Structure?',
                    answers : {a: 'Managing function calls', b:'The stock span problem' , c: 'Arithmetic expression evaluation' , d: 'All of the above'},
                    correctAnswer : 'd'
                },
                {
                    question : 'Which one of the following is an application of Queue Data Structure?',
                    answers : {a: 'When a resource is shared among multiple consumers', b:'When data is transferred asynchronously (data not necessarily received at same rate as sent) between two processes' , c: 'Load Balancing' , d: 'All of the above'},
                    correctAnswer : 'd'
                },
                {
                    question : 'Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?',
                    answers : {a: 'Merge Sort', b:'Heap Sort' , c: 'Quick Sort' , d : 'Insertion Sort'},
                    correctAnswer : 'a'
                },
                {
                    question : 'Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?',
                    answers : {a: 'Merge Sort', b:'Heap Sort' , c: 'Quick Sort' , d : 'Insertion Sort'},
                    correctAnswer : 'a'
                },
                {
                    question : 'Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?',
                    answers : {a: 'Merge Sort', b:'Heap Sort' , c: 'Quick Sort' , d : 'Insertion Sort'},
                    correctAnswer : 'a'
                }
            ]
        }
    },

    methods :{

        // Fetching and assigning the current quiz function start


        async currentQuiz()
        {
            setTimeout(async()=>{

            console.log('Current Quiz Function has called');
            const quizId = localStorage.getItem('quizId');
            console.log("Quiz Id from localStorage ********** : ",quizId,"  **********");
            let doc = {quizId};
            const response = await axios.post('http://localhost:8000/api/quiz/getQuiz', doc);
            // console.log("Quiz ID : ", quizId);
            console.log("****current  Quiz in current quiz page  *** : ", response.data.quiz);

            let quiz = await response.data.quiz;

            const _id = quiz._id;
            const count = quiz.attemptedBy + 1;

            const bdyObj = {
                _id,
                count
            }
            
            // INCREMENT IN ATTEMPTED BY OF CURRENT QUIZ
            const result = await axios.post('http://localhost:8000/api/quiz/incAttemptedBy',bdyObj);  
            console.log(result);


            if(quiz)
            {
                // console.log(quiz.questions);
                this.questions = quiz.questions;
                // this.count = this.questions.length;
            }else{
                console.log('Quiz Does not Exists');
            }

            this.success = false;




            },400)

        },



        // Fetching and assigning the current quiz function end





        answered(e){ 
            // console.log(e);
            // console.log(e.target.value);
            this.selectedAnswer = e.target.value;
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
            {
                this.correctAnswer++;
            }
            else{
                this.wrongAnswer++;
            }
            // console.log(this.questions[this.index]['correctAnswer']);
            // console.log(this.correctAnswer + " " + this.wrongAnswer);
        },
        nextQuestion(){
            this.index++;
            this.selectedAnswer = '';
        },
        showResults(){
            this.index++;
            this.totalScore += this.correctAnswer;
            console.log(this.correctAnswer);
            console.log(` Total score is : ${this.totalScore}`);
        },
       async  resetQuiz(){

            try{

                const userInfo = await axios.get('http://localhost:8000/api/user/loggeduser');
                console.log(userInfo);
                console.log('Correct Answers are : ', this.correctAnswer);
                let newScore = this.correctAnswer;
                let id = userInfo.data.user._id;
                let originalScore = userInfo.data.user.score;
                let totalScore =  originalScore +  newScore;
                console.log( 'originalScore',totalScore);

                let userIdAndScore = {
                    id,
                    totalScore
                }

                console.log('userIdAndScore : ',userIdAndScore);
                const response = await axios.post('http://localhost:8000/api/user/update' ,userIdAndScore );
                console.log(response);
                this.$router.push({path:'/home',replace:true});
                localStorage.removeItem('quizId');

            }
            catch(error){
                console.log(error);
            }

            this.index = 0;
            this.selectedAnswer = '';
            this.correctAnswer = 0;
            this.wrongAnswer = 0;
        }
    }




}
</script>

<style>

</style>