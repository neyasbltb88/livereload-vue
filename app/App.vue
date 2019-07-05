<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<h3>Навигация</h3>
		<ul>
			<li>
				<!-- TODO: Реализовать передачу произвольных параметров -->
				<go-to to="HelloWorld">HelloWorld</go-to>
			</li>
			<li>
				<go-to to="RouterTest">RouterTest</go-to>
			</li>
		</ul>

		<router-view></router-view>
	</div>
</template>

<script>
import GoTo from './GoTo.vue';


export default {
	name: 'app',
	components: { GoTo },
	methods: { }
}
</script>

<style scoped lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
