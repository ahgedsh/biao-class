const AdminPage={
    data(){
        return {
            error:[],
            current:{},
            list:[],
            show_form:false,
            keyword:'',
            timer:null,
        }
    },

    mounted(){
        this.read();
    },

    methods:{
        search(e){
            if(e)
            e.preventDefault();

            let keyword=this.keyword;
            let param={or:{name:keyword}};
            http.post(`${this.model}/search`,param)
            .then(r=>{
                this.list=r.data.data;
            });
        },
        create(e){
            e.preventDefault();
            if(!this.validate())
            return;

            let is_update=this.current.id;
            let action=is_update ? 'update':'create';

            http.post(`${this.model}/${action}`,this.current)
            .then(r=>{
               if(r.data.success){
                   this.current={};
                   if(!is_update)
                   this.list.push(r.data.data);

               }

            })
        },
        remove(id){
          console.log(id);
       
            if(!confirm('确定要删除吗'))
            return;

            http.post(`${this.model}/delete`,{id})

            .then(r=>{
                if(r.data.success)

                  util.delete_element_by_id(this.list,id);
                
            })
        },
        read(){
            http.post(`${this.model}/read`,)
            .then(r=>{
                this.list=r.data.data;

                if(this.after_read){
                  this.after_read(r);
                }
            });
        },
        validate(row){
            row=row|| this.current;

            this.error=[];

            this.validate_props.forEach(prop=>{
                //如果prop等于name，相当于this.validate_name()
                let r=this['validate_'+prop]()

                if(r===true)
                return;

                this.error.push(r);
            });
            return !this.error.length;
        }
    },

    watch:{
        keyword(){
            clearTimeout(this.timer);

            this.timer=setTimeout(()=>{
                this.search();
            },300)

        }
    }
};

let router;


const Home = Vue.component('home', {
  template: `
 <div>
  <h1>欢迎来到背背山吃饭大学</h1>
  <div class="dish-list">
    <div class="row dish" v-for="dish in dish_list">
      <div class="col-lg-4 thumbnail">
        <img :src="dish.cover_url || default_cover_url">
      </div>
      <div class="col-lg-5 detail">
        <div class="name">{{dish.name}}</div>
        <div class="description">{{dish.description}}</div>
      </div>
      <div class="col-lg-3 tool-set ">
      <button  @click="decrement(dish.id)">-</button>
      <input  type="number" v-model="dish.$count">
      <button  @click="increment(dish.id)">+</button>
      </div>
    </div>
  </div>
  
  <div @click='show_order=!show_order' class='cart-trigger'>购物车{{order.total_fee}}</div>
  <div class='footer'>
  <div v-if='show_order' class='order-detail'> 
  
  <div class='close' @click='show_order=false'>关闭</div>
  <h4>订单详情</h4>
  <div v-if="order.dish_info.length">
  <p v-for='dish in order.dish_info'>
  菜品：{{dish_list[dish.dish_id].name}}
  数量:{{dish.count}}
  </p>
  </div>
  <div v-else class='empty-holder'>暂无内容</div>
  <button v-if='order.total_fee' @click='submit_order'>提交订单</button>

  </div>
  
  
  <router-link to='/login'>管理员登录</router-link>
  </div>
 </div>
 </div>
 
 
  `,


  data() {
    return { 
      show_order:false,
      dish_list: [],
      default_cover_url: 'http://biaoyansu.com/img/biaoyansu_logo.svg',
      order: {     

        // table_id  : 'xxx',
        // dish_info : [
        //   { dish_id : 1, count : 2 },
        //   { dish_id : 2, count : 1 },
        // ],
        // memo: '少放辣'
      },
    };
  },
  computed:{
   


  },

  
  methods: {
    increment (id) {
      this.dish_list[ id ].$count++;
    },

    decrement (id) {
      let row = this.dish_list[ id ];
      if (row.$count > 0)
        row.$count--;
    },

    

   

    read_dish() {
      http
        .post('dish/read',{key_by:'id'})
        .then(r => {
          this.dish_list = r.data.data;
          this.reset_order();
        });
    },

    submit_order() {
      this.prepare_order_info();
     
      this.order.status = 'created';


      this
        .main_order_id()
        .then(id => {
          if (id)
            this.order.parent_id = id;

         

          http.post('order/create',this.order)
          .then(r=>{
            if(r.data.suceess){
              this.reset_order();
            }
          })
          

        });
    },

    main_order_id() {
      return http.post('order/first', {
        where: {
          and: {
            table_id: this.order.table_id,
            status: 'created',
            parent_id: null,
          },
        },
      }).then(function (r) {
        if (!r.data.data)
          return false;
        return r.data.data.id;
      });
    },

    // reset_order() {
    //   console.log(this.order)
     
    //  this.order={table_id:this.order.table_id};
    //   this.dish_list.forEach(dish => {
    //     dish.$count = 0;
    //   });
    // },
    reset_order () {
      this.order = { table_id : this.order.table_id };

      let list = this.dish_list;
      for (let key in list) {
        Vue.set(this.dish_list[ key ], '$count', 0);
      }
    },
   

    prepare_order_info() {
      let info = [];
      let list=this.dish_list;
      for(let key in list){
        let dish =list[key];
        let count = dish.$count;
        

        
        
        if (!count)
       continue;
      
        info.push({
          dish_id: dish.id,
          count: parseInt(count),
        });
      };
    

      this.order.dish_info = info;
    },
    // ask_table(){
    //  let table_name= prompt('请输入您的桌号');
    //  if(!table_name)
    //  this.ask_table();
    // }
  },

  
  mounted() {
    this.read_dish();
    this.order.table_id = this.$route.query.table_id;
    //  if(!this.order.table_id)
    //  this.ask_table();
  },
  watch:{
    dish_list:{
      deep:true,
      handler(){
        let total=0;

        this.prepare_order_info();
        let dishes=this.order.dish_info;

        if(!dishes)
        return;

    dishes.forEach(dish=>{
      let price=this.dish_list[dish.dish_id].price;
      let count = dish.count;
      total=total+count*price;
      // console.log(dish.count)
      // console.log(price);
      // console.log(total);

    });
    this.order.total_fee=total;

      }

    }
  }


});






