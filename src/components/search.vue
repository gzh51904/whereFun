<template>
    <header>
      <div class="header_top" @click="backHome">
        <a href="javascript:;"></a>
        <div class="header_search">
          <form>
            <input id="text" type="text" placeholder="搜索：团号、城市、景点" />
            <a href="javascript:;" id="btn"></a>
          </form>
        </div>
      </div>
    </header>
</template>
<script>
export default {
  methods:{
    backHome() {
      this.$router.push({path:'/home'})
      // console.log(store.state.isShow)
    }
  }
}
</script>


<style lang="scss" scoped>
header {
  background: #fff;
  width: 100%;
  height: 3.4rem;
  line-height: 3.4rem;
  padding: 0;
  overflow: hidden;
  z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;
  
  .header_top {
      overflow: hidden;
      display: flex;
    > a {
      float: left;
      height: 2.2rem;
      margin-left: 0.6rem;
      flex:1;
    //   width: 5rem;
      background: url("../assets/img/des_header_logo.png") no-repeat;
      background-position: left center;
      background-size: contain;
      float: left;
      margin-top: 0.6rem;
    }
  }

  .header_search {
    float: left;
    // width: 31rem;
    flex:8;
    margin-left: 0.5rem;
    height: 3.4rem;
    padding-top: 0.5rem;
    form {
      height: 2.4rem;
    }
    #text {
      width: 90%;
      height: 2.6rem;
      vertical-align: top;
      border: 0.1rem solid #ccc;
      border-right: none;
      border-radius: 0.3rem 0 0 0.3rem;
      padding-left: 1rem;
    }
    #btn {
      display: inline-block;
      width: 10%;
      height: 2.6rem;
      background: url("../assets/img/des_search.png") no-repeat;
      background-size: contain;
      background-position: center center;
      border: 0.1rem solid #ccc;
      border-left: none;
      border-radius: 0 0.3rem 0.3rem 0;
    }
  }
}
</style>
