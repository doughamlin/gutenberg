"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[2901],{"./packages/block-editor/src/components/block-edit/context.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{FF:function(){return DEFAULT_BLOCK_EDIT_CONTEXT},Q2:function(){return Provider},Z8:function(){return useBlockEditContext}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const DEFAULT_BLOCK_EDIT_CONTEXT={name:"",isSelected:!1},Context=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(DEFAULT_BLOCK_EDIT_CONTEXT),{Provider:Provider}=Context;function useBlockEditContext(){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context)}},"./packages/block-editor/src/components/height-control/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return HeightControl}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/unit-control/utils.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/base-control/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/build-module/flex/flex/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/build-module/flex/flex-item/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/components/build-module/unit-control/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/components/build-module/spacer/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/components/build-module/range-control/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),_use_setting__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/block-editor/src/components/use-setting/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RANGE_CONTROL_CUSTOM_SETTINGS={px:{max:1e3,step:1},"%":{max:100,step:1},vw:{max:100,step:1},vh:{max:100,step:1},em:{max:50,step:.1},rem:{max:50,step:.1}};function HeightControl(_ref){var _units$,_RANGE_CONTROL_CUSTOM,_RANGE_CONTROL_CUSTOM2,_RANGE_CONTROL_CUSTOM3,_RANGE_CONTROL_CUSTOM4;let{onChange:onChange,label:label=(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height"),value:value}=_ref;const customRangeValue=parseFloat(value),units=(0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.nj)({availableUnits:(0,_use_setting__WEBPACK_IMPORTED_MODULE_3__.Z)("spacing.units")||["%","px","em","rem","vh","vw"]}),selectedUnit=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useMemo)((()=>(0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.YX)(value)),[value])[1]||(null===(_units$=units[0])||void 0===_units$?void 0:_units$.value)||"px";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("fieldset",{className:"block-editor-height-control",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ZP.VisualLabel,{as:"legend",children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Z,{isBlock:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.ZP,{value:value,units:units,onChange:onChange,onUnitChange:newUnit=>{const[currentValue,currentUnit]=(0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.YX)(value);["em","rem"].includes(newUnit)&&"px"===currentUnit?onChange((currentValue/16).toFixed(2)+newUnit):["em","rem"].includes(currentUnit)&&"px"===newUnit?onChange(Math.round(16*currentValue)+newUnit):["vh","vw","%"].includes(newUnit)&&currentValue>100&&onChange(100+newUnit)},min:0,size:"__unstable-large"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Z,{isBlock:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Z,{marginX:2,marginBottom:0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__.Z,{value:customRangeValue,min:0,max:null!==(_RANGE_CONTROL_CUSTOM=null===(_RANGE_CONTROL_CUSTOM2=RANGE_CONTROL_CUSTOM_SETTINGS[selectedUnit])||void 0===_RANGE_CONTROL_CUSTOM2?void 0:_RANGE_CONTROL_CUSTOM2.max)&&void 0!==_RANGE_CONTROL_CUSTOM?_RANGE_CONTROL_CUSTOM:100,step:null!==(_RANGE_CONTROL_CUSTOM3=null===(_RANGE_CONTROL_CUSTOM4=RANGE_CONTROL_CUSTOM_SETTINGS[selectedUnit])||void 0===_RANGE_CONTROL_CUSTOM4?void 0:_RANGE_CONTROL_CUSTOM4.step)&&void 0!==_RANGE_CONTROL_CUSTOM3?_RANGE_CONTROL_CUSTOM3:.1,withInputField:!1,onChange:next=>{onChange([next,selectedUnit].join(""))},__nextHasNoMarginBottom:!0})})})]})]})}HeightControl.displayName="HeightControl",HeightControl.__docgenInfo={description:"",methods:[],displayName:"HeightControl",props:{label:{defaultValue:{value:"__( 'Height' )",computed:!0},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/height-control/index.js"]={name:"HeightControl",docgenInfo:HeightControl.__docgenInfo,path:"packages/block-editor/src/components/height-control/index.js"})},"./packages/block-editor/src/components/use-setting/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useSetting}});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js"),_wordpress_data__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/data/build-module/components/use-select/index.js"),_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/blocks/build-module/index.js"),_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/hooks/build-module/index.js"),_block_edit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/block-editor/src/components/block-edit/context.js"),_store__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/block-editor/src/store/index.js");const blockedPaths=["color","border","dimensions","typography","spacing"],deprecatedFlags={"color.palette":settings=>settings.colors,"color.gradients":settings=>settings.gradients,"color.custom":settings=>void 0===settings.disableCustomColors?void 0:!settings.disableCustomColors,"color.customGradient":settings=>void 0===settings.disableCustomGradients?void 0:!settings.disableCustomGradients,"typography.fontSizes":settings=>settings.fontSizes,"typography.customFontSize":settings=>void 0===settings.disableCustomFontSizes?void 0:!settings.disableCustomFontSizes,"typography.lineHeight":settings=>settings.enableCustomLineHeight,"spacing.units":settings=>{if(void 0!==settings.enableCustomUnits)return!0===settings.enableCustomUnits?["px","em","rem","vh","vw","%"]:settings.enableCustomUnits},"spacing.padding":settings=>settings.enableCustomSpacing},prefixedFlags={"border.customColor":"border.color","border.customStyle":"border.style","border.customWidth":"border.width","typography.customFontStyle":"typography.fontStyle","typography.customFontWeight":"typography.fontWeight","typography.customLetterSpacing":"typography.letterSpacing","typography.customTextDecorations":"typography.textDecoration","typography.customTextTransforms":"typography.textTransform","border.customRadius":"border.radius","spacing.customMargin":"spacing.margin","spacing.customPadding":"spacing.padding","typography.customLineHeight":"typography.lineHeight"};function useSetting(path){const{name:blockName,clientId:clientId}=(0,_block_edit__WEBPACK_IMPORTED_MODULE_4__.Z8)();return(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.Z)((select=>{if(blockedPaths.includes(path))return void console.warn("Top level useSetting paths are disabled. Please use a subpath to query the information needed.");let result=(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.O)("blockEditor.useSetting.before",void 0,path,clientId,blockName);if(void 0!==result)return result;const normalizedPath=(path=>prefixedFlags[path]||path)(path),candidates=[clientId,...select(_store__WEBPACK_IMPORTED_MODULE_3__.h).getBlockParents(clientId,!0)];for(const candidateClientId of candidates){const candidateBlockName=select(_store__WEBPACK_IMPORTED_MODULE_3__.h).getBlockName(candidateClientId);if((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.zb)(candidateBlockName,"__experimentalSettings",!1)){var _get;const candidateAtts=select(_store__WEBPACK_IMPORTED_MODULE_3__.h).getBlockAttributes(candidateClientId);if(result=null!==(_get=(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(candidateAtts,`settings.blocks.${blockName}.${normalizedPath}`))&&void 0!==_get?_get:(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(candidateAtts,`settings.${normalizedPath}`),void 0!==result)break}}const settings=select(_store__WEBPACK_IMPORTED_MODULE_3__.h).getSettings();if(void 0===result){var _get2;const defaultsPath=`__experimentalFeatures.${normalizedPath}`,blockPath=`__experimentalFeatures.blocks.${blockName}.${normalizedPath}`;result=null!==(_get2=(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(settings,blockPath))&&void 0!==_get2?_get2:(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(settings,defaultsPath)}var _ref,_result$custom;if(void 0!==result)return _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.yg[normalizedPath]?null!==(_ref=null!==(_result$custom=result.custom)&&void 0!==_result$custom?_result$custom:result.theme)&&void 0!==_ref?_ref:result.default:result;const deprecatedSettingsValue=deprecatedFlags[normalizedPath]?deprecatedFlags[normalizedPath](settings):void 0;return void 0!==deprecatedSettingsValue?deprecatedSettingsValue:"typography.dropCap"===normalizedPath||void 0}),[blockName,clientId,path])}},"./packages/block-editor/src/components/height-control/stories/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block-editor/src/components/height-control/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={parameters:{sourceLink:"packages/block-editor/src/components/height-control",storySource:{source:"/**\n * WordPress dependencies\n */\nimport { useState } from '@wordpress/element';\n\n/**\n * Internal dependencies\n */\nimport HeightControl from '../';\n\nexport default {\n\tcomponent: HeightControl,\n\ttitle: 'BlockEditor/HeightControl',\n};\n\nconst Template = ( props ) => {\n\tconst [ value, setValue ] = useState();\n\treturn <HeightControl onChange={ setValue } value={ value } { ...props } />;\n};\n\nexport const Default = Template.bind( {} );\n",locationsMap:{default:{startLoc:{col:17,line:16},endLoc:{col:1,line:19},startBody:{col:17,line:16},endBody:{col:1,line:19}}}}},component:___WEBPACK_IMPORTED_MODULE_1__.Z,title:"BlockEditor/HeightControl"};const Template=props=>{const[value,setValue]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{onChange:setValue,value:value,...props})};Template.displayName="Template";const Default=Template.bind({})}}]);