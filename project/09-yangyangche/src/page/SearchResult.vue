<template>
  <div>
    <Nav />
    <div class='container'>
      <SearchBar />
    </div>
    <div class='container'>
      <div class='row filter'>
        <div class='col-lg-1 prop'>品牌</div>
        <div class='col-lg-10 range'>
          <span class='action'>大众</span>
          <span>福特</span>
          <span>别克</span>
          <span>奔驰</span>
          <span>现代</span>
          <span>宝马</span>
          <span>雪佛兰</span>
          <span>丰田</span>
          <span>起亚</span>
          <span>奥迪</span>
          <span>本田</span>
        </div>
        <div class='col-lg-1 others right'><button>更多</button></div>
      </div>
      <div class='row filter'>
        <div class='col-lg-1 prop'>车系</div>
        <div class='col-lg-10 range'>
          <span class='action'>福克斯</span>
          <span>朗逸</span>
          <span>哈弗H6</span>
          <span>速腾</span>
          <span>高尔夫</span>
          <span>途观</span>
          <span>迈腾</span>
          <span>五菱宏光</span>
          <span>科鲁兹</span>
          
        </div>
        <div class='col-lg-1 others right'><button>更多</button></div>
        
      </div>
      <div class='row filter'>
        <div class='col-lg-1 prop'>价格</div>
        <div class='col-lg-10 range'>
           <span class='action'>3万以下</span>
          <span>3-5万</span>
          <span>5-7万</span>
          <span>7-9万</span>
          <span>9-12万</span>
          <span>12-16万</span>
          <span>20万以上</span>
         
         
        </div>
        <div class='col-lg-1 others  right'><button>更多</button></div>
        
      </div>

      
     
      
      <div class='row filter '>
        <div class='col-lg-1 prop'> 更多</div>
        <div class='col-lg-10 range'>
          <div class='row  range-dropdown'> 

        <div class='col'>  <Dropdown :onSelect='yo' :list='tmp' /></div>
        <div class='col'>  <Dropdown :onSelect='yo' :list='tmp' /></div>
        <div class='col'>  <Dropdown :onSelect='yo' :list='tmp' /></div>
        <div class='col'>  <Dropdown :onSelect='yo' :list='tmp' /></div>
        <div class='col'>  <Dropdown :onSelect='yo' :list='tmp' /></div>
        <div class='col'>  <Dropdown :onSelect='yo' :list='tmp' /></div>
        <div class='col'>  <Dropdown :onSelect='yo' :list='tmp' /></div>
        <div class='col'>  <Dropdown :onSelect='yo' :list='tmp' /></div>
          </div>
          
        </div>
        <div class='col-lg-1 others right'>
          <button> 全部</button>
        </div>

      </div>
    </div>
    <div class='container'>
      <div class='row  filter'>
        <div class='col-lg-5 range-main'>
          <span>全部</span>
          <span>付三成</span>
          <span>保卖车</span>
          
        </div>
        <div class='col-lg-7 range-some right'>
          <span class='default'>默认排序</span>
          <span>最新发布</span>
          <span>价格</span>
          <span>车龄</span>
          <span>里程</span>
          <span><button>热门筛选+</button></span>
        </div>
      </div>

    </div>
    <div class='container'>
        <div class=' row vehicle-list'>
            
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
</template>

<script>
import  '../css/vehicle-list.css'


import Nav from '../components/Nav.vue';
import SearchBar from '../components/SearchBar.vue';
import Dropdown from '../components/Dropdown.vue';


export default {
  components:{Nav,SearchBar,Dropdown},
  data(){
    return{
      tmp:[
        {name:'王花花',id:1},
        {name:'刘呼呼',id:2},
        {name:'刘贝贝',id:3},
        {name:'尚的的',id:4},
        
      ]
    };
  },
  methods:{
    yo(row){
      console.log(row);
    },
  },
  
};
</script>

<style scoped>


.filter{
  border-top:1px solid rgba(0,0,0,.1);
  padding-top:8px;
  padding-bottom:8px;
}

.filter:first-child{
  border-top:0;
}
.filter:last-child{
  border-top:1px solid rgba(0,0,0,.1);
  
}

.filter >*{
  vertical-align: middle;;
}
.filter .prop,
.filter .range >*,
.filter .range-dropdown >*
{
 padding:5px 10px;


}

.filter .range-some >*{
 padding-left:20px;
}

.filter .range-main >*{
  font-size: 20px;
  font-weight: bold;
  padding-top:20px;
  padding-right:20px;
  padding-left:10px;

   
}

.filter .range-dropdown >*{
  border:1px solid rgba(0,0,0,0.1);
  margin-right:10px;
 
}
.filter .range >*{
  margin-right:2px;
}

.filter .range >.action{
  background: #fd521d;
  color:#fff;
  border-radius: 2px;
}

.filter .other button{
  background:transparent;
  border:0;
}

.filter .other button,
.filter .dropdown{
  padding:2px 5px;
}

.filter .dropdown{
  display: inline-block;
}
.filter .default{
  color:#fd521d;
}
</style>


