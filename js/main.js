var etaColors = {
	yellow: '#d69400',
	green: '#8AB755',
	red: '#FC7455',
	blue: '#00BBE5',
	orange: '#F79044'
}
var martaResponse = {}
var bookings = []
var clientName = ''
var loginDetails = []
var todaysDate = ''
;(function init() {
	addLogInListeners()
})()

function showInfo(username, password) {
	document.querySelector('#intro-text').innerHTML =
		'<h3 txt="c"> Your Next Trip </h3>'
	today(username)
	showSpinner()
	loginDetails = [username, password]
	getTrips(username, password)
}

function addTryAgainScreen() {
	document.querySelector('#mobility-eta').innerHTML =
		'<div class="form-wrapper" style="text-align:center; margin-top: 20px; margin-bottom: 40px;"><form class="" id="unpw-form" method="post"> <h1 style="margin-bottom: 40px;"> Log In </h1> <p style="color:' +
		etaColors.red +
		'">Username or Password was not found, please try again:</p><input type="text" name="providedUsername" value="" placeholder="Client ID" style="font-size:18px; padding: 3px"> <br><br> <input type="password" name="providedPassword" id="pw" value="" placeholder="Password" style="font-size:18px; padding: 3px"> <br><br><br> </form> <button type="button" id="login" style="background-color: #333; border: 2px solid #333; color: #fff; display: inline-block; font-size: 14px; font-weight: 700; line-height: 1.2; padding: 11px 20px; position: relative; cursor: pointer;">Check My Trips</button><div id="output"><br><span style="color:' +
		etaColors.red +
		'">WARNING: This is site is in a pilot mode. Some errors may still exist. If trip information is unclear or looks wrong, you may confirm with MARTA Mobility ETA by phone: 404-848-4212.</span><br><br> If you do not know your Client ID or Password, you can call Reservations at (404) 848-5826.<br><br> For a demo, enter username <b>test</b> and password <b>test</b>. Contact markthomasnoonan@gmail.com with questions or feedback. </div></div> </div>'
}

function addLogInListeners() {
	var usernameInput = document.querySelector('input[name=providedUsername]')
	var passwordInput = document.querySelector('input[name=providedPassword]')

	document.querySelector('#login').addEventListener('click', function() {
		var username = usernameInput.value
		var password = passwordInput.value
		showInfo(username, password)
	})

	document.querySelector('#pw').addEventListener('keyup', function(event) {
		if (event.keyCode == 13) {
			var username = usernameInput.value
			var password = passwordInput.value
			showInfo(username, password)
		}
	})
}

function addRefreshListener() {
	var refreshButton = document.querySelector('#refresh-button')
	refreshButton.addEventListener('click', function() {
		showInfo(loginDetails[0], loginDetails[1])
	})
}

function getTrips(username, password) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest()
		xhr.open('POST', 'scrape.php', true)
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		xhr.onload = function() {
			if (xhr.readyState == 4 && xhr.status === 200) {
				resolve(handleMartaData(xhr.responseText))
			} else {
				reject(Error('Request failed, status was ' + xhr.statusText))
			}
		}
		xhr.send('providedUsername=' + username + '&providedPassword=' + password)
	})
}

