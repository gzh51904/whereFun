<template>
    <header>
      <div class="header_top">
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
    > a {
      float: left;
      height: 2.2rem;
      margin-left: 0.6rem;
      width: 5rem;
      background: url("../assets/img/des_header_logo.png") no-repeat;
      background-position: left center;
      background-size: contain;
      float: left;
      margin-top: 0.6rem;
    }
  }

  .header_search {
    float: left;
    width: 31rem;
    height: 34px;
    padding-top: 5px;
    form {
      height: 34px;
    }
    #text {
      width: 90%;
      height: 2.6rem;
      vertical-align: top;
      border: 1px solid #ccc;
      border-right: none;
      border-radius: 3px 0 0 3px;
      padding-left: 1rem;
    }
    #btn {
      display: inline-block;
      width: 10%;
      height: 2.6rem;
      background: url("../assets/img/des_search.png") no-repeat;
      background-size: contain;
      background-position: center center;
      border: 1px solid #ccc;
      border-left: none;
      border-radius: 0 3px 3px 0;
    }
  }
}
</style>
