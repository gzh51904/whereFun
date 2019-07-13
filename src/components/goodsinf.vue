<template>
<div class="side-menu">
    <div class="side-menu-wrapper">
        <div class="side-menu-header">
            <h3 class="side-menu-title">
                FA5-10787
                <span @click.prevent="checkoutMines()" class="side-menu-close">x</span>
            </h3>
        </div>
        <div class="side-menu-body">
            <div id="order_wrapper" class="order_tour ">
                <div class="purchase-flow tab">
                    <table>
                        <tbody>
                            <tr>
                                <td><a href="jacascript:;">价格预估</a></td>
                                <td><a href="jacascript:;">人员信息</a></td>
                                <td><a href="jacascript:;">支付方式</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="pricing_info">
                    2019-07-17(美西时间)前订购可享受9.5折
                </div>
                <div class="calendar-wrapper">
                    <el-date-picker
                    style="margin-left:200px;"
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
                </div>
            </div>
            <div class="footbar orderbar">
                <div class="left-bg"></div>
                <div class="right-bg"></div>
            </div>
            <div class="footbar orderbar">
                <div class="left">
                    <small class="zj">总价</small>
                    <span id="estimate_price" class="number currency-convert">$1706.20</span>
                </div>
                <div class="right purchase-flow">
                    <button class="pay-now">现在支付</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
              return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },

        },
        value1: '',
        value2: '',
      };
    },
    methods:{
        checkoutMines(){
            this.$emit('clofoo');
        }
    }
}
</script>

<style lang="scss">

.side-menu {
    position: absolute;
    top: 0;
    left: -15%;
    width: 100%;
    height: 100%;
    z-index: 999;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    padding: 0;
    opacity: 1;
    .side-menu-wrapper {
    position: absolute;
    top: 0;
    left: 15%;
    right: 0;
    .side-menu-header {
    position: fixed;
    top: 0;
    left: 15%;
    right: 0;
    height: 44px;
    z-index: 9999;
    background-color: #32425b;
    h3{
        margin: 0 0 10px;
    padding: 0;
    color: #fff;
    font-size: 18px;
    font-weight: normal;
    width: 100%;
    line-height: 44px;
    span{
        float: right;
    font-size: 30px;
    font-weight: bold;
    width: 50px;
    display: inline-block;
    margin-top: -2px;
    text-align: center;
    }
    }
}
    .side-menu-body {
        width: 408px;
    padding-top: 44px;
    padding-right: 15px;
    .el-picker-panel__body{
        display: block!important;
    }
    .order_tour {
    padding-top: 45px;
    .tab{
        position: fixed;
    top: 40px;
    left: 0px;
    width: 100%;
    padding-left: 10%;
    box-sizing: border-box;
    background-color: #32425B;
    z-index: 9999;
    table{
        width: 100%;
    text-align: center;
    td{padding: 8px 0;
    a{border-bottom: 2px solid #ff3573;color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    width: 100%;
    padding: 8px 0px 3px 0px;
    font-size: 16px;
    margin: 0;}}
    }
    }
    #pricing_info {
    color: #fff;
    margin: 0 auto 15px;
    text-align: center;
    padding: 4px;
    background-color: #ff3573;
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
}
}
    .footbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 54px;
    z-index: 99999;
    display: block;
    .left{
        background: rgba(32, 40, 61, 0.88)!important;
        float: left;
        width: 150px;
        height: 54px;
    background: transparent;
    float: left;
    color: white;
    text-align: center;
    line-height: 54px;
    font-size: 18px;
    font-weight: bold;
        small{
            font-size: 14px;
    display: block;
    padding-bottom: 3px;
    line-height: 1;
    padding-top: 9px;
    margin-left: 15%;
        }
        span{
            line-height: 1;
    display: block;
    margin-left: 15%;
    padding-top: 2px;
    color: white;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
        }
    }
    .right{
        background-color: #ff3573!important;
        float: left;
        width: 60%;
        height: 54px;
    background: transparent;
    float: left;
    color: white;
    text-align: center;
    line-height: 54px;
    font-size: 18px;
    font-weight: bold;
    .pay-now{
        width: 150px;
    // background: transparent;
    border: 0;
    height: 54px;
    background: transparent;
    color: white;
    text-align: center;
    line-height: 54px;
    font-size: 18px;
    font-weight: bold;
    }
    }
}
}
}
}


</style>


