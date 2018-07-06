let about_data = {
    name : '王花花',
    age:10,
  };
  
  let o = {
    default : 'home',
    route   : {
      home  : {
        path         : '#/home/',
        el           : '#home',
        template_url : './tpl/home.html',
        data         : {
          name:'王花花',
          
        },
        hook:{
          before:function(){},
          after:function(){

            let list=[
              {
                title:'ABC',
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam obcaecati, similique quasi eos in temporibus, magnam sequi atque alias enim laudantium amet molestias incidunt eum consectetur impedit officiis libero repellat?'
              },
              {
                title:'DEF',
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam obcaecati, similique quasi eos in temporibus, magnam sequi atque alias enim laudantium amet molestias incidunt eum consectetur impedit officiis libero repellat?'
              }
            ]
            let el_list=document.querySelector('article-list');

            list.forEach(row =>{
              let el_item=document.cretteElement('div');

              el_item.innerHTML=`    
              <h3>${row.title}</h3>
              <div>${row.content}</div>
              `;
            })

            
          }
        }
      },
      about : {
        path         : '/about',
        el           : '#about',
        template_url : './tpl/about.html',
        data         : about_data,
      },
    },
  };
  let route = new Route(o);