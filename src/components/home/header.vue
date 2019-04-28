<template>
	<div id="app">
		<el-card class="box-card" shadow="hover">
			<div class="demo-input-suffix">
				<el-input placeholder="搜索..." v-model="searchBtn">
					<i slot="prefix" :class="searchIco"></i>
				</el-input>
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				searchBtn: '',
				searchIco: 'el-icon-search'
			};
		},
		methods: {

		}

	}
</script>

<style>
	.text {
		font-size: 14px;
	}
	.box-card {
		width: 100%;
		height: 64px;
	}
	.box-card input[type=text],.box-card .el-input{
		width: 200px;
	}
	.el-card__body{
		padding: 0px 20px 0px 50px;
		line-height: 64px;
	}
	.el-icon-search{
		color: #c0c4cc !important;
	}
	.demo-input-suffix{
		text-align: left;
	}
</style>
