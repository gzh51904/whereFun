<template>
  <div id="col3">
    <h5>本周特卖</h5>
    <ul class="col3_list">
      <li>
        <a href="javascript:;">
          <div class="col3_item">
            <div class="col3_item_imgbox"></div>
            <h3>『星球小屋预售』1晚星球小屋、4次极光观测机会、探秘北极圈、征服道顿公路、北方极地博物馆、冰雕博物馆 5日游</h3>
            <div class="col3_item_dnd">
              <span class="col3_item_rebate">9.3折</span>
              <span class="col3_item_city">费尔班克斯出发</span>
            </div>
            <span class="price_box">
              <span class="price">$758.1</span>
              <small class="price_unit">/人起</small>
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#col3 {
  float: left;
  width: 100%;
  margin: 10px 0;
  h5 {
    margin: 0 0 12px;
    font-size: 16px;
    font-weight: 500;
    color: #556;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: start;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    li {
      display: inline-flex;
      width: 100%;
      margin-bottom: 6px;
      box-sizing: border-box;
      padding: 0 4px;
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
          padding-top: 120px;
          padding-bottom: 40px;
          overflow: hidden;
          margin-bottom: 15px;
          .col3_item_imgbox {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 120px;
            background-image: url("../../assets/img/LosAngeles_b.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 4px;
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
