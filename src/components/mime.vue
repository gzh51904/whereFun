<template>
    <div
    class="mine">
        <div class="side-menu-header">
        <h3 class="side-menu-title">
        
        <span class="side-menu-close">
          ×
        </span>      
      </h3>
      </div>

      <div class="side-menu-body">

    <div class="userinfo">
        <el-avatar shape="square" :size="60" :src="squareUrl"></el-avatar>
        <div v-for="item in infobtns" :key="item.name"  class="infobtn">
        <el-button @click.native.prevent.stop="goto('Reg')" round><i :class="item.icon"></i> {{item.title}}</el-button>&nbsp;&nbsp;&nbsp;
        <el-button @click.native.prevent.stop="goto('Login')" round><i :class="item.icon2"></i> {{item.title2}}</el-button>
        </div>
        </div>
     <ul class="menu-list">
    
    <a 
    v-for="item in menulist"
    :key="item.tiele"
    >
     <li>
    <i :class="item.icon"></i>  
    <span>{{item.title}}</span>
    <span class="langu" v-if="item.ok">
    <el-radio label="1">{{item.title1}}</el-radio>
    <el-radio label="1">{{item.title2}}</el-radio>
    </span>

    <el-select class="money" v-if="item.yes" v-model="value" placeholder="美元USD">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <el-menu
      v-if="item.oks"
      default-active="2"
      class="userserve el-menu-vertical-demo"
      >
      <el-submenu index="1">
        <el-menu-item-group>
          <template slot="title"><a v-for="item in userserve" :key="item.coun">{{item.coun}}{{item.phone}}</a></template>
        </el-menu-item-group>
      </el-submenu>
       </el-menu>
      </li>
    </a>


     </ul>
    
      </div>
      <div class="side-menu-footer">
          <span>玩哪儿@Wannar Travel INC.</span><br>
          <span>美国加州合法旅行社 (CST#2119862-40)</span>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            infobtns:[{
                name:'infos',
                title:'注册',
                icon:'el-icon-user-solid',
                title2:'登录',
                icon2:'el-icon-s-home'
            }],
            menulist:[{
                icon:'el-icon-s-home',
                title:'首页'
            },
            {
                icon:'el-icon-chat-line-round',
                title:'语言',
                title1:'简体',
                title2:'繁体',
                ok:true
                
            },{
                icon:'el-icon-orange',
                title:'货币单位',
                yes:true
            },{
                icon:'el-icon-sunny',
                title:'会员中心'
            },{
                icon:'el-icon-service',
                title:'在线服务',
                oks:true
            },{
                icon:'el-icon-phone',
                title:'客服电话',
            },{
                icon:'el-icon-mobile-phone',
                title:'下载手机应用'
            },{
                icon:'el-icon-warning-outline',
                title:'关于我们'
            }],
            options:[{
                value:'1',
                label:'美元 USD'

            },
            {
                value:'2',
                label:'人民币 CNY'

            },{
                value:'3',
                label:'新台币 TWD'

            },{
                value:'4',
                label:'加元 CAD'

            },{
                value:'5',
                label:'欧元 EUR'

            },{
                value:'6',
                label:'英镑 GBP'

            },{
                value:'7',
                label:'澳元 AUD'

            },{
                value:'8',
                label:'新西兰元 NZD'

            }],
            value: '',
           userserve:[{
               coun:'中国',
               phone:'123456'
           },{
               coun:'美国',
               phone:'123456'
           },{
               coun:'香港',
               phone:'123456'
           },{
               coun:'台湾',
               phone:'123456'
           }]
        }
    },
    methods:{
        goto(name){
            this.$router.push({
                name
            });

        }
    }
    
}

</script>
<style lang="scss">
@import url('../assets/css/base.css');
.mine{
.side-menu-header {
    position: fixed;
    top: 0;
    left: 15%;
    right: 0;
    height: 4.4rem;
    z-index: 9999;
    background-color: #32425b;
}

h3.side-menu-title {
    margin: 0 0 1rem;
    padding: 0;
    color: #fff;
    font-size: 1.8rem;
    font-weight: normal;
    width: 100%;
    line-height: 4.4rem;
}

h3.side-menu-title span {
    float: right;
    font-size: 3rem;
    font-weight: bold;
    width: 5rem;
    display: inline-block;
    margin-top: -0.2rem;
    text-align: center;
}

.side-menu-body{
    padding-top: 4.4rem;
    padding-left: 1.5rem;
    padding-right: 2rem;
    .userinfo{
        
        .infobtn{
            // display: flex;
            // align-items: center;
            float: right;
            padding-top: 0.8rem;
            .el-button{
                width: 6rem;
                height: 3rem;
                position: relative;
                span{
                    position: absolute;
                    left: 0.6rem;
                    top:0.9rem;
                    }
            }
            .el-button:nth-of-type(2){
                background-color: #ff3573;
                border-color: #ff3573;
                color:#fff;
            }

        }
    }

    .menu-list{
        background-color: #32425b;
        li{width: 28rem;height: 5rem;border-bottom: 1px solid rgba(255, 255, 255, .12);}
        a{
            font-size: 1.6rem;
            color: #eeeeee;
            line-height: 5rem;
            i{margin-right:3px;}
            }
        .langu{
            display:block;
            float:right;
            label:nth-of-type(1){margin-right:1rem}
            span{               
                font-size:1.6rem;
                color:#ccc;
            }
            
            }
        .money{
            width: 11.2rem;
            height: 5rem;
            float:right;
        }
        .userserve{
            // float:right;
            width: 0;
            border:none;
        .el-submenu{border:none;}
            .el-submenu__title{
                width: 0;
                float:right;
                position: relative;
                border:none;
                &:hover{
                    background-color: #32425b;
                    border:none;
                }}
            .el-menu{
                position: absolute;
                top:5.6rem;
                border:none;
                li{border:none;height: 200px;}
            .el-menu-item-group{
                background-color: #32425b;
                a{display: block;}
                }
                }
        }
        .el-input__inner{
        background-color: transparent;
        border:none;
        padding-left: 1rem;
        text-align: right;
        color:#ccc;
        }
    }
}

.side-menu-footer{
    margin-top: 4rem;
    text-align: center;
    font-size: 1.4rem;

}

}





</style>

