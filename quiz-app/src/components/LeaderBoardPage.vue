<template>
  <div class="outermost h-screen bg-[#131417]">
    <h1 class="font-sans text-2xl text-green-500 font-bold flex justify-center pt-2  -mb-10">Welcome to    <span class="text-yellow-500 ml-2"> LeadBoard</span></h1>
    <div class="btn  text-[#131417]  mt-4">
      {{ getData()  }}

    </div>


    <!-- Table Section Starts -->
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


    <!-- Table section End -->


  </div>
</template>

<script>
import axios from 'axios';
import Config from '../config.js';

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
        const result = await axios.get(`${Config.base_url}/user/all-users`);
        const Users = await result.data.users;

        let UsersInfo = document.getElementById('UsersInfo');


        let htmlUserInfo = ``;

        console.log(Users);
        Users.sort((a, b) => b.score - a.score);
        let rank = 0;

        Users.forEach(async (user,index) => { 
          if(index > 0 && Users[index-1].score === Users[index].score )
          {
            rank;
          }
          else{
            rank++;
          }

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


        });

        UsersInfo.innerHTML = htmlUserInfo;




      } catch (error) {
        console.log(error);
      }

    }
  }

}

</script>

<style>

</style>