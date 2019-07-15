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
                                <td><a class="active" href="jacascript:;">价格预估</a></td>
                                <td><a href="jacascript:;">人员信息</a></td>
                                <td><a href="jacascript:;">支付方式</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="pricing_info">
                    2019-07-17(美西时间)前订购可享受9.5折
                </div>
                <div class="form-section">
                    <label><i class="el-icon-date"></i>选择出发日期</label>
                    <el-date-picker
                    class="calendar"
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </div>
                    <div class="form-section">
                    <label><i class="el-icon-user"></i>选择出行人数</label>
               <el-input-number class="renshu" v-model="num" controls-position="right" @change="handleChange" :min="1"></el-input-number>
                </div>
                <div class="priinf"><div class="yuan"></div><span>$758.1人起</span></div>
                <div class="bbottom"><span>总价<p>$15484.20</p></span><span @click="tianjia()">添加</span></div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    created(){
        let {id} = this.$route.params;
        console.log(this.$route.params);
    },
    data(){
              return {
        num:1,
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
        },
        handleChange(value) {

      },
      tianjia(){
          console.log(2222);
      }
    }
}
</script>

<style lang="scss">
.el-dropdown-menu{
    left: 50px;
    width: 315px;
}
.side-menu {
    
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
    a{color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    width: 100%;
    padding: 8px 0px 3px 0px;
    font-size: 16px;
    margin: 0;}
    .active{border-bottom: 2px solid #ff3573 ;}
    }
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
.form-section{
    width: 100%;
    margin: 10px 0 20px;
    color: #fff;
    overflow: auto;
    label{
        margin-bottom: 5px;
    font-size: 17px;
    width: 100%;
    display: block;
    margin-top: 2px;
    margin-left: 51px;
    font-weight: bold;
    i{margin-right: 3px;}
    }
    .calendar{width: 318px; margin-left: 49px!important;}
    .renshu{
        width: 318px;
        background: #fff;
        left: 48px;
        span{left: 277px;}
        }
}
.priinf{
    position: absolute;
    left: 48px;
    color: #fff;
    .yuan{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
    display: inline-block;
    background-color: #ff3573;
    }
    }
    .bbottom{
        position: absolute;
        left: 42px;
        top: 750px;
        width: 332px;
        height: 65px;
        span{
            width: 50%;
            height: 100%;
            float: left;
            background: #ff3573;
            color: white;
            font-size: 18px;
            text-align: center;
            line-height: 65px;
            opacity: 0.8;
            font-weight: bolder;
        }
        span:nth-of-type(1){
            background: skyblue;
            position: relative;
            p{
                font-size: 18px;
                position: absolute;
                top:19px;
                text-align: center;
                left: 45px;
                }
        }
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
    .leftb{
        position: absolute;
         width: 100%;
        height: 40px;
    }
    .rightb{
        position: absolute;
         width: 100%;
        height: 40px;
    }
    .left{
        background: rgba(32, 40, 61, 0.88)!important;
        float: left;
        width: 40%;
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
    border: none!important;
    }
    }
}
}
}
}


</style>


