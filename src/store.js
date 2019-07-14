import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        name : 'yoga',
        deslistDATA : '',//存放deslist数据
        commState : '',//comm渲染数据
        desState : '',//des渲染数据
        isShow:true,
    },
    mutations: {
        updatedeslist(val){//修改deslistDATA的方法
            this.state.deslistDATA = val;
        }
    },
    actions: {
        
    },
});