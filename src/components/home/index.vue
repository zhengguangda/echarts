<template>
	<div id="app">
		<el-container>
		  <el-aside width="200px">
				<Menu></Menu>
		  </el-aside>
		  <el-container>
			<el-header height='64px'>
				<Header></Header>
			</el-header>
			<el-main>
				<Main></Main>
			</el-main>
			<el-footer>Footer</el-footer>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
	import Menu from './menu'
	import Main from './main'
	import Header from './header'
	export default {
		name:'',
		components:{Menu,Main,Header},
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>

<style>
	*{
		margin: 0px;
		padding: 0px;
		transition: 0.2s all;
	}
	html,body,.el-container{
		height: 100%;
		width: 100%;
	}
	#app{
		width: 100%;
		height: 100%;
	}
	.el-header{
		padding: 0px;
	}
</style>
