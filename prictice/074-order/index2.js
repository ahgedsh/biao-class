const AdminPage = {
    data() {
        return {
            current: {},
            list: [],
            show_form: false,
            error: [],
            keyword: '',
            timer: null,

        };

    },
    methods: {
        read() {
            http.post(`${this.model}/read`)
                .then(r => {
                    this.list = r.data.data;
                })
        },
        search(e) {
            if (e)
                e.preventDefault();
            let keyword = this.keyword;

            let param = { or: { name: keyword } };
            http.post(`${this.model}/search`, param)
                .then(r => {
                    this.list = r.data.data;
                })
        },

        create(e) {
            e.preventDefault();
            if (!this.validate())
                return;

            let is_update = this.current.id;
            let action = is_update ? 'update' : 'create';

            http.post(`${this.model}/${action}`, this.current)
                .then(r => {
                    if (r.data.success) {
                        this.current = {};
                        if (!is_update)
                            this.list.push(r.data.data);

                    }

                })
        },

        remove(id) {
            if (!confirm('确定要删除此条吗'))
                return;
            http.post(`${this.model}/delete`, { id })
                .then(r => {
                    if (r.data.success)
                        util.delete_element_by_id(this.list, id)
                })
        },


        validate(row) {

            row = row || this.current;

            this.error = [];

            this.validate_props.forEach(prop => {



                let r = this['validate_' + prop]();



                if (r === true)
                    return;

                this.error.push(r);

            });
            return !this.error.length;


        },



    },
    watch: {
        keyword() {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.search();
            }, 300);
        },
    },




};


const Home = Vue.component('home', {
    template: `<div>欢迎来到背背山大食堂</div>`,


});
const Admin = Vue.component('admin', {
    template: `
    <div>
      <div>
        <router-link to='/'>首页</router-link>
        <router-link to='/admin/table'>桌号管理</router-link>
        <router-link to='/admin/dish'>菜单管理</router-link>
        <router-link to='/admin/order'>订单管理</router-link>
        <router-link to='/admin/login'>登录</router-link>
        <a @click='logout'>登出</a>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  
    `,
    methods:{
        logout(){
            logout();
            order.push('/login');
        }

    }
});

const AdminOrder=Vue.component('admin-order',{

});
const AdminLogin=Vue.component('admin-login',{
    template:`
      <div class='admin'> 
      <h1>登陆</h1>
      <form @submit='login($event)'>
      <div class='error' v-if='error.length'>
        <div v-for='row in error'>{{row}}</div>
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
        <button>提交</button>
        </div>
        </form>


      </div>
    
    
    `,
    data(){
        return{
            user:{},
            error:[],

        };
        
    },
   
    methods:{
        login(e){
            e.preventDefault();
            this.error=[];

            if(this.user.username!='whh' ||
              this.user.password!='lalala123'){
                  this.error.push('用户名或密码有误');
                  return;
              }else{
                  localStorage.setItem('logded_in',1);

                router.push('admin/order');
              }


        }


    }

});







const AdminTable = Vue.component('admin-table', {
    template: `
 <div>
  <h1>桌号管理</h1>
    <div class="tool-set">
  <div class="sub-set">
    <button @click='show_form =!show_form'>
      <span v-if='show_form'>取消</span>创建桌号
    </button>
   </div>
  <div class='sub-set row'>
    <form @submit='search($event)' >
      <input type='search' v-model='keyword' placeholder="关键词">
      <button type='submit' hidden>搜索</button>
    </form>
  </div>
  </div>



 
    <form v-if='show_form'  @submit="create($event)">
    <div v-if='error.length' class='error'>
    <div v-for='e in error'>{{e }}</div>
    </div>
    
    <div class="input-wrap">
      <label>桌号</label>
      <input type="text" v-model="current.name">
    </div>
    <div class="input-wrap">
      <label>座位数</label>
      <input type="number" v-model="current.capacity">
    </div>
    <div class="input-wrap">
      <button>提交</button>
    </div>
  </form>
 <table v-if='list.length' class='list'>
  <thead>
    <tr>
      <th>桌号 </th>
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
   <div class='empty-holder' v-else>暂无内容</div>
 </div>
 `,

    data() {
        return {
            validate_props: ['name', 'capacity'],
            model: 'table',

        }

    },
    methods: {

        validate_name(value) {
            value = value || this.current.name;
            const MAX_LENGTH = 255;

            if (!value)
                return '请输入名字';

            if (value.lenght >= MAX_LENGTH)
                return `字数不能超过${MAX_LENGTH}`;

            return true;


        },
        validate_capacity(value) {
            value = value || this.current.capacity;

            if (!value)
                return '请输入座位号';

            if (value < 0 || value > 10000)
                return '请输入合法的值';

            return true;


        },

    },
    mounted() {
        this.read();

    },
    mixins: [AdminPage],



});

