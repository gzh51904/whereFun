<template>
  <div id="comm">
    <search />
    <div class="comm_layer">
      <ul>
        <li class="comm_layer_one">
          <span>出发</span>
          <i class="el-icon-arrow-down"></i>
        </li>
        <li>
          <span>天数</span>
          <i class="el-icon-arrow-down"></i>
        </li>
        <li>
          <span>筛选</span>
          <i class="el-icon-arrow-down"></i>
        </li>
        <li>
          <span>排序</span>
          <i class="el-icon-arrow-down"></i>
        </li>
      </ul>
    </div>
    <desnav/>
    <deslist/>
  </div>
</template>
<script>
import search from "../search";
import desnav from "../des/desnav";
import deslist from "../des/deslist";
export default {
  components: {
    search,
    deslist,
    desnav
  }
};
</script>

<style lang="scss" scoped>
#comm {
  margin-top: 0;
  position: absolute;
  z-index: 10000;
  box-shadow: 0 0 10px #000;
  background-color: #fff;
  box-sizing: border-box;
  min-height: 100%;
  padding-bottom: 6rem;
  padding-top: 3.4rem;
  width: 100%;
  height: auto;
  .comm_layer {
    height: 36px;
    line-height: 36px;
    border-bottom: 1px solid #ccc;
    z-index: 99999;
    background-color: #fff;
    width: 100%;
    position: relative;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-flow: row;
      height: 100%;
      align-items: center;
      li {
        flex: 1;
        text-align: center;
        margin: 0;
        border-right: 1px solid #ccc;
        line-height: 22px;
        font-size: 14px;
        color: #555;
        span {
          line-height: 22px;
          font-size: 14px;
          color: #555;
          text-align: center;
        }
        .el-icon-arrow-down:before {
          font-weight: 900;
          font-size: 15px;
          margin-left: 3px;
        }
      }
      .comm_layer_one {
        flex: 0 0 33%;
      }
    }
  }
}
</style>


