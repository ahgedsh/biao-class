<template>
  <div>
    <Nav/>
    <div class='header'>
      <div class='container'>
        <form class="main-form" autocomplete="off">
          <h1 class='txc'>登录</h1>

          <div class='input-contail'>
            <label>用户名</label>
            <input type="text" id='username'
                    v-validator="'required|username|min_length:4|max_length:6|not_exist:user,username'" 
                    error-el='#username-error'>
            <div class="error-list">
              <div id='username-error'></div>
            </div>
          </div>
          <div class='input-contail'>
            <label >密码</label>
            <input type="password" id='password' 
                   v-validator="'required|min_length:6'"
                   error-el='#password-error'>
                   <div class="error-list">
              <div id='password-error'></div>
            </div>
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
import validator from "../directive/validator";

export default {
  directives: { validator },
  components: { Nav }
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
