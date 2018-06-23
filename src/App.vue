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
	background: url('https://wallpapercave.com/wp/R6lJpMc.jpg');
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
