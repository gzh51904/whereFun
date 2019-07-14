<template>
  <div id="col3">
    <h5>本周特卖</h5>
    <ul class="col3_list">
      <li v-for="(a,index) in database" :key="index">
        <a href="javascript:;">
          <div class="col3_item">
            <div class="col3_item_imgbox" :style="`backgroundImage:url(${a.img})`"></div>
            <h3 v-text="a.title">『星球小屋预售』1晚星球小屋、4次极光观测机会、探秘北极圈、征服道顿公路、北方极地博物馆、冰雕博物馆 5日游</h3>
            <div class="col3_item_dnd">
              <span class="col3_item_rebate">9.3折</span>
              <span class="col3_item_city">费尔班克斯出发</span>
            </div>
            <span class="price_box">
              <span class="price" v-text="a.price">$758.1</span>
              <small class="price_unit">/人起</small>
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            database : [{
                title : '西加勒比8日邮轮船票：蒙特哥贝+大开曼岛+科苏梅尔，嘉年华CARNIVAL—自由号FREEDOM/ 微风号BREEZE/ 展望号VISTA',
                price : '$469',
                img : require('../../assets/img/homeNA00000_43.jpg')
            },{
                title : '5日墨西哥邮轮船票：卡达利娜+恩森那达，含跨年航程，嘉年华Carnival-创意号IMAGINATION/ 灵感号INSPIRATION',
                price : '$191',
                img : require('../../assets/img/homeNA00000_44.jpg')
            },{
                title : '『黄石12-15景』东南双峡、羚羊谷、蒙特利、17哩、太浩湖、大提顿 8日游（1晚黄石小木屋）',
                price : '$758',
                img : require('../../assets/img/homeNA00000_45.jpg')
            },{
                title : '冰岛经典轻松之旅（含1日自由行，蓝湖温泉，黄金圈和黑沙滩，追寻梦幻极光）6日随心游',
                price : '$721.59',
                img : require('../../assets/img/homeNA00000_46.jpg')
            },{
                title : '『浪漫畅游西欧风情』法、德、荷兰、比利时、卢森堡五国 9日游（贴心接送机，省时省力省心）',
                price : '$839.86',
                img : require('../../assets/img/homeNA00000_47.jpg')
            },{
                title : '『14人轻奢小团』天文台、弗拉门戈海滩、库莱布拉岛、百加得酒厂、生物荧光海 6日游（1晚沙滩四星酒店）',
                price : '$472.65',
                img : require('../../assets/img/homeNA00000_43.jpg')
            }]
        }
    }
}
</script>


<style lang="scss" scoped>
#col3 {
  float: left;
  width: 100%;
  margin: 1rem 0;
  h5 {
    margin: 0 0 1.2rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: #556;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    // justify-content: start;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    li {
      display: inline-flex;
      width: 100%;
      margin-bottom: 0.6rem;
      box-sizing: border-box;
      padding: 0 0.4rem;
      flex-direction: column;
      a {
        text-decoration: none;
        color: inherit;
        outline: none;
        display: block;
        width: 100%;
        .col3_item {
          width: 100%;
          position: relative;
          padding-top: 12rem;
          padding-bottom: 4rem;
          overflow: hidden;
          margin-bottom: 15px;
          .col3_item_imgbox {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 12rem;
            background-image: url("../../assets/img/LosAngeles_b.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 0.4rem;
          }
          h3 {
            margin: 0;
            line-height: 1.3;
            font-size: 14px;
            color: #556;
            font-weight: normal;
            padding-top: 4px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            width: 100%;
          }
          .col3_item_dnd {
            position: absolute;
            left: 0;
            bottom: 0;
            line-height: 24px;
            padding: 0 8px;
            background-color: #f7f8f7;
            border-radius: 15px;
            font-size: 12px;
            display: flex;
            flex-flow: row;
            align-items: center;
            .col3_item_rebate {
              display: inline-flex;
              margin-right: 4px;
              color: #ff3573;
              font-size: 13px;
              font-weight: bold;
              float: left;
              flex-flow: row;
              align-items: baseline;
              .col3_item_city {
                display: inline-block;
                color: #556;
              }
            }
          }
          .price_box {
            display: inline-flex;
            position: absolute;
            right: 0;
            bottom: 2px;
            font-size: 18px;
            color: #ff3573;
            flex-flow: row;
            align-items: baseline;
            .price {
              font-size: 18px;
              color: #ff3573;
              .small {
                color: #99a;
                padding-left: 2px;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}

</style>
