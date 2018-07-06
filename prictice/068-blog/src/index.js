import article_api from './Api/article';
import article_ui from './Ui/article';
import route from './Route/route';

let route_config={
    routes : {
        home:{
            path:'/home/a/b',
            el:'#home',
        },
        about :{
            path:'/about',
            el:'#about',
        },
        article:{
            path:'/article/:author/:id',//['article',':author',':id']
            el:'#article',
        },

        article_list:{
            path:'/article-list',
            el:'#srticle-list',
        },

        tag:{
            psth:'/tag',
            el:'#tag',
        },

    },

    hook :{
        before:function (){
            return true;
        },
        after:function(route){
            //先通过接口拿到数据
            article_api.read(1,data=>{
                article_api.render(data);
            })
        }
    }
}

route.init(route_config);

