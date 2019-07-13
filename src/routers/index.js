import Vue from 'vue'
import vueRoter from 'vue-router'
import Home from '../components/home.vue'
import Des from '../components/des.vue'
import Cart from '../components/cart.vue'
import Mine from '../components/mine.vue'
import Login from '../components/mine/login.vue'
import Reg from '../components/mine/reg.vue'
import desselect from '../components/desselect.vue';
import hot from '../components/desselect/hot.vue';
import canada from '../components/desselect/canada.vue';
import city from '../components/desselect/city.vue';
import csa from '../components/desselect/csa.vue';
import custom from '../components/desselect/custom.vue';
import europe from '../components/desselect/europe.vue';
import mail from '../components/desselect/mail.vue';
import team from '../components/desselect/team.vue';
import usaeast from '../components/desselect/usaeast.vue';
import usawest from '../components/desselect/usawest.vue';
import myinf from '../components/myinf.vue';
import store from '../store.js';
import kefu from '../kefu.vue'
import comm from '../components/desselect/comm.vue';

Vue.use(vueRoter);
let router = new vueRoter({
    routes:[
        {
            name:'Home',
            path:'/home',
            component:Home,
            components:{
                default:Home,
                mine:Mine

            }
        },{
            name:'Des',
            path:'/des',
            component:Des,
            components:{
                default:Des,
                mine:Mine

            }
        },{
            name:'Cart',
            path:'/cart',
            component:Cart,
            components:{
                default:Cart,
                mine:Mine

            }
        },
        // ,{
        //     name:'Mine',
        //     path:'/mine',
        //     component:Mine
        // }
        // ,{
        //     name:'Login',
        //     path:'/login',
        //     component:Login
        // },{
        //     name:'Reg',
        //     path:'/reg',
        //     component:Reg
        // },
        {
            name:'desselect',
            path:'/desselect',
            component:desselect,
            children : [
                {
                    path:'hot',
                    component:hot,
                },
                {
                    path:'canada',
                    component:canada,
                },
                {
                    path:'city',
                    component:city,
                },
                {
                    path:'csa',
                    component:csa,
                },
                {
                    path:'custom',
                    component:custom,
                },
                {
                    path:'europe',
                    component:europe,
                },
                {
                    path:'mail',
                    component:mail,
                },
                {
                    path:'team',
                    component:team,
                },
                {
                    path:'usaeast',
                    component:usaeast,
                },
                {
                    path:'usawest',
                    component:usawest,
                },
            ]
        }, {
            name: 'myinf',
            path: '/inf',
            component: myinf
        }, {
            name: comm,
            path: '/comm',
            component: comm,
        },{
            name:'kefu',
            path:'/kefu',
            component:kefu,
        },
        //重定向
        {
            path: "/",
            redirect: {
                name: "Home"
            }
        },
   ],
   
})

router.beforeEach((to, from, next) => {
    if(to.fullPath == "/inf") {
        // console.log(store.state)
        store.state.isShow = false;
        // console.log(store.state.isShow )
        // console.log(router.app.$store)
    }else{
        store.state.isShow = true;
    }
    next();
  })

export default router