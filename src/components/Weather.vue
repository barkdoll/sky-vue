<template>
	<div class="hello">
		<h1>{{ title }}</h1>
		<input type="text" v-model="search" />
		<button type="submit" @click="weather" >Submit</button>
		<section v-if="err"
			style="padding-top:2em;">
			{{ err }}</section>
		<section id="weather-display" class="slide-fade" v-else>
			<h2>{{ location }} ({{ country }})</h2>
			<div id="current">
				<img v-if="iconURL"
					:src="iconURL"
					:alt="current" />
				<span>{{ current }}</span>
			</div>
			<h3>{{ time }}</h3>
		</section>
	</div>
</template>

<script>
const axios = require('axios')
const apiConfig = require('../../api-config.js')
const AMPM = require('@/assets/AMPM.js')
const twentyFourHr = require('@/assets/twentyFourHr.js')

export default {
	name: 'Weather',
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
					this.err = null;
					this.results = response.data
				})
				.catch(e => {
					console.log(e)
					this.err = `No weather found for ${query}`
				})
			this.search = ''
		}
	},
	computed: {
		current() {
			return this.results.current.condition.text
		},
		iconURL() { return `https:${this.results.current.condition.icon}` },
		time() {
			return this.lang === 'en' ?
							AMPM(this.results.location.localtime) :
							twentyFourHr(this.results.location.localtime)
		},
		city() {

		},
		city() {
			return this.results.location.name
		},
		region() { return this.results.location.region },
		country() { return this.results.location.country },
		location() {
			return this.region
				? `${this.city}, ${this.region}`
				: `${this.city}`
		}
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

#current {
	width: 95vw;
	max-width: 500px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
}

#weather-display {
	transition: 1s all;
	position: relative;
}

.slide-fade {
	transition: 1s all;
	animation: slide-fade 1s;
}

@keyframes slide-fade {
	0% {
		opacity: 0;
		transform: translateY(-10px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
