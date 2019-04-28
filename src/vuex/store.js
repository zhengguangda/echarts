import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 数据
var state = {
		tags:[
			{ name: '首页', type: 'warning',url:'/',index:'101'}
		],
		defaultActive:'101',
		loginFlag:false
		
}
// 方法
var mutations = {
	addTag(state,obj){
		// 将所有的type设置为info
		for(var item of state.tags){
			item.type='info';
		}
		// 再次遍历，判断是否已经含有tag，如果包含，则不再添加
		for(var item of state.tags){
			if(item.name==obj.name){
				item.type='warning';
				return;
			}
		}
		state.tags.push(obj);
	},
	updateTag(state,index){
		// 将所有的type设置为info
		for(var item of state.tags){
			item.type='info';
		}
		state.tags[index].type='warning'
	},
	delTag(state,index){
		state.tags.splice(index,1);
	},
	changeDefaultActive(state,index){
		state.defaultActive = index;
	}
	
}


export default new Vuex.Store({
	state,
	mutations,
})
