<template>
  <div id="banner1">
    <el-carousel :interval="5000" arrow="always" indicator-position="string" style="height:17rem;">
      <el-carousel-item v-for="item in banner1Photo" :key="item.name">
        <img :src="item.img" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
         banner1Photo: [
        {
          img: require("../../assets/img/banner_1.jpg"),
          name: 1
        },
        {
          img: require("../../assets/img/banner_2.jpg"),
          name: 2
        }
      ]
    }
  },
};
</script>
<style lang="scss" scoped>
#banner1 {
  height: 17rem;
  img {
    width: 100%;
    height: 17rem;
  }
}
.el-carousel__container{
  height: 17.0rem;
}
</style>

