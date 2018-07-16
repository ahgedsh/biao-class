import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import A from './components/A.vue'
import B from './components/B.vue'
import report from './components/report.vue'
import dropdown from './components/dropdown.vue'

Vue.use(Router)

Vue.config.productionTip = false;

Vue.filter('percentage',function(value){
  if(!value)
  return 0;

 return  value.toFixed(2)*100+'%'
})



var routes = [
  { path: '/a', component: A },
  { path: '/b', component: B },
  { path: '/report', component: report},
  
]
new Vue({
  render: h => h(App),
  router: new Router({
    routes
  })
}).$mount('#app')
