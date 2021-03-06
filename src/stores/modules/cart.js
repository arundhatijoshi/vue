const state = {
	cartItemList: [
		// {
		// 	id: 1,
		// 	title: 'BiggBasket',
		// 	thumbnail_url: 'data:image/png;base64,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',
		// 	
		// },{
		// 	id: 2,
		// 	title: 'Macbook Pro 13.3" Retina MF841LL/A',
		// 	thumbnail_url: 'http://media.bizwebmedia.net//sites/72783/data/images/2015/11/3220113retina13.jpg',
		// 	price: 1200,
		// 	quantity: 15,
		// 	description: 'Macbook Pro 13.3" Retina MF841LL/A Model 2015 Option Ram Care 12/2016'
		// },{
		// 	id: 3,
		// 	title: 'Macbook Pro 15.4" Retina MC975LL/A Model 2012',
		// 	thumbnail_url: 'http://media.bizwebmedia.net//sites/72783/data/images/2015/7/2913337mf841_13_inch_2_9ghz_with_retina_display_early_2015.png',
		// 	price: 1800,
		// 	quantity: 1,
		// 	description: "3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs) of 1600MHz DDR3 SDRAM"
		// },{
		// 	id: 4,
		// 	title: 'Retina MacBook Pro 13 inch MF841',
		// 	thumbnail_url: 'http://media.bizwebmedia.net//sites/72783/data/images/2016/2/4713895macbook_pro_retina.png',
		// 	price: 1000,
		// 	quantity: 20,
		// 	description: "2.9 Ghz Dual-Core Intel Core i5 Broadwell Tubro boost up to 3.3 GHz with L3 3MB cache"
		// }
	]
}

const mutations = {
	'UPDATE_CART' (state, {item, quantity, isAdd}) {
		const record = state.cartItemList.find(element => element.id == item.id);
		if (record) {
			if (isAdd) {
				record.quantity += quantity;
			} else {
				record.quantity = quantity;
			}
		} else {
			state.cartItemList.push({
				...item,
				quantity
			});
		}
	},
	'SET_CART' (state, productList) {
		if (productList) {
			state.cartItemList = productList;
		}
	},
	'REMOVE_CART_ITEM' (state, {item}) {
		const record = state.cartItemList.find(element => element.id == item.id);
		state.cartItemList.splice(state.cartItemList.indexOf(record), 1);
	}
}

const actions = {
	clearCart: ({commit}) => {
		commit('SET_CART', []);
	}
}

const getters = {
	cartItemList: (state) => {
		return state.cartItemList;
	},
	cartValue: (state) => {
		let res = 0;
		state.cartItemList.map(item => {
			res += item.price * item.quantity;
		});
		return res;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
