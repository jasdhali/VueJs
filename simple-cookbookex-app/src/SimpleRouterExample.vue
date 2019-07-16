<template>
	<div id="routerapp">
		<h1>Choppy's Restaurant</h1>
            <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Bar</li>
            </ul>
		<router-view></router-view>
	</div>
</template>

<script>

	Vue.use(VueRouter)
	
	const Home = { template: '<div>Welcome to Choppys</div>' }
	const Menu = { template: '<div>Today we have cookies</div>' }
	const Bar  = { template: '<div>We serve cocktails</div>' }	
	
	const router = new VueRouter({
	routes: [
            { path: '/', component: Home },
            { path: '/menu', component: Menu },
            { path: '/bar', component: Bar }
		]
	})

	new Vue({
		router,
		el: '#routerapp'
	})
	
</script>

<style>
	a.router-link-active, li.router-link-active>a {
		background-color: gainsboro;
	}
</style>