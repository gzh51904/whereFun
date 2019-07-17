<template>
  <div id="goodinster">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option v-for="(a,index) in tab" :key="index" :label="a" :value="a"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData.slice(startPage,endPage)" border style="width: 100%">
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
          <el-button type="text" @click="handleClick(scope)" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="5"
        layout="prev, pager, next, jumper"
        :total="tableData.length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      //   [
      //     //表格信息
      //     {
      //       date: "2016-05-02",
      //       name: "王小虎",
      //       province: "上海",
      //       city: "普陀区",
      //       address: "上海市普陀区金沙江路 1518 弄",
      //       zip: 200333
      //     },
      //     {
      //       date: "2016-05-04",
      //       name: "王小虎",
      //       province: "上海",
      //       city: "普陀区",
      //       address: "上海市普陀区金沙江路 1517 弄",
      //       zip: 200333
      //     },
      //     {
      //       date: "2016-05-01",
      //       name: "王小虎",
      //       province: "上海",
      //       city: "普陀区",
      //       address: "上海市普陀区金沙江路 1519 弄",
      //       zip: 200333
      //     },
      //     {
      //       date: "2016-05-03",
      //       name: "王小虎",
      //       province: "上海",
      //       city: "普陀区",
      //       address: "上海市普陀区金沙江路 1516 弄",
      //       zip: 200333
      //     }
      //   ],
      tab: ["desSelectList"], //表格名称
      formInline: {
        //选择了表单之后会返回到region
        user: "",
        region: ""
      },
      currentPage3: 1, //初始页，
      startPage: 0,
      endPage: 5
    };
  },
  methods: {
    handleClick(scope) {
      //表格编辑
      //点击跳转路由complie
      this.$router.push({
        name: "Complie",
        params: { database: scope.row }
      });
    },
    onSubmit() {
      //筛选点击跳这里,能够拿到this.formInline.region
      axios
        .post("http://localhost:3000/find", [
          { DataBaseName: this.formInline.region },
          {}
        ])
        .then(res => {
          this.tableData = res.data;
        });
    },
    //分页
    //  handleSizeChange(val) {
    //     console.log(`每页 ${val} 条`);
    //   },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.startPage = (val - 1) * 5;
      this.endPage = (val - 1) * 5 + 5;
    }
  }
};
</script>
<style lang="scss" scoped>
.el-form-item,
.el-form {
  line-height: 0 !important;
}
</style>
