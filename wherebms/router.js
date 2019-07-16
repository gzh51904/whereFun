import Vue from 'vue';
import VueRouter from 'vue-router'
import Index from './src/views/Index';
import Stat from './src/views/Stat';
import Adv from './src/views/Adv';
import GoodsInster from './src/views/GoodsInster';
import GoodsRemove from './src/views/GoodsRemove';
import GoodsUpdata from './src/views/GoodsUpdata';
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
            name: 'Index',
            path: '/',
            component: Index,
        }, {
            name: 'Stat',
            path: '/stat',
            component: Stat,
        },
        {
            path: '/goodsinster',
            component: GoodsInster,
            name : 'GoodsInster'
        }, {
            path: '/goodsremove',
            component: GoodsRemove,
            name : 'GoodsRemove'
        }, {
            path: '/goodsupdata',
            component: GoodsUpdata,
            name : 'GoodsUpdata'
        }, {
            name: 'Adv',
            path: '/adv',
            component: Adv,
        }
    ]
})

export default router;