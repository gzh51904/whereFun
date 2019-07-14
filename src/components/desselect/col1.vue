<template>
  <div id="clo1">
    <h5>当季热销</h5>
    <ul class="col1">
      <li @click="gotocomm()" class="col1_item">
        <a href="javascript:;">
          <div class="itemBox">
            <h6>黄石国家公园</h6>
          </div>
        </a>
      </li>
      <li class="col1_item">
        <a href="javascript:;">
          <div class="itemBox">
            <h6>黄石国家公园</h6>
          </div>
        </a>
      </li>
      <li class="col1_item">
        <a href="javascript:;">
          <div class="itemBox">
            <h6>黄石国家公园</h6>
          </div>
        </a>
      </li>
      <li class="col1_item">
        <a href="javascript:;">
          <div class="itemBox">
            <h6>黄石国家公园</h6>
          </div>
        </a>
      </li>
      <li class="col1_item">
        <a href="javascript:;">
          <div class="itemBox">
            <h6>黄石国家公园</h6>
          </div>
        </a>
      </li>
      <li class="col1_item">
        <a href="javascript:;">
          <div class="itemBox">
            <h6>黄石国家公园</h6>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    methods : {
        gotocomm(){
            this.$router.push({path : '/comm'});
        }
    } 
}
</script>


<style lang="scss" scoped>
#clo1 {
  width: 100%;
  margin: 1rem 0;
  h5 {
    margin: 0 0 1.2rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: #556;
  }
  .col1 {
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
      width: 50%;
      margin-bottom: 0.6rem;
      box-sizing: border-box;
      padding: 0 0.4rem;
      flex-direction: column;
      a {
        text-decoration: none;
        color: inherit;
        outline: none;
        display: block;
        width: 100%;
        .itemBox {
          display: flex;
          width: 100%;
          height: 7.2rem;
          background-color: #f7f8f7;
          border-radius: 0.3rem;
          overflow: hidden;
          background-image: url("../../assets/img/LosAngeles_b.jpg");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          text-align: center;
          align-items: center;
          flex-flow: column;
          justify-content: center;
          h6 {
            display: flex;
            font-size: 1.5rem;
            font-weight: normal;
            color: #fff;
            margin: 0;
            text-shadow: 0.1rem 0.1rem 0.1rem #555;
          }
        }
      }
    }
  }
}
</style>

