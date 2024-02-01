(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./assets/js/animate.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}var Animate=function(){function Animate(){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Animate)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Animate,[{key:"start",value:function start(_ref){var duration=_ref.duration,timing=_ref.timing,draw=_ref.draw,begin=performance.now();this.requestId;var scope=this;this.requestId=requestAnimationFrame((function animate(time){var timeFraction=(time-begin)/duration;timeFraction>1&&(timeFraction=1);var progress=timing(timeFraction);draw(progress),timeFraction<1&&(scope.requestId=requestAnimationFrame(animate))}))}},{key:"pause",value:function pause(){cancelAnimationFrame(this.requestId)}}]),Animate}();Animate.easing={linear:function linear(timeFraction){return timeFraction},easeInOutCubic:function easeInOutCubic(timeFraction){return timeFraction<.5?4*timeFraction*timeFraction*timeFraction:1-Math.pow(-2*timeFraction+2,3)/2}},__webpack_exports__.a=Animate},"./assets/js/toggle-switch.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.array.some.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-float.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _animate_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./assets/js/animate.js"),_state_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./assets/js/state.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}var ToggleSwitch=function(){function ToggleSwitch(root){var _this$root$querySelec;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ToggleSwitch),this.root=root,this.targetSelector=".js-toggle-switch",this.target=this.root.querySelector(this.targetSelector),this.duration=400,this.parsePricingData=null===(_this$root$querySelec=this.root.querySelector("[data-pricing]"))||void 0===_this$root$querySelec?void 0:_this$root$querySelec.dataset.pricing,this.bindEvents(),this.initPrices()}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ToggleSwitch,[{key:"getTargetSelectors",value:function getTargetSelectors(element){for(var selectorArray=JSON.parse(element.dataset.toggleSwitchOptions).targetSelector.split(","),selectors=[],i=0;i<selectorArray.length;i++){var targetSelector=selectorArray[i].replace(/\s/g,"");selectors.push(targetSelector)}return selectors}},{key:"handleChange",value:function handleChange(e){for(var _this=this,switchElement=e.currentTarget,state=switchElement.checked,selectorArray=JSON.parse(switchElement.dataset.toggleSwitchOptions).targetSelector.split(","),pricingSwitch=selectorArray.some((function(x){return x.includes("pricing")})),i=0;i<selectorArray.length;i++){var targetSelector=selectorArray[i].replace(/\s/g,"");this.switchData(targetSelector,state,pricingSwitch)}[].forEach.call(document.querySelectorAll("[data-alternative-href]"),(function(element){_this.switchButtonHrefs(element,state)}))}},{key:"switchButtonHrefs",value:function switchButtonHrefs(element,state){element.dataset.originalHref||(element.dataset.originalHref=element.href),element.href=state?element.dataset.originalHref:element.dataset.alternativeHref}},{key:"pricingData",value:function pricingData(){return this.parsePricingData?JSON.parse(this.parsePricingData):{format:"de-DE",currency:"EUR",defaultPlan:"monthly"}}},{key:"priceFormatter",value:function priceFormatter(){var pricingData=this.pricingData();return new Intl.NumberFormat(pricingData.format,{style:"currency",currency:pricingData.currency,maximumFractionDigits:2})}},{key:"switchAnimation",value:function switchAnimation(element,start,end){var _this2=this;(new _animate_js__WEBPACK_IMPORTED_MODULE_18__.a).start({duration:this.duration,timing:_animate_js__WEBPACK_IMPORTED_MODULE_18__.a.easing.easeInOutCubic,draw:function draw(progress){var currentResult=progress*(end-start)+start;_this2.updatePrices(element,currentResult)}})}},{key:"updatePrices",value:function updatePrices(element,state){var cleanedValue=state.replace?parseFloat(state.replace(/,/,".")):state,formattedResult=this.priceFormatter().format(cleanedValue);element.innerHTML=formattedResult}},{key:"initPrices",value:function initPrices(){var _this3=this;this.getTargetSelectors(this.target).forEach((function(selector){document.querySelectorAll(selector).forEach((function(element){_this3.updatePrices(element,element.innerHTML)}))}))}},{key:"switchData",value:function switchData(element,state,pricingSwitch){for(var targetElements=document.querySelectorAll(element),i=0;i<targetElements.length;i++){var currentTarget=targetElements[i];pricingSwitch?this.handlePriceSwitch(currentTarget,state):this.handleForms(currentTarget,element)}}},{key:"handlePriceSwitch",value:function handlePriceSwitch(currentTarget,state){var options=JSON.parse(currentTarget.dataset.toggleSwitchItemOptions),start=state?options.monthly:options.annual,end=state?options.annual:options.monthly;this.switchAnimation(currentTarget,start,end)}},{key:"handleForms",value:function handleForms(currentTarget,element){var visible=currentTarget.className.includes(_state_js__WEBPACK_IMPORTED_MODULE_19__.a.HIDDEN),elementWithoutPoint=element.startsWith(".")?element.substring(1):element;currentTarget.className=elementWithoutPoint+" "+(visible?"":_state_js__WEBPACK_IMPORTED_MODULE_19__.a.HIDDEN)}},{key:"bindEvents",value:function bindEvents(){this.target.addEventListener("change",this.handleChange.bind(this))}}],[{key:"init",value:function init(){var _this4=this;this.instances=[],[].forEach.call(document.querySelectorAll(this.rootSelector),(function(element){_this4.instances.push(new _this4(element))}))}}]),ToggleSwitch}();ToggleSwitch.rootSelector=".toggle-switch",__webpack_exports__.default=ToggleSwitch}}]);