const AdminDish = Vue.component('admin-dish', {
    template: `
   <div>
    <h1>菜品管理</h1>
    <div class="tool-set">
      <div class="sub-set">
        <button @click='show_form =!show_form'>
          <span v-if='show_form'>取消</span>创建菜品
        </button>
      </div>
      <div class='sub-set row'>
        <form @submit='search($event)'>
          <input type='search' v-model='keyword' placeholder="关键词">
          <button type='submit' hidden>搜索</button>
        </form>
      </div>
    </div>
  
  
  
  
    <form v-if='show_form' @submit="create($event)">
      <div v-if='error.length' class='error'>
        <div v-for='e in error'>{{e }}</div>
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
        <textarea type="text" v-model="current.desc"></textarea>
      </div>
      <div class="input-wrap">
        <label>封面地址</label>
        <input type="url" v-model="current.cover_url">
      </div>
      <div class="input-wrap">
        <button>提交</button>
      </div>
    </form>
    <table v-if='list.length' class='list'>
      <thead>
        <tr>
          <th>菜名 </th>
          <th>价格</th>
          <th>描述</th>
          <th>封面</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='row in list'>
          <td>{{row.name}}</td>
          <td>{{row.price}}</td>
          <td>{{row.desc ||'-'}}</td>
          <td>
            <img v-if='row.cover_url' :src='row.cover_url' :alt='row.name'>
            <span v-else class='empty-holder'>暂无封面</span>
          </td>
          <td>
            <button @click='current=row; show_form=ture'>更新</button>
            <button @click='remove(row.id)'>删除</button>
          </td>
        </tr>
  
      </tbody>
  
  
    </table>
    <div v-else class='empty-holder'>暂无内容</div>
   </div>`,



   
 data() {
    return {
      validate_props: ['cover_url', 'description', 'name', 'price'], // 需要验证的属性
      model: 'dish',
    };
  },
    methods:{
        validate_name(value){
            value=value|| this.current.name;

            if(!value)
            return'请输入菜名';

            if(value.length>=255)
            return'最大长度不能超过255';

            return true;
        },

        validate_price(value){
            value=value|| this.current.price;

            

            if(value<0||
                value===undefined||
                value===''||
                 value>100000)
            return'不合法的价格';

            return true;

        },
        validate_description(value){
            value=value|| this.current.desc;

            if(!value)
            return true;

            if(value.lenght>1000000)
            return'最大长度为1000000';

            return true;
        },
        validate_cover_url(value){
            value=value || this.cover_url;
        let re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

        if(!value)
        return true;

        if(!re.test(value))
        return '图片地址不合法';

        return true;
            
        }

    },
    mounted(){
        this.read();
       
    },
    mixins:[AdminPage],

});

router.beforeEach(function(to,form,next){

});

function is_logged_in(){
    
}

router= new VueRouter({
    routes: [
        { path: '/', component: Home },
        {
            path: '/admin/',
            component: Admin,
            children: [
                {path:'home',component:Home},
                { path:'login',component:AdminLogin},
                {path:'order',component:AdminOrder},
                { path: 'table', component: AdminTable },
                { path: 'dish', component: AdminDish },
            ]


        },
    ]
});

new Vue({
    el: '#root',
    router:router,
});

