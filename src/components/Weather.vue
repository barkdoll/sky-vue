<template>
	<div class="hello">
		<h1>{{ title }}</h1>
		<input type="text"
			v-model="search"
			@keyup.enter="weather" />
		<button type="submit" @click="weather">
			Submit</button>
		<section v-if="err"
			style="padding-top:2em;">
			{{ err }}</section>
		<Display
			:results="results"
			:lang="lang"
			v-else />
	</div>
</template>

<script>
const axios = require('axios')
const apiConfig = require('../../api-config.js')
const AMPM = require('@/assets/AMPM.js')
const twentyFourHr = require('@/assets/twentyFourHr.js')
import Display from './Display'
export default {
	name: 'Weather',
	components: {
		Display: Display
	},
	data () {
		return {
			title: 'Sky Vue Weather App',
			search: '',
			results: '',
			err: 'Please search for a location',
			lang: 'en'
		}
	},
	methods: {
		weather() {
			let query = this.search
			axios.get(`https://api.apixu.com/v1/current.json?key=${apiConfig.API_KEY}&q=${this.search}`)
				.then(response => {
					this.err = null
					this.results = response.data
				})
				.catch(e => {
					console.log(e)
					this.err = `No weather found for ${query}`
				})
			this.search = ''
		}
	},
	computed: {},
	beforeUpdate() {
		// console.log('beforeUpdate initialized')
		// const weatherComp = document.getElementById('weather-display');
		// if (weatherComp.className === 'slide-fade') weatherComp.className = '';
		// weatherComp.className = 'slide-fade';
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
	font-weight: normal;
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