function handleMartaData(xhrResponse) {
	var tripDataString = JSON.parse(xhrResponse)
	var tripDataArray = JSON.parse(tripDataString)
	var todaysTripData = tripDataArray.find(trip => {
		return trip.date === todaysDate
	}).data.trips[0].trips[0] // need to work on this.
	const pickupLocationData = todaysTripData.pickup.location
	const dropoffLocationData = todaysTripData.dropoff.location
	var nextTripInfo = {
		bookingID: todaysTripData.id,
		readyTime: todaysTripData.pickup.negotiatedTimeEarly.substring(0, 5),
		endWindow: todaysTripData.pickup.negotiatedTimeLate.substring(0, 5),
		eta: todaysTripData.pickup.estimatedTime.substring(0, 5),
		status: '',
		etaInMinutes: '',
		endWindowInMinutes: '',
		currentTimeInMinutes: convertTimeToMinutes(getCurrentTime()),
		displayEta: '',
		displayReadyTime: '',
		displayEndWindow: '',
		displayDate: dateHelper.prettyDate(new Date()),
		pickupAddress: `${pickupLocationData.streetNumber} ${
			pickupLocationData.onStreet
		}<br> ${pickupLocationData.city}, ${pickupLocationData.state} ${
			pickupLocationData.postalCode
		}`,
		dropOffAddress: `${dropoffLocationData.streetNumber} ${
			dropoffLocationData.onStreet
		}<br> ${dropoffLocationData.city}, ${dropoffLocationData.state} ${
			dropoffLocationData.postalCode
		}`
	}

	nextTripInfo.etaInMinutes = convertTimeToMinutes(nextTripInfo.eta)
	nextTripInfo.endWindowInMinutes = convertTimeToMinutes(nextTripInfo.endWindow)
	nextTripInfo.displayEta = convertFromMilitaryTime(nextTripInfo.eta)
	nextTripInfo.displayReadyTime = convertFromMilitaryTime(
		nextTripInfo.readyTime
	)
	nextTripInfo.displayEndWindow = convertFromMilitaryTime(
		nextTripInfo.endWindow
	)
	nextTripInfo.delayInMinutes =
		30 - (nextTripInfo.endWindowInMinutes - nextTripInfo.etaInMinutes)

	nextTripInfo.statusColor = getStatusColor(nextTripInfo.delayInMinutes)
	nextTripInfo.statusDescription = getStatusDescription(
		nextTripInfo.delayInMinutes
	)
	nextTripInfo.delayInMinutesDescription = getDelayInMinutesDescription(
		nextTripInfo.delayInMinutes
	)

	document.querySelector('#mobility-eta').innerHTML = showTrip(nextTripInfo)
	setMarker(nextTripInfo)
}

function retryLogin() {
	addTryAgainScreen()
	addLogInListeners()
}

const possibleStatuses = [
	'unscheduled',
	'scheduled',
	'inprogress',
	'complete',
	'noshow',
	'cancelled',
	'willcall',
	'imminent'
]

function getStatusColor(delay) {
	console.log(delay)
	if (delay > 30) {
		return 'red'
	} else if (delay < 30 && delay > 0) {
		return 'yellow'
	} else {
		return 'green'
	}
}

function getStatusDescription(delay) {
	console.log(delay)
	if (delay > 30) {
		return 'Running late.'
	} else if (delay < 30 && delay > 0) {
		return 'Arriving in window.'
	} else {
		return 'Arriving on time.'
	}
}

function getDelayInMinutesDescription(delay) {
	if (delay > 1) {
		return `${delay} minutes after Ready Time.`
	} else if (delay == 1) {
		return '1 minute after Ready Time.'
	} else if (delay < -1) {
		return Math.abs(delay) + ' minutes before Ready Time.'
	} else if (delay == -1) {
		return '1 minute before Ready Time.'
	} else if (delay == 0) {
		return 'right on time.'
	}
}

