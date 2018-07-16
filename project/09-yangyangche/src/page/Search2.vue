<script>
export default {
  methods: {
    set_query_price_range(min, max) {
      let query = this.prase_route_query();

      if (!min && !max) {
        delete query_prince_min;
        delete query_price_max;
      } else {
        let condition = {
            price_min: min,
            peice_max: max
          },
          query = Object.assign({}, query, condition);
      }
      this.$route.replace({ query });
    },

    toogle_sort_by(property) {
      let query = this.prase_route_query();
      let sort_prop = query.sort_by[0];
      let direction = query.sort_by[1];

      if (sort_prop == property) {
        query.sort_by[1] = direction = "up" ? "down" : "up";
      } else {
        (query.sort_by[0] = property), (query.sort_by[1] = "down");
      }
      query.sort_by = query.sort_by.toString();
      this.$router.replace({ query });
    },
    is_sort(property, direction) {
      let p = this.search_param;

      if (!p.sort_by) {
        return false;
      } else {
        return p.sort_by[0] == property && p.sort_by[1] == direction;
      }
    },

    prase_route_query(){
      let query=clone(this.$route.query);

      if(!query.sort_by)
        query.sort_by==['id','down'];


      if(typeof query.sort_by=='string')
      query.sort_by=query.sort_by.split(',');

      return query;
    },
     prepare_search_param(){
       let query=this.prase_route_query;
       this.search_param=query;
     },
     set_condition(type,value){
       let query=clone(this.$route.query);

       switch(type){
         case'sort_by':
         query.sort_by=value;
         break;
         case'page':
         query.page=value;
         break;
       }
       this.$route.replace({query});
       this.search();
     },
     set_query_where(type,value){
       let condition={};
      condition[type]=value;

      let o=this.search_param;
      let n=Object.assign({},o,condition);
      this.$router.replace({query:n})


     },
     remove_condition(type){
       let query=this.prase_route_query();
       delete query[type];
       this.$router.replace({query});
     }
  }
};
</script>
