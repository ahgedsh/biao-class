<template>

  <div class='detail'>
    <Nav/>
      <div class='mian'>
       
        <div class='container'>
          
            
          
          <div class='col-lg-6 '>
            <div class='card'>
              <div class='title'><h2>{{detail.title}}</h2></div>
              <div class='thum'>
                
                  <img :src="detail.preview && detail.preview[selected_preview] && detail.preview[selected_preview].url ? detail.preview[selected_preview].url :
            'https://image1.guazistatic.com/qn180618155102242081e88c459a11926744030df0971b.jpg?imageView2/1/w/287/h/192/q/88'"
                 alt=""> 
              </div>
              <div class='minicart'>
                <div class='col-lg-3' @click='selected_preview=i' v-for='(pre,i) in detail.preview' :key='pre.id'>
                  <img :src="pre.url" alt='pre.name'> 
                  
                </div>
                
              </div>
            </div>
          
          </div>
          <div class='col-lg-6 '>
            <div class='bigdesc'>
              <div class='title'> <h2>{{detail.title}}</h2></div>
              <div class='price-area'>
                <div class='price'> 
                  <span class='thisprice'>卖家报价 :</span>
                  <span class="oldprice">￥{{detail.price}}万</span>
                  <span class='newprice'>新车含税15.1万</span>
                  <span class='lowprice'>降价提醒</span>
                </div>
                <div class='somebuy'>
                  <span>分期买:</span>
                  <span>首付： <span class='new'>13.7万</span></span>
                  <span>月供：<span class='mouth'>1197元</span></span>
                  <button>分期详情 ></button>
                </div>
                <div class='server'>
                  <div class='servers'>
                    <span class='serverfirst'>服务费:</span>
                    <span > <span class='sreverprice'>3000元 </span><span class='shui'>（车价×3%，最低3000）</span> </span>
                    <span  class="desc">详情</span>
                  </div>
                  <div class='serverover' >
                    <span class='serverlast'>服务项:</span>
                    <span classs='serverinput'>
                     <span class='one'> <input type="checkbox">基础质保</span>
                     <span class='two'> <input type="checkbox">14天可退</span>
                     <div class='three'> <input type="checkbox">249项车况检测</div>
                    </span>
                  </div>
                  
                </div>
              </div>  
              <div class='row dib'>
                <span class='col time' >
                  <div>{{detail.birth_day | only_day}}</div>
                  <div class='one'>上牌时间</div>
                </span>
                <span class='col mile'>
                  <div>{{detail.consumed_distance || 0}}万公里</div>
                  <div class='two'>公里数</div>
                </span>
                <span class='col search' >
                  <div>国四</div>
                  <div class='three'>外迁查询</div>
                </span>
                <span class='col some'>
                  <div>1.5L</div>
                  <div class='four'>排量</div>
                </span>
                <span class='col dress'>
                  <div>陕A</div>
                  <div class='five'>上牌地点</div>
                </span>
              </div>
              <div class='lookcar row'>
                <div class='col'>

                <button  class='mainbtn'>预约看车</button>
                </div>
                <div class='col'>

                <button class='mainbtns'>砍价</button>
                </div>

                <div class='col'>
                  <div class='consult'>免费咨询</div>
                  <div class='number'>400-4444-555</div>
                </div>
                

              </div>
              <div class='someelse'>
                <span>车源号：xa-250779</span>
                <span><i class="far fa-heart"></i>收藏</span>
                <span><i class="fas fa-mobile-alt"></i>发送到手机</span>

              </div>


              
            </div>
        
          </div>
        </div>  
        
          
      </div>
     
      <div class='car-details '>
        <div class='container'>
          <div class='titleone  txc'>车辆详情</div>
          <div class='row'>
          <div class='seller row  col-lg-6'>
            <div class='picter col  '>
              <img src='../assets/person.png'>
            </div>
            <div class='peoper col'>
              <div class='name'>卖家-胡先生说车</div>
              <div class='one'>个体商户</div>
              <div class='two'>雁塔</div>
            </div>
              <div class='desc'>
                现在还依稀记得我怀揣着激动心情买车时候的场景，2010年9月上的牌，
                不知不觉它已经走了9.43万公里了。这台车是我上下班的代步用车，
                公里数也不是很多，属于正常的用车频率。操控反应精准，随心而动，
                路面反馈恰到好处，车身稳定，低速高速时都有韧性和支撑力度。
                我这车的车况非常好，动力足够满足日常使用，平时开着很稳，也从没出过大事故
                ，如果你需要这么一辆性价比非常高的车，选择我的车没错。
              </div>
          </div>
          <div class='car-info col-lg-6'  >
            <div class='title txc'> <h4>车辆详细信息</h4></div>
            <div class='row'>
              <div class='col-lg-6'>
                <table>
                  <tbody>
                  <tr>
                    <td>年检到期时间</td>
                    <td>2019-08</td>
                  </tr>
                  <tr>
                    <td>商业险到期时间</td>
                    <td>2019-08</td>
                  </tr>
                  <tr>
                    <td>有无购车发票</td>
                    <td>否</td>
                  </tr>
                  <tr>
                    <td>是否4S店保养</td>
                    <td>否</td>
                  </tr>
                  </tbody>
                </table>
                
              </div>
              <div class='col-lg-6'>
                <table>
                <tbody>
                <tr>
                  <td>交强险到期时间</td>
                  <td>2019-08</td>
                </tr>
                <tr>
                  <td>过户次数</td>
                  <td>0次</td>
                </tr>
                <tr>
                  <td>车辆购置税完税证明</td>
                  <td>无</td>
                </tr>
                <tr>
                  <td>有无改装</td>
                  <td>无</td>
                </tr>
                </tbody>
                </table>
              </div>
             
            </div>

          </div>
        </div>
        </div>
      </div>
      <div class='preview'>
        <div class='container'>
          <div class='title txc' ><h2>车辆外观</h2></div>
          <div class='desc txc'> 车况优秀，性能部件正常使用，经检测，外观及车身结构无重大撞击。</div>
          <div class='picter row'>
            <div class='col-lg-6'>
              <div class='thumb'>
              <img src='../assets/cars2.jpg'>
              </div>
            </div>
            <div class='col-lg-6'>
              <div class='thumb'>
              <img src='../assets/cars2.jpg'>
              </div>
            </div>          
          </div>
          <div class='picter row'>
            <div class='col-lg-6'>
              <div class='thumb'>
              <img src='../assets/cars2.jpg'>
              </div>
            </div>
            <div class='col-lg-6'>
              <div class='thumb'>
              <img src='../assets/cars2.jpg'>
              </div>
            </div>           
          </div>
          <div class=' row minipicter'>
            <div class='col-lg-3'>
              <div class='thumb'>
              <img src='../assets/cars2.jpg'>
              </div>
            </div>
            <div class='col-lg-3'>
              <div class='thumb'>
              <img src='../assets/cars2.jpg'>
              </div>
            </div>
            <div class='col-lg-3'>
              <div class='thumb'>
              <img src='../assets/cars2.jpg'>
              </div>
            </div>
            <div class='col-lg-3'>
              <div class='thumb'>
              <img src='../assets/cars2.jpg'>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      <Footer />
  </div>
