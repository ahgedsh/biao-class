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
          
            <div class='content'>
                <span class='tag'>大众</span>
                <span class='tag'>别克</span>
                <span class='tag'>雪佛兰</span>
                <span class='tag'>福特</span>
                <span class='tag'>五菱</span>
                <span class='tag'>现代</span>
                <span class='tag'>奥迪</span>
            </div>
            <div class='content-price'>
              <span class='tag'>3万以下</span>
              <span class='tag'>3-5万</span>
              <span class='tag'>5-10万</span>
              <span class='tag'>10-15万</span>
              <span class='tag'>15-20万</span>
              <span class='tag'>20-30万</span>
            </div>
            <div class='content-car'>
              <span class='tag'>降价车</span>
              <span class='tag'>准新车</span>
              <span class='tag'>急售车</span>
              <span class='tag'>紧凑车型</span>
              <span class='tag'>中大型车</span>
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
               <span classs='play' >后续计划</span>
                <input type="checkbox">团购新车
                <input type="checkbox">买二手车
                <input type="checkbox">不买车
              </div>
            </div>
          </div>
        </div>
         
      </div>
      <div class='guarantee'>
        <div class=' row container'>
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
      <div>
        <div class='vehicle-nav'>
          <div class='container'>
            <div class='item'>特价好车</div>
            <div class='item'>5万以下超值车</div>
            <div class='item'>5-10万超值车</div>
            <div class='item'>超值SUV</div>
            <div class='item'>急售降价车</div>
            <div class='item'>更多</div>
          </div>
        </div>
        <div class='container'>
          <div class=' row vehicle-list'>
            
            <div class='col-lg-3' :key='row.id' v-for='row in main_list'>
              <div class='card'>
                <div class='thumbnail'>
                  <img :src="row.preview ? row.preview[0].url : 'https://img2.rrcimg.com/o_1chkcvd8b2335648150394805140944773.jpg?imageView2/2/interlace/1/w/290/h/192/format/webp'">
                </div>
                <div class='detail'>
                  <div class='title'> {{row.title}}</div>
                  <div class='desc'>2013年十月/6.51万公里</div>
                  <div  class='others '>
                    <span class=' price'>{{row.price}}</span>
                    <span>首付3.45万</span>
                  </div>
                  <button class='buy  btn btn-primary '>购买</button>
                </div>
              </div>
            </div>
            <div class='col-lg-3'>
              <div class='card'>
                <div class='thumbnail'>
                  <img src='../assets/car.jpg'>
                </div>
                <div class='detail'>
                  <div class='title'> 福特-翼虎 2013年爆款 1.6L GTBi 两区风尚型</div>
                  <div class='desc'>2013年十月/6.51万公里</div>
                  <div  class='others '>
                    <span class=' price'>11.50万</span>
                    <span>首付3.45万</span>
                  </div>
                  <button class='buy  btn btn-primary '>购买</button>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>




  </div>
</div>
   


</template>

<script  scoped>

import '../css/vehicle-list.css';
import Nav from '../components/Nav.vue';
import api from '../lib/api';

 export default {
    components : { Nav },
     mounted(){
       this.read('main');
    
      },
      data(){
        return{
          main_list:[],
        };

      },
      methods:{
        read(type){
          api('vehicle/read')
          .then(r=>{
            this[type+'_list']=r.data;
            console.log(r.data);
          });
        }
      }

  };

 
</script>

<style scoped>
.query-area{
  padding: 20px;
  background: #fff;

}
.query-area .short-cuts>*{
  padding: 10px  0px;
}


.query-area .content,
.query-area .content-price,
.query-area .content-car
{
  padding:10px 0;
  cursor: pointer;

}

.vehicle-nav .item{
  background: #fff;
  text-align: center;
  display: inline-block;
  padding:20px;
  width:16.66666%;
  font-size: 17px;
  border:1px solid rgba(0,0,0,0.1);
  border-left-width: 0px;

}
.sale button{
  
  width:100%;
}
.huge-text{
    font-size: 50px;
    color: #fd521d;
    font-weight: bold;
    padding: 10px;
}
.sale .last {
  
  font-size:16px;
}
.sale .last input{
  border:1px solid #fd521d;
  
 
}


.guarantee .col-lg-3 {
    padding: 10px;
  }

  .guarantee .card {
    padding: 15px;
    background: #fff;

  }
  .guarantee .card .title{
      font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
    
  }
   .guarantee .desc {
    font-size: .7rem;
    color: #999;
  }
  
</style>

