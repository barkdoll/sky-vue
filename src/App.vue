<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}


body {
	background: url('http://vunature.com/wp-content/uploads/2017/01/landscapes-japan-lake-beauty-animal-fog-birds-sky-beautiful-landscape-wonderful-nature-wallpapers-hd.jpg');
	background-attachment: fixed;
	background-size: cover;
	background-repeat: no-repeat;
}

body::after {
	z-index: -1;
	content: '';
	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	background: rgba(255,255,255, .2);
}
</style>
