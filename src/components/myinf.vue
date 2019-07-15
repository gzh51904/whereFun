<template>
  <div class="myinf">
    <!-- 搜索框 -->
    <search></search>
    <div id="nnav">
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>目的地</el-breadcrumb-item>
        <el-breadcrumb-item>洛杉矶</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- main区域 -->
    <infMain :inf="inf"></infMain>
  </div>
</template>
<script>
import search from "./search.vue";
import infMain from "./myinf/inf_main.vue";
import axios from 'axios';
export default {
  data() {
    return {
      inf: [
        {
          HomeHotTitleImg: require("../assets/img/10787-1541988234403_640x483.jpg"),
          id: 123,
          discount: "9.5折",
          title:
            "『星球小屋预售』1晚星球小屋、4次极光观测机会、探秘北极圈、征服道顿公路、北方极地博物馆、冰雕博物馆 5日游",
          servise: "接机参团",
          discount_getpoints: "返点",
          discount_usepoints: "兑换",
          guide: "导游语言: 国语 | 英语",
          date: "每天发团",
          tour_code: "编号: FA5-10787"
        }
      ]
    };
  },
  components: {
    search,
    infMain
  },
  async created() {
    let {id,HomeHotTitleImg,icon,HomeHotGps,HomeHotTitle,HomeHotSale,HomeHotPrice} = this.$route.params;
    // console.log(id,HomeHotTitleImg,HomeHotTitleImg,HomeHotGps,HomeHotTitle,HomeHotSale,HomeHotPrice,)
    let servise = '接机参团'
    let discount_getpoints = '返点'
    let discount_usepoints = '兑换'
    let guide = '导游语言: 国语 | 英语'
    let date = '每天发团'
    let tour_code = '编号: FA5-10787'
    
    let obj = {id,HomeHotTitleImg,icon,HomeHotGps,HomeHotTitle,HomeHotSale,HomeHotPrice,servise,discount_getpoints,discount_usepoints,guide,date,tour_code};
    let arr = [];
    arr.push(obj);
    this.inf = arr;
    console.log(this.inf)

    // let newid = 'ObjectId(' + '"'+id+'"' + ')';
    // console.log(newid)
  }
};
</script>
<style lang="scss" >
.myinf {
  margin-top: 0;
  width: 100%;
  position: absolute;
  z-index: 10000;
  box-shadow: 0 0 10px #000;
  background-color: #fff;
  box-sizing: border-box;
  min-height: 100%;
  padding-bottom: 6rem;
  #nnav {
    margin-top: 3.5rem;
    .el-breadcrumb {
      padding-left: 1.5rem;
      height: 3rem;
      line-height: 3rem;
      font-size: 1.2rem;
      color: #ccc;
    }
  }
}
</style>
