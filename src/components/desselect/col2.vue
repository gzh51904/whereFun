<template>
  <div id="col2">
    <h5 v-text="database.name">精品路线</h5>
    <ul>
      <li @click="gotocomm(a)" v-for="(a,index) in database.item" :key="index" class="col2_item">
        <a href="javascript:;">
          <div class="col2_item_box">
            <span v-text="a">班夫经济游</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["db", "index"],
  data() {
    return {
      database: "" //存数据
    };
  },
  methods: {
    gotocomm(a, city) {
      if (this.db == "所有城市") {
        this.$store.state.desState = a;
        this.$router.push({
          name: "Des"
        }); //跳转到des
      } else {
        this.$store.state.commState = a; //修改vuex的值，跨组件通讯，comm直接读取vuex的值进行数据渲染
        this.$router.push({
          name: "comm"
        }); //跳转到comm
      }
    }
  },
  watch: {
    deslistDATA() {
      //监听到拿到了数据执行挂载
      this.$store.state.deslistDATA.map(item => {
        if (item.title == this.db) {
          //遍历筛选需要渲染的数据
          this.database = item.total[this.index];
        }
      });
    }
  },
  computed: {
    deslistDATA: function() {
      return this.$store.state.deslistDATA;
    }
  }
};
</script>


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
    display: flex;
    // justify-content: start;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    .col2_item {
      width: 50%;
      display: inline-flex;
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

