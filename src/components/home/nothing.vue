<template>
    <div class="box">
        <span class="nothing"> 
        This is nothing
        </span>
        <span class="jingxi">
        此处没有做数据
        <br>      
        购买请点击
            <span class="red" >
                <a href="javascript:;"  class="red" @click="home">
                    首页
                </a>
            </span>
        下方热销商品          
        </span>


        
    </div>
</template>
<script>
export default {
    methods:{
        home() {
            this.$router.push('./home')
        }
    }
}
</script>
<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    .nothing{
        font-size:3.6rem;
        text-align: center;
        line-height: 10rem;
        color:red;
        font-weight: bold;
    }.jingxi{
        font-size:4rem;
        line-height: 7rem;
        text-align: center;
    }.back{
         font-size:4rem;
        line-height: 7rem;
        text-align: center;
        color:black !important;
    }
}
.red{
    color:red;
}
</style>

