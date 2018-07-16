<template>
    <div id="app">
    <!-- <router-view></router-view>  -->
   
   <dropdown :onSelect="tmp" :list="[
   {name:'whh',id:1},
   {name:'lbb',id:2},
   {name:'lsd',id:3},
   ]"/>
   </div> 
</template>

<script>
import dropdown from './components/dropdown';

export default {
  name: 'app',
  components: {
    dropdown
  },

 methods:{
    tmp(row){
      console.log("row",row);
    }
  }
};
 
  
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
