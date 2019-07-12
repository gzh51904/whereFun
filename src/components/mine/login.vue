<template>
    <div class="login">
        <a href="javascript:;"><div class="content">使用QQ账号登录</div></a>
        <div class="separator-layer">
            <div class="container">
                <div class="text">或</div>
            </div>
        </div>

        <div class="loginfo">
            <div class="cbox">
            <input type="text" placeholder="电子邮箱"><i class="el-icon-message"></i>
            </div>
        </div>

          <div class="loginfo log">
            <div class="cbox">
            <input type="text" placeholder="密码"><i class="el-icon-lock"></i>
            </div>
        </div>

        <div class="confirm">确认</div>
        <div class="register">忘记密码？</div>
        <div class="register2">还没有账号？<a @click.prevent.stop="goto()">注册</a></div>
    </div>
</template>

<script>
export default {
    methods:{
        goto(){
            this.$router.push('/reg')
        }
    }
    
}
</script>

<style lang="scss">
@import url('../../assets/css/base.css');
.login{
    background:#ebebf0;
    width: 100%;
    height: 100%;
    padding: 4rem 2rem;
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
    .loginfo{
    border-radius: 0.2rem;
    background: white;
    padding: 0 1.2rem;
    border: 0.1rem solid #d3d3dd;
    width: 100%;
    height: 4.2em;
    .cbox{
    overflow: auto;
    position: relative;
        input{
        border: 0;
        height: 2.8rem;
        line-height: 2.8rem;
        font-size: 1.6rem;
        padding: 0;
        width: 85%;
        float: left;
        margin: 1.2rem 0;
        }
        i{position: absolute;
        right: 0rem;
        top: 0.2rem;
        font-size: 2.2rem;
        color: #ccc;
        line-height: 5rem;}
        }
    }
    .log{margin-bottom: 1.8rem;border-top:none;}
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
        width: 100%;
        margin-top: 1.8rem;
        margin-bottom: 1.2rem;
        font-size: 1.6rem;
        padding-bottom: 12px;
        border-bottom: 1px solid #d3d3dd;
        text-align:right; 
        color: #ff3573;
    }
    .register2{
        margin-top: 10px;
        font-size: 1.6rem;
        color: #90909E;
        a{color: #ff3573;}
    }

    
}
</style>


