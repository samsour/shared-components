(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./assets/js/data-an.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _tools_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./assets/js/tools.js"),_components_form_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./assets/js/components/form.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Analytics=function(){function Analytics(root){var _this$formInstance;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Analytics),this.root=root,this.code=this.root.dataset.analytics,this.parent=_tools_js__WEBPACK_IMPORTED_MODULE_4__.a.getParent(this.root,_components_form_js__WEBPACK_IMPORTED_MODULE_5__.default.rootSelector),this.formInstance=_components_form_js__WEBPACK_IMPORTED_MODULE_5__.default.initElement(this.parent,{noEvents:!0}),this.form=null===(_this$formInstance=this.formInstance)||void 0===_this$formInstance?void 0:_this$formInstance.form,this.bindEvents()}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Analytics,[{key:"isInForm",value:function isInForm(){return!!this.form}},{key:"bindEvents",value:function bindEvents(){var _this$form;this.isInForm()?null===(_this$form=this.form)||void 0===_this$form||_this$form.addEventListener("submit",this.handleSubmit.bind(this)):this.root.addEventListener("click",this.handleClick.bind(this))}},{key:"handleClick",value:function handleClick(){this.track(void 0,(function(){}))}},{key:"handleSubmit",value:function handleSubmit(e){var _this=this;e.stopImmediatePropagation(),e.preventDefault(),this.isFormValidated(e)&&this.track(void 0,(function(){_this.form.submit()}))}},{key:"isFormValidated",value:function isFormValidated(e){var _this$formInstance2;return(null===(_this$formInstance2=this.formInstance)||void 0===_this$formInstance2?void 0:_this$formInstance2.validate(e))&&this.formInstance.triggerExternalValidation()}},{key:"track",value:function track(url,callback){Analytics.track(this.code,callback,url)}}],[{key:"isGALoaded",value:function isGALoaded(){return dataLayer.filter((function(item){return"gtm.dom"===item.event})).length>0}},{key:"track",value:function track(code,callback,url){window.gtag&&code&&Analytics.isGALoaded()?window.gtag("event","conversion",{send_to:code,event_callback:callback}):(console.error("GTag not found or Collect not loaded"),callback())}},{key:"init",value:function init(){var _this2=this;this.instances=[],[].forEach.call(document.querySelectorAll(this.rootSelector),(function(element){_this2.instances.push(new _this2(element))}))}}]),Analytics}();Analytics.rootSelector="[data-analytics]",Analytics.instances=[],__webpack_exports__.default=Analytics}}]);