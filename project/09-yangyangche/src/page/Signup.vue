<template>
  <div>
    <Nav/>
    <div>
      <div class='container'>
        <div class='header'>
          <form class="main-form"  autocomplete="off">
            <h1 class='txc'>注册</h1>
            <!-- <div class='error-list'>
                  用户名或密码有误 -->

            <!-- </div> -->
            <div class='input-contail'>
              <label for='username'>用户名</label>
              <input v-validator="'required|username|min_length:4|max_length:6|not_exist:user,username'" 
                     error-el="#username-error" 
                     error-lang="en" 
                     id="username" 
                     type="text" 
                     placeholder="whh">
              <div class="error-list">
                <div id="username-error"></div>
              </div>
            </div>
            <div class="input-control">
            <label for="password">密码</label>
            <input v-validator="'required|min_length:6|max_length:64'"
                   error-el="#password-error"
                   id="password"
                   type="password">
            <div class="error-list">
              <div id="password-error"></div>
            </div>
          </div>
          <div class="input-control">
            <label for="password2">重复密码</label>
            <input id="password2" type="password">
          </div>
          <div class="input-control">
            <button class="btn-primary" type="submit">登录</button>
          </div>
          <div class="input-control small muted">
            没有账号？<a href="#/signup">注册</a>
          </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Nav from "../components/Nav.vue";
import validator from '../directive/validator';

export default {
   directives : { validator },
  components: { Nav }
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
</style>

