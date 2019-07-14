<template>
    <div class="bottom_menu" >
        <ul>
            <li class="w50" @click="GOkefu">
                <i class="el-icon-chat-line-round "></i>
                <span>咨询客服</span>
            </li>
            <li @click.prevent="sideopen()" class="w50 active">
                <i class="el-icon-s-promotion bai"></i>
                <span class="bai">加入购物车</span>
            </li>
        </ul>
      </div>
</template>
<script>
export default {
    data() {
        return{

        }
    },
   methods:{
       GOkefu() {
        //    console.log(this.$router)
        this.$router.push({path:'/kefu'})
       },
       sideopen(){
           this.$emit('show');
       }
   }
}
</script>
<style lang="scss" scoped>
.bottom_menu{
    position: fixed;
    bottom:0;
    left: 0;
    z-index: 11001;
    width: 100%;
    height: 5rem;
    background-color: #fff;
    box-shadow: 0 0 0.8rem #333;
    display: block;
    ul{
        margin: 0;
        padding:0;
        list-style:none;
        li{
            float:left;
            height: 5rem;
            text-align: center;
            color:#555;
            i{
                display: block;
                font-size:2.2rem;
                line-height: 3.6rem;
                color:#666;
                font-size:3rem !important;
                
            }
        }
    }
}
.w50{
    width: 50%;
}
.active{
    background-color:rgba(255,53,115,0.8);
    color:#fff;
}
.bai{
    color:#fff !important;
}
</style>

