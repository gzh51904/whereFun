<template>
  <div class="cart">
    <div class="layer shopcart-title">
      <h3>
        <a class="header-btn back" href="javascript:;">
          <i class="fa fa-chevron-left el-icon-arrow-left"></i>
          <small class="shouy">首页</small>
        </a>
        <i></i>我的购物车
        <a class="header-btn chat" href="javascript:;">
          <i class="fa fa-comments el-icon-chat-dot-round"></i>
          <small>客服</small>
        </a>
      </h3>
    </div>
    <div class="order-list">
      <label class="order-itemidx-0" for="">
        <div v-for="item in inf" :key="item._id" class="order-item">
          <div class="order-code">编号：1563178844_105260</div>
          <div class="cbox iradio_square-red2 order-checkbox">
            <input style="padding-top:0px;" type="checkbox" class="order-checkbox">
            <ins class="iCheck-helper"></ins>
          </div>
          <img class="order-item-picture" :src="require(`../assets/img/${item.gpic}`)" alt="">
          <div class="order-item-desc">
            <h3>{{item.gtit}}</h3>
            <span class="item-desc">产品代码  LA8-507</span>
            <span class="item-desc">出发时间  {{item.riqi}}</span>
            <span class="item-desc">参加人数  {{item.peoples}}</span>
            <span class="order-item-price currency-convert">${{item.gpri}}</span>
            <span @click="delgood()" class="order-item-del">
              <i class="fa fa-trash-o"></i> 删除
            </span>
          </div>
        </div>
      </label>
    </div>
    <div class="status"></div>
    <div class="layer footer">
      <div class="iradio_square-red2 order-check-all">
        <input type="checkbox" class="order-check-all">
        <ins class="iCheck-helper"></ins>
      </div>
      <label for="order-check-all">全选</label>
    </div>
    <div class="layer pay-bar">
      <div class="price-total">
        合计: <span class="order-total-price currency-convert"></span>
      </div>
      <button class="btn-go-pay">支付</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      inf:[],
      database: "",
    }

  },
async created(){
  // let { id , router,DataBaseName} = this.$route.params;
  console.log("data:", this.$route.params);
  let guser = localStorage.getItem('username');
  let {data} = await axios.post('http://localhost:3000/home',[
    {DataBaseName:"Cart"},
    {'guser':guser}
  ]);
 
  this.inf=data;
   
},
methods:{
  async delgood(){
    let sid = this.inf[0].gid;
    await axios.post('http://localhost:1910/reg/delcart',[
    {'gid':sid}
  ]);
alert('删除商品成功！');

  }
}
  }


</script>
<style lang="scss">
.cart{
  background-color: #ebebf0;
  transition: transform 0.5s;
    width: 100%;
    position: absolute;
    z-index: 10000;
    box-shadow: 0 0 10px #000;
    box-sizing: border-box;
    min-height: 100%;
    padding-bottom: 60px;
    .shopcart-title {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    h3{
      margin: 0;
    padding: 0;
    text-align: center;
    font-size: 16px;
    font-weight: normal;
    line-height: 40px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    color: #555;
    position: relative;
    a{
      display: block;
    position: absolute;
    top: 0;
    height: 41px;
    padding: 0 10px;
    text-decoration: none;
    outline: none;
    font-weight: 300;
    }
    .back {
    left: 0;
    i{
      font-size: 20px;
    display: inline-block;
    height: 41px;
    line-height: 41px;
    color: #999;
    }
    .shouy{
      display: inline-block;
    font-size: 14px;
    color: #999;
    line-height: none;
    padding: 0 5px;
    // position: absolute;
    }
}
i{display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;}
    .chat {
    right: 0;
    i{
      font-size: 20px;
    display: inline-block;
    height: 41px;
    line-height: 41px;
    color: #999;
    }
    small{
      display: inline-block;
    font-size: 14px;
    color: #999;
    line-height: 41px;
    padding: 0 5px;
    }
}
    }
}
.order-list{
  width: 100%;
    padding: 90px 0 0;
    margin: 0;
    color: #555;
    background: #ebebf0;
    position: relative;
    z-index: 5;
    label{
      .order-item{
        width: 100%;
    height: 135px;
    margin: 0 0 6px;
    padding: 5px 0;
    background-color: #fff;
    position: relative;
    .order-code{
      position: absolute;
    left: 0;
    top: 0;
    font-size: 10px;
    padding: 8px;
    color: #bbb;
    }
    .order-checkbox {
    position: absolute;
    top: 65px;
    left: 6px;
    input{
      // position: absolute;
    // visibility: hidden;
    width:22px;
    height: 22px;
    top:0!important;
    }
    ins{
      position: absolute;
    top: 0%;
    left: 0%;
    display: block;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background: rgb(255, 255, 255);
    border: 0px;
    opacity: 0;
    }
}
.icheckbox_square-red2, .iradio_square-red2 {
    background-image: url(https://www.wannar.com/javascript/icheck/skins/red2@2x.png);
    -webkit-background-size: 240px 24px;
    background-size: 240px 24px;
}
.order-item-picture {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 30px;
    left: 34px;
}
.order-item-desc {
    padding-left: 140px;
    padding-right: 4px;
    h3{
      font-size: 15px;
    font-weight: normal;
    padding: 0;
    margin: 25px 0 4px;
    color: #555;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    .item-desc{
      font-size: 12px;
    clear: both;
    display: block;
    color: #999;
    padding-bottom: 2px;
    line-height: 15px;
    }
    .order-item-price{
      color: #ff3573;
    position: absolute;
    bottom: 15px;
    left: 142px;
    font-size: 16px;
    line-height: 1;
    }
    .order-item-del{
      color: #777;
    position: absolute;
    bottom: 15px;
    right: 10px;
    font-size: 14px;
    padding: 0;
    line-height: 16px;
    .fa{
      display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    }
    }
}
      }
    }
}
.footer{
  overflow: auto;
    height: 50px;
    background-color: #EBEBF0;
    position: fixed;
    top: 41px;
    left: 0;
    z-index: 9;
    .order-check-all{
     position: absolute;
    top: 80%;
    left: 6px;
    margin-top: -11px;
    input{
      top: 50%;
    left: 6px;
    margin-top: -11px;
    width: 22px;
    height: 22px;
    }
    label{line-height: 22px;}
    .iCheck-helper{
      position: absolute;
    top: 0%;
    left: 0%;
    display: block;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background: rgb(255, 255, 255);
    border: 0px;
    opacity: 0;
    }
    }
    .iradio_square-red2{
      background-image: url(https://www.wannar.com/javascript/icheck/skins/red2@2x.png);
    // -webkit-background-size: 240px 24px;
    background-size: 240px 24px;
    }
    label{
      color: #777;
    font-size: 15px;
    line-height: 50px;
    padding-left: 35px;
    }
}

.layer {
    width: 100%;
    padding: 0;
    margin: 0;
}
.pay-bar {
    overflow: hidden;
    height: 54px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9;
    right: 0;
    box-shadow: 0 0 10px #999;
    .price-total{
      float: left;
    height: 54px;
    font-size: 16px;
    line-height: 54px;
    color: #555;
    padding: 0 10px;
    margin: 0;
    display: inline-block;
    width: 70%;
    box-sizing: border-box;
    span{
      color: #ff3573;
    font-size: 16px;
    }
    }
    button{
      display: inline-block;
    width: 30%;
    height: 54px;
    line-height: 54px;
    color: #fff;
    text-align: center;
    background-color: #ff3573;
    float: left;
    padding: 0;
    margin: 0;
    border: 0;
    font-size: 17px;
    }
}
}
</style>

