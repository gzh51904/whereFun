<template>
  <div id="clo1">
    <h5>当季热销</h5>
    <ul class="col1">
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

<style lang="scss" scoped>
#clo1 {
  width: 100%;
  margin: 10px 0;
  h5 {
    margin: 0 0 12px;
    font-size: 16px;
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
      margin-bottom: 6px;
      box-sizing: border-box;
      padding: 0 4px;
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
          height: 72px;
          background-color: #f7f8f7;
          border-radius: 3px;
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
            font-size: 15px;
            font-weight: normal;
            color: #fff;
            margin: 0;
            text-shadow: 1px 1px 1px #555;
          }
        }
      }
    }
  }
}
</style>

