// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({9:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = {
	today: function today(username) {
		//matches the format in MARTA's data
		if (username.toLowerCase() === 'test') {
			console.log('test user logged in');
			return '2018-04-10'; // important for demo
		} else {
			var today = new Date();
			return today.getFullYear() + '-' + (today.getMonth.length < 10 ? 0 : '') + (today.getMonth() + 1) + '-' + today.getDate();
		}
	},
	convertTimeToMinutes: function convertTimeToMinutes(time) {
		var _time$split = time.split(':'),
		    _time$split2 = _slicedToArray(_time$split, 2),
		    hours = _time$split2[0],
		    minutes = _time$split2[1];

		return parseInt(hours) * 60 + parseInt(minutes);
	},
	getCurrentTime: function getCurrentTime() {
		var date = new Date();
		return date.getHours() + ':' + date.getMinutes();
	},
	convertFromMilitaryTime: function convertFromMilitaryTime(time) {
		var _time$split3 = time.split(':'),
		    _time$split4 = _slicedToArray(_time$split3, 2),
		    hours = _time$split4[0],
		    minutes = _time$split4[1];

		var standardHours = hours > 12 ? hours % 12 : hours;
		var period = hours < 12 ? 'AM' : 'PM';
		if (hours < 12 && standardHours.charAt(0) === '0') {
			standardHours = standardHours.substring(1);
		}
		return standardHours + ':' + minutes + ' ' + period;
	},


	dateHelper: {
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		prettyDate: function prettyDate(date) {
			return this.days[date.getDay()] + ', ' + this.months[date.getMonth()] + ' ' + date.getDate();
		}
	},
	testTrips: [{
		date: '2018-04-10',
		classname: 'trip1',
		data: {
			trips: [{
				trips: [{
					tripType: 2,
					status: { status: 3, internalCode: null },
					creationDate: '2018-04-06T00:00:00-04:00',
					fareToCollect: 4.0,
					passengerFares: [{
						passengerType: {
							code: 'CLI',
							name: 'CLIENT',
							defaultSpaceType: 'AM',
							fareTypeId: 1
						},
						spaceTypeCode: 'AM',
						fare: 4.0
					}],
					pickup: {
						estimatedTime: '06:43:02',
						actualTime: '06:41:36',
						status: { status: 3, internalCode: 'P' },
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
						status: { status: 3, internalCode: 'P' },
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
				}],
				containsReturnTrip: false,
				count: 1
			}],
			outOfRange: false
		},
		title: '1 Trip'
	}, {
		date: '2018-04-13',
		classname: 'trip1',
		data: {
			trips: [{
				trips: [{
					tripType: 2,
					status: { status: 3, internalCode: null },
					creationDate: '2018-04-06T00:00:00-04:00',
					fareToCollect: 4.0,
					passengerFares: [{
						passengerType: {
							code: 'CLI',
							name: 'CLIENT',
							defaultSpaceType: 'AM',
							fareTypeId: 1
						},
						spaceTypeCode: 'AM',
						fare: 4.0
					}],
					pickup: {
						estimatedTime: '06:51:02',
						actualTime: '06:49:22',
						status: { status: 3, internalCode: 'P' },
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
						status: { status: 3, internalCode: 'P' },
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
				}],
				containsReturnTrip: false,
				count: 1
			}],
			outOfRange: false
		},
		title: '1 Trip'
	}, {
		date: '2018-04-18',
		classname: 'trip2',
		data: {
			trips: [{
				trips: [{
					tripType: 2,
					status: { status: 3, internalCode: null },
					creationDate: '2018-04-17T00:00:00-04:00',
					fareToCollect: 4.0,
					passengerFares: [{
						passengerType: {
							code: 'CLI',
							name: 'CLIENT',
							defaultSpaceType: 'AM',
							fareTypeId: 1
						},
						spaceTypeCode: 'AM',
						fare: 4.0
					}],
					pickup: {
						estimatedTime: '06:52:32',
						actualTime: '06:51:02',
						status: { status: 3, internalCode: 'P' },
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
						status: { status: 3, internalCode: 'P' },
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
				}],
				containsReturnTrip: false,
				count: 1
			}, {
				trips: [{
					tripType: 2,
					status: { status: 5, internalCode: 'CA' },
					creationDate: '2018-04-17T00:00:00-04:00',
					fareToCollect: 0.0,
					passengerFares: [{
						passengerType: {
							code: 'CLI',
							name: 'CLIENT',
							defaultSpaceType: 'AM',
							fareTypeId: 1
						},
						spaceTypeCode: 'AM',
						fare: 4.0
					}],
					pickup: {
						estimatedTime: null,
						actualTime: null,
						status: { status: 5, internalCode: 'CA' },
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
						status: { status: 5, internalCode: 'CA' },
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
				}],
				containsReturnTrip: false,
				count: 1
			}],
			outOfRange: false
		},
		title: '2 Trips'
	}, {
		date: '2018-04-19',
		classname: 'trip4',
		data: {
			trips: [{
				trips: [{
					tripType: 2,
					status: { status: 3, internalCode: null },
					creationDate: '2018-04-17T00:00:00-04:00',
					fareToCollect: 4.0,
					passengerFares: [{
						passengerType: {
							code: 'CLI',
							name: 'CLIENT',
							defaultSpaceType: 'AM',
							fareTypeId: 1
						},
						spaceTypeCode: 'AM',
						fare: 4.0
					}],
					pickup: {
						estimatedTime: '06:37:00',
						actualTime: '06:37:00',
						status: { status: 3, internalCode: 'P' },
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
						status: { status: 3, internalCode: 'P' },
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
				}],
				containsReturnTrip: false,
				count: 1
			}, {
				trips: [{
					tripType: 2,
					status: { status: 5, internalCode: 'CA' },
					creationDate: '2018-04-14T00:00:00-04:00',
					fareToCollect: 0.0,
					passengerFares: [{
						passengerType: {
							code: 'CLI',
							name: 'CLIENT',
							defaultSpaceType: 'AM',
							fareTypeId: 1
						},
						spaceTypeCode: 'AM',
						fare: 4.0
					}],
					pickup: {
						estimatedTime: null,
						actualTime: null,
						status: { status: 5, internalCode: 'CA' },
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
						status: { status: 5, internalCode: 'CA' },
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
				}],
				containsReturnTrip: false,
				count: 1
			}, {
				trips: [{
					tripType: 2,
					status: { status: 5, internalCode: 'CA' },
					creationDate: '2018-04-14T00:00:00-04:00',
					fareToCollect: 0.0,
					passengerFares: [{
						passengerType: {
							code: 'CLI',
							name: 'CLIENT',
							defaultSpaceType: 'AM',
							fareTypeId: 1
						},
						spaceTypeCode: 'AM',
						fare: 4.0
					}],
					pickup: {
						estimatedTime: null,
						actualTime: null,
						status: { status: 5, internalCode: 'CA' },
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
						status: { status: 5, internalCode: 'CA' },
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
				}],
				containsReturnTrip: false,
				count: 1
			}, {
				trips: [{
					tripType: 2,
					status: { status: 5, internalCode: 'CA' },
					creationDate: '2018-04-14T00:00:00-04:00',
					fareToCollect: 0.0,
					passengerFares: [{
						passengerType: {
							code: 'CLI',
							name: 'CLIENT',
							defaultSpaceType: 'AM',
							fareTypeId: 1
						},
						spaceTypeCode: 'AM',
						fare: 4.0
					}],
					pickup: {
						estimatedTime: null,
						actualTime: null,
						status: { status: 5, internalCode: 'CA' },
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
						status: { status: 5, internalCode: 'CA' },
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
				}],
				containsReturnTrip: false,
				count: 1
			}],
			outOfRange: false
		},
		title: '4 Trips'
	}, {
		date: '2018-04-24',
		classname: 'trip1',
		data: {
			trips: [{
				trips: [{
					tripType: 2,
					status: { status: 3, internalCode: null },
					creationDate: '2018-04-22T00:00:00-04:00',
					fareToCollect: 4.0,
					passengerFares: [{
						passengerType: {
							code: 'CLI',
							name: 'CLIENT',
							defaultSpaceType: 'AM',
							fareTypeId: 1
						},
						spaceTypeCode: 'AM',
						fare: 4.0
					}],
					pickup: {
						estimatedTime: '07:11:13',
						actualTime: '07:07:46',
						status: { status: 3, internalCode: 'P' },
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
						status: { status: 3, internalCode: 'P' },
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
				}],
				containsReturnTrip: false,
				count: 1
			}],
			outOfRange: false
		},
		title: '1 Trip'
	}, {
		date: '2018-04-26',
		classname: 'trip1',
		data: {
			trips: [{
				trips: [{
					tripType: 2,
					status: { status: 3, internalCode: null },
					creationDate: '2018-04-22T00:00:00-04:00',
					fareToCollect: 4.0,
					passengerFares: [{
						passengerType: {
							code: 'CLI',
							name: 'CLIENT',
							defaultSpaceType: 'AM',
							fareTypeId: 1
						},
						spaceTypeCode: 'AM',
						fare: 4.0
					}],
					pickup: {
						estimatedTime: '07:07:39',
						actualTime: '07:03:19',
						status: { status: 3, internalCode: 'P' },
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
						status: { status: 3, internalCode: 'P' },
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
				}],
				containsReturnTrip: false,
				count: 1
			}],
			outOfRange: false
		},
		title: '1 Trip'
	}]
};
},{}],21:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '52162' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[21,9])
//# sourceMappingURL=helpers.e3c1f7f9.map