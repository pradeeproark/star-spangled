(self.webpackChunkstar_spangled=self.webpackChunkstar_spangled||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/components/AdjustableNumber/AdjustableNumber.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultAdjustableNumber:()=>DefaultAdjustableNumber,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _AdjustableNumber__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/AdjustableNumber/AdjustableNumber.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"AdjustableNumber",component:_AdjustableNumber__WEBPACK_IMPORTED_MODULE_3__.Z,argTypes:{displayNumber:{control:{type:"number"}},displayMode:{control:"radio",options:[_AdjustableNumber__WEBPACK_IMPORTED_MODULE_3__.x.DISPLAY,_AdjustableNumber__WEBPACK_IMPORTED_MODULE_3__.x.EDIT],defaultValue:_AdjustableNumber__WEBPACK_IMPORTED_MODULE_3__.x.DISPLAY},varName:{control:"text"}}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AdjustableNumber__WEBPACK_IMPORTED_MODULE_3__.Z,Object.assign({},args))};Template.displayName="Template";var DefaultAdjustableNumber=Template.bind({});DefaultAdjustableNumber.parameters=Object.assign({storySource:{source:"(args : JSX.IntrinsicAttributes & AdjustableNumberProps) => <AdjustableNumber {...args}/>"}},DefaultAdjustableNumber.parameters);var __namedExportsOrder=["DefaultAdjustableNumber"]},"./src/components/Expression/Expression.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultExpression:()=>DefaultExpression,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _Expression__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Expression/Expression.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Expression",component:_Expression__WEBPACK_IMPORTED_MODULE_3__.Z,argTypes:{expression:{control:{type:"text"},defaultValue:"2+2"}}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Expression__WEBPACK_IMPORTED_MODULE_3__.Z,Object.assign({},args))};Template.displayName="Template";var DefaultExpression=Template.bind({});DefaultExpression.parameters=Object.assign({storySource:{source:"(args) => <Expression {...args}></Expression>"}},DefaultExpression.parameters);var __namedExportsOrder=["DefaultExpression"]},"./src/components/Spangled/Spangled.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultSpangled:()=>DefaultSpangled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Spangled_stories});__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),AdjustableNumber=__webpack_require__("./src/components/AdjustableNumber/AdjustableNumber.tsx"),Expression=__webpack_require__("./src/components/Expression/Expression.tsx"),Common=(__webpack_require__("./node_modules/core-js/modules/es.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./src/interfaces/Common.ts")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Spangled=function Spangled(props){var _useState2=_slicedToArray((0,react.useState)(new Map),2),vars=_useState2[0],setVars=_useState2[1];return(0,jsx_runtime.jsx)(Common.Q.Provider,{value:{vars,updateVars:function updateVars(k,v){setVars(new Map(vars.set(k,v)))}},children:(0,jsx_runtime.jsx)("span",{"data-testid":"spangled",children:props.children})})};Spangled.displayName="Spangled";const Spangled_Spangled=Spangled;try{Spangled.displayName="Spangled",Spangled.__docgenInfo={description:"",displayName:"Spangled",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spangled/Spangled.tsx#Spangled"]={docgenInfo:Spangled.__docgenInfo,name:"Spangled",path:"src/components/Spangled/Spangled.tsx#Spangled"})}catch(__react_docgen_typescript_loader_error){}const Spangled_stories={title:"Spangled",component:Spangled_Spangled};var Template=function Template(){return(0,jsx_runtime.jsx)(Spangled_Spangled,{children:(0,jsx_runtime.jsxs)("p",{children:["When you eat ",(0,jsx_runtime.jsx)(AdjustableNumber.Z,{varName:"cookies",displayNumber:3})," ","cookies, you consume ",(0,jsx_runtime.jsx)(Expression.Z,{expression:"100*cookies"})," calories. That's ",(0,jsx_runtime.jsx)(Expression.Z,{expression:"((100*cookies)/2000) * 100"}),"% of your recommended daily calories."]})})};Template.displayName="Template";var DefaultSpangled=Template.bind({});DefaultSpangled.parameters=Object.assign({storySource:{source:'() => (\n  <Spangled>\n    <p>\n      When you eat <AdjustableNumber varName="cookies" displayNumber={3} />{" "}\n      cookies, you consume <Expression expression="100*cookies" /> calories.\n      That\'s <Expression expression="((100*cookies)/2000) * 100" />% of your\n      recommended daily calories.\n    </p>\n  </Spangled>\n)'}},DefaultSpangled.parameters);var __namedExportsOrder=["DefaultSpangled"]},"./src/components/AdjustableNumber/AdjustableNumber.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>DISPLAYMODE,Z:()=>AdjustableNumber_AdjustableNumber});__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var DISPLAYMODE,react=__webpack_require__("./node_modules/react/index.js"),Common=__webpack_require__("./src/interfaces/Common.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}!function(DISPLAYMODE){DISPLAYMODE.DISPLAY="display",DISPLAYMODE.EDIT="edit"}(DISPLAYMODE||(DISPLAYMODE={}));var AdjustableNumber=function AdjustableNumber(props){var _useState2=_slicedToArray((0,react.useState)(props.displayMode),2),displayMode=_useState2[0],setDisplayMode=_useState2[1],_useState4=_slicedToArray((0,react.useState)(props.displayNumber),2),displayNumber=_useState4[0],setDisplayNumber=_useState4[1],updateVars=(0,react.useContext)(Common.Q).updateVars;(0,react.useEffect)((function(){setDisplayMode(props.displayMode)}),[props.displayMode]),(0,react.useEffect)((function(){updateVars&&updateVars(props.varName,displayNumber)}),[displayNumber,props.displayNumber]);return(0,jsx_runtime.jsxs)("span",{tabIndex:0,onBlur:function onBlur(){return setDisplayMode(DISPLAYMODE.DISPLAY)},children:[displayMode===DISPLAYMODE.EDIT&&(0,jsx_runtime.jsx)("button",{onClick:function decrementHandler(){setDisplayNumber(displayNumber-1)},children:"←"}),(0,jsx_runtime.jsx)("span",{className:"_1q3iwxv0",onDoubleClick:function toggleDisplayMode(){return setDisplayMode(displayMode===DISPLAYMODE.DISPLAY?DISPLAYMODE.EDIT:DISPLAYMODE.DISPLAY)},children:displayNumber}),displayMode===DISPLAYMODE.EDIT&&(0,jsx_runtime.jsx)("button",{onClick:function incrementHandler(){setDisplayNumber(displayNumber+1)},children:"→"})]})};AdjustableNumber.displayName="AdjustableNumber",AdjustableNumber.defaultProps={displayNumber:0,displayMode:DISPLAYMODE.DISPLAY};const AdjustableNumber_AdjustableNumber=AdjustableNumber;try{AdjustableNumber.displayName="AdjustableNumber",AdjustableNumber.__docgenInfo={description:"",displayName:"AdjustableNumber",props:{varName:{defaultValue:null,description:"",name:"varName",required:!0,type:{name:"string"}},displayNumber:{defaultValue:{value:"0"},description:"",name:"displayNumber",required:!1,type:{name:"number"}},displayMode:{defaultValue:{value:"DISPLAYMODE.DISPLAY"},description:"",name:"displayMode",required:!1,type:{name:"enum",value:[{value:'"display"'},{value:'"edit"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AdjustableNumber/AdjustableNumber.tsx#AdjustableNumber"]={docgenInfo:AdjustableNumber.__docgenInfo,name:"AdjustableNumber",path:"src/components/AdjustableNumber/AdjustableNumber.tsx#AdjustableNumber"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Expression/Expression.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var ExpressionEvaluateState,react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/react/index.js"),mathjs__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/mathjs/lib/esm/entry/impureFunctionsAny.generated.js"),_interfaces_Common__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/interfaces/Common.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}!function(ExpressionEvaluateState){ExpressionEvaluateState[ExpressionEvaluateState.UNEVALUATED=0]="UNEVALUATED",ExpressionEvaluateState[ExpressionEvaluateState.EVALUATED=1]="EVALUATED",ExpressionEvaluateState[ExpressionEvaluateState.FAILED=2]="FAILED"}(ExpressionEvaluateState||(ExpressionEvaluateState={}));var Expression=function Expression(props){var vars=(0,react__WEBPACK_IMPORTED_MODULE_11__.useContext)(_interfaces_Common__WEBPACK_IMPORTED_MODULE_12__.Q),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(0),2),calculatedValue=_useState2[0],setCalculatedValue=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(ExpressionEvaluateState.UNEVALUATED),2),evalState=_useState4[0],setEvalState=_useState4[1];(0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)((function(){try{setCalculatedValue(ExpressionEvaluateState.UNEVALUATED);var evaluatedValue=(0,mathjs__WEBPACK_IMPORTED_MODULE_14__.ku)(props.expression,vars.vars);setCalculatedValue(evaluatedValue),setEvalState(ExpressionEvaluateState.EVALUATED)}catch(error){setEvalState(ExpressionEvaluateState.FAILED)}}),[props.expression,vars]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span",{"data-testid":"expression",title:""!==props.expression?props.expression:"Missing Expression",children:function renderCalculatedValue(){switch(evalState){case ExpressionEvaluateState.EVALUATED:return calculatedValue;case ExpressionEvaluateState.FAILED:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("mark",{children:"error"});default:return props.expression}}()})};Expression.displayName="Expression";const __WEBPACK_DEFAULT_EXPORT__=Expression;try{Expression.displayName="Expression",Expression.__docgenInfo={description:"",displayName:"Expression",props:{expression:{defaultValue:null,description:"",name:"expression",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Expression/Expression.tsx#Expression"]={docgenInfo:Expression.__docgenInfo,name:"Expression",path:"src/components/Expression/Expression.tsx#Expression"})}catch(__react_docgen_typescript_loader_error){}},"./src/interfaces/Common.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>VarContext});__webpack_require__("./node_modules/core-js/modules/es.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var VarContext=__webpack_require__("./node_modules/react/index.js").createContext({vars:new Map,updateVars:void 0})},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/AdjustableNumber/AdjustableNumber.stories.tsx":"./src/components/AdjustableNumber/AdjustableNumber.stories.tsx","./components/Expression/Expression.stories.tsx":"./src/components/Expression/Expression.stories.tsx","./components/Spangled/Spangled.stories.tsx":"./src/components/Spangled/Spangled.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"?4f7e":()=>{},"?d4c0":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[223],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);