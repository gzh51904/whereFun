import Vue from 'vue'
import vueRoter from 'vue-router'
import store from '../store'
import Home from '../components/home.vue'
import Des from '../components/des.vue'
import Cart from '../components/cart.vue'
import comm from '../components/desselect/comm.vue'
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
Vue.use(vueRoter);
let router = new vueRoter({
    routes: [{
            name: 'Home',
            path: '/home',
            component: Home,
            components: {
                default: Home,
                mine: Mine

            }
        }, {
            name: 'Des',
            path: '/des',
            component: Des,
            components: {
                default: Des,
                mine: Mine
            },
            beforeEnter: (to, from, next) => {//路由独享，用来控制跳转目的地des时是否第一次进入，第一次进入需要选则目的地。
                if(store.state.desState){
                    next();
                }else{
                    next({path : '/desselect/hot'})
                }
              }  
        }, {
            name: 'Cart',
            path: '/cart',
            component: Cart,
            components: {
                default: Cart,
                mine: Mine

            }
        }
        // ,{
        //     name:'Mine',
        //     path:'/mine',
        //     component:Mine
        // }
        , {
            name: 'Login',
            path: '/login',
            component: Login
        }, {
            name: 'Reg',
            path: '/reg',
            component: Reg
        },
        {
            name: 'desselect',
            path: '/desselect',
            redirect: {
                path: '/desselect/hot'
            }, //重定向
            component: desselect,
            children: [{
                    path: 'hot',
                    component: hot,
                },
                {
                    path: 'canada',
                    component: canada,
                },
                {
                    path: 'city',
                    component: city,
                },
                {
                    path: 'csa',
                    component: csa,
                },
                {
                    path: 'custom',
                    component: custom,
                },
                {
                    path: 'europe',
                    component: europe,
                },
                {
                    path: 'mail',
                    component: mail,
                },
                {
                    path: 'team',
                    component: team,
                },
                {
                    path: 'usaeast',
                    component: usaeast,
                },
                {
                    path: 'usawest',
                    component: usawest,
                }
            ]
        }, {
            name: 'myinf',
            path: '/inf',
            component: myinf
        }, {
            name: 'comm',
            path: '/comm',
            component: comm
        },
        //重定向
        {
            path: "/",
            redirect: {
                name: "Home"
            }
        },
    ]
})

export default router