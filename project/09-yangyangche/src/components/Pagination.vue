<template>
  <div class="pagination">
    <span class='btn-group'>
      <button class='btn-small'
              @click='change(1)'
              :disabled='is_first_page'
              >First</button>
      <button class='btn-small'
             :disabled='is_first_page'

             
              @click='next()'>Next</button>
    </span>
    <span class='btn-group'>
      <button class='btn-small'
      :key='page'
      v-if='Math.abs(page-current_page)<3'
      @click='change(page)'
      :class="{active:current_page==page}"
      v-for='page in last_page'>{{page}}
      
     

      </button>
      
    </span>
    <span class='btn-group'>
      <button class='btn-small'
              @click='prev()'
              :disabled='is_last_page'>Prev</button>
      <button class='btn-small'
              :disabled='is_last_page'
              @click="change(last_page)">Last</button>
      
    </span>
  </div>

</template>

   <script>
export default{
  // props:{
  //   limit:{
  //     default:0,
  //   },
  //   totalCount:{
  //     default:0,
  //   },
  //   onChange:{
  //     default(){
  //       console.log(1);
  //     }
  //   },

  // },
  // data () {
  //     return {
  //       current_page: 1,
  //     };
  //   },
  methods:{
    change(page){
      if(this.onChange)
      this.onChange(page);

      this.current_page=page;

    },
    next(){
                                                        
      if(this.is_last_page)
      return;

      this.change(++this.current_page);
    },

    prev(){
    if(this.is_first_page)
    return;

    this.change(--this.current_page);
    

   }
  },

   props : {
      limit      : {
        default : 0,
      },
      totalCount : {
        default : 0,
      },
      // currentPage : {
      //   default : this.current_page,
      // },
      onChange   : {
        default () {
          console.log(1);
        },
      },
    },

    data () {
      return {
        current_page : 1,
      };
    },

    // methods : {
    //   change (page) {
    //     if (this.onChange)
    //       this.onChange(page);

    //     this.current_page = page;
    //   },
    //   next () {
    //     if (this.is_last_page)
    //       return;

    //     this.change(++this.current_page);
    //   },
    //   prev () {
    //     if (this.is_first_page)
    //       return;

    //     this.change(--this.current_page);
    //   },
    // },
  computed:{
    half_limit(){
      return Math.floor(this.limit/2);
    },

    is_last_page(){
      return this.current_page==this.last_page;
    },

    is_first_page(){
      return this.current_page==1;
    },

    last_page(){
      return Math.ceil(this.totalCount/this.limit);
    }
  }
  
}


</script>
<style scoped>
.pagination{
  text-align: center;
}
.pagination button{
  background: #fff;
  border:1px solid rgba(0,0,0,.7);

} 
</style>

