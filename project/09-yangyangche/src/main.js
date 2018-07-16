import 'normalize.css';
import './main.css';
import '@fortawesome/fontawesome-free/css/all.css'



import Vue from 'vue';
import Root from './Root.vue';
import Router from 'vue-router';


import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/Signup';
import Detail from './page/Detail';

import AdminBase from './page/admin/Base';
import  User from './page/admin/User';
import Vehicle from './page/admin/Vehicle';
import Brand from './page/admin/Brand';
import Design from './page/admin/Design';
import Model from './page/admin/Model';
import Report from './page/admin/Report';
import Location from './components/Location.vue';



import Search from './page/Search.vue';



Vue.filter('only_day',function(value){
  if(!value)
    return value;
  return value.split(' ')[0];
});

// Vue.filter('percentage',function(value){
//   if(!value)
//   return 0;
//   return value.toFixed(2)*100+'%';
// });
Vue.filter('percentage', function (value) {
  if (!value)
    return 0;
  return value.toFixed(2) * 100 + '%';
  console.log(value);
});












Vue.use(Router);

const router= new Router({
  routes:[
    {path:'/',component:Home},
    {path:'/login',component:Login},
    {path:'/signup',component:Signup},
    {path:'/detail/:id',component:Detail},
    {path:'/search',component:Search},
    


   
    {path:'/admin',
    component:AdminBase,
     children:[
       {path:'user',component:User},
       {path:'vehicle',component:Vehicle},
       {path:'brand',component:Brand},
       {path:'design',component:Design},
       {path:'model',component:Model},
       {path:'location',component:Location},
       {path:'report',component:Report},



     ]}
  ]
})
  


Vue.config.productionTip = false

new Vue({
  render: h => h(Root),
  router:router,


}).$mount('#root')
