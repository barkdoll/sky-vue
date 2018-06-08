module.exports = function(dateStr) {
	let d = dateStr.split(' ').pop()
	let hh = parseInt(d.split(':').shift())
	let mm = d.split(':').pop()
	let PM = false

	if (hh > 12) {
		hh -= 12
		PM = true
	}
	if (hh < 10) hh = '0' + hh.toString()

	let time = `${hh}:${mm}`
	return PM ? `${time} PM` : `${time} AM`
}
