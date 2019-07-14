<template>
   <el-form class="regparts" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
       <span  @click="closereg()" class="close"><h3>X</h3></span>
       <div class="reg">
        <a href="javascript:;"><div class="content">使用QQ账号注册</div></a>
        <div class="separator-layer">
            <div class="container">
                <div class="text">注册</div>
            </div>
        </div>

        <div class="reginfo">
            <div class="cbox">
             <el-form-item  prop="username">
        <el-input type="text" placeholder="用户名" v-model="ruleForm.username" autocomplete="on"></el-input>
      </el-form-item>
            </div>
        </div>

          <div class="reginfo">
            <div class="cbox">
             <el-form-item label="" prop="password">
        <el-input type="password" placeholder="密码" v-model="ruleForm.password"></el-input>
      </el-form-item>
            </div>
        </div>

          <div class="reginfo">
            <div class="cbox">
            <el-form-item label="" prop="checkPass">
        <el-input type="password" placeholder="确认密码" v-model="ruleForm.checkPass"></el-input>
      </el-form-item>
            </div>
        </div>

        <!-- <div @click.prevent.stop="submitinfo('ruleForm')" class="confirm">确认</div> -->
        <el-form-item class="confirmbtn">
        <el-button class="confirm" @click="submitForm('ruleForm')">注册</el-button>
      </el-form-item>
        <div class="register">已经是玩哪儿的用户了？<a @click.prevent.stop="gotolog()">登录</a></div>
        </div>
    </el-form>
</template>

<script>
export default {
    data() {
      
    //   自定义校验规则
    let validatePass = (rule, value, callback) => {
        if(value.trim() == ''){
            callback('输入不能为空')
        }else{

            callback();
        }
    };
    let checkPass = (rule, value, callback) => {
        if(value.trim() == ''){
            callback('输入不能为空')
        }else{

            if(value != this.ruleForm.password){
                callback(new Error('两次输入密码不一致'))
            }else{
                callback();
            }
        }
    };
    let validateUsername = (rule, value, callback) => {

        if(value.trim() == ''){
            callback('输入不能为空')
        }else{

            this.$axios.get('/reg/check',{
                params:{
                    username:value
                }
            }).then(({data})=>{
                if(data.code == 250){
                    callback(new Error('用户名已存在'));
                }else{
                    callback()
                }
            })
        }
      
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: checkPass, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }]
      }
    };
  },

    methods:{
        closereg(){
        this.$emit('cloron','gotoxlon');
      },
      gotolog(){
            this.$emit('gotoxlon');
        },
        goto(){
            this.$router.push('/login');
        },
        submitForm(formName){
            this.$refs[formName].validate(valid => {
                if(valid){
                    let {username,password} = this.ruleForm;
                    this.$axios.post('/reg',{
                        username,
                        password
                    }).then(({data})=>{
                        if(data.code == 1000){

                            this.$router.replace('/login');
                        }
                    })
                }else{
                    // alert('请完善信息！');
                    return false;
                }
            });
        }

        }
    }
    

</script>

<style lang="scss">
@import url('../../assets/css/base.css');
.regparts{
    background-color: #32425b!important;
    width: 100%;
    height: 100%;
    padding: 5rem 2rem;
    .close{position: absolute;left: 25.8rem;top: 0.7rem;font-size: 2rem;color: #ffffff;}
    .reginfo{
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
    background-color: #32425b!important;
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
    }
    }
    .register{
        margin-top: 10px;
        font-size: 1.6rem;
        color: #90909E;
        a{color: #ff3573;}

    }
}
</style>


