<script>

import Nav from "../components/Nav";
import AdminNav from "../components/AdminNav";
import Pagination from '../components/Pagination.vue';

import api from "../lib/api";

export default {
    components:{AdminNav,Nav,Pagination},
    mounted() {
    this.read();


  },
  data() {
    return {
        model:null,
      last_page:0,
      disabled: "disabled",
      current: {},
      list: [],
      edit_mode: false,
      show_form: false,
      keyword: "",
      searchable:[],
      current_page:1,
      total:0,
      limit: 3,
    };
  },
  methods: {
    /**
     * create or update
     */


    on_page_change(page){
      this.read(page);
    },
    cou(e) {
      e.preventDefault();
      let action = this.current.id ? "update" : "create";
      console.log(this.current)
      api(`${this.model}/${action}`, this.current)
      .then(r => {
        this.current = {};
        this.read();
      });
    },

    

    read(page=1) {
      if(page==this.current_page && page !=1)
      return;
      api(`${this.model}/read`, {limit:this.limit,page:page,with:this.with})
      .then(r => {
          this.total=r.total;
        this.list = r.data;
        this.last_page=r.last_page;
        this.current_page=r.current_page;
      });
    },


   

    remove(id) {
        if(!confirm('确定删除？'))
        return;
      api(`${this.model}/delete`, { id })
      .then(r => {
        this.read();
      });
    },
    set_current(row) {
      this.current = row;
      this.show_form = true;
      if(this.after_set_current){
        this.after_set_current();
      }
    },
   
    search(e) {
      e.preventDefault();

      let param={
          or:{},
      };

      this.searchable.forEach(prop=>{
          param.or[prop]=this.keyword;
      });

      api(`${this.model}/search`, param)
      .then(r => {
        this.list = r.data;
      });
    }
  },
    
    
};
</script>
