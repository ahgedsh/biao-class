<template>
  <form @submit="search($event);submit($event)" class="search-bar">
    <input placeholder="现代领动"
           type="search"
           @keyup="change()"
           v-model="keyword"
           :style="this.onStyle"
           autofocus>
    <button  :style="this.onStyle" type="submit">搜</button>
  </form>
</template>

<script>
  export default {
    props : [ 'onChange', 'onSubmit',
    'onStyle'
       ],

    data () {
      return {
        keyword : '',
      };
    },

    methods : {
      change () {
        if (this.onChange)
          this.onChange(this.keyword);
      },
      submit (e) {
        e.preventDefault();

        if (this.onSubmit)
          this.onSubmit(this.keyword);
      },
      search (e) {
        e.preventDefault();
        this.$router.push({
          path  : '/search',
          query : { keyword : this.keyword },
        });
      },
    },
  };
</script>

<style scoped>
 
  .search-bar {
    min-width: 150px;
    display: inline-block;
    /*margin-top: 10px;*/
    /*margin-bottom: 10px;*/
  }

  .search-bar input {
    width: 80%;
    outline: 0;
    
  }

  .search-bar [type="submit"] {
    width: 20%;
    border-left: 0;
    background: #fd521d;
    border-color: #fd521d;
    color: #fff;
  }
</style>