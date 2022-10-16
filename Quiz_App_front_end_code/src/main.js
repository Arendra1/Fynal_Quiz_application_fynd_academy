import Vue from 'vue'
import App from './App.vue'

import './input.css'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(VueToast)

import LogInPage from './components/LogInPage.vue';
import HomePage from './components/HomePage.vue';
import SignUpPage from './components/SignUpPage.vue';
import TeacherHomePage from './components/TeacherHomePage.vue';
import QuizPage from './components/QuizPage.vue';
import AddQuizPage from './components/AddQuizPage.vue';
import LeaderBoardPage from './components/LeaderBoardPage.vue';
import AddQuestionPage from './components/AddQuestionPage.vue';
import setAuthHeader from './utils/setAuthHeader.js';

Vue.config.productionTip = false

const routes = [
  {path:'/' , component : SignUpPage},
  {path:'/login' , component : LogInPage},
  {path:'/home' , component : HomePage},
  {path:'/teacherHome' , component : TeacherHomePage},
  {path:'/quiz' , component : QuizPage},
  {path:'/addQuiz' , component : AddQuizPage},
  {path:'/leadboard' , component : LeaderBoardPage},
  {path:'/addQuestion' , component : AddQuestionPage}

];


if(localStorage.jwtToken){
  setAuthHeader(localStorage.jwtToken);
}
else{
  setAuthHeader(false);
  
}

const router = new VueRouter({
      routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
