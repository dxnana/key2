// main.js

// 导入Vue，这个是必需的，在使用Vue之前，必须先导入
import Vue from 'vue'
import App from './App'
// 导入 vue-router，并使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)


 
import VueResource from 'vue-resource' // 导入 vue-resource，并使用  
Vue.use(VueResource) 
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
import VueAwesomeSwiper from 'vue-awesome-swiper'//引入轮播图组件
Vue.use(VueAwesomeSwiper);


// 导入 pages 下的 Home.vue 
import Home from './pages/Home'
import Detail from './pages/Detail'
import jujia from "./pages/jujia.vue"
import jujia_inner from "./pages/jujia_in/jujia_inner.vue"
// 定义路由配置
const routes = [
	{
		path: '/',//首页?
		component: Home
	},
	{
		path: '/Home',
		component: Home
	},
	{
		path: '/detail',
		component: Detail
	},
	 { path: '/jujia', component: jujia ,
       children:[
         { path: '/jujia/:path', component: jujia_inner }
        ]  
  }
]

// 创建路由实例
const router = new VueRouter({
	routes
})

// 创建 Vue 实例
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
