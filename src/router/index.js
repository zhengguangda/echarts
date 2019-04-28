import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/echarts/demo'
import echarts from '@/components/echarts/demo'
import login from '@/components/home/login'
import index from '@/components/home/index'
import welcome from '@/components/home/welcome'
// import MainTable from '@/components/home/MainTable'

Vue.use(Router)

export default new Router({
	routes: [
		{path: '/login',name: 'login',component: login},
		{path: '/demo',name: 'demo',component: demo},
		{path: '/',name: 'index',component: index,
			children:[
				{path:'/',component:welcome}
			]
		}	
	]
})
