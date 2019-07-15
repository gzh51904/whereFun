<template>
    <div class="layer pay-bar">
      <div class="price-total">
        合计: <span class="order-total-price currency-convert"></span>
      </div>
      <button class="btn-go-pay">支付</button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
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

</style>