</template>

<script>

import SearchBar from '../components/SearchBar.vue';
import Nav  from '../components/Nav.vue';
import Footer  from '../components/Footer.vue';

import api from '../lib/api';


export default {
   components:{Nav,SearchBar,Footer},

   mounted(){
     let id=this.get_id();
     this.find(id);
   },
   data(){
     return {
       selected_preview:0,
       detail:{},
     };
   },
   methods:{
     find(id){
       api('vehicle/find',{id})
       .then(r=>{
         this.detail=r.data;
         console.log(this.detail);
       });
     },
     get_id(id){
     
       return this.$route.params.id;
     }
   }
    
}; 
</script>

 <style scoped>
 .detail{
   background: #fff;
 }
 
.search input,
.search button
{
  padding: 10px;
  margin-top: 20px;

}
.search input{
  width: 30%;
}
.bigdesc{
  padding-left: 15px;
}
.bigdesc .title{
  padding-top: 40px;
}

.bigdesc .price,
.bigdesc .somebuy,
.bigdesc .server{
   background: #eee;
  padding: 10px;
}
.bigdesc .servers{
  padding-top:10px;
}


.bigdesc .somebuy{
  margin-bottom: 3px;
}
.bigdesc .new,
.bigdesc .mouth,
.bigdesc .oldprice,
.bigdesc .sreverprice,
.number{
  color: #fd521d;

}

