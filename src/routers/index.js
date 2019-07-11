import Vue from 'vue'
import vueRoter from 'vue-router'
import Home from '../components/home.vue'
import Des from '../components/des.vue'
import Cart from '../components/cart.vue'
import Mine from '../components/mine.vue'
import Login from '../components/mine/login.vue'
import Reg from '../components/mine/reg.vue'
import desselect from '../components/desselect.vue';
Vue.use(vueRoter)

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
                default:Home,
                mine:Mine

            }
        },{
            name:'Cart',
            path:'/cart',
            component:Cart
        }
        // ,{
        //     name:'Mine',
        //     path:'/mine',
        //     component:Mine
        // }
        ,{
            name:'Login',
            path:'/login',
            component:Login
        },{
            name:'Reg',
            path:'/reg',
            component:Reg
        },
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
        },
        { path: "/", redirect: { name: "Home" } }
    ]
})

export default router