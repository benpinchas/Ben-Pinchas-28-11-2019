(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{42:function(e,t,n){e.exports=n(86)},47:function(e,t,n){},48:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),i=(n(47),n(48),n(19)),s=n(17),u=n(3),l=n(2),p=n.n(l),f=n(6);var m={store:function(e,t){localStorage[e]=JSON.stringify(t)},load:function(e){var t=localStorage[e]||"null";return JSON.parse(t)}},h="FAVORITE_LOCATIONS";var v={getFavoriteLocations:function(){return m.load(h)},saveFavoriteLocations:function(e){return m.store(h,e)}},g=n(24),d=n.n(g),y={site_url:"https://benpinchas.github.io/Ben-Pinchas-28-11-2019"},b="https://dataservice.accuweather.com",O="zsGlW5LWHSfncy9Loq7xgypCDO1ShYbS";function E(){return(E=Object(f.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b+"/locations/v1/cities/autocomplete?apikey="+O+"&q="+t,e.prev=1,e.next=4,d.a.get(n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function w(){return(w=Object(f.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b+"/currentconditions/v1/"+t+"?apikey="+O+"&details=true",e.prev=1,e.next=4,d.a.get(n);case 4:return a=e.sent,e.abrupt("return",a.data[0]);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function j(){return(j=Object(f.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b+"/forecasts/v1/daily/5day/"+t+"?apikey="+O+"&metric=true",e.prev=1,e.next=4,d.a.get(n);case 4:return a=e.sent,e.abrupt("return",a.data.DailyForecasts);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var k={getLocationSuggests:function(e){return E.apply(this,arguments)},getLocationCurrentWeatherByKey:function(e){return w.apply(this,arguments)},getLocationweekForecastByKey:function(e){return j.apply(this,arguments)},getWeatherIconSrc:function(e){var t=y.site_url+"/assets/weather-icons/";return 1===e?t+"sun.svg":e>=2&&e<=4?t+"sunny.svg":e>=6&&e<=8?t+"cloudy.svg":11===e?t+"fog.svg":e>=12&&e<=18?t+"rain.svg":22===e?t+"snow.svg":e>=19&&e<=23?t+"clouds.svg":e>=38&&e<=42?t+"storm.svg":t+"general.svg"},convertCelsiusToFahrenheit:function(e){return Math.floor(1.8*e+32)}},L="SET_LOCATION_SUGGESTS",C="SET_SELECTED_LOCATION_DETAILS",S="SET_FAVORITE_LOCATIONS",F="TOGGLE_TEMPERATURE_UNIT";function N(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:C,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}n(71),n(72);var D=function(){return r.a.createElement("nav",{className:"nav-bar-cmp"},r.a.createElement(i.b,{exact:!0,to:"/"},"Home"),r.a.createElement(i.b,{to:"/favorites"},"Favorties"))};n(74);var T=Object(u.b)((function(e){return{temperatureUnit:e.weatherReducer.unit}}),(function(e){return{toggleTemperatureUnit:function(){return e({type:F,payload:null})}}}))((function(e){var t=e.temperatureUnit,n=e.toggleTemperatureUnit;return r.a.createElement("div",{className:"toggle-unit-cmp",onClick:n},r.a.createElement("button",{className:"C"===t?"active":""},"\xb0 C"),r.a.createElement("span",null," | "),r.a.createElement("button",{className:"C"!==t?"active":""},"\xb0 F"))})),W=function(){return r.a.createElement("header",{className:"app-header-cmp"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"widget-container"},r.a.createElement(T,null)),r.a.createElement("div",{className:"main"},r.a.createElement("h2",null,"Weather App"),r.a.createElement(D,null))))},x=(n(75),n(20)),I=n(12),P=n(13),R=n(15),K=n(14),A=n(16),U=(n(76),n(77),function(e){var t=e.suggestions,n=e.onSuggestClick,a=t.map((function(e){return r.a.createElement("li",{className:"suggest-preview",key:e.Key,onClick:n.bind(null,e)},r.a.createElement("span",null,e.LocalizedName)," ",r.a.createElement("span",{className:"country"},e.Country.LocalizedName))}));return r.a.createElement("ul",{className:"suggests-list-cmp"},a)});function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){function t(){var e,n;Object(I.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(R.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(r)))).state={isFocus:!1,term:""},n.setSelectedLocation=function(e){n.setState({term:e.LocalizedName}),n.props.setSelectedLocation(e)},n.onFocus=function(){n.setState({isFocus:!0})},n.onBlur=function(){setTimeout((function(){return n.setState(M({},n.state,{isFocus:!1}))}),100)},n.onInputChange=function(e){var t=e.target.value;n.setState((function(e){return M({},e,{term:t})}),(function(){return n.props.fetchLocationSuggests(t)}))},n}return Object(A.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props.suggestions,t=this.state.isFocus;return r.a.createElement("div",{className:"location-search-cmp"},r.a.createElement("input",{type:"text",onChange:this.onInputChange,value:this.state.term,onFocus:this.onFocus,onBlur:this.onBlur,placeholder:"Search for a place.."}),t&&e&&r.a.createElement(U,{suggestions:e,onSuggestClick:this.setSelectedLocation}))}}]),t}(r.a.Component),G=Object(u.b)((function(e){return{suggestions:e.locationReducer.locationSuggests}}),(function(e){return{fetchLocationSuggests:function(t){return e((n=t,function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getLocationSuggests(n);case 2:a=e.sent,t({type:L,payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var n},setSelectedLocation:function(t){return e(N(t))}}}))(_);n(78),n(79),n(80);var V={getDayInWeekByDate:function(e){return["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][new Date(e).getDay()]},getFormattedHour:function(e){var t=6e4*new Date(Date.now()).getTimezoneOffset(),n=Date.now()+t,a=6e4*+e.slice(19,22)*60,r=new Date(n+a);return(r.getHours()<10?"0"+r.getHours():r.getHours())+":"+(r.getMinutes()<10?"0"+r.getMinutes():r.getMinutes())}},H=Object(u.b)((function(e){return{temperatureUnit:e.weatherReducer.unit}}))((function(e){var t=e.dayForecast,n=e.temperatureUnit,a=V.getDayInWeekByDate(t.Date),c=t.Temperature.Minimum.Value,o="C"===n?c+" \xb0 C":k.convertCelsiusToFahrenheit(c)+" \xb0 F",i=k.getWeatherIconSrc(t.Day.Icon);return r.a.createElement("li",{className:"day-forecast-cmp floating-card"},r.a.createElement("span",{className:"day"}," ",a," "),r.a.createElement("div",{className:"icon-temperature-container"},r.a.createElement("img",{src:i}),r.a.createElement("span",null," ",o," ")))})),z=function(e){var t=e.weekForecast.map((function(e){return r.a.createElement(H,{key:e.EpochDate,dayForecast:e})}));return r.a.createElement("ul",{className:"week-forecast-cmp responsive-grid"},t)},J=(n(81),function(e){var t=e.isChecked,n=e.onClick,a={color:t?"tomato":"#ccc"};return r.a.createElement("span",{className:"toggle-heart-cmp active",style:a,onClick:n},r.a.createElement("i",{className:"fas fa-heart"}))}),q=function(e){function t(){var e,n;Object(I.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(R.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(r)))).state={currentWeather:"FETCHING",weekForecast:[]},n.fetchCurrentWeather=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.selectedLocation.Key,e.prev=1,e.next=4,k.getLocationCurrentWeatherByKey(t);case 4:a=e.sent,n.setState({currentWeather:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n.setState({currentWeather:"ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),n.fetchWeekForecast=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.selectedLocation.Key,e.next=3,k.getLocationweekForecastByKey(t);case 3:a=e.sent,n.setState({weekForecast:a});case 5:case"end":return e.stop()}}),e)}))),n.toggleLocationFromFavorites=function(){n.props.toggleLocationFromFavorites(n.props.selectedLocation)},n}return Object(A.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.fetchCurrentWeather(),this.fetchWeekForecast()}},{key:"componentDidUpdate",value:function(e,t){t&&e.selectedLocation!==this.props.selectedLocation&&(this.fetchCurrentWeather(),this.fetchWeekForecast())}},{key:"render",value:function(){var e,t,n,a,c,o,i,s=this.props,u=s.selectedLocation,l=s.favorites,p=s.temperatureUnit,f=this.state,m=f.currentWeather,h=f.weekForecast,v=u.LocalizedName,g=l.find((function(e){return e.Key===u.Key}));return"FETCHING"===m?(e="Loading..",t="Loading..",n="https://svgshare.com/i/GVB.svg"):"ERROR"===m?(n="https://svgshare.com/i/GV2.svg",t="Please try later!"):(e="C"===p?m.Temperature.Metric.Value+" \xb0 C":m.Temperature.Imperial.Value+" \xb0 F",t=m.WeatherText,n=k.getWeatherIconSrc(m.WeatherIcon),a=V.getFormattedHour(m.LocalObservationDateTime),c=m.IsDayTime?"Day":"Night",o={backgroundColor:m.IsDayTime?"lightblue":"#214c6d"},i=m.Wind.Speed.Metric.Value+"Km/h"),r.a.createElement("div",{className:"location-details-cmp"},r.a.createElement("div",{className:"top content floating-card"},r.a.createElement("div",{className:"name-temperature-container"},r.a.createElement("h2",null,v),r.a.createElement("h3",{className:"temperature"}," ",e," ")),r.a.createElement("div",{className:"weather-icon-text"},r.a.createElement("img",{src:n}),t),r.a.createElement(J,{onClick:this.toggleLocationFromFavorites,isChecked:g})),r.a.createElement("div",{className:"test-1"},r.a.createElement("div",{className:"floating-card location-time-container",style:o},a&&r.a.createElement("h3",null,a," | ",c)),r.a.createElement("div",{className:"floating-card wind"},i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"https://svgshare.com/i/GW2.svg"}),r.a.createElement("h3",null,"Wind"),r.a.createElement("span",null,i)))),r.a.createElement(z,{weekForecast:h}))}}]),t}(a.Component),Y=Object(u.b)((function(e){return{selectedLocation:e.locationReducer.selectedLocation,favorites:e.locationReducer.favorites,temperatureUnit:e.weatherReducer.unit}}),(function(e){return{toggleLocationFromFavorites:function(t){return e(function(e){return function(t,n){var a=n().locationReducer.favorites.slice(),r=a.findIndex((function(t){return t.Key===e.Key}));-1!==r?a.splice(r,1):a.push(e),t({type:S,payload:a}),v.saveFavoriteLocations(a)}}(t))}}}))(q),Q=function(){return r.a.createElement("div",{className:"home-page container content"},r.a.createElement(G,null),r.a.createElement(Y,null))},X=(n(82),n(83),n(84),n(85),function(e){function t(){var e,n;Object(I.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(R.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(r)))).state={currentWeather:null},n.fetchCurrentWeather=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.location.Key,e.next=3,k.getLocationCurrentWeatherByKey(t);case 3:a=e.sent,n.setState({currentWeather:a});case 5:case"end":return e.stop()}}),e)}))),n.handleClick=function(){var e=n.props.location;n.props.onLocationClick(e)},n}return Object(A.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){this.fetchCurrentWeather()}},{key:"render",value:function(){var e,t,n=this.props,a=n.location,c=n.temperatureUnit,o=this.state.currentWeather;return o&&(t="C"===c?o.Temperature.Metric.Value+" \xb0 C":o.Temperature.Imperial.Value+" \xb0 F",e=k.getWeatherIconSrc(o.WeatherIcon)),r.a.createElement("li",{className:"location-preview-cmp floating-card",onClick:this.handleClick},r.a.createElement("span",{className:"location-name"},a.LocalizedName),r.a.createElement("div",{className:"icon-temperature-container"},r.a.createElement("img",{src:e}),r.a.createElement("span",null," ",t," ")))}}]),t}(a.Component)),Z=Object(u.b)((function(e){return{temperatureUnit:e.weatherReducer.unit}}))(X),$=function(e){var t=e.locations,n=e.onLocationClick,a=t.length?t.map((function(e){return r.a.createElement(Z,{key:e.Key,location:e,onLocationClick:n})})):"No favorites yet..";return r.a.createElement("ul",{className:"location-list-cmp responsive-grid"},a)},ee=function(e){function t(){var e,n;Object(I.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(R.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(r)))).handleLocationClick=function(e){n.props.setSelectedLocation(e),n.props.history.push("/")},n}return Object(A.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props.favorites?r.a.createElement($,{locations:this.props.favorites,onLocationClick:this.handleLocationClick}):"No locations..";return r.a.createElement(r.a.Fragment,null,e)}}]),t}(a.Component),te=Object(s.f)(Object(u.b)((function(e){return{favorites:e.locationReducer.favorites}}),(function(e){return{setSelectedLocation:function(t){return e(N(t))}}}))(ee)),ne=function(){return r.a.createElement("div",{className:"favorites-page container content"},r.a.createElement(te,null))};var ae=Object(u.b)(null,(function(e){return{fetchFavoriteLocations:function(){return e(function(){var e=Object(f.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n().locationReducer.favorites.length){e.next=5;break}return e.next=3,v.getFavoriteLocations();case 3:a=e.sent,t({type:S,payload:a});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))((function(e){return Object(a.useEffect)((function(){e.fetchFavoriteLocations()}),[]),r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(W,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:Q}),r.a.createElement(s.a,{path:"/favorites",component:ne}))))})),re=n(18);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie={locationSuggests:null,selectedLocation:{Key:"215854",LocalizedName:"Tel Aviv"},favorites:[]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return oe({},e,{locationSuggests:t.payload});case C:return oe({},e,{selectedLocation:t.payload});case S:return oe({},e,{favorites:t.payload});default:return e}};function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe={unit:"C"},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:var n="C"===e.unit?"F":"C";return le({},e,{unit:n});default:return e}},me=Object(re.c)({locationReducer:se,weatherReducer:fe}),he=n(41),ve=Object(re.d)(me,Object(re.a)(he.a));ve.subscribe((function(){})),o.a.render(r.a.createElement(u.a,{store:ve},r.a.createElement(ae,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.d80467a8.chunk.js.map