<template>
  <div>
    <Nav/>
    <div>
      <div class='container'>
        <div class='header'>
          <form class="main-form"  @submit="submit($event)" autocomplete="off">
            <h1 class='txc'>注册</h1>

            <!-- <div class='row txc tab-title'>
              <div @click="sigup_by='phone' "  :class="'col-lg-6'+(signup_by=='phone' ?'active':'')">手机注册</div>
              <div @click="sigup_by='mail' "  :class="'col-lg-6'+(signup_by=='mail' ?'active':'')">邮箱注册</div>
            </div> -->
            <div class="row txc tab-title">
 	           <div @click="signup_by = 'phone'" :class="'col-lg-6 ' + (signup_by == 'phone' ? 'active': '')">手机注册</div>
             <div @click="signup_by = 'mail'" :class="'col-lg-6 ' + (signup_by == 'mail' ? 'active': '')">邮箱注册</div>
           </div>
            
            <div :key=1 v-if="signup_by=='phone'" class='input-control'>
              <label for='phone'>手机号</label>
              <input 
                     v-model='current.phone'
                     error-el="#phonp-error" 
                     error-lang="en" 
                     id="phone" 
                     type="text" 
                     placeholder="请输入手机号码">
              <div class="error-list">
                <div id="phone-error"></div>
              </div>
            </div>

            <div :key=2 v-if="signup_by=='mail'" class='input-control'>
              <label for='mail'>邮箱号</label>
              <input 
                     v-model='current.mail'
                     error-el="#mail-error" 
                     error-lang="en" 
                     id="mail" 
                     type="text" 
                     placeholder="请输入邮箱号">
              <div class="error-list">
                <div id="mail-error"></div>
              </div>
            </div>
            
            <div class="input-control">
              <label for="vcode">验证码</label>
              <div class='btn-group'>
                <input type="text"
                       style='width:70%;'
                       id='vcode'
                       v-model='current.vcode'
                       placeholder="请输入验证码">
                <button @click='send_code'
                        style='width:30%;'
                        :disabled='captcha.countdown !=0'
                        type='button'>
                        <span v-if='captcha.countdown'>{{captcha.countdown}}</span>
                        <span class='small' v-else>发送验证码</span>
                </button>
              </div>
              <div class='error-list'>
                <div v-if='invalid_code' id='vcode-error'>验证码有误</div>
              </div>
            </div>



            <div class="input-control">
            <label for="password">密码</label>
            <input 
                   error-el="#password-error"
                   id="password"
                   v-model='current.password'
                   type="password">
            <div class="error-list">
              <div id="password-error"></div>
            </div>
          </div>
          <div class="input-control">
            <label for="password2">重复密码</label>
            <input v-model='current.password2' id="password2" type="password">
          </div>
          <div class="input-control last">
            <button class="btn-primary" type="submit">注册</button>
          </div>
          <div class="input-control small muted">
            已有账号？<router-link to='/login'>登陆</router-link>
          </div>
          </form>
        </div>
      </div>
    </div>
    

  </div>
</template>
<script>
import '../css/auth.css'
import Nav from "../components/Nav.vue";
import api from '../lib/api';


import validator from '../directive/validator';

export default {
  directives : { validator },
  components: { Nav },
  data(){
    return{
      captcha:{
        timer:null,
        countdown:0,
      },
      signup_by:'phone',
      current:{},
      code:'',
      invalid_code:false,
    };
  
  },
  methods:{
    submit(e){
      // e.preventDfault();
      e.preventDefault();
     
      //如果用户输入的验证码不等于这个验证码，就在html上显示‘验证码有误’
      this.invalid_code=this.current.vcode !==this.code;

      if(this.invalid_code)
      return;

      if(this.signup_by=='mail')//如果signup_by为mail 删除电话号码
      delete this.current.phone;
      else{
        delete this.current.mail;//反之删除邮箱
      }
      //如果没有用户名，就默认用已填的邮箱或手机号作为用户名
      !this.current.username &&(this.current.username=this.current[this.signup_by]);

      api('user/create',this.current)//发create请求
      .then(r=>{
        alert('注册成功!');

        this.$router.push('/');//去首页
      });
    },

    send_code(){//设置验证码
      
      if(this.captcha.countdown)//有倒计时返回
         return;

      let action
          ,by_mail;

     this.captcha.countdown=60;//倒计时为60
     action='sms';

     if(by_mail=this.signup_by=='mail')
     action='mail';

     if((by_mail&& !this.current.mail)||//是邮件不是当前邮件或不是邮件也不是电话返回
     (!by_mail && !this.current.phone))
     return;

     this.captcha.timer=setInterval(()=>{//设置时钟
       if(this.captcha.countdown==0){//倒计时为0，清掉这一次倒计时
         clearInterval(this.captcha.timer);

         return;

       }
       this.$set(this.captcha,'countdown',this.captcha.countdown-1);//每一秒减1
     },1000);
    
    api(`captcha/${action}`,{phone:this.current.phone,email:this.current.mail})
    //发请求无论是phone或者mail
    .then(r=>{
      this.code=atob(r.data.result);//验证码要等于atob之后过的值；
    });
     
    }
  }

    
};
</script>
<style scoped>
/* .header{
  position: absolute;
  right:500px;
  margin-top:50px;
   
} */
.input-contail [type="submit"] {
  padding: 10px;
  
  margin: 0;
}
.main-form {
  width:370px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}

.gologin {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 20px;
  margin-bottom: 30px;
}
         
.input-control.last{
  padding-top: 30px ;
  padding-bottom: 20px;
  
  
}
.input-control.small.muted{
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
 
}
.small{
  font-size: 15px;
}

.tab-title{
  color:#777;
  margin-bottom: 10px;
}

.tab-title>*{
  cursor: pointer;
  padding:5px;
}
.tab-title>*.active{
  color:#fd521d;
  border-bottom:2px solid #fd521d;
}
</style>

