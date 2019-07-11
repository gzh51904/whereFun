import Vue from 'vue'
import vueRoter from 'vue-router'
import Home from '../components/home.vue'
import Des from '../components/des.vue'
import Cart from '../components/cart.vue'
import Mime from '../components/mime.vue'

Vue.use(vueRoter)

let router = new vueRoter({
    routes:[
        {
            name:'Home',
            path:'/home',
            component:Home
        },{
            name:'Des',
            path:'/des',
            component:Des
        },{
            name:'Cart',
            path:'/cart',
            component:Cart
        },{
            name:'Mime',
            path:'/mime',
            component:Mime
        },
        { path: "/", redirect: { name: "Home" } }
    ]
})

export default router