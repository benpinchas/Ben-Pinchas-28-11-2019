(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{43:function(e,t,n){e.exports=n(88)},48:function(e,t,n){},49:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23),o=n.n(c),i=(n(48),n(49),n(20)),s=n(17),u=n(3),l=n(2),p=n.n(l),f=n(6);var m={store:function(e,t){localStorage[e]=JSON.stringify(t)},load:function(e){var t=localStorage[e]||"null";return JSON.parse(t)}},h="FAVORITE_LOCATIONS_0";function v(e){return m.store(h,e)}var g={getFavoriteLocations:function(){var e=m.load(h);return e||v(e=[{Key:"215854",LocalizedName:"Tel Aviv"},{Key:"300597",LocalizedName:"Singapore"},{Key:"328328",LocalizedName:"London"}]),e},saveFavoriteLocations:v},d=n(25),y=n.n(d),O={site_url:"https://benpinchas.github.io/Ben-Pinchas-28-11-2019"},b="https://dataservice.accuweather.com",E="zsGlW5LWHSfncy9Loq7xgypCDO1ShYbS";function w(){return(w=Object(f.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b+"/locations/v1/cities/autocomplete?apikey="+E+"&q="+t,e.prev=1,e.next=4,y.a.get(n);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function j(){return(j=Object(f.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b+"/currentconditions/v1/"+t+"?apikey="+E+"&details=true",e.prev=1,e.next=4,y.a.get(n);case 4:return r=e.sent,e.abrupt("return",r.data[0]);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function k(){return(k=Object(f.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b+"/forecasts/v1/daily/5day/"+t+"?apikey="+E+"&metric=true",e.prev=1,e.next=4,y.a.get(n);case 4:return r=e.sent,e.abrupt("return",r.data.DailyForecasts);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var L={getLocationSuggests:function(e){return w.apply(this,arguments)},getLocationCurrentWeatherByKey:function(e){return j.apply(this,arguments)},getLocationweekForecastByKey:function(e){return k.apply(this,arguments)},getWeatherIconSrc:function(e){var t=O.site_url+"/assets/weather-icons/";return 1===e?t+"sun.svg":e>=2&&e<=4?t+"sunny.svg":e>=6&&e<=8?t+"cloudy.svg":11===e?t+"fog.svg":e>=12&&e<=18?t+"rain.svg":22===e?t+"snow.svg":e>=19&&e<=23?t+"clouds.svg":e>=38&&e<=42?t+"storm.svg":t+"general.svg"},convertCelsiusToFahrenheit:function(e){return Math.floor(1.8*e+32)}},S="SET_LOCATION_SUGGESTS",C="SET_SELECTED_LOCATION_DETAILS",N="SET_FAVORITE_LOCATIONS",F="TOGGLE_TEMPERATURE_UNIT",T="TOGGLE_THEME";function D(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:C,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}n(72),n(73);var W=function(){return a.a.createElement("nav",{className:"nav-bar-cmp"},a.a.createElement(i.b,{exact:!0,to:"/"},"Home"),a.a.createElement(i.b,{to:"/favorites"},"Favorties"))};n(75);var x=Object(u.b)((function(e){return{temperatureUnit:e.weatherReducer.unit}}),(function(e){return{toggleTemperatureUnit:function(){return e({type:F,payload:null})}}}))((function(e){var t=e.temperatureUnit,n=e.toggleTemperatureUnit;return a.a.createElement("div",{className:"toggle-unit-cmp",onClick:n},a.a.createElement("button",{className:"C"===t?"active":""},"\xb0 C"),a.a.createElement("span",null," | "),a.a.createElement("button",{className:"C"!==t?"active":""},"\xb0 F"))}));n(76);var R=Object(u.b)((function(e){return{theme:e.themeReducer}}),(function(e){return{toggleTheme:function(){return e({type:T,payload:null})}}}))((function(e){var t={opacity:"light"===e.theme?.6:1};return a.a.createElement("button",{onClick:e.toggleTheme,style:t},"Dark mode")})),I=function(){return a.a.createElement("header",{className:"app-header-cmp"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"widget-container"},a.a.createElement(R,null),a.a.createElement(x,null)),a.a.createElement("div",{className:"main"},a.a.createElement("h2",null,"Weather App"),a.a.createElement(W,null))))},P=(n(77),n(21)),K=n(12),A=n(13),G=n(15),B=n(14),M=n(16),U=(n(78),n(79),function(e){var t=e.suggestions,n=e.onSuggestClick,r=t.map((function(e){return a.a.createElement("li",{className:"suggest-preview",key:e.Key,onMouseDown:n.bind(null,e)},a.a.createElement("span",null,e.LocalizedName)," ",a.a.createElement("span",{className:"country"},e.Country.LocalizedName))}));return a.a.createElement("ul",{className:"suggests-list-cmp"},r)}),_=n(19),H=n.n(_);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){Object(P.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=function(e){function t(){var e,n;Object(K.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(a)))).state={isFocus:!1,term:""},n.setSelectedLocation=function(e){n.setState({term:e.LocalizedName}),n.props.setSelectedLocation(e)},n.onFocus=function(){n.setState({isFocus:!0})},n.onBlur=function(){n.setState(z({},n.state,{isFocus:!1}))},n.onInputChange=function(e){var t=e.target.value;n.setState((function(e){return z({},e,{term:t})}),(function(){return n.props.fetchLocationSuggests(t).catch((function(e){n.setState({term:""}),H.a.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}))}))},n}return Object(M.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.suggestions,t=this.state.isFocus;return a.a.createElement("div",{className:"location-search-cmp"},a.a.createElement("input",{type:"text",onChange:this.onInputChange,value:this.state.term,onFocus:this.onFocus,onBlur:this.onBlur,placeholder:"Search for a place.."}),t&&e&&a.a.createElement(U,{suggestions:e,onSuggestClick:this.setSelectedLocation}))}}]),t}(a.a.Component),q=Object(u.b)((function(e){return{suggestions:e.locationReducer.locationSuggests}}),(function(e){return{fetchLocationSuggests:function(t){return e((n=t,function(){var e=Object(f.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.getLocationSuggests(n);case 3:r=e.sent,t({type:S,payload:r}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()));var n},setSelectedLocation:function(t){return e(D(t))}}}))(J);n(80),n(81),n(82);var Y={getDayInWeekByDate:function(e){return["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][new Date(e).getDay()]},getFormattedHour:function(e){var t=6e4*new Date(Date.now()).getTimezoneOffset(),n=Date.now()+t,r=6e4*+e.slice(19,22)*60,a=new Date(n+r);return(a.getHours()<10?"0"+a.getHours():a.getHours())+":"+(a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes())}},Q=Object(u.b)((function(e){return{temperatureUnit:e.weatherReducer.unit}}))((function(e){var t=e.dayForecast,n=e.temperatureUnit,r=Y.getDayInWeekByDate(t.Date),c=t.Temperature.Minimum.Value,o="C"===n?c+" \xb0 C":L.convertCelsiusToFahrenheit(c)+" \xb0 F",i=L.getWeatherIconSrc(t.Day.Icon);return a.a.createElement("li",{className:"day-forecast-cmp floating-card"},a.a.createElement("span",{className:"day"}," ",r," "),a.a.createElement("div",{className:"icon-temperature-container"},a.a.createElement("img",{src:i}),a.a.createElement("span",null," ",o," ")))})),X=function(e){var t=e.weekForecast.map((function(e){return a.a.createElement(Q,{key:e.EpochDate,dayForecast:e})}));return a.a.createElement("ul",{className:"week-forecast-cmp responsive-grid"},t)},Z=(n(83),function(e){var t=e.isChecked,n=e.onClick,r={color:t?"tomato":"#ccc"};return a.a.createElement("span",{className:"toggle-heart-cmp active",style:r},a.a.createElement("i",{className:"fas fa-heart",onClick:n}))}),$=function(e){function t(){var e,n;Object(K.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(a)))).state={currentWeather:"FETCHING",weekForecast:[]},n.fetchCurrentWeather=Object(f.a)(p.a.mark((function e(){var t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.selectedLocation.Key,e.prev=1,e.next=4,L.getLocationCurrentWeatherByKey(t);case 4:r=e.sent,n.setState({currentWeather:r}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),n.setState({currentWeather:"ERROR"}),H.a.fire({icon:"error",title:"Oops...",text:"We couldn't get the current weather!"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),n.fetchWeekForecast=Object(f.a)(p.a.mark((function e(){var t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.selectedLocation.Key,e.prev=1,e.next=4,L.getLocationweekForecastByKey(t);case 4:r=e.sent,n.setState({weekForecast:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),H.a.fire({icon:"error",title:"Oops...",text:"We couldn't get the weekly forcast!"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),n.toggleLocationFromFavorites=function(){n.props.toggleLocationFromFavorites(n.props.selectedLocation)},n}return Object(M.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.fetchCurrentWeather(),this.fetchWeekForecast()}},{key:"componentDidUpdate",value:function(e,t){t&&e.selectedLocation!==this.props.selectedLocation&&(this.fetchCurrentWeather(),this.fetchWeekForecast())}},{key:"render",value:function(){var e,t,n,r,c,o,i,s=this.props,u=s.selectedLocation,l=s.favorites,p=s.temperatureUnit,f=this.state,m=f.currentWeather,h=f.weekForecast,v=u.LocalizedName,g=l.find((function(e){return e.Key===u.Key}));return"FETCHING"===m?(e="Loading..",t="Loading..",n="https://svgshare.com/i/GVB.svg"):"ERROR"===m?(n="https://svgshare.com/i/GV2.svg",t="Please try later!"):(e="C"===p?m.Temperature.Metric.Value+" \xb0 C":m.Temperature.Imperial.Value+" \xb0 F",t=m.WeatherText,n=L.getWeatherIconSrc(m.WeatherIcon),r=Y.getFormattedHour(m.LocalObservationDateTime),c=m.IsDayTime?"Day":"Night",o=m.IsDayTime?"":"night",i=m.Wind.Speed.Metric.Value+"Km/h"),a.a.createElement("div",{className:"location-details-cmp"},a.a.createElement("div",{className:"top content floating-card"},a.a.createElement("div",{className:"name-temperature-container"},a.a.createElement("h2",null,v),a.a.createElement("h3",{className:"temperature"}," ",e," ")),a.a.createElement("div",{className:"weather-icon-text"},a.a.createElement("img",{src:n}),t),a.a.createElement(Z,{onClick:this.toggleLocationFromFavorites,isChecked:g})),a.a.createElement("div",{className:"time-wind-container"},a.a.createElement("div",{className:"floating-card location-time-card "+o},r&&a.a.createElement("h3",null,r," | ",c)),a.a.createElement("div",{className:"floating-card wind"},i&&a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:"https://svgshare.com/i/GW2.svg"}),a.a.createElement("h3",null,"Wind"),a.a.createElement("span",null,i)))),a.a.createElement(X,{weekForecast:h}))}}]),t}(r.Component),ee=Object(u.b)((function(e){return{selectedLocation:e.locationReducer.selectedLocation,favorites:e.locationReducer.favorites,temperatureUnit:e.weatherReducer.unit}}),(function(e){return{toggleLocationFromFavorites:function(t){return e(function(e){return function(t,n){var r=n().locationReducer.favorites.slice(),a=r.findIndex((function(t){return t.Key===e.Key}));-1!==a?r.splice(a,1):r.push(e),t({type:N,payload:r}),g.saveFavoriteLocations(r)}}(t))}}}))($),te=function(){return a.a.createElement("div",{className:"home-page container content"},a.a.createElement(q,null),a.a.createElement(ee,null))},ne=(n(84),n(85),n(86),n(87),function(e){function t(){var e,n;Object(K.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(a)))).state={currentWeather:"FETCHING"},n.fetchCurrentWeather=Object(f.a)(p.a.mark((function e(){var t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.location.Key,e.prev=1,e.next=4,L.getLocationCurrentWeatherByKey(t);case 4:r=e.sent,n.setState({currentWeather:r}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),n.setState({currentWeather:"ERROR"}),H.a.fire({icon:"error",title:"Oops...",text:"Something went wrong!"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),n.handleClick=function(){var e=n.props.location;n.props.onLocationClick(e)},n}return Object(M.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.fetchCurrentWeather()}},{key:"render",value:function(){var e,t,n=this.props,r=n.location,c=n.temperatureUnit,o=this.state.currentWeather;return"FETCHING"===o?(e="https://svgshare.com/i/GVB.svg",t="Loading.."):"ERROR"==o?(e="https://svgshare.com/i/GV2.svg",t="--"):(t="C"===c?o.Temperature.Metric.Value+" \xb0 C":o.Temperature.Imperial.Value+" \xb0 F",e=L.getWeatherIconSrc(o.WeatherIcon)),a.a.createElement("li",{className:"location-preview-cmp floating-card",onClick:this.handleClick},a.a.createElement("span",{className:"location-name"},r.LocalizedName),a.a.createElement("div",{className:"icon-temperature-container"},a.a.createElement("img",{src:e}),a.a.createElement("span",null," ",t," ")))}}]),t}(r.Component)),re=Object(u.b)((function(e){return{temperatureUnit:e.weatherReducer.unit}}))(ne),ae=function(e){var t=e.locations,n=e.onLocationClick,r=t.length?t.map((function(e){return a.a.createElement(re,{key:e.Key,location:e,onLocationClick:n})})):"No favorites yet..";return a.a.createElement("ul",{className:"location-list-cmp responsive-grid"},r)},ce=function(e){function t(){var e,n;Object(K.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(a)))).handleLocationClick=function(e){n.props.setSelectedLocation(e),n.props.history.push("/")},n}return Object(M.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.favorites?a.a.createElement(ae,{locations:this.props.favorites,onLocationClick:this.handleLocationClick}):"No locations..";return a.a.createElement(a.a.Fragment,null,e)}}]),t}(r.Component),oe=Object(s.f)(Object(u.b)((function(e){return{favorites:e.locationReducer.favorites}}),(function(e){return{setSelectedLocation:function(t){return e(D(t))}}}))(ce)),ie=function(){return a.a.createElement("div",{className:"favorites-page container content"},a.a.createElement(oe,null))};var se=Object(u.b)((function(e){return{theme:e.themeReducer}}),(function(e){return{fetchFavoriteLocations:function(){return e(function(){var e=Object(f.a)(p.a.mark((function e(t,n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n().locationReducer.favorites.length){e.next=5;break}return e.next=3,g.getFavoriteLocations();case 3:r=e.sent,t({type:N,payload:r});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))((function(e){return Object(r.useEffect)((function(){e.fetchFavoriteLocations()}),[]),a.a.createElement(i.a,null,a.a.createElement("div",{className:"App","data-theme":e.theme},a.a.createElement(I,null),a.a.createElement(s.c,null,a.a.createElement(s.a,{exact:!0,path:"/",component:te}),a.a.createElement(s.a,{path:"/favorites",component:ie}))))})),ue=n(18);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach((function(t){Object(P.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe={locationSuggests:null,selectedLocation:{Key:"215854",LocalizedName:"Tel Aviv"},favorites:[]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return pe({},e,{locationSuggests:t.payload});case C:return pe({},e,{selectedLocation:t.payload});case N:return pe({},e,{favorites:t.payload});default:return e}};function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(n,!0).forEach((function(t){Object(P.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge={unit:"C"},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:var n="C"===e.unit?"F":"C";return ve({},e,{unit:n});default:return e}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=arguments.length>1?arguments[1]:void 0;return t.type===T?"light"===e?"dark":"light":e},Oe=Object(ue.c)({locationReducer:me,weatherReducer:de,themeReducer:ye}),be=n(42),Ee=Object(ue.d)(Oe,Object(ue.a)(be.a));Ee.subscribe((function(){})),o.a.render(a.a.createElement(u.a,{store:Ee},a.a.createElement(se,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.81ff7fbc.chunk.js.map