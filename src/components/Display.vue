<template>
		<section id="weather-display" class="slide-fade-in">
			<h2>{{ location }} ({{ country }})</h2>
			<div id="current">
				<img v-if="iconURL"
					:src="iconURL"
					:alt="current" />
				<span>{{ current }}</span>
			</div>
			<h3>{{ time }}</h3>
		</section>
</template>

<script>
const apiConfig = require('../../api-config.js')
const AMPM = require('@/assets/AMPM.js')
const twentyFourHr = require('@/assets/twentyFourHr.js')
import Display from './Display'
export default {
	name: 'Display',
	props: ['results', 'lang'],
	data () {
		return {}
	},
	methods: {},
	computed: {
		current() { return this.$props.results.current.condition.text },
		iconURL() { return `https:${this.$props.results.current.condition.icon}` },
		time() {
			return this.lang === 'en' ?
							AMPM(this.$props.results.location.localtime) :
							twentyFourHr(this.$props.results.location.localtime)
		},
		city() { return this.$props.results.location.name },
		region() { return this.$props.results.location.region },
		country() { return this.$props.results.location.country },
		location() {
			return this.region
				? `${this.city}, ${this.region}`
				: `${this.city}`
		}
	},
	beforeMount() {
		console.log('beforeUpdate initialized')
		const weatherComp = document.getElementById('weather-display')
		if (weatherComp.className === 'slide-fade-in') weatherComp.className = ''
		weatherComp.className = 'slide-fade-in'
	},
	updated() {
		// const weatherComp = document.getElementById('weather-display');
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#weather-display {
	transition: 1s all;
	position: relative;
}

#current {
	width: 95vw;
	max-width: 500px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
}

.slide-fade-in {
	transition: 1s all;
	animation: slide-fade-in 1s;
}

.slide-fade-out {
	transition: 1s all;
	animation: slide-fade-out 1s;
}

@keyframes slide-fade-in {
	0% {
		opacity: 0;
		transform: translateY(10px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes slide-fade-out {
	0% {
		opacity: 1;
		transform: translateY(0);
	}

	100% {
		opacity: 0;
		transform: translateY(10px);
	}
}

</style>
