!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=8)}([function(t,e,i){"use strict";function n(t){if(t&&t.nodeType)return 1===t.nodeType}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();e.default=n},function(t,e,i){"use strict";function n(t,e){return Object(o.default)(t)?window.getComputedStyle(t,null).getPropertyValue(e):"string"==typeof t&&document.querySelector(t)?window.getComputedStyle(document.querySelector(t),null).getPropertyValue(e):void 0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var o=i(0)},function(t,e,i){"use strict";function n(t){var e=document.createElement("style"),i=document.head||document.getElementsByTagName("head")[0];if(e.type="text/css",e.styleSheet){var n=function(){try{e.styleSheet.cssText=t}catch(t){console.log(t)}};e.styleSheet.disabled?setTimeout(n,10):n()}else{var o=document.createTextNode(t);e.appendChild(o)}i.appendChild(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){return window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout}();e.default=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.events={}}return t.prototype.on=function(t,e){this.events[t]?this.events[t].push(e):this.events[t]=[e]},t.prototype.off=function(t,e){this.events[t].splice(this.events[t].indexOf(e),1)},t.prototype.empty=function(t){this.events[t]=[]},t.prototype.triggle=function(t){this.events[t].forEach(function(t){t()})},t}();e.default=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),o=i(6),r=i(2),a=i(7),s=i(3),c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),d=function(t){function e(e){var i=e.video,n=e.dataTime,o=t.call(this)||this;return o.currentTime=0,o.sumTime=0,o.videoEnd=!1,o.barrageWrap=[],o.readyShowBarrage=[],o.staticBarrageST=null,o.runST=0,o.video=i,o.scroxtVideo=document.querySelector(o.video),o.dataTime=o.quickSort(n),console.log(o.dataTime),o.tempDataTime=JSON.parse(JSON.stringify(o.dataTime)),o.lineHeight=28,o.videoWidth=parseInt(Object(r.default)(o.video,"width")),o.MAX_LINE=~~(parseInt(Object(r.default)(o.video,"height"))/o.lineHeight),o.MAX_NUM=50,o.distance=-5,o.colorFont=["#ffff38","#c80115","#189add"],o.createStyle(),o.startRun(),o}return c(e,t),e.prototype.quickSort=function(t){if(t.length<=1)return t;for(var e=t.splice(Math.floor(t.length/2),1)[0],i=[],n=[],o=0,r=t.length;o<r;o++)t[o].time<e.time?i.push(t[o]):n.push(t[o]);return this.quickSort(i).concat(e,this.quickSort(n))},e.prototype.createStyle=function(){Object(s.default)('\n            .scroxt-video-barrage{\n                position: relative;\n                width: 600px;\n                height: 600px;\n                margin: 0 auto;\n                overflow: hidden;\n            }\n            .scroxt-video{\n                display: block;\n                width: 100%;\n                height: auto;\n                cursor: pointer;\n            }\n            .multi-barrage-line{\n              position: absolute;\n              display: inline-block;\n              top: 0;\n              user-select:none;\n              white-space: pre;\n              color: #fff;\n              font-size: 25px;\n              font-family:SimHei, "Microsoft JhengHei", Arial, Helvetica, sans-serif;\n              font-weight:bold;\n              line-height: 1.125;\n              text-shadow:rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px;\n              transition:-webkit-transform 0s linear;\n              z-index: 1;\n              pointer-events: none;\n            }\n            .static-barrage-line{\n              position: absolute;\n              left: 50%;\n              transform:translateX(-50%);\n              -webkit-transform:translateX(-50%);\n              top: 0;\n              z-index: 2;\n            }\n        ')},e.prototype.startRun=function(){var t=this.scroxtVideo.className;this.scroxtVideo.className=t.indexOf("scroxt-video")>-1?t:t+" scroxt-video",this.playEvent()},e.prototype.restart=function(){this.sumTime=0,this.tempDataTime=JSON.parse(JSON.stringify(this.dataTime))},e.prototype.playEvent=function(){var t=this;4==this.scroxtVideo.readyState?t.videoClickEvent():(this.scroxtVideo.addEventListener("canplaythrough",function(){t.videoClickEvent()},!1),this.scroxtVideo.load())},e.prototype.videoClickEvent=function(){var t=this;t.scroxtVideo.addEventListener("click",function(e){e.stopImmediatePropagation(),t.videoEnd&&(t.videoEnd=!1,t.restart()),t.videoStatusMethod()},!1),t.scroxtVideo.addEventListener("ended",function(){t.videoEnd=!0,t.readyShowBarrage=[]})},e.prototype.videoStatusMethod=function(){this.scroxtVideo.paused?(this.currentTime=+new Date,this.scroxtVideo.play(),this.intervalRun()):(this.scroxtVideo.pause(),this.intervalStop())},e.prototype.timeUpdate=function(){this.sumTime+=(+new Date-this.currentTime)/1e3,this.currentTime=+new Date,this.distribution(this.sumTime)},e.prototype.distribution=function(t){for(var e=this.tempDataTime.length;0!==e&&this.tempDataTime[0].time<t;)this.readyShowBarrage.push(this.tempDataTime[0].data),this.tempDataTime.shift(),e=this.tempDataTime.length},e.prototype.createBarrage=function(){var t=this.readyShowBarrage.length;if(t&&!(this.barrageWrap.length>this.MAX_NUM))for(var e=0;e<t;e++){if(e>this.MAX_LINE){t>20&&!this.staticBarrageST&&this.createStaticBarrage(this.readyShowBarrage.splice(0,this.MAX_LINE));break}var i=e%this.MAX_LINE,n=document.querySelectorAll("[data-line='"+i+"']"),o=n.length,r=void 0;if(o>0){r=n[o-1];var a=+r.getAttribute("data-width"),s=+r.getAttribute("data-move");if(Math.abs(s)+a>this.videoWidth)continue}var c=this.readyShowBarrage.shift(),d=Math.floor(1e3*Math.random())+ +new Date+e,u=e%2==0?10:0,l=document.createElement("div");l.className="multi-barrage-line";var p=document.createTextNode(""+c);l.appendChild(p),this.scroxtVideo.parentNode.appendChild(l);var h=parseInt(window.getComputedStyle(l,null).getPropertyValue("width")),f=h/600>=.5?.5:h/600,m="#fff";.5===f&&(m=this.colorFont[~~(Math.random()*this.colorFont.length)]),this.barrageWrap.push({element:l,scroxt:d,line:i,move:this.videoWidth+u+10,width:h,distance:f,color:m})}},e.prototype.createStaticBarrage=function(t){for(var e=this,i=0,n=t.length;i<n;i++)!function(i,n){var o=i%e.MAX_LINE,r=document.createElement("div");r.className="multi-barrage-line static-barrage-line",r.style.top=o*e.lineHeight+"px",r.style.color=e.colorFont[~~(Math.random()*e.colorFont.length)];var a=document.createTextNode(""+t[i]);r.appendChild(a),e.staticBarrageST=setTimeout(function(){this.staticBarrageST=null,this.scroxtVideo.parentNode.removeChild(r)}.bind(e),3e3),e.scroxtVideo.parentNode.appendChild(r)}(i)},e.prototype.moveLine=function(){for(var t=0;t<this.barrageWrap.length;t++){var e=this.barrageWrap[t],i=e.element,n=(e.scroxt,e.line),o=e.move,r=e.width,a=e.distance,s=e.color;if(o<=-r){this.barrageWrap.splice(t,1),t--;var c=i.parentNode;c&&c.removeChild(i)}else{var d=o+this.distance*a+this.distance/10;this.barrageWrap[t].move=d,i.style.cssText="color:"+s+";transform:translate3d("+d+"px,"+n*this.lineHeight+"px,0);"}}},e.prototype.intervalRun=function(){this.runST=Object(n.default)(function(){this.createBarrage(),this.moveLine(),this.scroxtVideo.paused||this.timeUpdate(),this.intervalRun()}.bind(this))},e.prototype.intervalStop=function(){Object(o.default)(this.runST)},e}(a.default);e.default=d}]);