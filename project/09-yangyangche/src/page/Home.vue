

<template>
  <div>
    <Nav/>

    <div class='silder'>
      <img src="../assets/slider1.webp" alt="">
    </div>
    <div class='container'>
      <div class=' row query-area'>
        <div class=' row col-lg-7 '>

          <div class='col-lg-3'>
            <div class='huge-text'>买</div>
            <div>1年/2万公里质保</div>
          </div>
          <div class='col-lg-9'>

            
            <div class="content">
             <router-link :key='row.id' 
                         :to="'/search?brand_id=' + row.id" 
                         v-for="row in list.brand" class="tag">{{row
                .name}}
              </router-link>

            </div>
            <div class='content-price'>
              <span class='tag'>3万以下</span>
              <span class='tag'>3-5万</span>
              <span class='tag'>5-10万</span>
              <span class='tag'>10-15万</span>
              <span class='tag'>15-20万</span>
              <span class='tag'>20-30万</span>
            </div>
           
            <div class="content-car">
            <router-link :key='row.id' 
                       :to="'/search?design_id=' + row.id" 
                       v-for="row in list.design" class="tag">{{row
                .name}}
              </router-link>

            </div>
          </div>

        </div>
        <div class='sale row col-lg-5'>
          <div class='col-lg-4'>
            <div class='huge-text'>卖</div>
            <div>直接卖给个人</div>
          </div>
          <div class='col-lg-8  short-cuts'>
            <div>急速卖车</div>

            <button class=' btn btn-primary'>帮我卖车</button>
            <div class='last'>
              <span classs='play'>后续计划</span>
              <input type="checkbox">团购新车
              <input type="checkbox">买二手车
              <input type="checkbox">不买车
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class='guarantee'>
      <div  class='  container'>
       <div class='row' style='margin:0 -10px'>
          <div class='col-lg-3'>
          <div class='card'>
            <div>
              <div class='title'>分期购车</div>
              <div clas='desc'>低门槛 审批快</div>
              <div>
                <img src='../assets/minicard.jpg'>
              </div>
            </div>
          </div>

       
       </div>
        <div class='col-lg-3'>
          <div class='card'>
            <div>
              <div class='title'>分期购车</div>
              <div clas='desc'>低门槛 审批快</div>
              <div>
                <img src='../assets/minicard.jpg'>
              </div>
            </div>
          </div>

        </div>
        <div class='col-lg-3'>
          <div class='card'>
            <div>
              <div class='title'>分期购车</div>
              <div clas='desc'>低门槛 审批快</div>
              <div>
                <img src='../assets/minicard.jpg'>
              </div>
            </div>
          </div>

        </div>
        <div class='col-lg-3'>
          <div class='card'>
            <div>
              <div class='title'>分期购车</div>
              <div clas='desc'>低门槛 审批快</div>
              <div>
                <img src='../assets/minicard.jpg'>
              </div>
            </div>
          </div>

        </div>
       </div>
      </div>
    </div>
    <div>
      <div class='vehicle-nav'>
        <div class='container'>
          <div  @click="read_main('on_sale')" class='item'>特价好车</div>
          <div @click="read_main('under_5')"  class='item'>5万以下超值车</div>
          <div @click="read_main('between_5_10')" class='item'>5-10万超值车</div>
          <div @click="read_main('SUV')" class='item'>超值SUV</div>
          <div @click="read_main('urgent')" class='item'>急售降价车</div>
          <router-link to="/search" class='item'>更多</router-link>
        </div>
      </div>
      <div class='container'>
        <div  class=' row  vehicle-list'>

          <div class='col-lg-3' :key='row.id' v-for='row in main_list'>
            <div class='card'>
              <div class='thumbnail'>
                <img :src="get_main_cover_url(row)">
              </div>
              <div class='detail'>
                <div class='title'> {{row.title}}</div>
                <div class='desc'>2013年十月/6.51万公里</div>
                <div class='others '>
                  <span class=' price'>{{row.price}}万</span>
                  <span>首付3.45万</span>
                </div>
                <router-link :to="'/detail/' + row.id"
                class='btn btn-primary buy'>购买</router-link>
              </div>
            </div>
          </div>
          

        </div>
      </div>

    </div>
    <Footer />
  </div>

</template>






<script  >
/*eslint-disable*/
import "../css/vehicle-list.css";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";

import VehicleList from '../mixin/VehicleList';
import Reader      from '../mixin/Reader';
import api from "../lib/api";

export default {
  mixins:[VehicleList,Reader],
  components: { Nav,Footer },
  mounted() {
    this.read_main('on_sale');
    this.find_design('suv');
    this.read('brand');
    this.read('design');
  },
  data() {
    return {
    list:[],
   
    design:{},
    main_list:[],
    };
  },
  methods: {
    
    find_design(name) {
      api("design/search", { or: { name: name } }).then(r => {
        this.design[name] = r.data[0];
       
      });
    },
  
    
    
    read_main(type) {
      console.log(type)
      let condition = {};

      switch (type) {
        case "on_sale":
          condition = {
            where: {
              and: {
                on_sale: true
              }
            }
          };
          break;
        case "under_5":
          condition = {
            where: {
              and: [["price", "<", 5]]
            }
          };
          break;
          case 'between_5_10':
          condition={
            where:{
              and:[
                ['price','>',5],
                ['price','<',10],
              ]
            }
          };
          break;
          case'SUV':
          condition={
            where:{
              and:{
                design_id:this.design.suv.id,
              }
            }
          };
          break;
          case'urgent':
          let date=new Date;
          date.setDate(date.getDate()+3);
          date=date.toISOString().split('T')[0];
          condition={query:`where("deadline"<="${date}")`};
          
          
          break;
      }
      
      api('vehicle/read',condition)
      .then(r=>{
        
        this['main_list']=r.data;
       
      });
         
    }
  }
};
</script>

<style scoped>
.query-area {
  padding: 20px;
  background: #fff;
}
.query-area .short-cuts > * {
  padding: 10px 0px;
}

.query-area .content,
.query-area .content-price,
.query-area .content-car {
  padding: 10px 0;
  cursor: pointer;
}

.vehicle-nav .item {
  background: #fff;
  text-align: center;
  display: inline-block;
  padding: 20px;
  width: 16.66666%;
  font-size: 17px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left-width: 0px;
}
.sale button {
  width: 100%;
}
.huge-text {
  font-size: 50px;
  color: #fd521d;
  font-weight: bold;
  padding: 10px;
}
.sale .last {
  font-size: 16px;
}
.sale .last input {
  border: 1px solid #fd521d;
}

.guarantee .col-lg-3 {
  padding: 10px;
}

.guarantee .card {
  padding: 15px;
  background: #fff;
}
.guarantee .card .title {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}
.guarantee .desc {
  font-size: 0.7rem;
  color: #999;
}
.vehicle-list{
  margin: 0 -10px;
}
</style>

