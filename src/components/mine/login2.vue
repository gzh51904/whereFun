<template>
   <el-form v-show="close" class="logparts" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
     <span  @click="closelog()" class="close"><h3>X</h3></span>
       <div class="login">
        <a href="javascript:;"><div class="content">使用QQ账号登录</div></a>
        <div class="separator-layer">
            <div class="container">
                <div class="text">或</div>
            </div>
        </div>

        <div class="loginfo">
            <div class="cbox">
             <el-form-item  prop="username">
        <el-input type="text" placeholder="用户名" v-model="ruleForm.username" autocomplete="on"></el-input>
      </el-form-item>
            </div>
        </div>

          <div class="loginfo">
            <div class="cbox">
             <el-form-item label="" prop="password">
        <el-input type="password" placeholder="密码" v-model="ruleForm.password"></el-input>
      </el-form-item>
            </div>
        </div>


        <!-- <div @click.prevent.stop="submitinfo('ruleForm')" class="confirm">确认</div> -->
        <el-form-item class="confirmbtn">
        <el-button class="confirm"  @click="submitForm">登录</el-button>
      </el-form-item>
        <div class="forget"><a @click.prevent.stop="goto()">忘记密码？</a></div>
        <div class="logister">还没有账号？<a @click.prevent.stop="gotoreg()">注册</a></div>
        </div>
    </el-form>
</template>

<script>
// import bus from './Bus';
// import mine from '../mine';
export default {
  props:['clolon','gotoxron'],
   data() {
    //   自定义校验规则
    let validatePass = (rule, value, callback) => {
      callback();
    };
    let validateUsername = (rule, value, callback) => {
    //   console.log("rule:", rule);
      if (value.length < 3) {
        callback(new Error("用户名不能少于3位"));
      }else{
          callback();
      }
    };
    return {
      // mon:false,
      close:true,
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }]
      }
    };
  },

    methods:{
      closelog(){
        this.$emit('clolon');
      },
        gotoreg(){
            this.$emit('gotoxron');
        },
     submitForm(index) {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
            let {username,password} = this.ruleForm;
            this.$axios.get('/login',{
                params:{
                    username,
                    password
                }
            }).then((res)=>{
                let {data,headers} = res
                // console.log(res);
                if(data.code == 250){
                    alert('用户名或密码错误！')
                    console.log('登录失败')
                }else if(data.code == 1000){
                    //成功登录后跳转到首页
                localStorage.setItem('username',username);
                let targetPath = this.$route.query.redirectTo;
                this.$router.replace(targetPath?targetPath:'/home');
                alert('登录成功，正在跳转到主页！');
                this.$emit('checkoutMines');
                this.$emit('clolon');
                this.$emit('loging');
                }
            })
        }
      });
    }

        }
    }
    

</script>

<style lang="scss">
@import url('../../assets/css/base.css');
.logparts{
    background-color: #32425b!important;
    width: 100%;
    height: 100%;
    padding: 5rem 2rem;
    position: relative;
    .close{position: absolute;left: 25.8rem;top: 0.7rem;font-size: 2rem;color: #ffffff;}
    .loginfo{
        .el-form-item__error{
            top:47px;
            .el-input__suffix{
            right: 25px;
        }
        }
        
    }

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
    background: #32425b!important;
    margin: 0 auto;
    color: #999;
    font-size: 1.6rem;
    }
    }
    }
    .loginfo{
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
    .el-form-item__content{
    margin-left:0px !important;
    .confirm{
        width: 100%;
        height: 3.9rem;
        background: #ff3573;
        border-radius: 0.2rem;
        color: white;
        line-height: 2.9rem;
        text-align: center;
        font-size: 1.9rem;
        margin-left: 0;
        border:none;
    }
    }
    .logister{
        margin-top: 10px;
        font-size: 1.6rem;
        color: #90909E;
        a{color: #ff3573;}

    }
    .forget{
    margin-top: 18px;
    margin-bottom: 12px;
    border-bottom: 1px solid #d3d3dd;
    overflow: auto;
    padding-bottom: 12px;
    text-align: right;
    margin-top: 10px;
    font-size: 1.6rem;
    color: #90909E;
    a{color: #ff3573;}

}
}
</style>


