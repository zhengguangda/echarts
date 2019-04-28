<!-- html部分 -->
<template>
	<div class="menu">
		<!-- 头部 -->

		<p slot='prefix'>{{title}}
			<!-- 控制 -->
<!-- 			<el-switch v-model="isCollapse" active-color="#13ce66" inactive-color="#ff4949"></el-switch> -->
		</p>
		<!-- 菜单 -->
		<el-menu  v-on:mouseenter="!isCollapse" v-on:mouseleave="isCollapse" shadow="isCollapse" :default-active='$store.state.defaultActive' @open="handleOpen" @close="handleClose" :collapse="isCollapse">
			<span v-for="obj in arr">
				<!-- 没有子菜单 -->
				<el-menu-item v-show='!obj.children' :index='obj.index' @click='fn(obj)'>
					<i :class="obj.ico"></i>
					<span slot="title">{{obj.text}}</span>
				</el-menu-item>
				<!-- 有子菜单 -->
				<el-submenu v-show='obj.children' :index='obj.index'>
					<template slot="title">
						<i :class="obj.ico"></i>
						<span>{{obj.text}}</span>
					</template>
					<el-menu-item-group>
						<el-menu-item v-for='item in obj.children' :index='item.index' :key='item.text' @click='fn(item)'>{{item.text}}</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</span>
		</el-menu>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name: '',
		data() {
			return {
				isCollapse: true,
				title: '招聘数据分析',
				arr: [{
						text: '首页',
						index: '1021',
						url: '/',
						ico: 'ico el-icon-share'
					},
					{
						text: '数据分析',
						index: '1022',
						url: '/UserList',
						ico: 'ico el-icon-refresh'
					}
				],
				
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			fn(obj) {
				// 路由跳转
				this.$router.push({
					path: obj.url
				});
				// 添加到tags
				this.$store.commit('addTag', {
					name: obj.text,
					type: 'warning',
					url: obj.url,
					index: obj.index
				});
			}
		}
	}
</script>
<!-- css部分 -->
<style>
	.el-menu {
		background: #5C9EFF;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}

	.menu,
	.el-menu {
		height: 100%;
	}

	.el-aside {
		overflow-y: hidden;
	}

	.menu p {
		padding: 20px;
		color: white !important;
		background: #5C9EFF;
		border-right: solid 1px #e6e6e6;
		margin-bottom: 0px;
	}

	.menu ul li {
		cursor: pointer;
	}

	section .ico {
		font-size: 20px !important;
		position: relative;
		top: -1.5px;
		left: -1px;
	}

	.el-menu span,
	i {
		font-size: 16px;
		color: white !important;
		letter-spacing: 1px;
	}
	.el-menu:hover{
		width: 200px;
	}
</style>
