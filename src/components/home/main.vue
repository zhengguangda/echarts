<template>
	<div id="myChart" :style="{width: '100%', height: '100%'}">

	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
			}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				var data = [{
					name: '北京',
					itemStyle: {
						color: '#da0d68'
					},
					children: [{
						name: '通州区',
						value: 1,
						itemStyle: {
							color: '#975e6d'
						},
						children: [{
							name: '通州区某某公司',
							value: 1,
							itemStyle: {
								color: '#f99e1c'
							}
						}]
					}, {
						name: '朝阳区',
						itemStyle: {
							color: '#e0719c'
						},
						children: [{
							name: '朝阳区某某公司',
							value: 1,
							itemStyle: {
								color: '#f99e1c'
							}
						}]
					}]
				}, {
					name: '苏州市',
					itemStyle: {
						color: '#c94930'
					},
					children: [{
						name: '吴江区',
						value: 1,
						itemStyle: {
							color: '#caa465'
						},children: [{
							name: '吴江区某某公司',
							value: 1,
							itemStyle: {
								color: '#b9a449'
							}
						}]
					},{
						name: '吴中区',
						itemStyle: {
							color: '#be8663'
						},
						children: [{
							name: '吴中区某某公司',
							value: 1,
							itemStyle: {
								color: '#b9a449'
							}
						},{
							name: '吴中区某某公司',
							value: 1,
							itemStyle: {
								color: '#b9a449'
							}
						}]
					}]
				}];
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					title: {
						text: '全国招聘数据统计分析',
						subtext: '旭日图分析',
						textStyle: {
							fontSize: 14,
							align: 'center'
						},
						subtextStyle: {
							align: 'center'
						},
						sublink: 'javascript:;'
					},
					series: {
						type: 'sunburst',
						highlightPolicy: 'ancestor',
						data: data,
						radius: [0, '95%'],
						sort: null,
						levels: [{}, {
							r0: '15%',
							r: '35%',
							itemStyle: {
								borderWidth: 2
							},
							label: {
								rotate: 'tangential'
							}
						}, {
							r0: '35%',
							r: '70%',
							label: {
								align: 'right'
							}
						}, {
							r0: '70%',
							r: '72%',
							label: {
								position: 'outside',
								padding: 3,
								silent: false
							},
							itemStyle: {
								borderWidth: 3
							}
						}]
					}
				});
			}
		}
	}
</script>

<style>

</style>
