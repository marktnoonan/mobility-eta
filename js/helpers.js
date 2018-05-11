export default {
	today(username) {
		//matches the format in MARTA's data
		if (username.toLowerCase() === 'test') {
			console.log('test user logged in')
			return '2018-04-10' // important for demo
		} else {
			const today = new Date()
			return `${today.getFullYear()}-${
				today.getMonth.length < 10 ? 0 : ''
			}${today.getMonth() + 1}-${today.getDate()}`
		}
	},

	convertTimeToMinutes(time) {
		let [hours, minutes] = time.split(':')
		return parseInt(hours) * 60 + parseInt(minutes)
	},

	getCurrentTime() {
		const date = new Date()
		return `${date.getHours()}:${date.getMinutes()}`
	},

	convertFromMilitaryTime(time) {
		const [hours, minutes] = time.split(':')
		let standardHours = hours > 12 ? hours % 12 : hours
		let period = hours < 12 ? 'AM' : 'PM'
		if (hours < 12 && standardHours.charAt(0) === '0') {
			standardHours = standardHours.substring(1)
		}
		return `${standardHours}:${minutes} ${period}`
	},

	dateHelper: {
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
	},
	testTrips: [
		{
			date: '2018-04-10',
			classname: 'trip1',
			data: {
				trips: [
					{
						trips: [
							{
								tripType: 2,
								status: {status: 3, internalCode: null},
								creationDate: '2018-04-06T00:00:00-04:00',
								fareToCollect: 4.0,
								passengerFares: [
									{
										passengerType: {
											code: 'CLI',
											name: 'CLIENT',
											defaultSpaceType: 'AM',
											fareTypeId: 1
										},
										spaceTypeCode: 'AM',
										fare: 4.0
									}
								],
								pickup: {
									estimatedTime: '06:43:02',
									actualTime: '06:41:36',
									status: {status: 3, internalCode: 'P'},
									location: {
										id: 1,
										description: null,
										category: null,
										name: '',
										latitude: 33.7866115,
										longitude: -84.2698097,
										streetNumber: '3000',
										onStreet: 'E Ponce de Leon Ave',
										atStreet: 'E Ponce De Leon Ave',
										city: 'Decatur',
										state: 'GA',
										postalCode: '30030',
										itemType: 1,
										internalType: 1,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: '06:45:00',
									requestedTimeLate: null,
									negotiatedTimeEarly: '06:35:39',
									negotiatedTime: '06:35:39',
									negotiatedTimeLate: '07:05:39',
									scheduledTimeEarly: '06:35:39',
									scheduledTime: '06:35:39',
									scheduledTimeLate: '07:05:39',
									comments: 'DO NOT TRANSPORT UNLESS HE HAS FARE!!!',
									phone: '404-294-7027'
								},
								dropoff: {
									estimatedTime: '06:54:01',
									actualTime: '06:53:09',
									status: {status: 3, internalCode: 'P'},
									location: {
										id: 1111,
										description: null,
										category: null,
										name: 'Atlanta Coffee Roasters',
										latitude: 33.800113,
										longitude: -84.326061,
										streetNumber: '2205',
										onStreet: 'Lavista Rd',
										atStreet: '',
										city: 'Atlanta',
										state: 'GA',
										postalCode: '30329',
										itemType: 0,
										internalType: 0,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: null,
									requestedTimeLate: '07:45:00',
									negotiatedTimeEarly: null,
									negotiatedTime: null,
									negotiatedTimeLate: null,
									scheduledTimeEarly: null,
									scheduledTime: null,
									scheduledTimeLate: null,
									comments: '2205 Lavista Rd',
									phone: '4047126000'
								},
								date: '2018-04-10T00:00:00-04:00',
								clientID: 1100,
								mobilityAidCodes: [],
								additionalPassengers: [],
								bookingPurposeCode: null,
								bookingSubtypeCode: 'DEM',
								id: 410943,
								itineraryID: 0,
								callbackPhoneNumber: '',
								serviceTypeId: 0,
								userDefinedFields: null
							}
						],
						containsReturnTrip: false,
						count: 1
					}
				],
				outOfRange: false
			},
			title: '1 Trip'
		},
		{
			date: '2018-04-13',
			classname: 'trip1',
			data: {
				trips: [
					{
						trips: [
							{
								tripType: 2,
								status: {status: 3, internalCode: null},
								creationDate: '2018-04-06T00:00:00-04:00',
								fareToCollect: 4.0,
								passengerFares: [
									{
										passengerType: {
											code: 'CLI',
											name: 'CLIENT',
											defaultSpaceType: 'AM',
											fareTypeId: 1
										},
										spaceTypeCode: 'AM',
										fare: 4.0
									}
								],
								pickup: {
									estimatedTime: '06:51:02',
									actualTime: '06:49:22',
									status: {status: 3, internalCode: 'P'},
									location: {
										id: 1,
										description: null,
										category: null,
										name: '',
										latitude: 33.7866115,
										longitude: -84.2698097,
										streetNumber: '3000',
										onStreet: 'E Ponce de Leon Ave',
										atStreet: 'E Ponce De Leon Ave',
										city: 'Decatur',
										state: 'GA',
										postalCode: '30030',
										itemType: 1,
										internalType: 1,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: '06:45:00',
									requestedTime: '06:45:00',
									requestedTimeLate: null,
									negotiatedTimeEarly: '06:45:00',
									negotiatedTime: '06:45:00',
									negotiatedTimeLate: '07:15:00',
									scheduledTimeEarly: '06:45:00',
									scheduledTime: '06:45:00',
									scheduledTimeLate: '07:15:00',
									comments: 'DO NOT TRANSPORT UNLESS HE HAS FARE!!!',
									phone: '404-294-7027'
								},
								dropoff: {
									estimatedTime: '07:09:05',
									actualTime: '07:06:33',
									status: {status: 3, internalCode: 'P'},
									location: {
										id: 1111,
										description: null,
										category: null,
										name: 'Atlanta Coffee Roasters',
										latitude: 33.800113,
										longitude: -84.326061,
										streetNumber: '2205',
										onStreet: 'Lavista Rd',
										atStreet: '',
										city: 'Atlanta',
										state: 'GA',
										postalCode: '30329',
										itemType: 0,
										internalType: 0,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: null,
									requestedTimeLate: '07:45:00',
									negotiatedTimeEarly: null,
									negotiatedTime: null,
									negotiatedTimeLate: null,
									scheduledTimeEarly: null,
									scheduledTime: null,
									scheduledTimeLate: null,
									comments: '2205 Lavista Rd',
									phone: '4047126000'
								},
								date: '2018-04-13T00:00:00-04:00',
								clientID: 1100,
								mobilityAidCodes: [],
								additionalPassengers: [],
								bookingPurposeCode: null,
								bookingSubtypeCode: 'DEM',
								id: 410944,
								itineraryID: 0,
								callbackPhoneNumber: '',
								serviceTypeId: 0,
								userDefinedFields: null
							}
						],
						containsReturnTrip: false,
						count: 1
					}
				],
				outOfRange: false
			},
			title: '1 Trip'
		},
		{
			date: '2018-04-18',
			classname: 'trip2',
			data: {
				trips: [
					{
						trips: [
							{
								tripType: 2,
								status: {status: 3, internalCode: null},
								creationDate: '2018-04-17T00:00:00-04:00',
								fareToCollect: 4.0,
								passengerFares: [
									{
										passengerType: {
											code: 'CLI',
											name: 'CLIENT',
											defaultSpaceType: 'AM',
											fareTypeId: 1
										},
										spaceTypeCode: 'AM',
										fare: 4.0
									}
								],
								pickup: {
									estimatedTime: '06:52:32',
									actualTime: '06:51:02',
									status: {status: 3, internalCode: 'P'},
									location: {
										id: 1,
										description: null,
										category: null,
										name: '',
										latitude: 33.7866115,
										longitude: -84.2698097,
										streetNumber: '3000',
										onStreet: 'E Ponce de Leon Ave',
										atStreet: 'E Ponce De Leon Ave',
										city: 'Decatur',
										state: 'GA',
										postalCode: '30030',
										itemType: 1,
										internalType: 1,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: '06:45:00',
									requestedTimeLate: null,
									negotiatedTimeEarly: '06:45:00',
									negotiatedTime: '06:45:00',
									negotiatedTimeLate: '07:15:00',
									scheduledTimeEarly: '06:45:00',
									scheduledTime: '06:45:00',
									scheduledTimeLate: '07:15:00',
									comments: 'DO NOT TRANSPORT UNLESS HE HAS FARE!!!',
									phone: '404-294-7027'
								},
								dropoff: {
									estimatedTime: '07:12:13',
									actualTime: '07:11:53',
									status: {status: 3, internalCode: 'P'},
									location: {
										id: 1111,
										description: null,
										category: null,
										name: 'Atlanta Coffee Roasters',
										latitude: 33.800113,
										longitude: -84.326061,
										streetNumber: '2205',
										onStreet: 'Lavista Rd',
										atStreet: '',
										city: 'Atlanta',
										state: 'GA',
										postalCode: '30329',
										itemType: 0,
										internalType: 0,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: null,
									requestedTimeLate: '07:45:00',
									negotiatedTimeEarly: null,
									negotiatedTime: null,
									negotiatedTimeLate: null,
									scheduledTimeEarly: null,
									scheduledTime: null,
									scheduledTimeLate: null,
									comments: '2205 Lavista Rd',
									phone: '4047126000'
								},
								date: '2018-04-18T00:00:00-04:00',
								clientID: 1100,
								mobilityAidCodes: [],
								additionalPassengers: [],
								bookingPurposeCode: null,
								bookingSubtypeCode: 'DEM',
								id: 435179,
								itineraryID: 0,
								callbackPhoneNumber: '',
								serviceTypeId: 0,
								userDefinedFields: null
							}
						],
						containsReturnTrip: false,
						count: 1
					},
					{
						trips: [
							{
								tripType: 2,
								status: {status: 5, internalCode: 'CA'},
								creationDate: '2018-04-17T00:00:00-04:00',
								fareToCollect: 0.0,
								passengerFares: [
									{
										passengerType: {
											code: 'CLI',
											name: 'CLIENT',
											defaultSpaceType: 'AM',
											fareTypeId: 1
										},
										spaceTypeCode: 'AM',
										fare: 4.0
									}
								],
								pickup: {
									estimatedTime: null,
									actualTime: null,
									status: {status: 5, internalCode: 'CA'},
									location: {
										id: 1,
										description: null,
										category: null,
										name: '',
										latitude: 33.7866115,
										longitude: -84.2698097,
										streetNumber: '3000',
										onStreet: 'E Ponce de Leon Ave',
										atStreet: 'E Ponce De Leon Ave',
										city: 'Decatur',
										state: 'GA',
										postalCode: '30030',
										itemType: 1,
										internalType: 1,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: '06:45:00',
									requestedTimeLate: null,
									negotiatedTimeEarly: '06:45:00',
									negotiatedTime: '06:45:00',
									negotiatedTimeLate: '07:15:00',
									scheduledTimeEarly: '06:45:00',
									scheduledTime: '06:45:00',
									scheduledTimeLate: '07:15:00',
									comments: ':)',
									phone: '42947027'
								},
								dropoff: {
									estimatedTime: null,
									actualTime: null,
									status: {status: 5, internalCode: 'CA'},
									location: {
										id: 1111,
										description: null,
										category: null,
										name: 'Atlanta Coffee Roasters',
										latitude: 33.800113,
										longitude: -84.326061,
										streetNumber: '2205',
										onStreet: 'Lavista Rd',
										atStreet: 'N Druid Hills Rd',
										city: 'Atlanta',
										state: 'GA',
										postalCode: '30329',
										itemType: 0,
										internalType: 0,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: null,
									requestedTimeLate: '07:45:00',
									negotiatedTimeEarly: null,
									negotiatedTime: null,
									negotiatedTimeLate: null,
									scheduledTimeEarly: null,
									scheduledTime: null,
									scheduledTimeLate: null,
									comments: '2205 Lavista Rd',
									phone: '4047126000'
								},
								date: '2018-04-18T00:00:00-04:00',
								clientID: 1100,
								mobilityAidCodes: [],
								additionalPassengers: [],
								bookingPurposeCode: null,
								bookingSubtypeCode: 'REF',
								id: 435172,
								itineraryID: 0,
								callbackPhoneNumber: '(678) 488-3081',
								serviceTypeId: 0,
								userDefinedFields: null
							}
						],
						containsReturnTrip: false,
						count: 1
					}
				],
				outOfRange: false
			},
			title: '2 Trips'
		},
		{
			date: '2018-04-19',
			classname: 'trip4',
			data: {
				trips: [
					{
						trips: [
							{
								tripType: 2,
								status: {status: 3, internalCode: null},
								creationDate: '2018-04-17T00:00:00-04:00',
								fareToCollect: 4.0,
								passengerFares: [
									{
										passengerType: {
											code: 'CLI',
											name: 'CLIENT',
											defaultSpaceType: 'AM',
											fareTypeId: 1
										},
										spaceTypeCode: 'AM',
										fare: 4.0
									}
								],
								pickup: {
									estimatedTime: '06:37:00',
									actualTime: '06:37:00',
									status: {status: 3, internalCode: 'P'},
									location: {
										id: 1,
										description: null,
										category: null,
										name: '',
										latitude: 33.7866115,
										longitude: -84.2698097,
										streetNumber: '3000',
										onStreet: 'E Ponce de Leon Ave',
										atStreet: 'E Ponce De Leon Ave',
										city: 'Decatur',
										state: 'GA',
										postalCode: '30030',
										itemType: 1,
										internalType: 1,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: '06:45:00',
									requestedTimeLate: null,
									negotiatedTimeEarly: '06:45:00',
									negotiatedTime: '06:45:00',
									negotiatedTimeLate: '07:15:00',
									scheduledTimeEarly: '06:45:00',
									scheduledTime: '06:45:00',
									scheduledTimeLate: '07:15:00',
									comments: 'DO NOT TRANSPORT UNLESS HE HAS FARE!!!',
									phone: '404-294-7027'
								},
								dropoff: {
									estimatedTime: '07:20:00',
									actualTime: '07:16:00',
									status: {status: 3, internalCode: 'P'},
									location: {
										id: 1111,
										description: null,
										category: null,
										name: 'Atlanta Coffee Roasters',
										latitude: 33.800113,
										longitude: -84.326061,
										streetNumber: '2205',
										onStreet: 'Lavista Rd',
										atStreet: '',
										city: 'Atlanta',
										state: 'GA',
										postalCode: '30329',
										itemType: 0,
										internalType: 0,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: null,
									requestedTimeLate: '07:45:00',
									negotiatedTimeEarly: null,
									negotiatedTime: null,
									negotiatedTimeLate: null,
									scheduledTimeEarly: null,
									scheduledTime: null,
									scheduledTimeLate: null,
									comments: '2205 Lavista Rd',
									phone: '4047126000'
								},
								date: '2018-04-19T00:00:00-04:00',
								clientID: 1100,
								mobilityAidCodes: [],
								additionalPassengers: [],
								bookingPurposeCode: null,
								bookingSubtypeCode: 'DEM',
								id: 435180,
								itineraryID: 0,
								callbackPhoneNumber: '',
								serviceTypeId: 0,
								userDefinedFields: null
							}
						],
						containsReturnTrip: false,
						count: 1
					},
					{
						trips: [
							{
								tripType: 2,
								status: {status: 5, internalCode: 'CA'},
								creationDate: '2018-04-14T00:00:00-04:00',
								fareToCollect: 0.0,
								passengerFares: [
									{
										passengerType: {
											code: 'CLI',
											name: 'CLIENT',
											defaultSpaceType: 'AM',
											fareTypeId: 1
										},
										spaceTypeCode: 'AM',
										fare: 4.0
									}
								],
								pickup: {
									estimatedTime: null,
									actualTime: null,
									status: {status: 5, internalCode: 'CA'},
									location: {
										id: 1,
										description: null,
										category: null,
										name: '',
										latitude: 33.7866115,
										longitude: -84.2698097,
										streetNumber: '3000',
										onStreet: 'E Ponce de Leon Ave',
										atStreet: 'E Ponce De Leon Ave',
										city: 'Decatur',
										state: 'GA',
										postalCode: '30030',
										itemType: 1,
										internalType: 1,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: '06:45:00',
									requestedTimeLate: null,
									negotiatedTimeEarly: '06:45:00',
									negotiatedTime: '06:45:00',
									negotiatedTimeLate: '07:15:00',
									scheduledTimeEarly: '06:45:00',
									scheduledTime: '06:45:00',
									scheduledTimeLate: '07:15:00',
									comments: 'DO NOT TRANSPORT UNLESS HE HAS FARE!!!',
									phone: '4042947027'
								},
								dropoff: {
									estimatedTime: null,
									actualTime: null,
									status: {status: 5, internalCode: 'CA'},
									location: {
										id: 1111,
										description: null,
										category: null,
										name: 'Atlanta Coffee Roasters',
										latitude: 33.800113,
										longitude: -84.326061,
										streetNumber: '2205',
										onStreet: 'Lavista Rd',
										atStreet: 'N Druid Hills Rd',
										city: 'Atlanta',
										state: 'GA',
										postalCode: '30329',
										itemType: 0,
										internalType: 0,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: null,
									requestedTimeLate: '07:45:00',
									negotiatedTimeEarly: null,
									negotiatedTime: null,
									negotiatedTimeLate: null,
									scheduledTimeEarly: null,
									scheduledTime: null,
									scheduledTimeLate: null,
									comments: '2205 Lavista Rd',
									phone: '4047126000'
								},
								date: '2018-04-19T00:00:00-04:00',
								clientID: 1100,
								mobilityAidCodes: [],
								additionalPassengers: [],
								bookingPurposeCode: null,
								bookingSubtypeCode: 'REF',
								id: 428012,
								itineraryID: 0,
								callbackPhoneNumber: '404-294-7027',
								serviceTypeId: 0,
								userDefinedFields: null
							}
						],
						containsReturnTrip: false,
						count: 1
					},
					{
						trips: [
							{
								tripType: 2,
								status: {status: 5, internalCode: 'CA'},
								creationDate: '2018-04-14T00:00:00-04:00',
								fareToCollect: 0.0,
								passengerFares: [
									{
										passengerType: {
											code: 'CLI',
											name: 'CLIENT',
											defaultSpaceType: 'AM',
											fareTypeId: 1
										},
										spaceTypeCode: 'AM',
										fare: 4.0
									}
								],
								pickup: {
									estimatedTime: null,
									actualTime: null,
									status: {status: 5, internalCode: 'CA'},
									location: {
										id: 1,
										description: null,
										category: null,
										name: '',
										latitude: 33.7866115,
										longitude: -84.2698097,
										streetNumber: '3000',
										onStreet: 'E Ponce de Leon Ave',
										atStreet: 'E Ponce De Leon Ave',
										city: 'Decatur',
										state: 'GA',
										postalCode: '30030',
										itemType: 1,
										internalType: 1,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: '06:45:00',
									requestedTimeLate: null,
									negotiatedTimeEarly: '06:45:00',
									negotiatedTime: '06:45:00',
									negotiatedTimeLate: '07:15:00',
									scheduledTimeEarly: '06:45:00',
									scheduledTime: '06:45:00',
									scheduledTimeLate: '07:15:00',
									comments: ':)',
									phone: '42947027'
								},
								dropoff: {
									estimatedTime: null,
									actualTime: null,
									status: {status: 5, internalCode: 'CA'},
									location: {
										id: 1111,
										description: null,
										category: null,
										name: 'Atlanta Coffee Roasters',
										latitude: 33.800113,
										longitude: -84.326061,
										streetNumber: '2205',
										onStreet: 'Lavista Rd',
										atStreet: 'N Druid Hills Rd',
										city: 'Atlanta',
										state: 'GA',
										postalCode: '30329',
										itemType: 0,
										internalType: 0,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: null,
									requestedTimeLate: '07:45:00',
									negotiatedTimeEarly: null,
									negotiatedTime: null,
									negotiatedTimeLate: null,
									scheduledTimeEarly: null,
									scheduledTime: null,
									scheduledTimeLate: null,
									comments: '2205 Lavista Rd',
									phone: '4047126000'
								},
								date: '2018-04-19T00:00:00-04:00',
								clientID: 1100,
								mobilityAidCodes: [],
								additionalPassengers: [],
								bookingPurposeCode: null,
								bookingSubtypeCode: 'REF',
								id: 428018,
								itineraryID: 0,
								callbackPhoneNumber: '(678) 488-3081',
								serviceTypeId: 0,
								userDefinedFields: null
							}
						],
						containsReturnTrip: false,
						count: 1
					},
					{
						trips: [
							{
								tripType: 2,
								status: {status: 5, internalCode: 'CA'},
								creationDate: '2018-04-14T00:00:00-04:00',
								fareToCollect: 0.0,
								passengerFares: [
									{
										passengerType: {
											code: 'CLI',
											name: 'CLIENT',
											defaultSpaceType: 'AM',
											fareTypeId: 1
										},
										spaceTypeCode: 'AM',
										fare: 4.0
									}
								],
								pickup: {
									estimatedTime: null,
									actualTime: null,
									status: {status: 5, internalCode: 'CA'},
									location: {
										id: 1,
										description: null,
										category: null,
										name: '',
										latitude: 33.7866115,
										longitude: -84.2698097,
										streetNumber: '3000',
										onStreet: 'E Ponce de Leon Ave',
										atStreet: 'E Ponce De Leon Ave',
										city: 'Decatur',
										state: 'GA',
										postalCode: '30030',
										itemType: 1,
										internalType: 1,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: '06:45:00',
									requestedTimeLate: null,
									negotiatedTimeEarly: '06:10:58',
									negotiatedTime: '06:10:58',
									negotiatedTimeLate: '06:40:58',
									scheduledTimeEarly: '06:10:58',
									scheduledTime: '06:10:58',
									scheduledTimeLate: '06:40:58',
									comments: ':)',
									phone: '42947027'
								},
								dropoff: {
									estimatedTime: null,
									actualTime: null,
									status: {status: 5, internalCode: 'CA'},
									location: {
										id: 1111,
										description: null,
										category: null,
										name: 'Atlanta Coffee Roasters',
										latitude: 33.800113,
										longitude: -84.326061,
										streetNumber: '2205',
										onStreet: 'Lavista Rd',
										atStreet: 'N Druid Hills Rd',
										city: 'Atlanta',
										state: 'GA',
										postalCode: '30329',
										itemType: 0,
										internalType: 0,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: null,
									requestedTimeLate: '07:45:00',
									negotiatedTimeEarly: null,
									negotiatedTime: null,
									negotiatedTimeLate: null,
									scheduledTimeEarly: null,
									scheduledTime: null,
									scheduledTimeLate: null,
									comments: '2205 Lavista Rd',
									phone: '4047126000'
								},
								date: '2018-04-19T00:00:00-04:00',
								clientID: 1100,
								mobilityAidCodes: [],
								additionalPassengers: [],
								bookingPurposeCode: null,
								bookingSubtypeCode: 'DEM',
								id: 428019,
								itineraryID: 0,
								callbackPhoneNumber: '(678) 488-3081',
								serviceTypeId: 0,
								userDefinedFields: null
							}
						],
						containsReturnTrip: false,
						count: 1
					}
				],
				outOfRange: false
			},
			title: '4 Trips'
		},
		{
			date: '2018-04-24',
			classname: 'trip1',
			data: {
				trips: [
					{
						trips: [
							{
								tripType: 2,
								status: {status: 3, internalCode: null},
								creationDate: '2018-04-22T00:00:00-04:00',
								fareToCollect: 4.0,
								passengerFares: [
									{
										passengerType: {
											code: 'CLI',
											name: 'CLIENT',
											defaultSpaceType: 'AM',
											fareTypeId: 1
										},
										spaceTypeCode: 'AM',
										fare: 4.0
									}
								],
								pickup: {
									estimatedTime: '07:11:13',
									actualTime: '07:07:46',
									status: {status: 3, internalCode: 'P'},
									location: {
										id: 1,
										description: null,
										category: null,
										name: '',
										latitude: 33.7866115,
										longitude: -84.2698097,
										streetNumber: '3000',
										onStreet: 'E Ponce de Leon Ave',
										atStreet: 'E Ponce De Leon Ave',
										city: 'Decatur',
										state: 'GA',
										postalCode: '30030',
										itemType: 1,
										internalType: 1,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: '05:45:00',
									requestedTimeLate: null,
									negotiatedTimeEarly: '06:45:00',
									negotiatedTime: '06:45:00',
									negotiatedTimeLate: '07:15:00',
									scheduledTimeEarly: '06:45:00',
									scheduledTime: '06:45:00',
									scheduledTimeLate: '07:15:00',
									comments: 'DO NOT TRANSPORT UNLESS HE HAS FARE!!!',
									phone: '404-294-7027'
								},
								dropoff: {
									estimatedTime: '07:33:00',
									actualTime: '07:32:46',
									status: {status: 3, internalCode: 'P'},
									location: {
										id: 1111,
										description: null,
										category: null,
										name: 'Atlanta Coffee Roasters',
										latitude: 33.800113,
										longitude: -84.326061,
										streetNumber: '2205',
										onStreet: 'Lavista Rd',
										atStreet: '',
										city: 'Atlanta',
										state: 'GA',
										postalCode: '30329',
										itemType: 0,
										internalType: 0,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: null,
									requestedTimeLate: '07:45:00',
									negotiatedTimeEarly: null,
									negotiatedTime: null,
									negotiatedTimeLate: null,
									scheduledTimeEarly: null,
									scheduledTime: null,
									scheduledTimeLate: null,
									comments: '2205 Lavista Rd',
									phone: '4047126000'
								},
								date: '2018-04-24T00:00:00-04:00',
								clientID: 1100,
								mobilityAidCodes: [],
								additionalPassengers: [],
								bookingPurposeCode: null,
								bookingSubtypeCode: 'DEM',
								id: 445285,
								itineraryID: 0,
								callbackPhoneNumber: '',
								serviceTypeId: 0,
								userDefinedFields: null
							}
						],
						containsReturnTrip: false,
						count: 1
					}
				],
				outOfRange: false
			},
			title: '1 Trip'
		},
		{
			date: '2018-04-26',
			classname: 'trip1',
			data: {
				trips: [
					{
						trips: [
							{
								tripType: 2,
								status: {status: 3, internalCode: null},
								creationDate: '2018-04-22T00:00:00-04:00',
								fareToCollect: 4.0,
								passengerFares: [
									{
										passengerType: {
											code: 'CLI',
											name: 'CLIENT',
											defaultSpaceType: 'AM',
											fareTypeId: 1
										},
										spaceTypeCode: 'AM',
										fare: 4.0
									}
								],
								pickup: {
									estimatedTime: '07:07:39',
									actualTime: '07:03:19',
									status: {status: 3, internalCode: 'P'},
									location: {
										id: 1,
										description: null,
										category: null,
										name: '',
										latitude: 33.7866115,
										longitude: -84.2698097,
										streetNumber: '3000',
										onStreet: 'E Ponce de Leon Ave',
										atStreet: 'E Ponce De Leon Ave',
										city: 'Decatur',
										state: 'GA',
										postalCode: '30030',
										itemType: 1,
										internalType: 1,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: '05:45:00',
									requestedTimeLate: null,
									negotiatedTimeEarly: '06:45:00',
									negotiatedTime: '06:45:00',
									negotiatedTimeLate: '07:15:00',
									scheduledTimeEarly: '06:45:00',
									scheduledTime: '06:45:00',
									scheduledTimeLate: '07:15:00',
									comments: 'DO NOT TRANSPORT UNLESS HE HAS FARE!!!',
									phone: '404-294-7027'
								},
								dropoff: {
									estimatedTime: '07:34:00',
									actualTime: '07:33:00',
									status: {status: 3, internalCode: 'P'},
									location: {
										id: 1111,
										description: null,
										category: null,
										name: 'Atlanta Coffee Roasters',
										latitude: 33.800113,
										longitude: -84.326061,
										streetNumber: '2205',
										onStreet: 'Lavista Rd',
										atStreet: '',
										city: 'Atlanta',
										state: 'GA',
										postalCode: '30329',
										itemType: 0,
										internalType: 0,
										unit: '',
										comments: null,
										contact: null
									},
									requestedTimeEarly: null,
									requestedTime: null,
									requestedTimeLate: '07:45:00',
									negotiatedTimeEarly: null,
									negotiatedTime: null,
									negotiatedTimeLate: null,
									scheduledTimeEarly: null,
									scheduledTime: null,
									scheduledTimeLate: null,
									comments: '2205 Lavista Rd',
									phone: '4047126000'
								},
								date: '2018-04-26T00:00:00-04:00',
								clientID: 1100,
								mobilityAidCodes: [],
								additionalPassengers: [],
								bookingPurposeCode: null,
								bookingSubtypeCode: 'DEM',
								id: 445286,
								itineraryID: 0,
								callbackPhoneNumber: '',
								serviceTypeId: 0,
								userDefinedFields: null
							}
						],
						containsReturnTrip: false,
						count: 1
					}
				],
				outOfRange: false
			},
			title: '1 Trip'
		}
	]
}
