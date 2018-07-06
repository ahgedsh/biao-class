// let instance;

// class Route{
//      constructor(){
//          this.current= this.parse_hash(window.location.hash) || 'home';
//          this.el_path_list=document.querySelectorAll('.page');
//          this.detect_click();
//          this.detect_hash_change();
//          this.render();
//      }

//      detect_hash_change(){
//          window.addEventListener('hashchange',() =>{
//              this.go(window.location.hash)
//          })
//      }

//      detect_click () {
//         document.addEventListener('click',e=>{
//             var target=e.target;
//             switch(target.nodeName){
//                 case'A':
//                 if(target.host)//如果是外站链接
//                 return;
//                this.go(target.href);
//                 break;
                
//             }
        
//         })
//     }
//     go(hash){
//         //this.current_hash=path;
//         let old_start=this.current;
//         let new_start=this.parse_hash(hash);
//         if(old_start === new_start)
//         return;
//         this.current=new_start;
//         this.render();
//     }

//     render (path){
//         var content;
//         // if(path)
//         // path=path;
//         // else
//         // path=this.current;
//        // path=path || this.current;
//        path=path? path : this.current;
       
//        this.hide_all();
//         content=document.getElementById(path);
//         content.hidden=false;path
//     }

//     hide_all(){
//         this.el_path_list.forEach(el=>{
//             el.hidden=true;
//         })

//     }

//     parse_hash(hash){
//         var hash_arr=hash.split('/');
//         return hash_arr[hash_arr.length-1];
//     }
// }



// function init(){
//     if(!instance)
//     instance=new Route(); 
  
// }


// init();
// export default instance;


import helper from '../Util/helper';
let instance;

class Route{
    // 用于保存当前页面的名称，此名称与对应的页面id是相同的
    //一般是通过this.parse_hash()解析得到
    //'#/a'->'a' ->  <div id='a'>
     //       ^this is current
     //@property {Object} current
     //@property {Object} previous

     //  默认配置项
     //@property {Objiect} def (default config)


     // 可配置项
     //@property {Object} config
     //@var config.routes 记录所有路由状态和设置
     //@var config.before 切换前执行的回调函数，使用者的自定义代码
     //@var config.after 切换后执行的回调函数


     //初始化
     constructor(config){

        this.param={};
        this.load_config(config);
        //默认为首页，但如果地址栏直接有hash就去已有的地址
        this.detect_click();//监听页面中所有的变化
        this.detect_hash_change();//监听地址变化
       this.go(window.location.hash,{force:true})

    }

    //加载所有的配置
    load_config(config){
        this.def={hook :{}};
        this.config=Object.assign({},this.det,config);
        this.load_route_config();
    }
                                                    
    load_route_config(){
        let route_list=this.config.routes;

        for(var name in route_list){
            let route=route_list[name];
            let path=this.trim_hash(route.path);
            let el_path_arr=path.split('/');
            route.param={};
            route.name=name;

            path_arr.forEach((segment,index)=>{
                let is_param=segment.startsWith(':');
                let key=is_param ? segment.subment.substring(1,segment.length) : segment;

                route.$segment=route.$segment || {};

                route.$segment[index]={
                    name: key,
                    position:index,
                    is_param:is_param,
                }
            })
        }
    }
//监听页面中所有的点击事件
    detect_click(){
        document.addEventListener('click',e=>{
            var target=e.target;
            //看看点击的是哪类元素
            switch(target.nodeName){
                //如果是<a>元素
                case'A':
                //如果是外站链接就停止后续操作
                if(target.host){
                    return;

                }
                //去对应的地址
                this.go(target.href);
                break;

            }
        })
    }

//监听地址改变
    detect_hash_change(){
        window.addEventListener('hashchange',()=>{
            //如果发生改变就去对应面
            this.go(window.location.hash)

        })
    }
    
    //更改路由
    //@param {string}hash 原始路径，如#/abouot
    //@param {Object} opt 配置项 如：{force:false};

    go(hash,opt=null){
        this.hide('#not-fond');
        //钩子
        if(this.config.hook.before)
        if(!this.config.hook.berfore())
        return;

        hash =hash || 'home';

        let def={
            force:false,
        };

        opt=Object.assign({},def,opt);
        //通过原始的hash解析真正的页面名称/#/home => home\
        let old_state=this.current;

        //通过地址（也就是hash）判断是哪一个路由
        let new_start=this.parse_hash(hash);

        this.previous=old_state;

        if(!new_start){
            if(this.config.hook.notFount)
            this.config.hool.notFount();
            this.render('#not-found');
            return;
        }
        //设置当前页名
        this.current=new_start;

        console.log('this.current:',this.current);

        if(!this.current.el)
        throw new ReferenceError(`please config route ${this.current.name}el`);
         
        this.render();

        if(this.config.hook.after)
        this.config.hook.after(this.current);
    }

    compile(route){
        route=route || this.current;

        if(!route)
        return;

        let el=document.querySelector(route.el);
        if(!el || !route.param) return;
        let old=document.querySelectorAll('.compiled');
        old.forEach(item => item.remove());
        el.insertAdjacentHAML('afterbegin',`<p class='compiled'>我的ID是${route.param.id}</p>`);

    }
    hide(el){
        var el=document.querySelector(el);
        if(!el)
        return;
        el.hidden=true;
    }
    show(el){
        document.querySelector(el).hidden=false;
    }



    render(selector){
        var content;

       selector=selector || this.current.el;
       //先隐藏所有页面
       this.hide_previous();
      //选中当前页面
       content=document.querySelector(selector);

       if(!content)
       return;

       this.compile(this.current);

       content.hidden=false;
    }
//隐藏所有页面
    hide_previous(){
        if(!this.previous)
        return;

        document.querySelector(this.previous.el).hidden;
    }

    //通过原始hash解析页面名称
    //@return {object}举例{path : '/prticle',param:{id:1}}
    parse_hash(hash){
        hash=this.trim_hash(hash);
        let hash_arr=hash.split('/');
        let routes=this.config.routes;

        for (var name in routs){
            let route =routes[name];
            let $segment=route.$segment;
            let matched=true;

            if(Object.keys($segment).length !=hash_arr.length){
                matched=false;
                continue;
            }

            hash_arr.forEach(function(segment,index){
                let $segment=route.$segment[index];
                let $name=$segment.name;

                if(!$segment){
                    matched=false;
                    return;
                }
                if($segment.is_param){
                    route.param[$name]=segment;

                }else{
                    if($name !=segment){
                        matched=false;
                        return;
                    }
                }
            });

            if(matched)
            return route;
        }
    }

  trim_hash(hash){
      return helper.trim(hash,'#/');
  }
}

function init(){
    if(!instance)
    instance =new Route(config);
}


export default {init}; 