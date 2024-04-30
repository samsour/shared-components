"use strict";(self.webpackChunkshared_components=self.webpackChunkshared_components||[]).push([[2889],{"./assets/js/components/pricing-slider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _base_component_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./assets/js/components/base-component.js"),_modal_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./assets/js/modal.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _classCallCheck(instance,Constructor){if(!function _instanceof(left,right){return null!=right&&"undefined"!=typeof Symbol&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right}(instance,Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _callSuper(t,o,e){return o=_getPrototypeOf(o),function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var PricingSlider=function(_BaseComponent){function PricingSlider(root,options){var _document$querySelect,_this;_classCallCheck(this,PricingSlider),(_this=_callSuper(this,PricingSlider,[root,options])).selectedValue=0,_this.products=null,_this.range=null;var parsePricingData=null===(_document$querySelect=document.querySelector("[data-pricing]"))||void 0===_document$querySelect?void 0:_document$querySelect.dataset.pricing,pricingData=parsePricingData?JSON.parse(parsePricingData):{format:"de-DE",currency:"EUR",defaultPlan:"monthly"};return _this.priceFormatter=new Intl.NumberFormat(pricingData.format,{style:"currency",currency:pricingData.currency,maximumFractionDigits:0}),_this.selectedPlan=["monthly","annual"].includes(pricingData.defaultPlan)?pricingData.defaultPlan:console.error('Please provide a valid plan in site.data.products.pricing.defaultPlan: "annual" or "monthly"!'),_this.currentPrice=0,_this.init(),_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(PricingSlider,_BaseComponent),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(PricingSlider,[{key:"init",value:function init(){if(window.handleChange)return console.error("remove handleChange from app.js");this.bindEvents()}},{key:"bindEvents",value:function bindEvents(){var info=this.root.querySelector(".pricing-slider__info");info&&info.addEventListener("click",this.handleInfoClick.bind(this)),window.handleChange=this.handlePricingSlider.bind(this),window.fixSliderText=this.fixText.bind(this),window.prepareSlider=this.prepare.bind(this)}},{key:"handleInfoClick",value:function handleInfoClick(){var modal=this.root.querySelector(".pricing-slider__modal");_modal_js__WEBPACK_IMPORTED_MODULE_1__.default.open(modal)}},{key:"handlePricingSlider",value:function handlePricingSlider(_ref){var from=_ref.from;this.selectedValue=parseInt(from);var product=this.getRecommendedProduct(this.selectedValue);if(product){var extraUsers=this.selectedValue-product.value,price=parseInt(product.price[this.selectedPlan])+extraUsers*parseFloat(product.additionalUsersFee[this.selectedPlan]);this.currentPrice=price,this.updateElements(this.priceFormatter.format(price),product.title,this.formatExtraUsers(extraUsers))}}},{key:"getRecommendedProduct",value:function getRecommendedProduct(selectedValue){var recommendedProduct=null,errorMessage="No products found for value ".concat(selectedValue," in site.data.products.list");if(this.products)return this.products.forEach((function(product){product.value<=selectedValue&&(recommendedProduct=product)})),recommendedProduct||console.error(errorMessage),recommendedProduct;console.error(errorMessage)}},{key:"formatExtraUsers",value:function formatExtraUsers(extraUsers){var unit=this.range.unit;return extraUsers>0?"+ "+extraUsers+" "+unit:""}},{key:"prepare",value:function prepare(slider){var _this2=this,dataElement=document.querySelector(".js-slider-data");this.products=JSON.parse(dataElement.dataset.products),this.range=JSON.parse(dataElement.dataset.range),this.selectedValue=slider.from,setTimeout((function(){_this2.fixText()}),5)}},{key:"fixText",value:function fixText(){var sliderTextElement=document.querySelector(".irs-single"),currentSliderContent=sliderTextElement.innerHTML;currentSliderContent.includes(this.range.unit)||(sliderTextElement.innerHTML=[currentSliderContent,this.range.unit].join(" "))}},{key:"updateElements",value:function updateElements(price,product,extra){var priceElement=document.querySelector(".js-result-price"),productElement=document.querySelector(".js-result-product"),extraElement=document.querySelector(".js-result-extra");priceElement.innerHTML=price,productElement.innerHTML=product,extraElement.innerHTML=extra,this.fixText()}}])}(_base_component_js__WEBPACK_IMPORTED_MODULE_0__.A);!function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(PricingSlider,"rootSelector",".pricing-slider");const __WEBPACK_DEFAULT_EXPORT__=PricingSlider}}]);