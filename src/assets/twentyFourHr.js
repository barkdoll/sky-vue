module.exports = function(dateStr) {
	let d = dateStr.split(' ').pop()
	let hh = parseInt(d.split(':').shift())
	let mm = d.split(':').pop()

	return hh < 10 ? `0${hh}:${mm}` : `${hh}:${mm}`
}