const Admin=Vue.component('admin',{
    template:`
    
    <div class='admin row'>
    <div class='col-lg-3 nav'>
    <router-link to='/'>首页</router-link>
    <router-link to='/admin/table'>桌号管理</router-link>
    <router-link to='/admin/dish'>菜品管理</router-link>
    <router-link to='/admin/order'>订单管理</router-link>
    <a @click='logout'>登出</a>
    </div>
    <div class='col-lg-9 main'>
    <router-view></router-view>

    </div>
    </div>
    
    `,
    methods:{
      logout(){
        logout();
        router.push('/login');

      }
    }
});

const Login=Vue.component('login',{
  template:`
  
  <div class='admin '>
  <h1>登录</h1>
  <form  @submit='login($event)' novalidate>
  <div v-if='error.length' class='error'>
  <div v-for='e in error'>{{e}}</div>
  </div>
  <div class='input-wrap'>
  <label>用户名</label>
  <input type='text' v-model='user.username'>
  </div>
  <div class='input-wrap'>
  <label>密码</label>
  <input type='password' v-model='user.password'>
  </div>

  
  <div class='input-wrap'>
  <button>登录</button>
  </div>
  </form>
  
  </div>
  
  `,
 data(){
   return{
     error:[],
     user:{},
   }
 },
 methods:{
   login(e){
     e.preventDefault();
     this.error=[];

     if(this.user.username !='whh' ||
        this.user.password !='lalala123'
      ) {
        this.error.push('用户名和密码有误');
        return;
      }
      localStorage.setItem('logged_in',1);
      router.push('/admin/order');
     
   }
 }
});





const AdminOrder=Vue.component('admin-order',{
  template:`<div>
    <h2>订单管理</h2>
    


   
    <table class='list'>
    <thead>
    <tr>
    <th>id</th>
    <th>桌子</th>
    <th>菜品详情</th>
    <th>主单</th>
    <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for='row in list'>
    <td>{{row.id}}</td>
    <td>{{row.$table ? row.table.name : '-'}}</td>
    <td>
    <span v-for='dish in row.dish_info'>
    <span> 菜品:{{dish.dish_id}}</span>
    <span> 数量:{{dish.count}}</span>
    </span>
    </td>
    <td>
    {{row.parent_id || '-'}}
    </td>
    <td>
    <select @change="change_status(row.id, row.status)" v-model="row.status">
    <option v-for="status in status_list" :value="status.value">{{status.name}}</option>
   </select>
    <td>
   
    <button @click='remove(row.id)'>删除</button>
    </td>
    </tr>
    </tbody>
    </table>
  </div>`,
    data(){
      return {
        model:'order',
        validate_props:[],
        status_list:[
          {
            name:'进行中',
            value:'created',
          },
          {
            name:'已支付',
            value:'paid',
          },
          {
            name:'已关闭',
            value:'closed',
          },
          {
            name:'已取消',
            value:'canceled',
          },
        ]
      }
    },
    methods:{
      change_status(id,status){
        http.post('order/update',{id,status});
      },
      read(){
        http.post('order/read',{
          with:'belongs_to:table',
          where:{
            and:{

            }
          }
        }).then(r=>{
          this.list=r.data.data;

        });

      },
    },
    mixins:[AdminPage],


});

