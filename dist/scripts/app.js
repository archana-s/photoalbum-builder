!function(e){"use strict";var n=e.querySelector("#app");n.displayInstalledToast=function(){e.querySelector("platinum-sw-cache").disabled||e.querySelector("#caching-complete").show()},n.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),n.scrollPageToTop=function(){e.getElementById("mainContainer").scrollTop=0}}(document),function(){var e=function(e,n){var o=["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789","~!@#$%^&()_+-={}[];',"],t="",n=n?n:"aA0";n.split("").forEach(function(e){t+=isNaN(parseInt(e))?/[a-z]/.test(e)?o[0]:/[A-Z]/.test(e)?o[1]:o[3]:o[2]});for(var e=e?e:30,a="";e--;)a+=t.charAt(Math.floor(Math.random()*t.length));return a};"undefined"!=typeof module&&"undefined"!=typeof require?module.exports=e:window.randomID=e}();