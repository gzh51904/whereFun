<template>
  <div id="clo1">
    <h5 v-text="database.name">当季热销</h5>
    <ul class="col1">
      <li v-for="(a,index) in database.item" :key="index" @click="gotocomm(a)" class="col1_item">
        <a href="http://localhost:8080/#/comm">
          <div class="itemBox" :style="`backgroundImage:url(${database.img[index]});`">
            <h6 v-text="a">黄石国家公园</h6>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["db","index"],
  data() {
    return {
      database: '',
    };
  },
  watch: {
    deslistDATA() {
        //监听到拿到了数据执行挂载
        this.$store.state.deslistDATA.map((item)=>{
            if(item.title == this.db){
                //遍历筛选需要渲染的数据
                this.database = item.total[this.index]
            }
        });
    }
  },
  computed: {
    deslistDATA: function() {
      return this.$store.state.deslistDATA;
    }
  },
  methods : {
      gotocomm(a){
          this.$store.state.commState = a//修改vuex的值，跨组件通讯，comm直接读取vuex的值进行数据渲染
      }
  }
};
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
    // justify-content: start;
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

