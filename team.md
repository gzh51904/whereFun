### 项目详情
```javascript
    title:哪儿玩（whereFun）
    type：旅游（travel）
    ...

```



### 项目分工
* 组长：刘汉明
*  负责   des(目的地) 、comm(列表页、)爬虫、  组件的开发
```javascript
    项目中遇到的问题：
        * keep-alive组件对路由嵌套的影响，例如，父路由我想缓存数据，而路由是详情页，点击哪个渲染哪个商品，但是添加了keep-alive之后详情页（子路由）也被缓存会一直渲染同一个商品。
```


* 组员：吴建栋
*  负责   Home、inf(详情)   组件的开发
```javascript
    项目中遇到的问题：
        * 在父组件中分成了许多的子组件，并且把子组件的数据写在了父组件中。请求后端数据时，只能在父组件发送请求接收数据再通讯给子组件。这样子不仅影响了性能，而且会让项目的复杂度增加。
        * 首页跟详情页路由跳转时，用了全局守卫控制APP菜单栏（footer）和加入购物车时按钮的组件（Bmenu）相互切换，控制条件是哈希值的改变。并且只有在哈希值为"/inf"的 时候才能把（Bmenu）显示出来。后来组件通讯时，用了路由传参，也就是{this.$route.push({query:{id:id}})}。后来发现query传参会改变哈希值后面的参数也就是(localhost:8080/inf?id=XXX),这样一来（Bmenu）的控制条件就失效了。再后来翻了文档发现可以用（params）来进行传参，params进行传参类似二阶段的post，而query却类似于get。所以params进行传参不会改变URL的值，而且会把参数写进{this.$route.params}中，在被进行的组件中可以通过{this.$route.params}进行接收参数。
     
```



* 组员：曾嘉豪
*  负责  mine、login、reg以及Cart  组件的开发
```javascript
    项目中遇到的问题：
        *
```