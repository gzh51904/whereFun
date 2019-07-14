<template>
  <div class="display_price_wrapper">
    <div class="citys">
      <h5>
        <span>出发:</span>
        费尔班克斯
      </h5>
      <h5>
        <span>结束：</span>
        费尔班克斯
      </h5>
    </div>
    <div class="prices has_discount">
      <div id="original_price">
        <span class="currency_convert">$798</span>
      </div>
      <span id="display_price" class="currency_convert">$758.1</span>
      <small id="price_unit">/人起</small>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.display_price_wrapper {
  margin: 1.2rem 0;
  padding: 0;
  height: 4.8rem;
  .citys {
    float: left;
    h5 {
      margin: 0;
      padding: 0;
      line-height: 2.4rem;
      color: #757888;
      font-size: 1.4rem;
      font-weight: normal;
      span {
        font-weight: bold;
      }
    }
  }
  .prices {
    float: right;
    line-height: normal;
    #original_price {
      display: block;
      font-size: 1.5rem;
      line-height: 2.4rem;
      color: #999;
      text-align: center;
      text-decoration: line-through;
      font-weight: 300;
      padding-right: 3rem;
      .currency_convert {
        font-size: 1.5rem;
        line-height: 2.4rem;
        color: #999;
        text-align: center;
        font-weight: 300;
      }
    }
    #display_price {
      line-height: 2.4rem;
      font-size: 2.4rem;
      font-weight: bold;
      color: #ff3573;
    }small{
        font-size:1.4rem;
        color:#777;
        padding-left: 0.3rem;
        vertical-align: baseline;
    }
  }
}
</style>

