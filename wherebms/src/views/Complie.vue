<template>
  <el-table :data="database" border style="width: 100%">
    <el-table-column fixed prop="tour_id" label="ID" width="150"></el-table-column>
    <el-table-column prop="tour_title" label="标题" width="300"></el-table-column>
    <el-table-column prop="tour_display_price" label="价格" width="120"></el-table-column>
    <el-table-column prop="tour_discount_percent" label="折扣" width="120"></el-table-column>
    <el-table-column prop="tour_day:" label="天数" width="120"></el-table-column>
    <el-table-column prop="tour_main_picture" label="图片" width="120"></el-table-column>
    <el-table-column prop="tour_departure" label="出发城市" width="120"></el-table-column>
    <el-table-column prop="tour_leave" label="结束城市" width="120"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
        <el-button type="text" @click="handleClick(scope)" size="small">保存</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      database: []
    };
  },
  created() {
    //拿到数据渲染
    this.database = [];
    this.database.push(this.$route.params.database);
    console.log(this.$route.params.database);
  },
  methods: {
    handleClick(scope) {
        //找到dom节点
        var a = document.querySelectorAll('.el-table__row td');
        a.setAttribute("contentEditable","true");
      //   插入数据库desSelectList
      console.log(scope.row);
    //   axios
    //     .post("http://localhost:3000/update", [
    //       { DataBaseName: "desSelectList" },
    //       { tour_id : this.db },
    //       {
    //         tour_id: 5555,
    //         tour_code: "CA5-5349",
    //         tour_main_picture: "banfuNA99999_10.jpg",
    //         tour_departure: "卡尔加里",
    //         tour_leave: "卡尔加里",
    //         tour_title:
    //           "玩转『落基山』班夫国家公园、硫磺山缆车、琼斯顿峡谷、鸭爪冰川、露易丝湖、玛琳湖、贾斯珀冰原奇景 5日游（含接送机/可加餐/酒店多选）",
    //         tour_day: 5,
    //         tour_display_price: 399,
    //         tour_discount_percent: 96
    //       }
    //     ])
    //     .then(res => {
    //       console.log(res);
    //     });
    }
  }
};
</script>

