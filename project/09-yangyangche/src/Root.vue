<template>
  <!-- <div >
   <Dropdown :list="[
   {name:'whh',id:1},
   {name:'lbb',id:2},
   {name:'lsd',id:3},
   ]" :onSelect="yo" />  
  </div> -->
  <div>
     <router-view></router-view>   
     <!-- <Location :onSelect="tmp" />  -->
   
  </div>
</template>

<script>
/* eslint-disable */
import Home from './page/Home';
import Detail from './page/Detail';
import Login from './page/Login';
import Signup from './page/Signup';
import Me from './page/settings/Me';
import User from './page/admin/User';
import Vehicle from './page/admin/Vehicle';

import SearchResult from './page/SearchResult.vue';
import Location from './components/Location';





// import Dropdown from './components/Dropdown';







export default {
  name: 'root',
  
  components: {
    Home,
  Detail,
  Login,
  Signup,
  Me,
  
  User,
  SearchResult,
   Vehicle,
   Location
   
  },
  methods:{
    tmp(row){
      console.log("row",row);
    }
  }

};

</script>

<style>

</style>
