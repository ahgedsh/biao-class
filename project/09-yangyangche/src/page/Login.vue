<template>
  <div>
    <Nav/>
    <div class='header'>
      <div class='container'>
        <form @submit='submit' class="main-form" autocomplete="off">
          <h1 class='txc'>登录</h1>
          <div class='error-list'>
            <div v-if='login_failed' class='error-list'> 
              <div class='error'> 用户名或者密码有误</div>
            </div>
          </div>

          <div class='input-contail'>
            <label>用户名</label>
            <input type="text" 
                   v-validator="'required'"
                  v-model='current.$unique'>
           
          </div>
          <div class='input-contail'>
            <label >密码</label>
            <input type="password" id='password' 
                  v-model='current.password'
                  >
                  
          </div>
          <div class='input-contail'>
            <button type="submit" class='btn-primary'>登录</button>
          </div>
          <div class='gosignup'>没有账号？
            <a href="#/signup">注册</a>
          </div>
        </form>
      </div>
    </div>
   

  </div>
</template>
<script>
import "../css/auth.css";
import Nav from "../components/Nav.vue";
import api from '../lib/api';

import validator from "../directive/validator";

export default {
  directives: { validator },
  components: { Nav},
  data(){
    return{
      current:{},
      login_failed:false,
    };
  },

  methods:{
    submit(e){
      e.preventDefault();
      let unique,password;

      if(!(unique=this.current.$unique) ||
      !(password=this.current.password))
      return;
      //整个页面提交的时候先判断是否有用户名或者密码 ，没有就返回，然后就会发请求，
      //请求里面传的where也是判断用户名，可以是username，phone，或者mail，
     //然后会返回数据，

      api('user/read',{
        where:{
          or:[
            ['username','=',unique],
            ['phone','=',unique],
            ['mail','=',unique],
          ],
        },
      }).then(r=>{
        let row;
        //返回里面r.data[0]就是username，如果没有密码或者用户名，就是登陆失败
        console.log(r.data)
        if(!(row=r.data[0]) || row.password !==password){
          this.login_failed=true;
          return;
        }
        //然后就是登陆成功，要删除密码，不能全都存在localStorage
        //把那一行存进去
        this.login_failed=false;
        delete row.password;
        localStorage.setItem('uinfo',JSON.stringify(row));

        alert('登录成功');
        this.$router.push('/');
      })
    }
  }
};
</script>
 <style scoped>
.input-contail [type="submit"] {
  padding: 10px;
  margin: 0;
}

.time {
  text-align: right;
}
.main-form {
  position: absolute;
  right: 150px;
  top: 100px;
}
.header {
  height: 1000px;
  background-image: url(../assets/login.png);
  background-repeat: no-repeat;
  background-size: 100%;
}

.main-form .gosignup {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
