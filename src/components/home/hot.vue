<template>
  <div class="hot">
    <h3 class="title">
      <i class="icon_hot"></i>
      爆款热销
    </h3>
    <span class="hot_title">畅销的线路，尖叫的低价</span>
    <ul>
      <li>
        
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.icon_hot {
  background-image: url("../../assets/img/icon-hot-promotion.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  display: inline-block;
  margin-right: 0.5rem;
  margin-top: 0.2rem;
  width: 2.2rem;
  height: 2.2rem;
}
.hot {
  margin: 0;
  padding: 1.5rem 0;
  .title {
    margin: 0 1.5rem;
    padding: 0;
    font-size: 1.8rem;
    color: #333;
    line-height: 2.6rem;
    font-weight: bold;
  }
  .hot_title {
    display: block;
    line-height: 2.4rem;
    font-size: 1.3rem;
    color: #777;
    margin: 0 1.5rem;
  }
}
</style>
