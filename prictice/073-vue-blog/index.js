// const Home=Vue.component('home',{
//     template:`<div >
//     <h1>我的文章</h1>
//     <router-link
//      :key='row.id'
//      v-for='row in article_list'
//      :to="'article/' +row.id"
//      > {{row.title}}<br></router-link>
//     </div>`,
//     data:function(){
//         return {
//             article_list:[],
//         };
//     },
//     methods:{
//         read:function(){
//             http.post('article/read',{only:['title','id']})
//             .then(res=>{
//                 this.article_list=res.data.data;
//             });
//         },

//     },
//     mounted(){
//         this.read();
//     }
// });
// const ArticleDetail=Vue.component('article-detail',{
//     template:`
//     <div>
//     <h1>{{current.title}}</h1>
//     <div>{{current.author}}</div>
//     <div>{{current.content}}</div>
//     </div>`,
//     data:function(){
//         return{
//             current:{},
//         };
//     },
//     mounted(){
//         http.post('article/find',{id:this.$route.params.id})
//         .then(res=>{
//             this.current=res.data.data
//         });

//     }

// });


// const ArticleNew=Vue.component('article-new',{
//     template:`
//     <div>
//     <h1>写文章</h1>
//     <form @submit='on_submit($event)'>
//     <input  v-model='current.title' placeholder='标题'>
//     <input v-model='current.author' placeholder='作者'>
//     <textarea v-model='current.content' placeholder='内容'></textarea>
//     <button type='submit'>添加文章</button>
//     </form>
//     </div>`,
//     data (){
//         return{

//             current:{},
//         }
//     },
//     methods:{
//         on_submit:function(e){
//             e.preventDefault();

//             http.post('article/create',this.current)
//             .then(res=>{
//                 if(res.data.succeed){
//                     this.current={};
//                 }
//             })
//         }
//     }

// })


//  new Vue({
//      el:'#root',
//      router:new VueRouter({
//          routes:[
//              {path:'/',component:Home},
//              {path:'/article/new',component:ArticleNew},
//              {path:"/article/:id",component:ArticleDetail},
//          ]
//      })
//  })


const Home=Vue.component('home',{
    template:`
    <div>
    <h1>我的文章</h1>
    <router-link
    :key='row.id'
    v-for='row in article_list'
    :to="'article/'+row.id"
    >{{row.title}}<br>
    </router-link>
    </div>
    
    `,
   
    data:
        function(){
            return {
                article_list:[],
            }
    },
    
    
    methods:{
        read:function(){
            http.post('article/read',{only:['title','id']})
            .then(res=>{
                this.article_list=res.data.data
            })
        }
    },
    mounted(){
    this.read()
    },
    
    

});


constHome=Vue.component('home',{
    template:`
    <div>
    <h1>我的文章</h1>
    <router-link
    :key='row.id'
    v-for='row in article_list
    :to="'article/'+row.id"
    >{{row.title}}<br>
    </router-link>
    </div>
    `,
    data:function(){
        return{
            article_list=[],
        }
    },
    methods:{
        read:function(){
            http.post('article/read',{only:['title','id']})
            .then(res=>{
                this.article_list=res.data.data;
            })
        }
    },
    mounted(){
        this.read();
    },


    
});
const ArticleDetail=Vue.component('article-detail',{
    template:`
    <div>
    <h1>{{current.title}}</h1>
    <div>{{current.author}}</div>
    <div>{{current.content}}</div>
    </div>
    `,
    data:function(){
        return{
            current:{},
        }
    },
    methods:{
        find:function(){
            http.post('article/find',{id:this.$route.params.id})
            .then(res=>{
                this.current=res.data.data
            })
        }

    },
    mounted(){
        this.find();
    }
    
});

const ArticleDetail= Vue.component('article-detail',{
    template:`
    <div>
    <h1>{{current.title}}</h1>
    <div>{{current.author}}</div>
    <div>{{current.content}}</div>
    </div>`,
    data:function(){
        return{
            current={},
    
        }
    },
    mounted:function(){
        http.post('article/find',{id:this.$route.params.id})
        .then(res=>{
            this.current=res.data.data;
        })
    }
});



const ArticleNew=Vue.component('article-new',{
    template:`
    <div>
    <h1>写文章</h1>
    <form @submit='on_submit($event)'>
    <input v-model='current.title' placeholder='标题'>
    <input v-model='current.author' placeholder='作者'>
    <textarea v-model='current.content' placeholder='内容'></textarea>
    <button type='submit'>添加文章</button>
    </form>


    </div>
    
    `,
    data:function(){
        return{
            current:{},
        }
    },

    methods:{
        on_submit:function(e){
            e.preventDefault();
            http.post('article/create',this.current)
            .then(res=>{
                if(res.data.succeed){
                    this.current={};
                }
            })
        }
    }

});

const ArticleNew=Vue.component('article-new',{
    template:`
    <div>
    <form @submit='on_submit($event)'>
    <input v-model='current.title' placehlder='标题'>
    <input v-model='current.author' placeholder='作者'>
    <textarea v-model='current.content' placeholder='内容'>
    <button type='submit'>提交</button>
    </form>

    </div>
    `,
    data:function(){
        return{
            current={},
        }
    },
    methods:{
        on_submit:function(e){
            e.preventDefault();
            http.post('article/create',this.current)
            .then(res=>{
                if(res.data.succeed){
                    this.current={};
                }
            })

        }
    }
});

new Vue({
    el:'#root',
    router:new VueRouter({
        routes:[
            {path:'/',component:Home},
            {path:'/article/new',component:ArticleNew},
            {path:'/article/:id',component:ArticleDetail}
        
    })
})













new Vue({
    el:'#root',
    router:new VueRouter({
        routes:[
            {path:'/',component:Home},
            {path:'/article/new',component:ArticleNew},
            {path:'/article/:id',component:ArticleDetail},
        ]
    })
})