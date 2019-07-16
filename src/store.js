import Vue from 'vue';
import Vuex from 'vuex';
import { stat } from 'fs';
Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        name : 'yoga',
        deslistDATA : '',//存放deslist数据
        commState : '',//comm渲染数据
        desState : '',//des渲染数据
        isShow:true,
        goodlist:[
            
        ],
    },
    mutations: {
        updatedeslist(val){//修改deslistDATA的方法
            this.state.deslistDATA = val;
        },
        add(state,goods){
            state.goodlist.unshift(goods);

        }
    },
    actions: {
        
    },
});