function showTrip(tripDetails) {
	return `
    <card full class="booking" id="booking0">
			<div class="date-and-id" id="date-and-id">
				<span class="display-date">
          <h2 style="border:0; margin-bottom: 4px; margin-top: 12px">
            <b>${tripDetails.displayDate}</b>
          </h2>
        </span>
				<span>
          <b>Booking ID</b>: ${tripDetails.bookingID}</span> |
				<span>
          <b>Ready Time</b>: ${tripDetails.displayReadyTime}</span>
			</div>
			<div class="booking-status" style="margin-top: 8px; margin-bottom: 7px;">
				<span style="font-weight:bold; font-size: 16px;">Trip Status</span>
				<br>
				<span class="late-status" style="border-radius: 3px; padding: 4px; color:${
					etaColors[tripDetails.statusColor]
				}">${tripDetails.statusDescription}</span>
			</div>
			<div class="progress-wrapper" style="display: inline-block; font-size: 12px;">
				<div class="labels" style="padding-top: 3px; text-align: left; line-height: 1.2; margin-left: -6px;">
					<div class="label left" style="width: auto;text-align: left;display: inline-block;padding: 0;">
						<span class="tool-tip" style="border-radius: 3px;display: inline-block;padding: 3px;margin-bottom: -2px;">
              <b>Start Window</b>
              <br>${tripDetails.displayReadyTime}</span>
						<div class="down-arrow" style=" position: relative; height: 10px; width: 10px;  transform: translate(6px, -3px) rotate(45deg); "></div>
					</div>
					<div class="label center" style="width: auto;text-align: left;display: inline-block;transform: translateX(45px);padding: 0">
						<span class="tool-tip" style="border-radius: 3px;display: inline-block;padding: 3px;margin-bottom: -2px;">
              <b>End Window</b>
              <br>${tripDetails.displayEndWindow}</span>
						<div class="down-arrow" style=" position: relative; height: 10px; width: 10px; transform: translate(6px, -3px) rotate(45deg); "></div>
					</div>
				</div>
				<div class="outer" style="text-align: left; width: 240px; background-color: #111; border-radius: 10px; overflow: hidden;">
					<div class="inner" style="height: 26px; background-color: #595; background: linear-gradient(to right, #595 0%, #ee5 50%, #f55 80%);">
						<span class="eta label" style="position: relative;display: inline-block;box-sizing: border-box;height: 100%;padding-top: 5px;text-align: left;transform: translateY(-5px);" aria-hidden="true">
              <img src="assets/bus.png" id="martabus" style="height: 26px;padding: 0px 5px 0px 0px; border-left: 108px solid rgba(100, 100, 100, 0.5); border-right: 104px solid rgba(100, 100, 100, 0.5);"
                alt="">
            </span>
					</div>
				</div>
				<div class="eta-tooltip" style="width: auto; text-align: left; position: absolute; margin-top: 4px; margin-left: 100px;">
					<div class="up-arrow" style=" position: relative; height: 10px; width: 10px; transform: translate(4px, 0px) rotate(45deg); "></div>
					<span class="tool-tip" style="border-radius: 3px;display: inline-block;padding: 3px;transform: translateY(-6px); line-height:1.2">
            <b>Your ETA</b>
            <br>${tripDetails.displayEta}</span>
				</div>
			</div>
			<span class="eta-wrapper" style="margin-top: 44px; display: inline-block; font-size: 14px; line-height: 1.3">Bus expected at
        <b>${tripDetails.displayEta}</b>,
        <br>${tripDetails.delayInMinutesDescription}</span>
			<div class="ready-time-gage" style="text-align: left">
			<br>
				<div class="pickup">
					<b>Pick Up</b>
					<br>${tripDetails.pickupAddress}
				</div>
				<div class="dropoff">
					<b>Drop Off</b>
          <br>${tripDetails.dropOffAddress}
          </div>
				<br>
			</div>
		</card>
    `
}

function setMarker(tripDetails) {
	var marker = document.querySelector('#martabus')
	var tooltip = document.querySelector('.eta-tooltip')
	var progressWrapper = document.querySelector('.progress-wrapper')
	var lateMins = tripDetails.delayInMinutes
	var markerPixels = lateMins * 4
	var markerDistance = markerPixels
	var tooltipMargin = 0
	var remainingDistance = 0
	var borderStyle = ' solid rgba(100,100,100,0.5)'

	// to account for being very late.
	if (markerDistance < 234) {
		markerDistance += 'px'
		remainingDistance = 240 - markerPixels - 28 + 'px'
	} else {
		markerDistance = '220' + 'px'
	}

	//to manage marker boundaries
	if (markerPixels < -16) {
		tooltipMargin = '-16px'
	} else if (markerPixels > 215) {
		tooltipMargin = '216px'
	} else {
		tooltipMargin = markerPixels - 8 + 'px'
	}

	// position everything
	marker.style.borderLeft = markerDistance + borderStyle
	marker.style.borderRight = remainingDistance + borderStyle
	tooltip.style.marginLeft = tooltipMargin
	progressWrapper.style.display = 'inline-block'
}

function showSpinner() {
	var spinner =
		'<style>@-webkit-keyframes sweep { to { -webkit-transform: rotate(360deg); } }</style><div id="spinner" style="width: 50px; height: 50px; -webkit-animation: sweep 1s infinite linear; border-radius: 75px; border-bottom: 5px solid #00bbe5; margin: 50px auto"></div><div style="margin: 20px auto; display: inline-block">Loading your trips...</div>'
	document.querySelector('#mobility-eta').innerHTML = spinner
}
