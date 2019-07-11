import Vue from 'vue'
import vueRoter from 'vue-router'
import Home from '../components/home.vue'
import Des from '../components/des.vue'
import Cart from '../components/cart.vue'
import Mime from '../components/mime.vue'
import desselect from '../components/desselect.vue'
import hot from '../components/desselect/hot.vue'
import canada from '../components/desselect/canada.vue'
import city from '../components/desselect/city.vue'
import csa from '../components/desselect/csa.vue'
import custom from '../components/desselect/custom.vue'
import europe from '../components/desselect/europe.vue'
import mail from '../components/desselect/mail.vue'
import team from '../components/desselect/team.vue'
import usaeast from '../components/desselect/usaeast.vue'
import usawest from '../components/desselect/usawest.vue'

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