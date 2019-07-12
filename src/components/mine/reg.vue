<template>
    <div class="reg">
        <a href="javascript:;"><div class="content">使用QQ账号注册</div></a>
        <div class="separator-layer">
            <div class="container">
                <div class="text">注册</div>
            </div>
        </div>

        <div class="reginfo">
            <div class="cbox">
            <input type="text" placeholder="电子邮箱"><i class="el-icon-message"></i>
            </div>
        </div>

          <div class="reginfo">
            <div class="cbox">
            <input type="text" placeholder="密码"><i class="el-icon-lock"></i>
            </div>
        </div>

          <div class="reginfo">
            <div class="cbox">
            <input type="text" placeholder="确认密码"><i class="el-icon-lock"></i>
            </div>
        </div>

        <div class="confirm">确认</div>
        <div class="register">已经是玩哪儿的用户了？<a @click.prevent.stop="goto()">登录</a></div>
    </div>
</template>

<script>
export default {
    methods:{
        goto(){
            this.$router.push('/login');
        }
    }
    
}
</script>

<style lang="scss">
@import url('../../assets/css/base.css');
.reg{
    background:#ebebf0;
    width: 100%;
    height: 100%;
    padding: 5rem 2rem;
    .content{
        width:100%;
        max-height: 3rem;
        background: #42549d;
        color: #ffffff;
        font-size: 1.9rem;
        text-align: center;
        line-height: 3rem;
        border-radius: 2px;
    }
    .separator-layer{
    border-bottom: 1px solid #d3d3dd;
    position: relative;
    overflow: auto;
    margin: 18px 0 23px 0;
    height: 9px;
    overflow: visible;
    .container{
    position: absolute;
    left: 0;
    top: 0;
    height: 18px;
    text-align: center;
    width: 100%;
    background: transparent;
    .text{
    width: 98px;
    background: #ebebf0;
    margin: 0 auto;
    color: #999;
    font-size: 1.6rem;
    }
    }
    }
    .reginfo{
    border-radius: 2px;
    background: white;
    margin: 20px 0 18px 0;
    padding: 0 12px;
    border: 1px solid #d3d3dd;
    // margin-top: 2rem;
    width: 100%;
    height: 4.2em;
    .cbox{
    overflow: auto;
    position: relative;
        input{
        border: 0;
        height: 28px;
        line-height: 28px;
        font-size: 16px;
        padding: 0;
        width: 85%;
        float: left;
        margin: 12px 0;
        }
        i{position: absolute;
        right: 0px;
        top: 2px;
        font-size: 22px;
        color: #ccc;
        line-height: 50px;}
        }
    }
    .confirm{
        width: 100%;
        height: 2.9rem;
        background: #ff3573;
        border-radius: 0.2rem;
        color: white;
        line-height: 2.9rem;
        text-align: center;
        font-size: 1.9rem;
    }
    .register{
        margin-top: 10px;
        font-size: 1.6rem;
        color: #90909E;
        a{color: #ff3573;}

    }
}
</style>


