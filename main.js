/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(t,e){var r=e.textContent;e.textContent=t?r+"...":r.slice(0,r.length-3)}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function t(e,r){var n=e.data,o=e.handleCardClick,i=e.handleDeleteCard,u=e.handleLikeClick,a=e.userId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardsData=n,this._name=n.name,this._link=n.link,this._handleCardClick=o,this._handleDeleteCard=i,this._template=r,this._handleCardLike=u,this._userId=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".gallery__item").cloneNode(!0)}},{key:"_setListener",value:function(){var t=this;return this._card.querySelector(".gallery__delete").addEventListener("click",(function(){t._handleDeleteCard(t._card,t._cardsData)})),this._galleryImage.addEventListener("click",(function(){return t._handleCardClick({name:t._name,link:t._link})})),this._buttonLike.addEventListener("click",(function(){return t._handleCardLike(t)})),this._card}},{key:"updateLikesData",value:function(t,e){t.find((function(t){return"26d399721e24ac5ac294ce39"===t._id}))&&this._checkLike(t),e.querySelector(".gallery__like-count").textContent=t.length}},{key:"_checkLike",value:function(t){t?this._buttonLike.classList.add("gallery__like_active"):this._buttonLike.classList.remove("gallery__like_active")}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._galleryName=this._card.querySelector(".gallery__title"),this._galleryImage=this._card.querySelector(".gallery__image"),this._galleryImage.setAttribute("src",this._link),this._galleryImage.setAttribute("alt",this._name),this._galleryName.textContent=this._name,this._buttonLike=this._card.querySelector(".gallery__like"),this._card=this._setListener(),this._card}},{key:"check",value:function(t,e){"26d399721e24ac5ac294ce39"!==e.owner._id&&t.querySelector(".gallery__delete").remove()}},{key:"like",value:function(t,e){this._cardsData=e,this._card.querySelector(".gallery__like-count").textContent=this._cardsData.likes.length,this._checkLike(t)}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var u=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formData=e,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._formData.inputSelector)),this._button=this._formElement.querySelector(this._formData.submitButtonSelector)}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t){this._errorElement=this._formElement.querySelector(".form__".concat(t.id,"-error")),this._error=t.classList.add(this._formData.inputError),this._errorElement.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){this._errorElement=this._formElement.querySelector(".form__".concat(t.id,"-error")),t.classList.remove(this._formData.inputError),this._errorElement.textContent=""}},{key:"checkButton",value:function(){this._check=this._inputList.every((function(t){return t.validity.valid})),this._check?(this._button.removeAttribute("disabled"),this._button.classList.remove(this._formData.inactiveButtonClass)):(this._button.setAttribute("disabled",!0),this._button.classList.add(this._formData.inactiveButtonClass))}},{key:"hideInputsErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_checkInputValidation",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_setEventListeners",value:function(){var t=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t.checkButton(t._inputList)})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidation(e),t.checkButton(t._inputList)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var l=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._selector=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._selector.prepend(t)}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__button-close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){e.currentTarget===e.target&&t.close()}))}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},d.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(n);if(o){var r=m(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImageSelector=e._popup.querySelector(".popup__image"),e._popupImageTitle=e._popup.querySelector(".popup-image__title"),e}return e=u,(r=[{key:"open",value:function(t){this._popupImageTitle.textContent=t.name,this._popupImageSelector.src=t.link,this._popupImageSelector.setAttribute("alt",t.name),d(m(u.prototype),"open",this).call(this)}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},w.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._handleFormSubmit=t,r._form=r._popup.querySelector(".popup__form"),r._inputList=Array.from(r._popup.querySelectorAll(".popup__input")),r._buttonSubmit=r._form.querySelector(".popup__button"),r}return e=u,(r=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues(),t._buttonSubmit)})),w(S(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){w(S(u.prototype),"close",this).call(this),this._form.reset()}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===L(o)?o:String(o)),n)}var o}var j=function(){function t(e){var r=e.userNameSelector,n=e.userAboutSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(r),this._userAbout=document.querySelector(n)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userAbout.textContent}}},{key:"setUserInfo",value:function(t){var e=t.userName,r=t.userAbout;e&&r&&(this._userName.textContent=e,this._userAbout.textContent=r)}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function C(){C=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,u=Object.create(i.prototype),a=new L(o||[]);return n(u,"_invoke",{value:w(t,r,a)}),u}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function h(){}function y(){}var d={};c(d,i,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(O([])));m&&m!==e&&r.call(m,i)&&(d=m);var b=y.prototype=p.prototype=Object.create(d);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function o(n,i,u,a){var c=s(t[n],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==P(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,u,a)}),(function(t){o("throw",t,u,a)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,a)}))}a(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=k(u,r);if(a){if(a===f)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=y,n(b,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:h,configurable:!0}),h.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(g.prototype),c(g.prototype,u,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var u=new g(l(e,r,n,o),i);return t.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},_(b),c(b,a,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return u.type="throw",u.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function x(t,e,r,n,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}function D(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(t){x(i,n,o,u,a,"next",t)}function a(t){x(i,n,o,u,a,"throw",t)}u(void 0)}))}}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===P(o)?o:String(o)),n)}var o}var I=function(){function t(e){var r=e.baseUrl,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=r,this._header=n}var e,r,n,o,i,u,a,c,l;return e=t,r=[{key:"_checkData",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getLikes",value:(l=D(C().mark((function t(e,r){var n=this;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(this._url,"cards/").concat(r,"/likes"),{method:e,headers:this._header}).then((function(t){return n._checkData(t)})));case 1:case"end":return t.stop()}}),t,this)}))),function(t,e){return l.apply(this,arguments)})},{key:"getInitialCards",value:(c=D(C().mark((function t(){var e=this;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(this._url+"cards",{headers:this._header}).then((function(t){return e._checkData(t)})));case 1:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},{key:"addNewCard",value:(a=D(C().mark((function t(e){var r=this;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(this._url+"cards ",{method:"POST",headers:this._header,body:JSON.stringify({name:e.name,link:e.link})}).then((function(t){return r._checkData(t)})));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return a.apply(this,arguments)})},{key:"getUserData",value:(u=D(C().mark((function t(){var e=this;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(this._url+"/users/me",{method:"GET",headers:this._header}).then((function(t){return e._checkData(t)})));case 1:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)})},{key:"editUser",value:(i=D(C().mark((function t(e,r){var n=this;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch(this._url+"/users/me",{method:"PATCH",headers:this._header,body:JSON.stringify({name:e,about:r})}).then((function(t){return n._checkData(t)}));case 1:case"end":return t.stop()}}),t,this)}))),function(t,e){return i.apply(this,arguments)})},{key:"setUserLogo",value:(o=D(C().mark((function t(e){var r=this;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._header,body:JSON.stringify({avatar:e})}).then((function(t){return r._checkData(t)}));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"deleteCard",value:(n=D(C().mark((function t(e){var r=this;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch(this._url+"cards/"+e,{method:"DELETE",headers:this._header}).then((function(t){return r._checkData(t)}));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})}],r&&T(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),q={formSelector:".form",inputSelector:".popup__input",inputName:".form__input-first",inputRole:".form__input-second",inputError:"popup__input-error",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled"};function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},A.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}var F,G=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(n);if(o){var r=U(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._handleFormSubmit=t,r._form=r._popup.querySelector(".popup__form"),r}return e=u,(r=[{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("click",(function(e){e.preventDefault(),t._handleFormSubmit(t._cardData,t._cardApi)})),A(U(u.prototype),"setEventListeners",this).call(this)}},{key:"getData",value:function(t,e){this._cardData=t,this._cardApi=e}}])&&N(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p),V=document.forms["profile-form"],J=document.forms["create-form"],H=document.forms["avatar-form"],Y=document.querySelector(".profile__edit"),z=document.querySelector(".popup__username"),M=document.querySelector(".popup__role"),K=document.querySelector(".profile__add"),Q=document.querySelector(".profile__image"),W=document.querySelector(".profile__avatar-button"),X=new G((function(t,e){nt.deleteCard(e._id).then((function(){t.remove(),X.close()})).catch((function(t){console.log(t)}))}),".popup-confirm"),Z=new E((function(e,r){t(!0,r),nt.addNewCard(e).then((function(t){ot.addItem(it(t)),Z.close()})).catch((function(t){console.log(t)})).finally((function(){t(!1,r)}))}),".popup-create"),$=new E((function(e,r){t(!0,r),nt.editUser(e.name,e.link).then((function(){et.setUserInfo({userName:e.name,userAbout:e.link}),$.close()})).catch((function(t){console.log(t.status)})).finally((function(){t(!1,r)}))}),".profile-popup"),tt=new E((function(t){nt.setUserLogo(t.text).then((function(){Q.src=t.text,tt.close()})).catch((function(t){console.log(t)}))}),".popup-avatar"),et=new j({userNameSelector:".profile__name",userAboutSelector:".profile__role"}),rt=new b(".popup-image"),nt=new I({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65/",headers:{authorization:"6b7c306a-38f3-4456-bb25-4b5474285830","Content-Type":"application/json"}}),ot=new l({renderer:function(t){var e=it(t);ot.addItem(e)}},".gallery");function it(t){var e=function(t){return new n({data:t,handleCardClick:function(t){rt.open(t)},handleDeleteCard:at,handleLikeClick:ut,userId:F},"#gallery-template")}(t),r=e.generateCard();return e.check(r,t),e.updateLikesData(t.likes,r),r}W.addEventListener("click",(function(){tt.open(),st.hideInputsErrors(),st.checkButton()})),K.addEventListener("click",(function(){Z.open(),lt.hideInputsErrors(),lt.checkButton()})),Y.addEventListener("click",(function(){$.open();var t=et.getUserInfo();z.value=t.name,M.value=t.about,ct.hideInputsErrors()}));var ut=function(t){t._cardsData.likes.find((function(t){return t._id===F}))?nt.getLikes("DELETE",t._cardsData._id).then((function(e){t.like(!1,e)})).catch((function(t){console.log(t)})):nt.getLikes("PUT",t._cardsData._id).then((function(e){t.like(!0,e)})).catch((function(t){console.log(t)}))};function at(t,e){X.getData(t,e),X.open()}var ct=new u(q,V),lt=new u(q,J),st=new u(q,H);ct.enableValidation(),lt.enableValidation(),st.enableValidation(),Promise.all([nt.getUserData(),nt.getInitialCards()]).then((function(t){et.setUserInfo({userName:t[0].name,userAbout:t[0].about}),Q.src=t[0].avatar,F=t[0]._id,ot.renderItems(t[1])})).catch((function(t){console.log(t)})),X.setEventListeners(),$.setEventListeners(),Z.setEventListeners(),tt.setEventListeners(),rt.setEventListeners()})();