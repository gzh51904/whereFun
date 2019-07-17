<template>
  <div class="section menu">
    <h3>玩哪儿！最有趣的欧美自由行</h3>
    <ul>
      <a href="javascript:;" @click="Gotolist">
        <li>
          <span class="duoriyou"></span>
          <h5>多日游</h5>
        </li>
      </a>
      <a href="javascript:;"  @click="Gotolist">
        <li>
          <span class="yiriyou"></span>
          <h5>一日游</h5>
        </li>
      </a>
      <a href="javascript:;"  @click="Gotolist">
        <li>
          <span class="wanle"></span>
          <h5>玩乐</h5>
        </li>
      </a>
      <a href="javascript:;"  @click="Gotolist">
        <li>
          <span class="jiudian"></span>
          <h5>酒店</h5>
        </li>
      </a>
      <a href="javascript:;"  @click="Gotolist">
        <li>
          <span class="baoche"></span>
          <h5>包车</h5>
        </li>
      </a>
    </ul>
  </div>
</template>
<script>
export default {
  methods:{
    Gotolist() {
      this.$router.push({path:'/nothing'})
    }
  }
};
</script>
<style lang="scss" scoped>
.section {
  margin: 0;
  padding: 1.5rem 0;
  h3 {
    margin: 0 0 1.8rem;
    text-align: center;
    width: 100%;
    line-height: 2rem;
    font-weight: normal;
    font-size: 1.6rem;
    color: #333;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    li {
      display: inline-block;
      float: left;
      width: 20%;
      text-align: center;
      span {
        display: block;
        width: 100%;
        height: 4rem;
        height: 3.6rem;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
      }
    }
    h5 {
      margin: 1rem 0 0;
      font-weight: normal;
      color: #555;
      font-size: 1.4rem;
      line-height: 2rem;
      margin-top: 0.8rem;
      display: inline-block;
    }
  }
}

//section menu
.duoriyou {
  background-image: url("../../assets/img/menuicon-tour.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 36px;
}
.yiriyou {
  background-image: url("../../assets/img/menuicon-one-day-tour.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 36px;
}
.wanle {
  background-image: url("../../assets/img/menuicon-activity.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 36px;
}
.jiudian {
  background-image: url("../../assets/img/menuicon-hotel.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 36px;
}
.baoche {
  background-image: url("../../assets/img/menuicon-car-rental.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 36px;
}
</style>