const AdminDish = Vue.component('admin-dish', {
  template: `
  <div>
  <h2>菜品管理</h2>
  
  <div class="tool-set">
  <div class='sub-set'>
    <button @click="show_form = !show_form">
      <span v-if="show_form">取消</span>创建菜品
    </button>
  </div>
 <div class='sub-set row'>
  <form @submit='search($event)' class='col-lg-4 col-sm-12'>
  <input type='search' v-model='keyword' placeholder='关键词'>
  <button type='submit' hidden>搜索</button>
  </form>
   </div>
  </div>
    <form v-if="show_form" @submit="create($event)" novalidate>
      <div v-if="error.length" class="error">
        <div v-for="e in error">{{e}}</div>
      </div>
      <div class="input-wrap">
        <label>菜名</label>
        <input type="text" v-model="current.name">
      </div>
      <div class="input-wrap">
        <label>价格</label>
        <input type="number" v-model="current.price">
      </div>
      <div class="input-wrap">
        <label>描述</label>
        <textarea v-model="current.description"></textarea>
      </div>
      <div class="input-wrap">
        <label>封面地址</label>
        <input type="url" v-model="current.cover_url">
      </div>
      <div class="input-wrap">
        <button>提交</button>
      </div>
    </form>
    
    <table v-if="list.length" class="list">
      <thead>
      <tr>
      <th>id</th>
      <th>菜名</th>
      <th>价格</th>
      <th>描述</th>
      <th>封面</th>
      <th>操作</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="row in list">
        <td>{{row.id}}</td>
        <td>{{row.name}}</td>
        <td>{{row.price}}</td>
        <td>{{row.description || '-' }}</td>
        <td>
          <img v-if="row.cover_url" :src="row.cover_url" :alt="row.name">
          <span class="empty-holder" v-else>暂无封面</span>
        </td>
        <td>
          <button @click="current = row; show_form=true">更新</button>
          <button @click="remove(row.id)">删除</button>
        </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="empty-holder">暂无内容</div>
  </div>
    `,

  data() {
    return {
      validate_props: ['cover_url', 'description', 'name', 'price'], // 需要验证的属性
      model: 'dish',
    };
  },

  methods: {


    validate_name(value) {

      value = value || this.current.name;

      const MAX_LENGTH = 255;

      if (!value)
        return '菜名为必填项';

      if (value.length >= MAX_LENGTH)
        return `此项最大长度为${MAX_LENGTH}`;

      return true;
    },

    validate_price(value) {
      value = value || this.current.price;

      if (
        value === '' ||
        value === undefined ||
        value < 0 ||
        value > 1000000
      ) return '不合法的价格';

      return true;
    },

    validate_cover_url(value) {
      value = value || this.current.cover_url;

      let re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

      if (!value)
        return true;

      if (!re.test(value))
        return '不合法的地址';

      return true;
    },

    validate_description(value) {
      value = value || this.current.description;

      if (!value)
        return true;

      const MAX_LENGTH = 10000;
      if (value.length > MAX_LENGTH)
        return `此项最大长度为${MAX_LENGTH}`;

      return true;
    },
  },

  mounted() {
    this.read();
  },
  mixins: [AdminPage],
});


const AdminTable = Vue.component('admin-table', {
  template: `<div>
    <h2>桌号管理</h2>
    <form @submit='create($event)'>
    <div v-if='error.length' class='error'>
    <div v-for='e in error'>{{e}}</div>
    </div>
    <div class='input-wrap'>
    <label>桌号</label>
    <input type='text' v-model='current.name'>
    </div>
    <div class='input-wrap'>
    <label>座位数</label>
    <input type='number' v-model='current.capacity'>
    </div>
    <div class='input-wrap'>
    <button>提交</button>
    </div>
    </form>

    <table class='list'>
    <thead>
    <tr>
    <th>桌号</th>
    <th>座位数</th>
    <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for='row in list'>
    <td>{{row.name}}</td>
    <td>{{row.capacity}}</td>
    <td>
    <button @click='current=row'>更新</button>
    <button @click='remove(row.id)'>删除</button>
    </td>
    </tr>
    </tbody>
    </table>
    </div>`,

  data() {
    return {
      validate_props: ['name', 'capacity'],
      model: 'table',
    };
  },
  methods: {


    validate_name(value) {

      value = value || this.current.name;

      const MAX_LENGTH = 255;

      if (!value)
        return "桌号为必填项";

      if (value.length >= MAX_LENGTH)
        return `此项最大长度为${MAX_LENGTH}`;

      return true;
    },

    validate_capacity(value) {
      value = value || this.current.capacity;

      if (!value)
        return '座位数为必填项';

      if (value < 1 || value > 100000)
        return '不合法的作为号';

      return true;
    }


  },
  mounted() {
    this.read();

  },
  mixins: [AdminPage],

});


router=new VueRouter({
  routes:[
      {path:'/',component:Home},
      {path:'/login',component:Login},

      {
          path:'/admin/',
          component:Admin,
          children:[
              {
                  path:'dish',
                  component:AdminDish,
              },
              {
                  path:'table',
                  component:AdminTable,
              },
              {
                path:'order',
                component:AdminOrder,
            },
            {
              path:'home',
              component:Home,
          },
          ]
      }
  ]
});

router.beforeEach((to,form,next)=>{
  let is_logged_in=logged_in();
  let going_admin_page=/^\/admin/.test(to.fullPath);
if(going_admin_page){
  if(is_logged_in)
  next();
  else
  router.push('/login');

}else{

  next();
}
  
});

function logged_in(){
  return !! localStorage.getItem('logged_in');
}

function logout(){
  localStorage.removeItem('logged_in');
}



new Vue({
    el:'#root',
    router:router,
    
});

