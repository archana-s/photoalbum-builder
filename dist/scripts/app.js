!function(e){"use strict";var r=e.querySelector("#app"),t=function(){"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");e=Object(e);for(var r=1;r<arguments.length;r++){var t=arguments[r];if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e})};r.displayInstalledToast=function(){e.querySelector("platinum-sw-cache").disabled||e.querySelector("#caching-complete").show()},r.addEventListener("dom-change",function(){console.log("Our app is ready to rock!"),t()}),window.addEventListener("WebComponentsReady",function(){}),r.scrollPageToTop=function(){e.querySelector("main").scrollTop=0}}(document);var fetchFlickrImageUrlFromPhoto=function(){var e=Array.prototype.slice.apply(arguments);if(!e.length)return!1;var r=e[0],t="thumbnail";if(2===e.length&&(t=e[1]),!r)return!1;if(r.farm&&r.server&&r.id&&r.secret){var n="http://c2.staticflickr.com/"+r.farm+"/"+r.server+"/"+r.id+"_"+r.secret;return"full"===t.toLowerCase()?n+"_c.jpg":n+"_s.jpg"}return!1};