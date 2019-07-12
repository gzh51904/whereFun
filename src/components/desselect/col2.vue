<template>
  <div id="col2">
    <h5>精品路线</h5>
    <ul>
      <li class="col2_item">
        <a href="javascript:;">
          <div class="col2_item_box">
            <span>班夫经济游</span>
          </div>
        </a>
      </li>
      <li class="col2_item">
        <a href="javascript:;">
          <div class="col2_item_box">
            <span>班夫经济游</span>
          </div>
        </a>
      </li>
      <li class="col2_item">
        <a href="javascript:;">
          <div class="col2_item_box">
            <span>班夫经济游</span>
          </div>
        </a>
      </li>
      <li class="col2_item">
        <a href="javascript:;">
          <div class="col2_item_box">
            <span>班夫经济游</span>
          </div>
        </a>
      </li>
      <li class="col2_item">
        <a href="javascript:;">
          <div class="col2_item_box">
            <span>班夫经济游</span>
          </div>
        </a>
      </li>
      <li class="col2_item">
        <a href="javascript:;">
          <div class="col2_item_box">
            <span>班夫经济游</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#col2 {
  float: left;
  width: 100%;
  overflow: hidden;
  margin: 10px 0;
  h5 {
    margin: 0 0 12px;
    font-size: 16px;
    font-weight: 500;
    color: #556;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    // display: flex;
    // justify-content: start;
    align-content: center;
    align-items: center;
    // flex-wrap: wrap;
    .col2_item {
      width: 50%;
      // display: inline-flex;
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
        .col2_item_box {
          width: 100%;
          height: 40px;
          background-color: #f7f8f7;
          border-radius: 3px;
          line-height: 40px;
          font-size: 14px;
          color: #556;
          text-align: center;
          span {
            color: #556;
          }
        }
      }
    }
  }
}
</style>

