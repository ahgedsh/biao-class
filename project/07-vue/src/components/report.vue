
 <template>

  <div>
    <button @click='show_form=!show_form' >创建检测表</button>
   
    
    <form v-if='show_form' @submit='create($event)'>
      <button type='button' @click="check_all()">全部通过</button>
    <button type='button' @click='uncheck_all()'>全部未通过</button>
    <button type='button' @click='check_random()'>随机通过</button>
    <div v-if='prop.display_name' v-for='(prop,key) in structure'>{{prop.display_name}}
      <label><input type="checkbox" v-model='current[key]'></label>

    </div>
    <div>
      <button  type='submit'>提交</button>
      <button @click='show_form=false'>取消</button>
    </div>
    </form>
    <table>
      <thead>
       
        <th>通过数</th>
        <th>通过率</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for='row in list'>
          <td>{{passed_check=compute_passed_check(row)}}</td>
          <td>{{passed_check/total_check |percentage}}</td>
          <td>
            <button @click='remove(row.id)'>删除</button>
            <button @click='set_current(row)'>更新</button>
          </td>

        </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
/* eslint-disable */
import api from "../lib/api";
import Dropdown from '../components/Dropdown'
export default {
  data() {
    return {
      structure: {},
      list: {},
      current: {},
      
      total_check:0,
      show_form:false,
    };
  },
  mounted() {
    this.read();
    this.get_structure();
  },
  methods: {
  
    set_current(row){
      this.current=row;
      this.show_form=true;

    },
    create(e){
      console.log(this.current);
      
      api('report/create',this.current).then(r=>{
        
        this.read();
      })

    },
    read() {
      api("report/read").then(r => {
        this.list = r.data;
      });
    },
    remove(id){
      api('report/delete',{id}).then(r=>{
        this.read();
      })
    },

    get_structure() {
      api("MODEL/FIND", { name: "report" }).then(r => {
        this.structure = r.data.structure;
        this.compute_total_check();
       
      });
    },
    each_prop(fn) {
      for (let key in this.structure) {
        let prop = this.structure[key];

        if (fn) {
          fn(prop, key);
        }
      }
    },
    check_all(check = true) {
      this.each_prop((prop, key) => {
        if (!prop.display_name) return;

        this.$set(this.current, key, check);
      });
    },
    uncheck_all() {
      this.check_all(false);
    },
    check_random() {
      this.each_prop((prop, key) => {
        if (!prop.display_name) return;

        this.$set(this.current, key, Math.random() >= 0.5);
      });
    },
    compute_total_check(){
      let count=0;
      this.each_prop(prop=>{
        prop.display_name&& count++;

      });
      this.total_check=count;
      console.log(this.total_check)
    },
    compute_passed_check(row){
      let count=0;
       row=row || this.current
      

      this.each_prop((prop,key)=>{
        prop.display_name&& row[key]&& count++;



      })

      return count;
    }
  
  }
};
</script>
