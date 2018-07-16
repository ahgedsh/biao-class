<template>
  <div :style="{marginBottom: this.pushDown ? '10px' : 0,
        backgroundColor: this.black ? 'black' :'white',}" class="main-nav">
    <div class="row container">
      <div class="col left">
        <router-link to="/" class="logo"></router-link>
        <router-link to="/admin/vehicle" class="nav-item">管理面板</router-link>

        <SearchBar />
      </div>
      <div class="col right">
        <span v-if='!uinfo'>
          <router-link class='nav-item' to='/login'>登陆</router-link>
          <router-link class="nav-item" to='/signup'>注册</router-link>
        </span>
        <span v-else>
          <span class='nav-item'>{{ uinfo.username || unifo.phone}}</span>
          <span class='nav-item logout' @click='logout()'>登出</span>
        </span>
        <a href="#" class="nav-item tel">400-6666-666</a>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import session from "../lib/session";

export default {
  components: { SearchBar },
  props: {
    pushDown: {
      default: false
    },
    black: {
      default: false
    }
  },

  data() {
    return {
      uinfo: session.uinfo()
    };
  },

  methods: {
    logout: session.logout
  }
};
</script>

<style scoped>
.main-nav {
  background: #fff;
  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

.logo {
  display: inline-block;
  width: 130px;
  height: 42px;
  background: #fd521d;
  vertical-align: top;
}

.left {
  left: 130px;
  width: 60%;
}

.right {
  width: 40%;
}

.nav-item {
  display: inline-block;
  padding: 12px;
}

.nav-item {
  color: #555;
  text-decoration: none;
}

.tel {
  font-weight: bold;
  color: #fd521d;
}
.nav-item.logout{
  cursor: pointer;
}
</style>
