import Store from './components/Store.vue';

import ShoppingCart from './components/ShoppingCart.vue';
import ProductDetails from './components/ProductDetails.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

export const routes = [
{path: '/register', component: Register, name: 'register', onlyGuest: true},
{path: '/login', component: Login, name: 'login', onlyGuest: true },
	{path: '/', component: Store, name: 'mainpage'},
	{path: '/product/:id', component: ProductDetails, name: 'product'},
	{path: '/cart', component: ShoppingCart, name: 'shoppingcart'},
	
	{path: '*', redirect: '/' }
];