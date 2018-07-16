<template>
  <div class='container'>
    <div class='serve row '>
      <div>一年/两万公里质保</div>
      <div>14天可退</div>
      <div>249项检测</div>
      <div>精选优质车源</div>
      <div>一站式服务</div>

    </div>
    <hr>
    <div class='about row'>
      <div class='about-me col-lg-7'>
        <div class='row'>
          <div class='col-lg-2'>
            <div class='title'>关于我们</div>
            <div class='others'>
              <div>公司介绍</div>
              <div>联系我们</div>
              <div>加入我们</div>
            </div>
          </div>
          <div class='col-lg-2'>
            <div class='title'>关于我们</div>
            <div class='others'>
              <div>公司介绍</div>
              <div>联系我们</div>
              <div>加入我们</div>
            </div>
          </div>
          <div class='col-lg-2'>
            <div class='title'>关于我们</div>
            <div class='others'>
              <div>公司介绍</div>
              <div>联系我们</div>
              <div>加入我们</div>
            </div>
          </div>
          <div class='col-lg-2'>
            <div class='title'>关于我们</div>
            <div class='others'>
              <div>公司介绍</div>
              <div>联系我们</div>
              <div>加入我们</div>
            </div>
          </div>
          <div class='col-lg-2'>
            <div class='title'>关于我们</div>
            <div class='others'>
              <div>公司介绍</div>
              <div>联系我们</div>
              <div>加入我们</div>
            </div>
          </div>
          <div class='col-lg-2'>
            <div class='title'>关于我们</div>
            <div class='others'>
              <div>公司介绍</div>
              <div>联系我们</div>
              <div>加入我们</div>
            </div>
          </div>
        </div>
      </div>

      <div class='phone col-lg-3'>

        <img src="../assets/footer1.png" alt="">
        <img src="../assets/footer2.png" alt="">
      </div>
      <div class='col-lg-2'>
        <div class='number'>400-861-0500</div>
        <div class='number-others'>
          <div>免费咨询(咨询、建议、投诉)</div>
          <div>周一至周日 0:00-24:00</div>
          <div>
            <span>在线咨询</span>
            <span>官方微博</span>
          </div>
          <div>
            <span>投诉建议</span>
            <span>举报事故车</span>
          </div>
        </div>

      </div>

    </div>

    <div class='alphabet row'>
      <div class='col-lg-1 name'>找二手车</div>
      <div class='col-lg-11 alphabet-all'>
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <span>E</span>
        <span>F</span>
        <span>G</span>
        <span>H</span>
        <span>I</span>
        <span>J</span>
        <span>K</span>
        <span>L</span>
        <span>M</span>
        <span>N</span>
        <span>o</span>
        <span>P</span>
        <span>Q</span>
        <span>R</span>
        <span>S</span>
        <span>T</span>
        <span>U</span>
        <span>V</span>
        <span>W</span>
        <span>X</span>
        <span>Y</span>
        <span>Z</span>
       
      </div>
    </div>
    <hr>
    <div class='other-information'>
      <div class='first'>
        <span class='active'>西安二手车</span>
        <span>热门城市</span>
        <span>热门品牌</span>
        <span>热门车系</span>
        <span>手机找二手车</span>
        <span>友情链接</span>

      </div>
      <div class='something'>
        西安二手车，人人西安二手频道。专注西安二手车，提供大量真实、
      优质的西安二手出售转让信息，供您选择。我们致力于打造专业西安二手车
      交易市场，所以每辆二手车，都经过我们的二手车检测师专业、全面、权威
      的检测！
      购买西安二手车，就上人人车西安频道。 西安二手车触屏版。
      </div>

    </div>
    <div class='footer'>
      Copyright © 2018, renrenche.com, All Rights Reserved 京ICP证160608号     京公网安备 11010502035802号
      
    </div>

  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.active{
  color:#fd521d;
}
.serve > * {
  padding: 20px 0;
  font-size: 20px;
  font-weight: bold;
  width: 20%;
  display: inline-block;
}
img {
  width: 130px;
  height: 130px;
  padding:10px;
  display: inline-block;
}
.others,
.number-others,
.other-information .something{
  font-size: 12px;
  color: rgba(0,0,0,0.5);
}
.about-me .title,
.number{
  font-size: 17px;
  padding: 10px 0;
  font-weight: bold;
}
.about-me >*
{
  line-height: 1.6rem;
}
.number-others{
  line-height: 1.3rem;
}
.alphabet {
  margin-top:15px;
  
}
.alphabet .name{
  font-size: 17px;
  font-weight: bold;
}
.alphabet-all>span{
  
  padding:6px 10px;
  margin: 2px;
  border:1px solid rgba(0,0,0,0.1);
}
.other-information .first>span{
  padding: 10px;
 
}

.other-information .first>span:before{
  content:'|';
  padding:30px;
  color: rgba(0,0,0,0.5);

}
.other-information .first>span:first-child:before{
  content:'';
}
.other-information .first>span:first-child{
  padding: 0;
}
.other-information .something{
  margin-top: 20px;
  
}

.footer{
background:   #272c2e;
color:rgba(238, 238, 238, 0.781);
padding: 20px;
margin-top: 30px;
font-size: 14px;
text-align: center;
}
hr
{
  margin:  30px 0;
  color: rgba(0,0,0,0.01);
}
</style>


