
var routes=[
    {
        path:'/',
        component:{
            template:`<div>
            <h1>首页</h1>
            </div>`,
        }
    },{
        path:'/login',
        component:{
            template:`<div>
            <h1>登陆</h1>
            </div>`
        }
    },
    {
        path:'/post',
        meta:{

            login_required:true,
        },
        component:{

            template:`<div>
            <h1>帖子管理</h1>
            <router-link to='rain' append>后座</router-link>
            <router-view></router-view>
            
            </div>`
        },
        children:[
            {
                path:'rain',
                component:{
                    template:`
                    <div>雨天的单车后座</div>`
                }
            }
        ]
        
    }
   
    
];

var router=new VueRouter({
    routes:routes,
});
router.beforeEach((to,from,next)=>{
    let logged_in=false;
    if(!logged_in && to.matched.some(function(item){
        return item.meta.login_required;
    }))
    next('/login');
    else{
        next();
    }
})

new Vue({
    el:'#app',
    router:router,
});