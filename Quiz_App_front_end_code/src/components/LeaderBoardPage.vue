<template>
  <div class="outermost h-screen bg-[#131417]">
    <h1 class="font-sans text-2xl text-green-500 font-bold flex justify-center pt-2  -mb-10">Welcome to    <span class="text-yellow-500 ml-2"> LeadBoard</span></h1>
    <!-- <p class="text-white"> This is score {{score}}</p> -->
    <div class="btn  text-[#131417]  mt-4">
      {{ getData()  }}
      <!-- <button class="
            btn bg-purple-800 w-24 h-8 text-white font-bold text-sm rounded-md hover:bg-purple-900" @click="getData()">Get Data {{ getData() }}
      </button> -->
    </div>

    <!-- Tabke data Starts -->


    <div class="table h-screen  w-full bg-[#131417] p-16">
      <div class="heading text-white flex justify-center items-center font-bold text-2xl my-4 font-mono -mt-10 px-40">

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg border-2 border-white w-full ">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400" >
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Country
                </th>
                <th scope="col" class="py-3 px-6">
                  Rank
                </th>
                <th scope="col" class="py-3 px-6">
                  Score
                </th>
              </tr>
            </thead>
            <tbody class="table_body" id="UsersInfo">

            </tbody>
          </table>
        </div>

      </div>
    </div>


    <!-- Tabke data End -->


  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LeaderBoardPage',
  data() {
    return {
      score: 0,
      success : true

    }
  },
  methods: {
    async getData() {
      try {
        const result = await axios.get('http://localhost:8000/api/user/all-users');
        // console.log(result.data.users);
        // console.log(result.data.message);
        const Users = await result.data.users;

        // let username = document.getElementById('username');
        // let useremail = document.getElementById('useremail');

        let UsersInfo = document.getElementById('UsersInfo');



        // let htmlusername = `<h1 class="font-sans w-[20vw] text-2xl text-white font-bold ">Student Name</h1>`;
        // let htmluseremail = `<h1 class="font-sans w-[20vw] text-2xl text-white font-bold ">Email Id</h1>`;
        let htmlUserInfo = ``;

        console.log(Users);
        Users.sort((a, b) => b.score - a.score);
        let rank = 0;
        // let length = Users.length ;


        // let flagApi = 'https://countryflagsapi.com/png/br';
        Users.forEach(async (user,index) => { 
          // console.log("index is : ", index);
          if(index > 0 && Users[index-1].score === Users[index].score )
          {
            rank;
          }
          else{
            rank++;
          }

          // for flag of countries
          // let countryName = user.country;
          // const  country =  countryName.toLowerCase();
          // const countryFlag = await axios.get(`https://countryflagsapi.com/png/${country}`);
          // console.log("countryFlag : ", countryFlag);

          htmlUserInfo += `<tr class="bg-[#131417] border-b   dark:border-gray-700">
              <td class="py-4 px-6">
                ${user.name}
              </td>
              <td class="py-4 px-6">
                ${user.country}
              </td>
              <td class="py-4 px-6">
                ${rank}
              </td>
              <td class="py-4 px-6">
                ${user.score}
              </td>
            </tr>`


          // htmlusername += `<p class="mt-4 ">${user.name}</p>`;
          // htmluseremail += `<p class="mt-4">${user.email}</p>`;
        });

        UsersInfo.innerHTML = htmlUserInfo;


        // username.innerHTML = htmlusername;
        // useremail.innerHTML = htmluseremail;


      } catch (error) {
        console.log(error);
      }

    }
  }

}

// this.getData();
// let score = 0;
// console.log(score);
</script>

<style>

</style>