!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){(function(n){var o;
/*!
 *  howler.js v2.0.9
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
/*!
 *  howler.js v2.0.9
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
!function(){"use strict";var i=function(){this.init()};i.prototype={init:function(){var e=this||r;return e._counter=1e3,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.mobileAutoEnable=!0,e._setup(),e},volume:function(e){var t=this||r;if(e=parseFloat(e),t.ctx||p(),void 0!==e&&e>=0&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,r.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var o=t._howls[n]._getSoundIds(),i=0;i<o.length;i++){var s=t._howls[n]._soundById(o[i]);s&&s._node&&(s._node.volume=s._volume*e)}return t}return t._volume},mute:function(e){var t=this||r;t.ctx||p(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,r.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var o=t._howls[n]._getSoundIds(),i=0;i<o.length;i++){var s=t._howls[n]._soundById(o[i]);s&&s._node&&(s._node.muted=!!e||s._muted)}return t},unload:function(){for(var e=this||r,t=e._howls.length-1;t>=0;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,p()),e},codecs:function(e){return(this||r)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||r;if(e.state=e.ctx&&e.ctx.state||"running",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{void 0===(new Audio).oncanplaythrough&&(e._canPlayEvent="canplay")}catch(t){e.noAudio=!0}else e.noAudio=!0;try{(new Audio).muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||r,t=null;try{t="undefined"!=typeof Audio?new Audio:null}catch(t){return e}if(!t||"function"!=typeof t.canPlayType)return e;var n=t.canPlayType("audio/mpeg;").replace(/^no$/,""),o=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g),i=o&&parseInt(o[0].split("/")[1],10)<33;return e._codecs={mp3:!(i||!n&&!t.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!n,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_enableMobileAudio:function(){var e=this||r,t=/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator&&e._navigator.userAgent),n=!!("ontouchend"in window||e._navigator&&e._navigator.maxTouchPoints>0||e._navigator&&e._navigator.msMaxTouchPoints>0);if(!e._mobileEnabled&&e.ctx&&(t||n)){e._mobileEnabled=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var o=function(){r._autoResume();var t=e.ctx.createBufferSource();t.buffer=e._scratchBuffer,t.connect(e.ctx.destination),void 0===t.start?t.noteOn(0):t.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),t.onended=function(){t.disconnect(0),e._mobileEnabled=!0,e.mobileAutoEnable=!1,document.removeEventListener("touchstart",o,!0),document.removeEventListener("touchend",o,!0)}};return document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",o,!0),e}},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&r.usingWebAudio){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio)for(var n=0;n<e._howls[t]._sounds.length;n++)if(!e._howls[t]._sounds[n]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&r.usingWebAudio)return"running"===e.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state?(e.ctx.resume().then(function(){e.state="running";for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var r=new i,s=function(e){e.src&&0!==e.src.length?this.init(e):console.error("An array of source files must be passed with any new Howl.")};s.prototype={init:function(e){var t=this;return r.ctx||p(),t._autoplay=e.autoplay||!1,t._format="string"!=typeof e.format?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload="boolean"!=typeof e.preload||e.preload,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src="string"!=typeof e.src?e.src:[e.src],t._volume=void 0!==e.volume?e.volume:1,t._xhrWithCredentials=e.xhrWithCredentials||!1,t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onresume=[],t._webAudio=r.usingWebAudio&&!t._html5,void 0!==r.ctx&&r.ctx&&r.mobileAutoEnable&&r._enableMobileAudio(),r._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&t.load(),t},load:function(){var e=null;if(r.noAudio)this._emit("loaderror",null,"No audio support.");else{"string"==typeof this._src&&(this._src=[this._src]);for(var t=0;t<this._src.length;t++){var n,o;if(this._format&&this._format[t])n=this._format[t];else{if("string"!=typeof(o=this._src[t])){this._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}(n=/^data:audio\/([^;,]+);/i.exec(o))||(n=/\.([^.]+)$/.exec(o.split("?",1)[0])),n&&(n=n[1].toLowerCase())}if(n||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),n&&r.codecs(n)){e=this._src[t];break}}if(e)return this._src=e,this._state="loading","https:"===window.location.protocol&&"http:"===e.slice(0,5)&&(this._html5=!0,this._webAudio=!1),new a(this),this._webAudio&&d(this),this;this._emit("loaderror",null,"No codec support for selected audio sources.")}},play:function(e,t){var n=this,o=null;if("number"==typeof e)o=e,e=null;else{if("string"==typeof e&&"loaded"===n._state&&!n._sprite[e])return null;if(void 0===e){e="__default";for(var i=0,s=0;s<n._sounds.length;s++)n._sounds[s]._paused&&!n._sounds[s]._ended&&(i++,o=n._sounds[s]._id);1===i?e=null:o=null}}var a=o?n._soundById(o):n._inactiveSound();if(!a)return null;if(o&&!e&&(e=a._sprite||"__default"),"loaded"!==n._state){a._sprite=e,a._ended=!1;var u=a._id;return n._queue.push({event:"play",action:function(){n.play(u)}}),u}if(o&&!a._paused)return t||n._loadQueue("play"),a._id;n._webAudio&&r._autoResume();var d=Math.max(0,a._seek>0?a._seek:n._sprite[e][0]/1e3),_=Math.max(0,(n._sprite[e][0]+n._sprite[e][1])/1e3-d),l=1e3*_/Math.abs(a._rate);a._paused=!1,a._ended=!1,a._sprite=e,a._seek=d,a._start=n._sprite[e][0]/1e3,a._stop=(n._sprite[e][0]+n._sprite[e][1])/1e3,a._loop=!(!a._loop&&!n._sprite[e][2]);var c=a._node;if(n._webAudio){var p=function(){n._refreshBuffer(a);var e=a._muted||n._muted?0:a._volume;c.gain.setValueAtTime(e,r.ctx.currentTime),a._playStart=r.ctx.currentTime,void 0===c.bufferSource.start?a._loop?c.bufferSource.noteGrainOn(0,d,86400):c.bufferSource.noteGrainOn(0,d,_):a._loop?c.bufferSource.start(0,d,86400):c.bufferSource.start(0,d,_),l!==1/0&&(n._endTimers[a._id]=setTimeout(n._ended.bind(n,a),l)),t||setTimeout(function(){n._emit("play",a._id)},0)};"running"===r.state?p():(n.once("resume",p),n._clearTimer(a._id))}else{var h=function(){c.currentTime=d,c.muted=a._muted||n._muted||r._muted||c.muted,c.volume=a._volume*r.volume(),c.playbackRate=a._rate;try{var o=c.play();if("undefined"!=typeof Promise&&o instanceof Promise){n._playLock=!0;var i=function(){n._playLock=!1,t||n._emit("play",a._id)};o.then(i,i)}else t||n._emit("play",a._id);if(c.paused)return void n._emit("playerror",a._id,"Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.");"__default"!==e?n._endTimers[a._id]=setTimeout(n._ended.bind(n,a),l):(n._endTimers[a._id]=function(){n._ended(a),c.removeEventListener("ended",n._endTimers[a._id],!1)},c.addEventListener("ended",n._endTimers[a._id],!1))}catch(e){n._emit("playerror",a._id,e)}},f=window&&window.ejecta||!c.readyState&&r._navigator.isCocoonJS;if(c.readyState>=3||f)h();else{var m=function(){h(),c.removeEventListener(r._canPlayEvent,m,!1)};c.addEventListener(r._canPlayEvent,m,!1),n._clearTimer(a._id)}}return a._id},pause:function(e){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t;for(var n=t._getSoundIds(e),o=0;o<n.length;o++){t._clearTimer(n[o]);var i=t._soundById(n[o]);if(i&&!i._paused&&(i._seek=t.seek(n[o]),i._rateSeek=0,i._paused=!0,t._stopFade(n[o]),i._node))if(t._webAudio){if(!i._node.bufferSource)continue;void 0===i._node.bufferSource.stop?i._node.bufferSource.noteOff(0):i._node.bufferSource.stop(0),t._cleanBuffer(i._node)}else isNaN(i._node.duration)&&i._node.duration!==1/0||i._node.pause();arguments[1]||t._emit("pause",i?i._id:null)}return t},stop:function(e,t){var n=this;if("loaded"!==n._state)return n._queue.push({event:"stop",action:function(){n.stop(e)}}),n;for(var o=n._getSoundIds(e),i=0;i<o.length;i++){n._clearTimer(o[i]);var r=n._soundById(o[i]);r&&(r._seek=r._start||0,r._rateSeek=0,r._paused=!0,r._ended=!0,n._stopFade(o[i]),r._node&&(n._webAudio?r._node.bufferSource&&(void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)):isNaN(r._node.duration)&&r._node.duration!==1/0||(r._node.currentTime=r._start||0,r._node.pause())),t||n._emit("stop",r._id))}return n},mute:function(e,t){var n=this;if("loaded"!==n._state)return n._queue.push({event:"mute",action:function(){n.mute(e,t)}}),n;if(void 0===t){if("boolean"!=typeof e)return n._muted;n._muted=e}for(var o=n._getSoundIds(t),i=0;i<o.length;i++){var s=n._soundById(o[i]);s&&(s._muted=e,s._interval&&n._stopFade(s._id),n._webAudio&&s._node?s._node.gain.setValueAtTime(e?0:s._volume,r.ctx.currentTime):s._node&&(s._node.muted=!!r._muted||e),n._emit("mute",s._id))}return n},volume:function(){var e,t,n,o=this,i=arguments;if(0===i.length)return o._volume;if(1===i.length||2===i.length&&void 0===i[1]?o._getSoundIds().indexOf(i[0])>=0?t=parseInt(i[0],10):e=parseFloat(i[0]):i.length>=2&&(e=parseFloat(i[0]),t=parseInt(i[1],10)),!(void 0!==e&&e>=0&&e<=1))return(n=t?o._soundById(t):o._sounds[0])?n._volume:0;if("loaded"!==o._state)return o._queue.push({event:"volume",action:function(){o.volume.apply(o,i)}}),o;void 0===t&&(o._volume=e),t=o._getSoundIds(t);for(var s=0;s<t.length;s++)(n=o._soundById(t[s]))&&(n._volume=e,i[2]||o._stopFade(t[s]),o._webAudio&&n._node&&!n._muted?n._node.gain.setValueAtTime(e,r.ctx.currentTime):n._node&&!n._muted&&(n._node.volume=e*r.volume()),o._emit("volume",n._id));return o},fade:function(e,t,n,o){var i=this;if("loaded"!==i._state)return i._queue.push({event:"fade",action:function(){i.fade(e,t,n,o)}}),i;i.volume(e,o);for(var s=i._getSoundIds(o),a=0;a<s.length;a++){var u=i._soundById(s[a]);if(u){if(o||i._stopFade(s[a]),i._webAudio&&!u._muted){var d=r.ctx.currentTime,_=d+n/1e3;u._volume=e,u._node.gain.setValueAtTime(e,d),u._node.gain.linearRampToValueAtTime(t,_)}i._startFadeInterval(u,e,t,n,s[a],void 0===o)}}return i},_startFadeInterval:function(e,t,n,o,i,r){var s=this,a=t,u=n-t,d=Math.abs(u/.01),_=Math.max(4,d>0?o/d:o),l=Date.now();e._fadeTo=n,e._interval=setInterval(function(){var i=(Date.now()-l)/o;l=Date.now(),a+=u*i,a=Math.max(0,a),a=Math.min(1,a),a=Math.round(100*a)/100,s._webAudio?e._volume=a:s.volume(a,e._id,!0),r&&(s._volume=a),(n<t&&a<=n||n>t&&a>=n)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,s.volume(n,e._id),s._emit("fade",e._id))},_)},_stopFade:function(e){var t=this._soundById(e);return t&&t._interval&&(this._webAudio&&t._node.gain.cancelScheduledValues(r.ctx.currentTime),clearInterval(t._interval),t._interval=null,this.volume(t._fadeTo,e),t._fadeTo=null,this._emit("fade",e)),this},loop:function(){var e,t,n,o=arguments;if(0===o.length)return this._loop;if(1===o.length){if("boolean"!=typeof o[0])return!!(n=this._soundById(parseInt(o[0],10)))&&n._loop;e=o[0],this._loop=e}else 2===o.length&&(e=o[0],t=parseInt(o[1],10));for(var i=this._getSoundIds(t),r=0;r<i.length;r++)(n=this._soundById(i[r]))&&(n._loop=e,this._webAudio&&n._node&&n._node.bufferSource&&(n._node.bufferSource.loop=e,e&&(n._node.bufferSource.loopStart=n._start||0,n._node.bufferSource.loopEnd=n._stop)));return this},rate:function(){var e,t,n,o=this,i=arguments;if(0===i.length)t=o._sounds[0]._id;else if(1===i.length){o._getSoundIds().indexOf(i[0])>=0?t=parseInt(i[0],10):e=parseFloat(i[0])}else 2===i.length&&(e=parseFloat(i[0]),t=parseInt(i[1],10));if("number"!=typeof e)return(n=o._soundById(t))?n._rate:o._rate;if("loaded"!==o._state)return o._queue.push({event:"rate",action:function(){o.rate.apply(o,i)}}),o;void 0===t&&(o._rate=e),t=o._getSoundIds(t);for(var s=0;s<t.length;s++)if(n=o._soundById(t[s])){n._rateSeek=o.seek(t[s]),n._playStart=o._webAudio?r.ctx.currentTime:n._playStart,n._rate=e,o._webAudio&&n._node&&n._node.bufferSource?n._node.bufferSource.playbackRate.setValueAtTime(e,r.ctx.currentTime):n._node&&(n._node.playbackRate=e);var a=o.seek(t[s]),u=1e3*((o._sprite[n._sprite][0]+o._sprite[n._sprite][1])/1e3-a)/Math.abs(n._rate);!o._endTimers[t[s]]&&n._paused||(o._clearTimer(t[s]),o._endTimers[t[s]]=setTimeout(o._ended.bind(o,n),u)),o._emit("rate",n._id)}return o},seek:function(){var e,t,n=this,o=arguments;if(0===o.length)t=n._sounds[0]._id;else if(1===o.length){n._getSoundIds().indexOf(o[0])>=0?t=parseInt(o[0],10):n._sounds.length&&(t=n._sounds[0]._id,e=parseFloat(o[0]))}else 2===o.length&&(e=parseFloat(o[0]),t=parseInt(o[1],10));if(void 0===t)return n;if("loaded"!==n._state)return n._queue.push({event:"seek",action:function(){n.seek.apply(n,o)}}),n;var i=n._soundById(t);if(i){if(!("number"==typeof e&&e>=0)){if(n._webAudio){var s=n.playing(t)?r.ctx.currentTime-i._playStart:0,a=i._rateSeek?i._rateSeek-i._seek:0;return i._seek+(a+s*Math.abs(i._rate))}return i._node.currentTime}var u=n.playing(t);if(u&&n.pause(t,!0),i._seek=e,i._ended=!1,n._clearTimer(t),u&&n.play(t,!0),!n._webAudio&&i._node&&(i._node.currentTime=e),u&&!n._webAudio){var d=function(){n._playLock?setTimeout(d,0):n._emit("seek",t)};setTimeout(d,0)}else n._emit("seek",t)}return n},playing:function(e){if("number"==typeof e){var t=this._soundById(e);return!!t&&!t._paused}for(var n=0;n<this._sounds.length;n++)if(!this._sounds[n]._paused)return!0;return!1},duration:function(e){var t=this._duration,n=this._soundById(e);return n&&(t=this._sprite[n._sprite][1]/1e3),t},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,n=0;n<t.length;n++){if(t[n]._paused||e.stop(t[n]._id),!e._webAudio)/MSIE |Trident\//.test(r._navigator&&r._navigator.userAgent)||(t[n]._node.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),t[n]._node.removeEventListener("error",t[n]._errorFn,!1),t[n]._node.removeEventListener(r._canPlayEvent,t[n]._loadFn,!1);delete t[n]._node,e._clearTimer(t[n]._id);var o=r._howls.indexOf(e);o>=0&&r._howls.splice(o,1)}var i=!0;for(n=0;n<r._howls.length;n++)if(r._howls[n]._src===e._src){i=!1;break}return u&&i&&delete u[e._src],r.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,t,n,o){var i=this["_on"+e];return"function"==typeof t&&i.push(o?{id:n,fn:t,once:o}:{id:n,fn:t}),this},off:function(e,t,n){var o=this["_on"+e],i=0;if("number"==typeof t&&(n=t,t=null),t||n)for(i=0;i<o.length;i++){var r=n===o[i].id;if(t===o[i].fn&&r||!t&&r){o.splice(i,1);break}}else if(e)this["_on"+e]=[];else{var s=Object.keys(this);for(i=0;i<s.length;i++)0===s[i].indexOf("_on")&&Array.isArray(this[s[i]])&&(this[s[i]]=[])}return this},once:function(e,t,n){return this.on(e,t,n,1),this},_emit:function(e,t,n){for(var o=this["_on"+e],i=o.length-1;i>=0;i--)o[i].id&&o[i].id!==t&&"load"!==e||(setTimeout(function(e){e.call(this,t,n)}.bind(this,o[i].fn),0),o[i].once&&this.off(e,o[i].fn,o[i].id));return this._loadQueue(e),this},_loadQueue:function(e){if(this._queue.length>0){var t=this._queue[0];t.event===e&&(this._queue.shift(),this._loadQueue()),e||t.action()}return this},_ended:function(e){var t=e._sprite;if(!this._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(this._ended.bind(this,e),100),this;var n=!(!e._loop&&!this._sprite[t][2]);if(this._emit("end",e._id),!this._webAudio&&n&&this.stop(e._id,!0).play(e._id),this._webAudio&&n){this._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=r.ctx.currentTime;var o=1e3*(e._stop-e._start)/Math.abs(e._rate);this._endTimers[e._id]=setTimeout(this._ended.bind(this,e),o)}return this._webAudio&&!n&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,this._clearTimer(e._id),this._cleanBuffer(e._node),r._autoSuspend()),this._webAudio||n||this.stop(e._id),this},_clearTimer:function(e){if(this._endTimers[e]){if("function"!=typeof this._endTimers[e])clearTimeout(this._endTimers[e]);else{var t=this._soundById(e);t&&t._node&&t._node.removeEventListener("ended",this._endTimers[e],!1)}delete this._endTimers[e]}return this},_soundById:function(e){for(var t=0;t<this._sounds.length;t++)if(e===this._sounds[t]._id)return this._sounds[t];return null},_inactiveSound:function(){this._drain();for(var e=0;e<this._sounds.length;e++)if(this._sounds[e]._ended)return this._sounds[e].reset();return new a(this)},_drain:function(){var e=this._pool,t=0,n=0;if(!(this._sounds.length<e)){for(n=0;n<this._sounds.length;n++)this._sounds[n]._ended&&t++;for(n=this._sounds.length-1;n>=0;n--){if(t<=e)return;this._sounds[n]._ended&&(this._webAudio&&this._sounds[n]._node&&this._sounds[n]._node.disconnect(0),this._sounds.splice(n,1),t--)}}},_getSoundIds:function(e){if(void 0===e){for(var t=[],n=0;n<this._sounds.length;n++)t.push(this._sounds[n]._id);return t}return[e]},_refreshBuffer:function(e){return e._node.bufferSource=r.ctx.createBufferSource(),e._node.bufferSource.buffer=u[this._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,r.ctx.currentTime),this},_cleanBuffer:function(e){if(r._scratchBuffer){e.bufferSource.onended=null,e.bufferSource.disconnect(0);try{e.bufferSource.buffer=r._scratchBuffer}catch(e){}}return e.bufferSource=null,this}};var a=function(e){this._parent=e,this.init()};a.prototype={init:function(){var e=this._parent;return this._muted=e._muted,this._loop=e._loop,this._volume=e._volume,this._rate=e._rate,this._seek=0,this._paused=!0,this._ended=!0,this._sprite="__default",this._id=++r._counter,e._sounds.push(this),this.create(),this},create:function(){var e=this._parent,t=r._muted||this._muted||this._parent._muted?0:this._volume;return e._webAudio?(this._node=void 0===r.ctx.createGain?r.ctx.createGainNode():r.ctx.createGain(),this._node.gain.setValueAtTime(t,r.ctx.currentTime),this._node.paused=!0,this._node.connect(r.masterGain)):(this._node=new Audio,this._errorFn=this._errorListener.bind(this),this._node.addEventListener("error",this._errorFn,!1),this._loadFn=this._loadListener.bind(this),this._node.addEventListener(r._canPlayEvent,this._loadFn,!1),this._node.src=e._src,this._node.preload="auto",this._node.volume=t*r.volume(),this._node.load()),this},reset:function(){var e=this._parent;return this._muted=e._muted,this._loop=e._loop,this._volume=e._volume,this._rate=e._rate,this._seek=0,this._rateSeek=0,this._paused=!0,this._ended=!0,this._sprite="__default",this._id=++r._counter,this},_errorListener:function(){this._parent._emit("loaderror",this._id,this._node.error?this._node.error.code:0),this._node.removeEventListener("error",this._errorFn,!1)},_loadListener:function(){var e=this._parent;e._duration=Math.ceil(10*this._node.duration)/10,0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue()),this._node.removeEventListener(r._canPlayEvent,this._loadFn,!1)}};var u={},d=function(e){var t=e._src;if(u[t])return e._duration=u[t].duration,void c(e);if(/^data:[^;]+;base64,/.test(t)){for(var n=atob(t.split(",")[1]),o=new Uint8Array(n.length),i=0;i<n.length;++i)o[i]=n.charCodeAt(i);l(o.buffer,e)}else{var r=new XMLHttpRequest;r.open("GET",t,!0),r.withCredentials=e._xhrWithCredentials,r.responseType="arraybuffer",r.onload=function(){var t=(r.status+"")[0];"0"===t||"2"===t||"3"===t?l(r.response,e):e._emit("loaderror",null,"Failed loading audio file with status: "+r.status+".")},r.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete u[t],e.load())},_(r)}},_=function(e){try{e.send()}catch(t){e.onerror()}},l=function(e,t){r.ctx.decodeAudioData(e,function(e){e&&t._sounds.length>0&&(u[t._src]=e,c(t,e))},function(){t._emit("loaderror",null,"Decoding audio data failed.")})},c=function(e,t){t&&!e._duration&&(e._duration=t.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},p=function(){try{"undefined"!=typeof AudioContext?r.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?r.ctx=new webkitAudioContext:r.usingWebAudio=!1}catch(e){r.usingWebAudio=!1}var e=/iP(hone|od|ad)/.test(r._navigator&&r._navigator.platform),t=r._navigator&&r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),n=t?parseInt(t[1],10):null;if(e&&n&&n<9){var o=/safari/.test(r._navigator&&r._navigator.userAgent.toLowerCase());(r._navigator&&r._navigator.standalone&&!o||r._navigator&&!r._navigator.standalone&&!o)&&(r.usingWebAudio=!1)}r.usingWebAudio&&(r.masterGain=void 0===r.ctx.createGain?r.ctx.createGainNode():r.ctx.createGain(),r.masterGain.gain.setValueAtTime(r._muted?0:1,r.ctx.currentTime),r.masterGain.connect(r.ctx.destination)),r._setup()};void 0===(o=function(){return{Howler:r,Howl:s}}.apply(t,[]))||(e.exports=o),t.Howler=r,t.Howl=s,"undefined"!=typeof window?(window.HowlerGlobal=i,window.Howler=r,window.Howl=s,window.Sound=a):void 0!==n&&(n.HowlerGlobal=i,n.Howler=r,n.Howl=s,n.Sound=a)}(),
/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.0.9
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
function(){"use strict";var e;HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){if(!this.ctx||!this.ctx.listener)return this;for(var t=this._howls.length-1;t>=0;t--)this._howls[t].stereo(e);return this},HowlerGlobal.prototype.pos=function(e,t,n){return this.ctx&&this.ctx.listener?(t="number"!=typeof t?this._pos[1]:t,n="number"!=typeof n?this._pos[2]:n,"number"!=typeof e?this._pos:(this._pos=[e,t,n],this.ctx.listener.setPosition(this._pos[0],this._pos[1],this._pos[2]),this)):this},HowlerGlobal.prototype.orientation=function(e,t,n,o,i,r){if(!this.ctx||!this.ctx.listener)return this;var s=this._orientation;return t="number"!=typeof t?s[1]:t,n="number"!=typeof n?s[2]:n,o="number"!=typeof o?s[3]:o,i="number"!=typeof i?s[4]:i,r="number"!=typeof r?s[5]:r,"number"!=typeof e?s:(this._orientation=[e,t,n,o,i,r],this.ctx.listener.setOrientation(e,t,n,o,i,r),this)},Howl.prototype.init=(e=Howl.prototype.init,function(t){return this._orientation=t.orientation||[1,0,0],this._stereo=t.stereo||null,this._pos=t.pos||null,this._pannerAttr={coneInnerAngle:void 0!==t.coneInnerAngle?t.coneInnerAngle:360,coneOuterAngle:void 0!==t.coneOuterAngle?t.coneOuterAngle:360,coneOuterGain:void 0!==t.coneOuterGain?t.coneOuterGain:0,distanceModel:void 0!==t.distanceModel?t.distanceModel:"inverse",maxDistance:void 0!==t.maxDistance?t.maxDistance:1e4,panningModel:void 0!==t.panningModel?t.panningModel:"HRTF",refDistance:void 0!==t.refDistance?t.refDistance:1,rolloffFactor:void 0!==t.rolloffFactor?t.rolloffFactor:1},this._onstereo=t.onstereo?[{fn:t.onstereo}]:[],this._onpos=t.onpos?[{fn:t.onpos}]:[],this._onorientation=t.onorientation?[{fn:t.onorientation}]:[],e.call(this,t)}),Howl.prototype.stereo=function(e,n){var o=this;if(!o._webAudio)return o;if("loaded"!==o._state)return o._queue.push({event:"stereo",action:function(){o.stereo(e,n)}}),o;var i=void 0===Howler.ctx.createStereoPanner?"spatial":"stereo";if(void 0===n){if("number"!=typeof e)return o._stereo;o._stereo=e,o._pos=[e,0,0]}for(var r=o._getSoundIds(n),s=0;s<r.length;s++){var a=o._soundById(r[s]);if(a){if("number"!=typeof e)return a._stereo;a._stereo=e,a._pos=[e,0,0],a._node&&(a._pannerAttr.panningModel="equalpower",a._panner&&a._panner.pan||t(a,i),"spatial"===i?a._panner.setPosition(e,0,0):a._panner.pan.setValueAtTime(e,Howler.ctx.currentTime)),o._emit("stereo",a._id)}}return o},Howl.prototype.pos=function(e,n,o,i){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"pos",action:function(){r.pos(e,n,o,i)}}),r;if(n="number"!=typeof n?0:n,o="number"!=typeof o?-.5:o,void 0===i){if("number"!=typeof e)return r._pos;r._pos=[e,n,o]}for(var s=r._getSoundIds(i),a=0;a<s.length;a++){var u=r._soundById(s[a]);if(u){if("number"!=typeof e)return u._pos;u._pos=[e,n,o],u._node&&(u._panner&&!u._panner.pan||t(u,"spatial"),u._panner.setPosition(e,n,o)),r._emit("pos",u._id)}}return r},Howl.prototype.orientation=function(e,n,o,i){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"orientation",action:function(){r.orientation(e,n,o,i)}}),r;if(n="number"!=typeof n?r._orientation[1]:n,o="number"!=typeof o?r._orientation[2]:o,void 0===i){if("number"!=typeof e)return r._orientation;r._orientation=[e,n,o]}for(var s=r._getSoundIds(i),a=0;a<s.length;a++){var u=r._soundById(s[a]);if(u){if("number"!=typeof e)return u._orientation;u._orientation=[e,n,o],u._node&&(u._panner||(u._pos||(u._pos=r._pos||[0,0,-.5]),t(u,"spatial")),u._panner.setOrientation(e,n,o)),r._emit("orientation",u._id)}}return r},Howl.prototype.pannerAttr=function(){var e,n,o,i=arguments;if(!this._webAudio)return this;if(0===i.length)return this._pannerAttr;if(1===i.length){if("object"!=typeof i[0])return(o=this._soundById(parseInt(i[0],10)))?o._pannerAttr:this._pannerAttr;e=i[0],void 0===n&&(e.pannerAttr||(e.pannerAttr={coneInnerAngle:e.coneInnerAngle,coneOuterAngle:e.coneOuterAngle,coneOuterGain:e.coneOuterGain,distanceModel:e.distanceModel,maxDistance:e.maxDistance,refDistance:e.refDistance,rolloffFactor:e.rolloffFactor,panningModel:e.panningModel}),this._pannerAttr={coneInnerAngle:void 0!==e.pannerAttr.coneInnerAngle?e.pannerAttr.coneInnerAngle:this._coneInnerAngle,coneOuterAngle:void 0!==e.pannerAttr.coneOuterAngle?e.pannerAttr.coneOuterAngle:this._coneOuterAngle,coneOuterGain:void 0!==e.pannerAttr.coneOuterGain?e.pannerAttr.coneOuterGain:this._coneOuterGain,distanceModel:void 0!==e.pannerAttr.distanceModel?e.pannerAttr.distanceModel:this._distanceModel,maxDistance:void 0!==e.pannerAttr.maxDistance?e.pannerAttr.maxDistance:this._maxDistance,refDistance:void 0!==e.pannerAttr.refDistance?e.pannerAttr.refDistance:this._refDistance,rolloffFactor:void 0!==e.pannerAttr.rolloffFactor?e.pannerAttr.rolloffFactor:this._rolloffFactor,panningModel:void 0!==e.pannerAttr.panningModel?e.pannerAttr.panningModel:this._panningModel})}else 2===i.length&&(e=i[0],n=parseInt(i[1],10));for(var r=this._getSoundIds(n),s=0;s<r.length;s++)if(o=this._soundById(r[s])){var a=o._pannerAttr;a={coneInnerAngle:void 0!==e.coneInnerAngle?e.coneInnerAngle:a.coneInnerAngle,coneOuterAngle:void 0!==e.coneOuterAngle?e.coneOuterAngle:a.coneOuterAngle,coneOuterGain:void 0!==e.coneOuterGain?e.coneOuterGain:a.coneOuterGain,distanceModel:void 0!==e.distanceModel?e.distanceModel:a.distanceModel,maxDistance:void 0!==e.maxDistance?e.maxDistance:a.maxDistance,refDistance:void 0!==e.refDistance?e.refDistance:a.refDistance,rolloffFactor:void 0!==e.rolloffFactor?e.rolloffFactor:a.rolloffFactor,panningModel:void 0!==e.panningModel?e.panningModel:a.panningModel};var u=o._panner;u?(u.coneInnerAngle=a.coneInnerAngle,u.coneOuterAngle=a.coneOuterAngle,u.coneOuterGain=a.coneOuterGain,u.distanceModel=a.distanceModel,u.maxDistance=a.maxDistance,u.refDistance=a.refDistance,u.rolloffFactor=a.rolloffFactor,u.panningModel=a.panningModel):(o._pos||(o._pos=this._pos||[0,0,-.5]),t(o,"spatial"))}return this},Sound.prototype.init=function(e){return function(){var t=this._parent;this._orientation=t._orientation,this._stereo=t._stereo,this._pos=t._pos,this._pannerAttr=t._pannerAttr,e.call(this),this._stereo?t.stereo(this._stereo):this._pos&&t.pos(this._pos[0],this._pos[1],this._pos[2],this._id)}}(Sound.prototype.init),Sound.prototype.reset=function(e){return function(){var t=this._parent;return this._orientation=t._orientation,this._pos=t._pos,this._pannerAttr=t._pannerAttr,e.call(this)}}(Sound.prototype.reset);var t=function(e,t){"spatial"===(t=t||"spatial")?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.panningModel=e._pannerAttr.panningModel,e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.setValueAtTime(e._stereo,Howler.ctx.currentTime)),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id,!0)}}()}).call(this,n(2))},function(e,t,n){"use strict";n.r(t);var o=n(0);const i=768,r=432;var s=class{constructor(e){this.ctx=e,this.posX=100,this.posY=r-150,this.sizeX=113/1.5,this.sizeY=176/1.5,this.groundLevel=r-150,this.jumpVelocity=9,this.fallVelocity=9,this.maxJumpTime=25,this.onGround=!0,this.isRising=!1,this.isFalling=!1,this.timeRising=0,this.spaceBarDown=!1,this.numJumpsDone=0,this.johanSprite=new Image,this.johanSprite.src="./assets/player_sprite/johan_2.png",this.johanJump=new Image,this.johanJump.src="./assets/player_sprite/johan_jump.png",this.deathFlag=!1,this.callCount=0,this.frameCount=0}init(){document.addEventListener("keydown",e=>{32===e.keyCode&&(this.spaceBarDown=!0)}),document.addEventListener("keyup",e=>{32===e.keyCode&&(this.spaceBarDown=!1)})}calculateJump(){this.spaceBarDown?(!0===this.onGround&&0===this.numJumpsDone&&(this.isRising=!0,this.isFalling=!1,this.onGround=!1),this.timeRising<this.maxJumpTime&&0===this.numJumpsDone?(this.posY-=this.jumpVelocity,this.timeRising+=1):this.posY<this.groundLevel?(this.isRising=!1,this.isFalling=!0,this.onGround=!1,this.posY+=this.fallVelocity,this.numJumpsDone=1):this.posY===this.groundLevel&&(this.isRising=!1,this.isFalling=!1,this.onGround=!0,this.timeRising=0)):this.posY<this.groundLevel?(this.isRising=!1,this.isFalling=!0,this.onGround=!1,this.posY+=this.fallVelocity,this.numJumpsDone=1):this.posY===this.groundLevel&&(this.isRising=!1,this.isFalling=!1,this.onGround=!0,this.timeRising=0,this.numJumpsDone=0)}renderDeath(){console.log("placeholder")}renderJump(){let e=[this.johanJump,this.posX,this.posY,this.sizeX,this.sizeY];this.ctx.drawImage(...e)}renderRun(){this.callCount%1==0&&this.frameCount++;let e=this.frameCount%42,t=e%6,n=parseInt(e/6),o=[this.johanSprite,113*t,176*n,113,176,this.posX,this.posY,this.sizeX,this.sizeY];this.ctx.drawImage(...o)}render(){if(this.deathFlag)return renderDeath();this.callCount++,this.calculateJump(),!1===this.onGround?this.renderJump():this.renderRun(),42e3===this.frameCount&&(this.frameCount=0)}};var a=class{constructor(){this.canvasGame=document.querySelector("#canvas-game"),this.gameCtx=this.canvasGame.getContext("2d"),this.johan=new s(this.gameCtx),this.johan.init()}init(){this.render()}render(){this.gameCtx.clearRect(0,0,i,r),this.johan.render(),window.requestAnimationFrame(this.render.bind(this))}};new o.Howl({autoplay:!0,loop:!0,src:"./assets/sound/bensound-epic.mp3"});document.addEventListener("DOMContentLoaded",()=>{(new a).init()})},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);