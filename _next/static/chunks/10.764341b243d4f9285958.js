(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{VOfC:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?a(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e);var l=n("rePB"),c=n("nKUr"),f=n("q1tI"),p=n.n(f),g=n("4ZJM"),h=n.n(g),d=n("WnRt"),y=n.n(d);function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}h.a.accessToken="pk.eyJ1IjoiaXNoaW1hc2FyIiwiYSI6ImNraWVqazNhZDE3NDEyc211bmVnNHp4Y2YifQ.UakMRuSG9yy-JtOMDEpULQ";var b=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(u,t);var e,n,o,s=m(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),e=s.call(this,t),Object(l.a)(a(e),"options",{container:"map",style:"mapbox://styles/mapbox/streets-v10",center:[139.576034,35.700108],zoom:13}),e}return e=u,(n=[{key:"componentDidMount",value:function(){this.map=new h.a.Map(this.options),this.map.addControl(new h.a.NavigationControl,"top-left"),this.map.addControl(new h.a.FullscreenControl),this.map.addControl(new h.a.ScaleControl({maxWidth:80,unit:"metric"})),this.map.addControl(new h.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0})),this.map.addControl(new y.a({defaultLanguage:"ja"})),this.marker=(new h.a.Marker).setLngLat(this.map.getCenter()).addTo(this.map),this.markerHeight=50,this.markerRadius=10,this.linearOffset=25,this.popupOffsets={top:[0,0],"top-left":[0,0],"top-right":[0,0],bottom:[0,-this.markerHeight],"bottom-left":[this.linearOffset,-1*(this.markerHeight-this.markerRadius+this.linearOffset)],"bottom-right":[-this.linearOffset,-1*(this.markerHeight-this.markerRadius+this.linearOffset)],left:[this.markerRadius,-1*(this.markerHeight-this.markerRadius)],right:[-this.markerRadius,-1*(this.markerHeight-this.markerRadius)]},this.popup=new h.a.Popup({offset:this.popupOffsets,className:"my-class"}).setLngLat(this.map.getCenter()).setHTML("<p>\u4e09\u9df9\u30fb\u6b66\u8535\u91ce\u306e\u4e2d\u5fc3\u3067\u30d7\u30e9\u30b9\u30c1\u30c3\u30af\u30d5\u30ea\u30fc\u3092\u53eb\u3076</p>").setMaxWidth("300px").addTo(this.map)}},{key:"render",value:function(){var t=this;return Object(c.jsx)("div",{id:"map",style:{height:500},children:Object(c.jsx)("div",{ref:function(e){return t.mapContainer=e}})})}}])&&r(e.prototype,n),o&&r(e,o),u}(p.a.Component);e.default=b},WnRt:function(t,e,n){function r(t){if(t=Object.assign({},t),!(this instanceof r))throw new Error("MapboxLanguage needs to be called with the new keyword");this.setLanguage=this.setLanguage.bind(this),this._initialStyleUpdate=this._initialStyleUpdate.bind(this),this._defaultLanguage=t.defaultLanguage,this._isLanguageField=t.languageField||/^\{name/,this._getLanguageField=t.getLanguageField||function(t){return"mul"===t?"{name}":"{name_"+t+"}"},this._languageSource=t.languageSource||null,this._languageTransform=t.languageTransform||function(t,e){return"ar"===e?function(t){var e=t.layers.map((function(t){if(!(t.layout||{})["text-field"])return t;var e=0;return Object.assign({},t,{layout:Object.assign({},t.layout,{"text-letter-spacing":e})})}));return Object.assign({},t,{layers:e})}(t):function(t){var e=t.layers.map((function(t){if(!(t.layout||{})["text-field"])return t;var e=0;return"state_label"===t["source-layer"]&&(e=.15),"marine_label"===t["source-layer"]&&(/-lg/.test(t.id)&&(e=.25),/-md/.test(t.id)&&(e=.15),/-sm/.test(t.id)&&(e=.1)),"place_label"===t["source-layer"]&&(/-suburb/.test(t.id)&&(e=.15),/-neighbour/.test(t.id)&&(e=.1),/-islet/.test(t.id)&&(e=.01)),"airport_label"===t["source-layer"]&&(e=.01),"rail_station_label"===t["source-layer"]&&(e=.01),"poi_label"===t["source-layer"]&&/-scalerank/.test(t.id)&&(e=.01),"road_label"===t["source-layer"]&&(/-label-/.test(t.id)&&(e=.01),/-shields/.test(t.id)&&(e=.05)),Object.assign({},t,{layout:Object.assign({},t.layout,{"text-letter-spacing":e})})}));return Object.assign({},t,{layers:e})}(t)},this._excludedLayerIds=t.excludedLayerIds||[],this.supportedLanguages=t.supportedLanguages||["ar","en","es","fr","de","ja","ko","mul","pt","ru","zh"]}function a(t,e,n){if(function(t,e){return"string"===typeof e&&t.test(e)}(t,e))return n;if(function(t,e){return e.stops&&e.stops.filter((function(e){return t.test(e[1])})).length>0}(t,e)){var r=e.stops.map((function(e){return t.test(e[1])?[e[0],n]:e}));return Object.assign({},e,{stops:r})}return e}r.prototype.setLanguage=function(t,e){if(this.supportedLanguages.indexOf(e)<0)throw new Error("Language "+e+" is not supported");var n=this._languageSource||function(t){return Object.keys(t.sources).filter((function(e){var n=t.sources[e];return/mapbox-streets-v\d/.test(n.url)}))[0]}(t);if(!n)return t;var r=this._getLanguageField(e),i=this._isLanguageField,o=this._excludedLayerIds,s=t.layers.map((function(t){return t.source===n?function(t,e,n,r){return e.layout&&e.layout["text-field"]&&-1===r.indexOf(e.id)?Object.assign({},e,{layout:Object.assign({},e.layout,{"text-field":a(t,e.layout["text-field"],n)})}):e}(i,t,r,o):t})),u=Object.assign({},t,{layers:s});return this._languageTransform(u,e)},r.prototype._initialStyleUpdate=function(){var t=this._map.getStyle(),e=this._defaultLanguage||function(t){var e=navigator.languages?navigator.languages[0]:navigator.language||navigator.userLanguage,n=e.split("-"),r=e;n.length>1&&(r=n[0]);if(t.indexOf(r)>-1)return r;return null}(this.supportedLanguages);this._map.off("styledata",this._initialStyleUpdate),this._map.setStyle(this.setLanguage(t,e))},r.prototype.onAdd=function(t){return this._map=t,this._map.on("styledata",this._initialStyleUpdate),this._container=document.createElement("div"),this._container},r.prototype.onRemove=function(){this._map.off("styledata",this._initialStyleUpdate),this._map=void 0},"undefined"!==typeof t.exports?t.exports=r:("function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){"use strict";if(null===t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),r=1;r<arguments.length;r++){var a=arguments[r];if(null!==a)for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])}return n},writable:!0,configurable:!0}),window.MapboxLanguage=r)},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))}}]);