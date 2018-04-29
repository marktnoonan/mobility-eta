function today(username) {
	//matches the format in MARTA's data
	if (username.toLowerCase() === 'test') {
		console.log('test user logged in')
		todaysDate = '2018-04-10' // important for demo
	} else {
		const today = new Date()
		todaysDate = `${today.getFullYear()}-${
			today.getMonth.length < 10 ? 0 : ''
		}${today.getMonth() + 1}-${today.getDate()}`
	}
}

function convertTimeToMinutes(time) {
	let [hours, minutes] = time.split(':')
	return parseInt(hours) * 60 + parseInt(minutes)
}
function getCurrentTime() {
	const date = new Date()
	return `${date.getHours()}:${date.getMinutes()}`
}

function convertFromMilitaryTime(time) {
	const [hours, minutes] = time.split(':')
	let standardHours = hours > 12 ? hours % 12 : hours
	let period = hours < 12 ? 'AM' : 'PM'
	if (hours < 12 && standardHours.charAt(0) === '0') {
		standardHours = standardHours.substring(1)
	}
	return `${standardHours}:${minutes} ${period}`
}

const dateHelper = {
	days: [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	],
	months: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	],
	prettyDate(date) {
		return `${this.days[date.getDay()]}, ${
			this.months[date.getMonth()]
		} ${date.getDate()}`
	}
}
