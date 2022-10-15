<template>
  <div class="outermost">
    <!-- Navigation start -->
    <div class="navigation bg-black">
      <div class="container text-white h-16">
        <div class="navbar flex justify-between">
          <div class="logo mx-8 font-bold text-2xl my-4">
            Quiz<span class="text-yellow-500">Mania</span>
          </div>
          <div class="nav_items flex space-x-8 my-4 mr-4 font-medium -mx-11">
            <div
              class="
                li_items hover:text-yellow-500 hover:font-bold hover:underline hover:underline-offset-8 cursor-pointer">
              Home
            </div>
            <div class="
                li_items hover:text-yellow-500 hover:font-bold hover:underline hover:underline-offset-8 cursor-pointe">
              About
            </div>
            <div @click="leaderBoard()"
              class="
                li_items  hover:text-yellow-500 hover:font-bold hover:underline hover:underline-offset-8 cursor-pointe">
              Leaderboard
            </div>
            <div class="buttons space-x-10">
              <div class="user absolute">
                <button @click="profile()" class="
                  btn bg-purple-800 w-20 h-8  right-10  text-white font-bold text-sm rounded-md hover:bg-purple-900">
                  Profile
                </button>
                <div v-show="success"
                  class="z-10 h-76 w-96  p-10 relative border-2 border-[#f3f7f7] top-4 text-white right-52 bg-[#131417]"
                  id="profile">
                  <h1 class="font-bold font-mono text-2xl ml-16 -mt-4 mb-8">UPDATE PROFILE</h1>
                  <div class="form flex flex-col justify-center items-center space-y-8">
                    <div class="name flex flex-col space-y-2">
                      <label class="font-bold font-mono text-md" for="">Name: </label>
                      <input
                        class="h-12 w-56 px-2 rounded-sm  text-black bg-white  border-2 border-[#f3f7f7] hover:focus cursor-pointer"
                        type="text" disabled v-model="name">
                    </div>
                    <div class="email flex flex-col space-y-2"><label class="font-bold font-mono text-md" for="">Email:
                      </label>
                      <input
                        class="h-12 w-56 px-2 rounded-sm  text-black bg-white  border-2 border-[#f3f7f7] hover:focus cursor-pointer"
                        type="email" disabled v-model="email">
                    </div>
                    <div class="accesslevel flex flex-col space-y-2"><label class="font-bold font-mono text-md"
                        for="">Display Name: </label>
                      <input
                        class="h-12 w-56 px-2 rounded-sm  text-black bg-white border-2 border-[#f3f7f7] hover:focus cursor-pointer"
                        type="text" v-model="displayName">
                    </div>
                    <div class="flex flex-col space-y-2"><label class="font-bold font-mono text-md" for="">Domain
                      </label>
                      <select v-model="domain"
                        class="h-12 w-56 px-2 rounded-sm  text-black bg-white  border-2 border-[#f3f7f7] hover:focus cursor-pointer">
                        <option value="Select Access Level" disabled selected>Select domain</option>
                        <option value="Aptitude">Aptitude</option>
                        <option value="DSA">DSA</option>
                        <option value="Programming">Programming</option>
                      </select>
                    </div>
                    <div class="accesslevel flex flex-col space-y-2"><label class="font-bold font-mono text-md"
                        for="">Country: </label>
                      <select id="country" v-model="country" name="country"
                        class="h-12 w-56 px-2 rounded-sm  text-black bg-white  border-2 border-[#f3f7f7] hover:focus cursor-pointer">
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">Central African Republic</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">Christmas Island</option>
                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The
                        </option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">French Polynesia</option>
                        <option value="French Southern Territories">French Southern Territories</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-bissau">Guinea-bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of
                        </option>
                        <option value="Korea, Republic of">Korea, Republic of</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav
                          Republic of</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                        <option value="Moldova, Republic of">Moldova, Republic of</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">Russian Federation</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                        <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and The South Sandwich Islands">South Georgia and The South
                          Sandwich Islands</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-leste">Timor-leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">Virgin Islands, British</option>
                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>
                    <div class="accesslevel flex flex-col space-y-2"><label class="font-bold font-mono text-md"
                        for="">Bio: </label>
                      <input
                        class="h-12 w-56 px-2 rounded-sm  text-black bg-white  border-2 border-[#f3f7f7] hover:focus cursor-pointer"
                        type="text" v-model="bio">
                    </div>
                    <button @click="updateProfile()"
                      class="
                  btn  w-28 h-10  border-2 border-[#E2DFD2]  text-[#E2DFD2] font-bold text-sm rounded-md hover:border-white hover:text-white">
                      UPDATE
                    </button>

                  </div>
                </div>
              </div>
              <button @click="logout()"
                class="
                  btn bg-purple-800 w-20 relative -right-16 h-8 text-white font-bold text-sm  rounded-md hover:bg-purple-900">
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation end -->


    <!-- Table started  -->

    <div class="table h-screen  w-full bg-[#131417] p-16">

      <div class="heading text-white flex justify-center items-center font-bold text-2xl my-4 font-mono -mt-10">
        <h1 class="flex justify-center mb-4 text-green-500 items-center">RECENT QUIZZES ADDED BY <span
            class="text-yellow-500 ml-4"> {{this.tutorName}}</span></h1>
        <p v-if="flag" class="text-sm text-[#131417]">{{getQuizzes()}}</p>
      </div>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg border-2 border-white">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                ID
              </th>
              <th scope="col" class="py-3 px-6">
                name
              </th>
              <th scope="col" class="py-3 px-6">
                Category
              </th>
              <th scope="col" class="py-3 px-6">
                No. of Questions
              </th>
              <th scope="col" class="py-3 px-6">
                Difficulty Level
              </th>
              <th scope="col" class="py-3 px-6">
                Attempted By
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody id="quizzesInfo">


            <tr v-for="quiz in allQuizzes" :key="quiz._id" class="bg-[#131417] border-b   dark:border-gray-700">
              <td class="py-4 px-6">
                {{quiz.quizId}}
              </td>
              <td class="py-4 px-6">
                {{quiz.quizName}}
              </td>
              <td class="py-4 px-6">
                {{quiz.category}}
              </td>
              <td class="py-4 px-6">
                {{quiz.totalQuestions}}
              </td>
              <td class="py-4 px-6">
                {{quiz.difficultyLevel}}
              </td>
              <td class="py-4 px-6">
                {{quiz.attemptedBy}}
              </td>
              <td class="py-4 px-6">
                <a href="#" @click="updateQuiz(quizId)"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Update</a>
              </td>
            </tr>

          </tbody>
        </table>


      </div>

      <div class="button flex justify-center space-x-8">
        <div
          class="btn h-10 w-40 mt-8 font-bold  border-2 border-white flex justify-center items-center text-white rounded-sm hover:border-green-500 hover:text-green-500 ">
          <router-link to="/addQuiz" exact>Add a new Quiz</router-link>
        </div>

      </div>



    </div>


    <!-- Table ended  -->

  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import Config from '../config.js';
import VueToast from 'vue-toast-notification';
Vue.use(VueToast);
import 'vue-toast-notification/dist/theme-sugar.css';
import setAuthHeader from '@/utils/setAuthHeader';
export default {

  name: 'TeacherHomePage.vue',
  data() {
    return {
      success: false,
      flag: true,
      tutorName: '',
      name: '',
      email: '',
      displayName: '',
      domain: '',
      country: '',
      bio: '',
      accessLevel: '',
      allQuizzes: []
    }
  },
  methods: {

    logout() {
      this.$router.push({ path: '/login', replace: true })
      Vue.$toast.open('You are successfully logged out');
      setAuthHeader(false);
    },

    async profile() {

      try {
        const userInfo = await axios.get(`${Config.base_url}/user/loggeduser`);
        this.name = userInfo.data.user.name;
        this.email = userInfo.data.user.email;
        this.displayName = userInfo.data.user.displayName;
        this.domain = userInfo.data.user.domain;
        this.country = userInfo.data.user.country;
        this.bio = userInfo.data.user.bio;

      } catch (error) {
        console.log(error);
      }

      this.success = !this.success;

    },

    async getQuizzes() {

      this.flag = false;


      // Display Tutor Name




      try {

        const userInfo = await axios.get(`${Config.base_url}/user/loggeduser`);
        this.tutorName = userInfo.data.user.name;
        this.tutorName = this.camelize(this.tutorName);
        const tutorDomain = userInfo.data.user.domain;

        const result = await axios.get(`${Config.base_url}/quiz/quizzes`);
        const quizzes = result.data.quizzes;
        quizzes.sort((a, b) => b.quizId - a.quizId);
        console.log('Quizzes result is', quizzes);
        // this.allQuizzes = quizzes;



        quizzes.forEach(quiz => {
          if (quiz.category == tutorDomain) {
            this.allQuizzes.push(quiz);
          }
        });


      }
      catch (error) {
        console.log(error.name);
        console.log(error.message);
      }



    },


    leaderBoard() {
      this.$router.push({ path: '/leadboard', replace: true })
    },



    // UPDATE PROFILE Function
    async updateProfile() {

      const userInfo = await axios.get(`${Config.base_url}/user/loggeduser`);
      console.log(userInfo);
      const id = userInfo.data.user._id;
      const displayName = this.displayName;
      const domain = this.domain;
      const country = this.country;
      const bio = this.bio;

      const doc = {
        id,
        displayName,
        domain,
        country,
        bio
      }

      const response = await axios.post(`${Config.base_url}/user/updateProfile`, doc);
      Vue.$toast.open(response.data.message);

    },




    // Update Quiz Function
    async updateQuiz(quizId) {
      console.log("updateQuiz Function has called");
      console.log("**** Quiz ID in teacher home page ***", quizId);
      let doc = { quizId };
      const response = await axios.post(`${Config.base_url}/quiz/updateQuiz`, doc);

      if (response) {
        localStorage.setItem('quizId', quizId);
        this.$router.push({ path: '/addQuestion', replace: true })

      }
      else {
        console.log("Quiz Does not Exists");
      }

    },


    // Add Quiz Function
    addQuiz() {

      this.$router.push({ path: '/addQuiz', replace: true })

    }




  }

}
</script>

<style>

</style>