.bigdesc .serverfirst,
.bigdesc .serverlast
{

padding:20px  10px;
}
.bigdesc .serverover{
  padding-top: 17px;
}

.bigdesc .oldprice{
  
  font-size: 25px;
  padding: 10px;
}

.bigdesc .newprice,
.bigdesc .shui,
.consult{
   color:rgba(0,0,0,.3);
   font-size: 10px;
}

.bigdesc .newprice,
.bigdesc .lowprice{
  padding:10px 20px;
  visibility: center;
  
}
.bigdesc .lowprice,
.bigdesc .desc{
  font-size: 15px;
  color: black;
}
.bigdesc .thisprice{
  padding:12px;
}
.bigdesc .somebuy >*{
  padding:  0 15px;
}
.bigdesc .somebuy button{
  background: #fd521d;
  color:#fff;
  font-size: 10px;
  padding:  5px 9px;
  border:1px solid #fd521d;
}
.bigdesc .somebuy input{
  padding:5px 20px;
}

.bigdesc .serverfirst{
  padding-bottom: 20px;
}

.bigdesc .desc{
  padding-left:30px;
}

.bigdesc .server .one,
.bigdesc .server .two,
.bigdesc .sever .three{
 margin-right: 100px;
 padding-top: 15px;
}

.bigdesc .server .three{
  padding-left:70px;
  padding-top: 20px;
}


.dib >*{
  padding:10px 25px;
  text-align: left;
  font-size:17px;
  font-weight: bold;
  margin-top: 10px;

 

}
.dib .one,
.dib .two,
.dib .three,
.dib .four,
.dib .five{
  font-size:13px;
  color:rgba(0,0,0,.3);
  font-weight: normal;
  padding-top:10px;
}

.mainbtn,
.mainbtns
{
  color:#fff;
  
  margin: 10px 0px;
  border-radius: 3px;
  margin-right: 30px;
}

.mainbtns{
  padding: 10px 70px;
  border: 1px solid #ffb300;
  background: #ffb300;
}
.mainbtn{
  padding: 10px 50px;
  background: #fd521d;
  border: 1px solid #fd521d;
}
.number{
  padding-top: 10px;
  font-size: 20px;
}
.consult{
  padding-top: 7px;
}

.someelse > span:before{
  content:'|';
  padding-right: 40px;
  color:rgba(0,0,0,.3);

}

.someelse > span:first-child::before {
  content:'';
}
.someelse >*{
  font-size:15px;
  color:block;
  
  padding-right:60px;
}
.someelse{
  padding-top:10px;
}

.minicart {
  padding:10px;
  overflow: auto;
    white-space: nowrap;
}
.minicart >*{
  padding: 10px;
}

.car-details .titleone{
  font-size: 45px;
  margin: 20px;
}

.car-details .picter img{
  border-radius: 50%;
}

.car-details .name{
  font-size: 20px;
  font-weight: bold;
  
}
.car-details .peoper >*{
  padding: 5px;

}
.car-details .peoper .one,
.car-details .peoper .two{
  font-size:15px;
  color:rgba(0,0,0,.5);
}

.car-details .seller{
  padding-right: 20px;
}
.car-details .desc{
  line-height: 1.7rem;
}
.car-details .car-info{
  font-size: 18px;
  font-weight: bold;
}

.preview .picter,
.preview .minipicter{
  padding:10px;
}
.preview .picter >*,
.preview .minipicter >*{
  padding: 10px;
}

table{
  line-height: 3rem;
  
}
table td{
  border-bottom:1px dashed rgba(0,0,0,.3);
  padding-left:20px;
}
.minipicter,
.picter{
  margin: 0 -10px;
}

</style>


