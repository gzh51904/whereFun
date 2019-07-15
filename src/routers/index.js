import Vue from 'vue'
import vueRoter from 'vue-router'
import store from '../store'
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
import kefu from '../components/home/kefu.vue';
import comm from '../components/desselect/comm.vue';
import Ginf from '../components/goodsinf.vue'
import goodsinf from '../components/goodsinf.vue'

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
            meta: { requiresAuth: true },
            components: {
                default: Cart,
                mine: Mine

            }
        },
        // ,{
        //     name:'Mine',
        //     path:'/mine',
        //     component:Mine
        // }
       {
            name:'Reg',
            path:'/reg',
            component:Reg,
            component:desselect,
            components:{
                default:Reg,
                mine:Mine

            }
        },
        {
            name:'Login',
            path:'/login',
            component:Login,
            component:desselect,
            components:{
                default:Login,
                mine:Mine

            }
        },
        {
            name: 'desselect',
            path: '/desselect',
            redirect: {
                path: '/desselect/hot'
            }, //重定向
            component: desselect,
            components:{
                default:desselect,
                mine:Mine

            },
            children: [{
                    path: 'hot',
                    component: hot,
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
            component: myinf,
            components:{
                default:myinf,
                ginf:Ginf
            }
        }, {
            name: 'comm',
            path: '/comm',
            component: comm,
            components:{
                default:comm,
                mine:Mine
            }
        },{
            name:'kefu',
            path:'/kefu',
            component:kefu,
        },
        {
            name:'goodsinf',
            path:'/goodsinf',
            component:goodsinf

        }
        ,
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

    if(to.matched.some(item=>item.meta.requiresAuth)){
        let username = localStorage.getItem('username');
        //用户已登录
        if(username){

            next();
        }
        //用户未登录
        else{
            next({
                path:'/login',
                query:{redirectTo:to.fullPath}
            });
            
        }
    }else{
        next();
    }
    
  })

export default router