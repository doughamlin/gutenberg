"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[2121],{"./packages/block-editor/src/components/block-draggable/draggable-chip.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return BlockDraggableChip}});var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/flex/flex/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/flex/flex-item/component.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/icons/build-module/library/drag-handle.js"),_block_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/block-editor/src/components/block-icon/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function BlockDraggableChip(_ref){let{count:count,icon:icon,isPattern:isPattern}=_ref;const patternLabel=isPattern&&(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pattern");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"block-editor-block-draggable-chip-wrapper",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"block-editor-block-draggable-chip","data-testid":"block-draggable-chip",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Z,{justify:"center",className:"block-editor-block-draggable-chip__content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{children:icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_block_icon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:icon}):patternLabel||(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.gB)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._n)("%d block","%d blocks",count),count)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_block_icon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__.Z})})]})})})}BlockDraggableChip.displayName="BlockDraggableChip",BlockDraggableChip.__docgenInfo={description:"",methods:[],displayName:"BlockDraggableChip"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/block-draggable/draggable-chip.js"]={name:"BlockDraggableChip",docgenInfo:BlockDraggableChip.__docgenInfo,path:"packages/block-editor/src/components/block-draggable/draggable-chip.js"})},"./packages/block-editor/src/components/block-draggable/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return block_draggable}});var build_module=__webpack_require__("./packages/blocks/build-module/index.js"),draggable=__webpack_require__("./packages/components/build-module/draggable/index.js"),use_select=__webpack_require__("./packages/data/build-module/components/use-select/index.js"),use_dispatch=__webpack_require__("./packages/data/build-module/components/use-dispatch/use-dispatch.js"),react=__webpack_require__("./node_modules/react/index.js"),draggable_chip=__webpack_require__("./packages/block-editor/src/components/block-draggable/draggable-chip.js"),get_scroll_container=__webpack_require__("./packages/dom/build-module/dom/get-scroll-container.js");var store=__webpack_require__("./packages/block-editor/src/store/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BlockDraggable=_ref=>{let{children:children,clientIds:clientIds,cloneClassname:cloneClassname,onDragStart:onDragStart,onDragEnd:onDragEnd}=_ref;const{srcRootClientId:srcRootClientId,isDraggable:isDraggable,icon:icon}=(0,use_select.Z)((select=>{var _getBlockType;const{canMoveBlocks:canMoveBlocks,getBlockRootClientId:getBlockRootClientId,getBlockName:getBlockName}=select(store.h),rootClientId=getBlockRootClientId(clientIds[0]),blockName=getBlockName(clientIds[0]);return{srcRootClientId:rootClientId,isDraggable:canMoveBlocks(clientIds,rootClientId),icon:null===(_getBlockType=(0,build_module.ck)(blockName))||void 0===_getBlockType?void 0:_getBlockType.icon}}),[clientIds]),isDragging=(0,react.useRef)(!1),[startScrolling,scrollOnDragOver,stopScrolling]=function useScrollWhenDragging(){const dragStartY=(0,react.useRef)(null),velocityY=(0,react.useRef)(null),scrollParentY=(0,react.useRef)(null),scrollEditorInterval=(0,react.useRef)(null);return(0,react.useEffect)((()=>()=>{scrollEditorInterval.current&&(clearInterval(scrollEditorInterval.current),scrollEditorInterval.current=null)}),[]),[(0,react.useCallback)((event=>{dragStartY.current=event.clientY,scrollParentY.current=(0,get_scroll_container.Z)(event.target),scrollEditorInterval.current=setInterval((()=>{if(scrollParentY.current&&velocityY.current){const newTop=scrollParentY.current.scrollTop+velocityY.current;scrollParentY.current.scroll({top:newTop})}}),25)}),[]),(0,react.useCallback)((event=>{if(!scrollParentY.current)return;const scrollParentHeight=scrollParentY.current.offsetHeight,offsetDragStartPosition=dragStartY.current-scrollParentY.current.offsetTop,offsetDragPosition=event.clientY-scrollParentY.current.offsetTop;if(event.clientY>offsetDragStartPosition){const moveableDistance=Math.max(scrollParentHeight-offsetDragStartPosition-50,0),distancePercentage=Math.max(offsetDragPosition-offsetDragStartPosition-50,0)/moveableDistance;velocityY.current=25*distancePercentage}else if(event.clientY<offsetDragStartPosition){const moveableDistance=Math.max(offsetDragStartPosition-50,0),distancePercentage=Math.max(offsetDragStartPosition-offsetDragPosition-50,0)/moveableDistance;velocityY.current=-25*distancePercentage}else velocityY.current=0}),[]),()=>{dragStartY.current=null,scrollParentY.current=null,scrollEditorInterval.current&&(clearInterval(scrollEditorInterval.current),scrollEditorInterval.current=null)}]}(),{startDraggingBlocks:startDraggingBlocks,stopDraggingBlocks:stopDraggingBlocks}=(0,use_dispatch.Z)(store.h);if((0,react.useEffect)((()=>()=>{isDragging.current&&stopDraggingBlocks()}),[]),!isDraggable)return children({draggable:!1});const transferData={type:"block",srcClientIds:clientIds,srcRootClientId:srcRootClientId};return(0,jsx_runtime.jsx)(draggable.Z,{cloneClassname:cloneClassname,__experimentalTransferDataType:"wp-blocks",transferData:transferData,onDragStart:event=>{startDraggingBlocks(clientIds),isDragging.current=!0,startScrolling(event),onDragStart&&onDragStart()},onDragOver:scrollOnDragOver,onDragEnd:()=>{stopDraggingBlocks(),isDragging.current=!1,stopScrolling(),onDragEnd&&onDragEnd()},__experimentalDragComponent:(0,jsx_runtime.jsx)(draggable_chip.Z,{count:clientIds.length,icon:icon}),children:_ref2=>{let{onDraggableStart:onDraggableStart,onDraggableEnd:onDraggableEnd}=_ref2;return children({draggable:!0,onDragStart:onDraggableStart,onDragEnd:onDraggableEnd})}})};BlockDraggable.displayName="BlockDraggable",BlockDraggable.__docgenInfo={description:"",methods:[],displayName:"BlockDraggable"};var block_draggable=BlockDraggable;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/block-draggable/index.js"]={name:"BlockDraggable",docgenInfo:BlockDraggable.__docgenInfo,path:"packages/block-editor/src/components/block-draggable/index.js"})},"./packages/block-editor/src/components/block-icon/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/icon/index.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/icons/build-module/library/block-default.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function BlockIcon(_ref){var _icon;let{icon:icon,showColors:showColors=!1,className:className,context:context}=_ref;"block-default"===(null===(_icon=icon)||void 0===_icon?void 0:_icon.src)&&(icon={src:_wordpress_icons__WEBPACK_IMPORTED_MODULE_2__.Z});const renderedIcon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{icon:icon&&icon.src?icon.src:icon,context:context}),style=showColors?{backgroundColor:icon&&icon.background,color:icon&&icon.foreground}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{style:style,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("block-editor-block-icon",className,{"has-colors":showColors}),children:renderedIcon})}BlockIcon.displayName="BlockIcon",BlockIcon.__docgenInfo={description:"",methods:[],displayName:"BlockIcon",props:{showColors:{defaultValue:{value:"false",computed:!1},required:!1}}},__webpack_exports__.Z=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.memo)(BlockIcon),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/block-icon/index.js"]={name:"BlockIcon",docgenInfo:BlockIcon.__docgenInfo,path:"packages/block-editor/src/components/block-icon/index.js"})},"./packages/block-editor/src/components/block-mover/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return block_mover}});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),drag_handle=__webpack_require__("./packages/icons/build-module/library/drag-handle.js"),toolbar_group=__webpack_require__("./packages/components/build-module/toolbar/toolbar-group/index.js"),build_module_button=__webpack_require__("./packages/components/build-module/button/index.js"),toolbar_item=__webpack_require__("./packages/components/build-module/toolbar/toolbar-item/index.js"),use_select=__webpack_require__("./packages/data/build-module/components/use-select/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),block_draggable=__webpack_require__("./packages/block-editor/src/components/block-draggable/index.js"),blocks_build_module=__webpack_require__("./packages/blocks/build-module/index.js"),component=__webpack_require__("./packages/components/build-module/visually-hidden/component.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_dispatch=__webpack_require__("./packages/data/build-module/components/use-dispatch/use-dispatch.js"),react=__webpack_require__("./node_modules/react/index.js"),chevron_right=__webpack_require__("./packages/icons/build-module/library/chevron-right.js"),chevron_left=__webpack_require__("./packages/icons/build-module/library/chevron-left.js"),chevron_up=__webpack_require__("./packages/icons/build-module/library/chevron-up.js"),chevron_down=__webpack_require__("./packages/icons/build-module/library/chevron-down.js");const getMovementDirection=(moveDirection,orientation)=>"up"===moveDirection?"horizontal"===orientation?(0,build_module.dZ)()?"right":"left":"up":"down"===moveDirection?"horizontal"===orientation?(0,build_module.dZ)()?"left":"right":"down":null;function getBlockMoverDescription(selectedCount,type,firstIndex,isFirst,isLast,dir,orientation){const position=firstIndex+1;if(selectedCount>1)return function getMultiBlockMoverDescription(selectedCount,firstIndex,isFirst,isLast,dir,orientation){const position=firstIndex+1;if(isFirst&&isLast)return(0,build_module.__)("All blocks are selected, and cannot be moved");if(dir>0&&!isLast){const movementDirection=getMovementDirection("down",orientation);if("down"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Move %1$d blocks from position %2$d down by one place"),selectedCount,position);if("left"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Move %1$d blocks from position %2$d left by one place"),selectedCount,position);if("right"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Move %1$d blocks from position %2$d right by one place"),selectedCount,position)}if(dir>0&&isLast){const movementDirection=getMovementDirection("down",orientation);if("down"===movementDirection)return(0,build_module.__)("Blocks cannot be moved down as they are already at the bottom");if("left"===movementDirection)return(0,build_module.__)("Blocks cannot be moved left as they are already are at the leftmost position");if("right"===movementDirection)return(0,build_module.__)("Blocks cannot be moved right as they are already are at the rightmost position")}if(dir<0&&!isFirst){const movementDirection=getMovementDirection("up",orientation);if("up"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Move %1$d blocks from position %2$d up by one place"),selectedCount,position);if("left"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Move %1$d blocks from position %2$d left by one place"),selectedCount,position);if("right"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Move %1$d blocks from position %2$d right by one place"),selectedCount,position)}if(dir<0&&isFirst){const movementDirection=getMovementDirection("up",orientation);if("up"===movementDirection)return(0,build_module.__)("Blocks cannot be moved up as they are already at the top");if("left"===movementDirection)return(0,build_module.__)("Blocks cannot be moved left as they are already are at the leftmost position");if("right"===movementDirection)return(0,build_module.__)("Blocks cannot be moved right as they are already are at the rightmost position")}}(selectedCount,firstIndex,isFirst,isLast,dir,orientation);if(isFirst&&isLast)return(0,build_module.gB)((0,build_module.__)("Block %s is the only block, and cannot be moved"),type);if(dir>0&&!isLast){const movementDirection=getMovementDirection("down",orientation);if("down"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Move %1$s block from position %2$d down to position %3$d"),type,position,position+1);if("left"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Move %1$s block from position %2$d left to position %3$d"),type,position,position+1);if("right"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Move %1$s block from position %2$d right to position %3$d"),type,position,position+1)}if(dir>0&&isLast){const movementDirection=getMovementDirection("down",orientation);if("down"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Block %1$s is at the end of the content and can’t be moved down"),type);if("left"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Block %1$s is at the end of the content and can’t be moved left"),type);if("right"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Block %1$s is at the end of the content and can’t be moved right"),type)}if(dir<0&&!isFirst){const movementDirection=getMovementDirection("up",orientation);if("up"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Move %1$s block from position %2$d up to position %3$d"),type,position,position-1);if("left"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Move %1$s block from position %2$d left to position %3$d"),type,position,position-1);if("right"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Move %1$s block from position %2$d right to position %3$d"),type,position,position-1)}if(dir<0&&isFirst){const movementDirection=getMovementDirection("up",orientation);if("up"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Block %1$s is at the beginning of the content and can’t be moved up"),type);if("left"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Block %1$s is at the beginning of the content and can’t be moved left"),type);if("right"===movementDirection)return(0,build_module.gB)((0,build_module.__)("Block %1$s is at the beginning of the content and can’t be moved right"),type)}}var store=__webpack_require__("./packages/block-editor/src/store/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getArrowIcon=(direction,orientation)=>"up"===direction?"horizontal"===orientation?(0,build_module.dZ)()?chevron_right.Z:chevron_left.Z:chevron_up.Z:"down"===direction?"horizontal"===orientation?(0,build_module.dZ)()?chevron_left.Z:chevron_right.Z:chevron_down.Z:null,getMovementDirectionLabel=(moveDirection,orientation)=>"up"===moveDirection?"horizontal"===orientation?(0,build_module.dZ)()?(0,build_module.__)("Move right"):(0,build_module.__)("Move left"):(0,build_module.__)("Move up"):"down"===moveDirection?"horizontal"===orientation?(0,build_module.dZ)()?(0,build_module.__)("Move left"):(0,build_module.__)("Move right"):(0,build_module.__)("Move down"):null,BlockMoverButton=(0,react.forwardRef)(((_ref,ref)=>{let{clientIds:clientIds,direction:direction,orientation:moverOrientation,...props}=_ref;const instanceId=(0,use_instance_id.Z)(BlockMoverButton),normalizedClientIds=Array.isArray(clientIds)?clientIds:[clientIds],blocksCount=normalizedClientIds.length,{blockType:blockType,isDisabled:isDisabled,rootClientId:rootClientId,isFirst:isFirst,isLast:isLast,firstIndex:firstIndex,orientation:orientation="vertical"}=(0,use_select.Z)((select=>{const{getBlockIndex:getBlockIndex,getBlockRootClientId:getBlockRootClientId,getBlockOrder:getBlockOrder,getBlock:getBlock,getBlockListSettings:getBlockListSettings}=select(store.h),firstClientId=normalizedClientIds[0],blockRootClientId=getBlockRootClientId(firstClientId),firstBlockIndex=getBlockIndex(firstClientId),lastBlockIndex=getBlockIndex(normalizedClientIds[normalizedClientIds.length-1]),blockOrder=getBlockOrder(blockRootClientId),block=getBlock(firstClientId),isFirstBlock=0===firstBlockIndex,isLastBlock=lastBlockIndex===blockOrder.length-1,{orientation:blockListOrientation}=getBlockListSettings(blockRootClientId)||{};return{blockType:block?(0,blocks_build_module.ck)(block.name):null,isDisabled:"up"===direction?isFirstBlock:isLastBlock,rootClientId:blockRootClientId,firstIndex:firstBlockIndex,isFirst:isFirstBlock,isLast:isLastBlock,orientation:moverOrientation||blockListOrientation}}),[clientIds,direction]),{moveBlocksDown:moveBlocksDown,moveBlocksUp:moveBlocksUp}=(0,use_dispatch.Z)(store.h),moverFunction="up"===direction?moveBlocksUp:moveBlocksDown,descriptionId=`block-editor-block-mover-button__description-${instanceId}`;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(build_module_button.Z,{ref:ref,className:classnames_default()("block-editor-block-mover-button",`is-${direction}-button`),icon:getArrowIcon(direction,orientation),label:getMovementDirectionLabel(direction,orientation),"aria-describedby":descriptionId,...props,onClick:isDisabled?null:event=>{moverFunction(clientIds,rootClientId),props.onClick&&props.onClick(event)},disabled:isDisabled,__experimentalIsFocusable:!0}),(0,jsx_runtime.jsx)(component.Z,{id:descriptionId,children:getBlockMoverDescription(blocksCount,blockType&&blockType.title,firstIndex,isFirst,isLast,"up"===direction?-1:1,orientation)})]})})),BlockMoverUpButton=(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)(BlockMoverButton,{direction:"up",ref:ref,...props}))),BlockMoverDownButton=(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)(BlockMoverButton,{direction:"down",ref:ref,...props})));function BlockMover(_ref){let{clientIds:clientIds,hideDragHandle:hideDragHandle}=_ref;const{canMove:canMove,rootClientId:rootClientId,isFirst:isFirst,isLast:isLast,orientation:orientation}=(0,use_select.Z)((select=>{var _getBlockListSettings;const{getBlockIndex:getBlockIndex,getBlockListSettings:getBlockListSettings,canMoveBlocks:canMoveBlocks,getBlockOrder:getBlockOrder,getBlockRootClientId:getBlockRootClientId}=select(store.h),normalizedClientIds=Array.isArray(clientIds)?clientIds:[clientIds],firstClientId=normalizedClientIds[0],_rootClientId=getBlockRootClientId(firstClientId),firstIndex=getBlockIndex(firstClientId),lastIndex=getBlockIndex(normalizedClientIds[normalizedClientIds.length-1]),blockOrder=getBlockOrder(_rootClientId);return{canMove:canMoveBlocks(clientIds,_rootClientId),rootClientId:_rootClientId,isFirst:0===firstIndex,isLast:lastIndex===blockOrder.length-1,orientation:null===(_getBlockListSettings=getBlockListSettings(_rootClientId))||void 0===_getBlockListSettings?void 0:_getBlockListSettings.orientation}}),[clientIds]);if(!canMove||isFirst&&isLast&&!rootClientId)return null;const dragHandleLabel=(0,build_module.__)("Drag");return(0,jsx_runtime.jsxs)(toolbar_group.Z,{className:classnames_default()("block-editor-block-mover",{"is-horizontal":"horizontal"===orientation}),children:[!hideDragHandle&&(0,jsx_runtime.jsx)(block_draggable.Z,{clientIds:clientIds,children:draggableProps=>(0,jsx_runtime.jsx)(build_module_button.Z,{icon:drag_handle.Z,className:"block-editor-block-mover__drag-handle","aria-hidden":"true",label:dragHandleLabel,tabIndex:"-1",...draggableProps})}),(0,jsx_runtime.jsxs)("div",{className:"block-editor-block-mover__move-button-container",children:[(0,jsx_runtime.jsx)(toolbar_item.Z,{children:itemProps=>(0,jsx_runtime.jsx)(BlockMoverUpButton,{clientIds:clientIds,...itemProps})}),(0,jsx_runtime.jsx)(toolbar_item.Z,{children:itemProps=>(0,jsx_runtime.jsx)(BlockMoverDownButton,{clientIds:clientIds,...itemProps})})]})]})}BlockMover.displayName="BlockMover",BlockMover.__docgenInfo={description:"",methods:[],displayName:"BlockMover"};var block_mover=BlockMover;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/block-mover/index.js"]={name:"BlockMover",docgenInfo:BlockMover.__docgenInfo,path:"packages/block-editor/src/components/block-mover/index.js"})},"./packages/block-editor/src/components/provider/block-refs-provider.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N:function(){return BlockRefs},m:function(){return BlockRefsProvider}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BlockRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)({refs:new Map,callbacks:new Map});function BlockRefsProvider(_ref){let{children:children}=_ref;const value=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({refs:new Map,callbacks:new Map})),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockRefs.Provider,{value:value,children:children})}BlockRefsProvider.displayName="BlockRefsProvider",BlockRefsProvider.__docgenInfo={description:"",methods:[],displayName:"BlockRefsProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/provider/block-refs-provider.js"]={name:"BlockRefsProvider",docgenInfo:BlockRefsProvider.__docgenInfo,path:"packages/block-editor/src/components/provider/block-refs-provider.js"})},"./packages/block-editor/src/components/provider/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return provider}});var use_dispatch=__webpack_require__("./packages/data/build-module/components/use-dispatch/use-dispatch.js"),react=__webpack_require__("./node_modules/react/index.js"),with_registry=__webpack_require__("./packages/data/build-module/components/with-registry/index.js"),build_module_registry=__webpack_require__("./packages/data/build-module/registry.js"),context=__webpack_require__("./packages/data/build-module/components/registry-provider/context.js"),create_higher_order_component=__webpack_require__("./packages/compose/build-module/utils/create-higher-order-component/index.js"),store=__webpack_require__("./packages/block-editor/src/store/index.js"),constants=__webpack_require__("./packages/block-editor/src/store/constants.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var with_registry_provider=(0,create_higher_order_component.o)((WrappedComponent=>(0,with_registry.Z)((_ref=>{let{useSubRegistry:useSubRegistry=!0,registry:registry,...props}=_ref;if(!useSubRegistry)return(0,jsx_runtime.jsx)(WrappedComponent,{registry:registry,...props});const[subRegistry,setSubRegistry]=(0,react.useState)(null);return(0,react.useEffect)((()=>{const newRegistry=(0,build_module_registry.p)({},registry);newRegistry.registerStore(constants.G,store.i),setSubRegistry(newRegistry)}),[registry]),subRegistry?(0,jsx_runtime.jsx)(context.ZP,{value:subRegistry,children:(0,jsx_runtime.jsx)(WrappedComponent,{registry:subRegistry,...props})}):null}))),"withRegistryProvider"),use_block_sync=__webpack_require__("./packages/block-editor/src/components/provider/use-block-sync.js"),block_refs_provider=__webpack_require__("./packages/block-editor/src/components/provider/block-refs-provider.js");function BlockEditorProvider(props){const{children:children,settings:settings}=props,{updateSettings:updateSettings}=(0,use_dispatch.Z)(store.h);return(0,react.useEffect)((()=>{updateSettings({...settings,__internalIsInitialized:!0})}),[settings]),(0,use_block_sync.Z)(props),(0,jsx_runtime.jsx)(block_refs_provider.m,{children:children})}BlockEditorProvider.displayName="BlockEditorProvider",BlockEditorProvider.__docgenInfo={description:"@typedef {import('@wordpress/data').WPDataRegistry} WPDataRegistry",methods:[],displayName:"BlockEditorProvider"};var provider=with_registry_provider(BlockEditorProvider);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/provider/index.js"]={name:"BlockEditorProvider",docgenInfo:BlockEditorProvider.__docgenInfo,path:"packages/block-editor/src/components/provider/index.js"})},"./packages/block-editor/src/components/provider/use-block-sync.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useBlockSync}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),_wordpress_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/data/build-module/components/registry-provider/use-registry.js"),_wordpress_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/data/build-module/components/use-select/index.js"),_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/blocks/build-module/index.js"),_store__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block-editor/src/store/index.js");const noop=()=>{};function useBlockSync(_ref){let{clientId:clientId=null,value:controlledBlocks,selection:controlledSelection,onChange:onChange=noop,onInput:onInput=noop}=_ref;const registry=(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.Z)(),{resetBlocks:resetBlocks,resetSelection:resetSelection,replaceInnerBlocks:replaceInnerBlocks,setHasControlledInnerBlocks:setHasControlledInnerBlocks,__unstableMarkNextChangeAsNotPersistent:__unstableMarkNextChangeAsNotPersistent}=registry.dispatch(_store__WEBPACK_IMPORTED_MODULE_1__.h),{getBlockName:getBlockName,getBlocks:getBlocks}=registry.select(_store__WEBPACK_IMPORTED_MODULE_1__.h),isControlled=(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.Z)((select=>!clientId||select(_store__WEBPACK_IMPORTED_MODULE_1__.h).areInnerBlocksControlled(clientId)),[clientId]),pendingChanges=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)({incoming:null,outgoing:[]}),subscribed=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(!1),setControlledBlocks=()=>{controlledBlocks&&(__unstableMarkNextChangeAsNotPersistent(),clientId?registry.batch((()=>{setHasControlledInnerBlocks(clientId,!0);const storeBlocks=controlledBlocks.map((block=>(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.Wm)(block)));subscribed.current&&(pendingChanges.current.incoming=storeBlocks),__unstableMarkNextChangeAsNotPersistent(),replaceInnerBlocks(clientId,storeBlocks)})):(subscribed.current&&(pendingChanges.current.incoming=controlledBlocks),resetBlocks(controlledBlocks)))},onInputRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(onInput),onChangeRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(onChange);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)((()=>{onInputRef.current=onInput,onChangeRef.current=onChange}),[onInput,onChange]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)((()=>{pendingChanges.current.outgoing.includes(controlledBlocks)?pendingChanges.current.outgoing[pendingChanges.current.outgoing.length-1]===controlledBlocks&&(pendingChanges.current.outgoing=[]):getBlocks(clientId)!==controlledBlocks&&(pendingChanges.current.outgoing=[],setControlledBlocks(),controlledSelection&&resetSelection(controlledSelection.selectionStart,controlledSelection.selectionEnd,controlledSelection.initialPosition))}),[controlledBlocks,clientId]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)((()=>{isControlled||(pendingChanges.current.outgoing=[],setControlledBlocks())}),[isControlled]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)((()=>{const{getSelectionStart:getSelectionStart,getSelectionEnd:getSelectionEnd,getSelectedBlocksInitialCaretPosition:getSelectedBlocksInitialCaretPosition,isLastBlockChangePersistent:isLastBlockChangePersistent,__unstableIsLastBlockChangeIgnored:__unstableIsLastBlockChangeIgnored,areInnerBlocksControlled:areInnerBlocksControlled}=registry.select(_store__WEBPACK_IMPORTED_MODULE_1__.h);let blocks=getBlocks(clientId),isPersistent=isLastBlockChangePersistent(),previousAreBlocksDifferent=!1;subscribed.current=!0;const unsubscribe=registry.subscribe((()=>{if(null!==clientId&&null===getBlockName(clientId))return;if(!(!clientId||areInnerBlocksControlled(clientId)))return;const newIsPersistent=isLastBlockChangePersistent(),newBlocks=getBlocks(clientId),areBlocksDifferent=newBlocks!==blocks;if(blocks=newBlocks,areBlocksDifferent&&(pendingChanges.current.incoming||__unstableIsLastBlockChangeIgnored()))return pendingChanges.current.incoming=null,void(isPersistent=newIsPersistent);if(areBlocksDifferent||previousAreBlocksDifferent&&!areBlocksDifferent&&newIsPersistent&&!isPersistent){isPersistent=newIsPersistent,pendingChanges.current.outgoing.push(blocks);(isPersistent?onChangeRef.current:onInputRef.current)(blocks,{selection:{selectionStart:getSelectionStart(),selectionEnd:getSelectionEnd(),initialPosition:getSelectedBlocksInitialCaretPosition()}})}previousAreBlocksDifferent=areBlocksDifferent}));return()=>unsubscribe()}),[registry,clientId])}},"./packages/block-editor/src/components/block-mover/stories/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_default:function(){return _default}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/index.js"),_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/blocks/build-module/index.js"),_wordpress_block_library__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/block-library/build-module/index.js"),_wordpress_data__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/data/build-module/components/use-dispatch/use-dispatch.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/build-module/toolbar/toolbar/index.js"),___WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/block-editor/src/components/block-mover/index.js"),_provider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/block-editor/src/components/provider/index.js"),_store__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block-editor/src/store/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");(0,_wordpress_block_library__WEBPACK_IMPORTED_MODULE_3__.Pr)();const blocks=[(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.j4)("core/group",{layout:{type:"flex"}},[(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.j4)("core/paragraph"),(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.j4)("core/paragraph"),(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.j4)("core/paragraph")]),(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.j4)("core/buttons",{},[(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.j4)("core/button"),(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.j4)("core/button"),(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.j4)("core/button")])];function Provider(_ref){let{children:children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{margin:"24px",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_provider__WEBPACK_IMPORTED_MODULE_4__.Z,{value:blocks,children:children})})}function BlockMoverStory(){const{updateBlockListSettings:updateBlockListSettings}=(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.Z)(_store__WEBPACK_IMPORTED_MODULE_1__.h);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)((()=>{updateBlockListSettings(blocks[1].clientId,{orientation:"horizontal"})}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"The mover by default is vertical"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Z,{label:"Block Mover",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_8__.Z,{clientIds:blocks.length?[blocks[0].innerBlocks[1].clientId]:[]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{style:{marginTop:36},children:"But it can also accommodate horizontal blocks."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Z,{label:"Block Mover",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_8__.Z,{clientIds:blocks.length?[blocks[1].innerBlocks[1].clientId]:[]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{style:{marginTop:36},children:"We can also hide the drag handle."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Z,{label:"Block Mover",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_8__.Z,{clientIds:blocks.length?[blocks[1].innerBlocks[0].clientId]:[],hideDragHandle:!0})})]})}Provider.displayName="Provider",BlockMoverStory.displayName="BlockMoverStory",__webpack_exports__.default={parameters:{sourceLink:"packages/block-editor/src/components/block-mover",storySource:{source:"/**\n * WordPress dependencies\n */\nimport { useEffect } from '@wordpress/element';\nimport { createBlock } from '@wordpress/blocks';\nimport { registerCoreBlocks } from '@wordpress/block-library';\nimport { useDispatch } from '@wordpress/data';\nimport { Toolbar } from '@wordpress/components';\n\n/**\n * Internal dependencies\n */\nimport BlockMover from '../';\nimport BlockEditorProvider from '../../provider';\nimport { store as blockEditorStore } from '../../../store';\n\nregisterCoreBlocks();\nconst blocks = [\n\t// vertical\n\tcreateBlock( 'core/group', { layout: { type: 'flex' } }, [\n\t\tcreateBlock( 'core/paragraph' ),\n\t\tcreateBlock( 'core/paragraph' ),\n\t\tcreateBlock( 'core/paragraph' ),\n\t] ),\n\t// horizontal\n\tcreateBlock( 'core/buttons', {}, [\n\t\tcreateBlock( 'core/button' ),\n\t\tcreateBlock( 'core/button' ),\n\t\tcreateBlock( 'core/button' ),\n\t] ),\n];\n\nfunction Provider( { children } ) {\n\tconst wrapperStyle = { margin: '24px', position: 'relative' };\n\n\treturn (\n\t\t<div style={ wrapperStyle }>\n\t\t\t<BlockEditorProvider value={ blocks }>\n\t\t\t\t{ children }\n\t\t\t</BlockEditorProvider>\n\t\t</div>\n\t);\n}\n\nfunction BlockMoverStory() {\n\tconst { updateBlockListSettings } = useDispatch( blockEditorStore );\n\n\tuseEffect( () => {\n\t\t/**\n\t\t * This shouldn't be needed but unfortunatley\n\t\t * the layout orientation is not declarative, we need\n\t\t *  to render the blocks to update the block settings in the state.\n\t\t */\n\t\tupdateBlockListSettings( blocks[ 1 ].clientId, {\n\t\t\torientation: 'horizontal',\n\t\t} );\n\t}, [] );\n\n\treturn (\n\t\t<div>\n\t\t\t<p>The mover by default is vertical</p>\n\t\t\t<Toolbar label=\"Block Mover\">\n\t\t\t\t<BlockMover\n\t\t\t\t\tclientIds={\n\t\t\t\t\t\tblocks.length\n\t\t\t\t\t\t\t? [ blocks[ 0 ].innerBlocks[ 1 ].clientId ]\n\t\t\t\t\t\t\t: []\n\t\t\t\t\t}\n\t\t\t\t/>\n\t\t\t</Toolbar>\n\n\t\t\t<p style={ { marginTop: 36 } }>\n\t\t\t\tBut it can also accommodate horizontal blocks.\n\t\t\t</p>\n\t\t\t<Toolbar label=\"Block Mover\">\n\t\t\t\t<BlockMover\n\t\t\t\t\tclientIds={\n\t\t\t\t\t\tblocks.length\n\t\t\t\t\t\t\t? [ blocks[ 1 ].innerBlocks[ 1 ].clientId ]\n\t\t\t\t\t\t\t: []\n\t\t\t\t\t}\n\t\t\t\t/>\n\t\t\t</Toolbar>\n\n\t\t\t<p style={ { marginTop: 36 } }>We can also hide the drag handle.</p>\n\t\t\t<Toolbar label=\"Block Mover\">\n\t\t\t\t<BlockMover\n\t\t\t\t\tclientIds={\n\t\t\t\t\t\tblocks.length\n\t\t\t\t\t\t\t? [ blocks[ 1 ].innerBlocks[ 0 ].clientId ]\n\t\t\t\t\t\t\t: []\n\t\t\t\t\t}\n\t\t\t\t\thideDragHandle\n\t\t\t\t/>\n\t\t\t</Toolbar>\n\t\t</div>\n\t);\n}\n\nexport default {\n\ttitle: 'BlockEditor/BlockMover',\n};\n\nexport const _default = () => {\n\treturn (\n\t\t<Provider>\n\t\t\t<BlockMoverStory />\n\t\t</Provider>\n\t);\n};\n",locationsMap:{default:{startLoc:{col:24,line:104},endLoc:{col:1,line:110},startBody:{col:24,line:104},endBody:{col:1,line:110}}}}},title:"BlockEditor/BlockMover"};const _default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Provider,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BlockMoverStory,{})});_default.displayName="_default",_default.__docgenInfo={description:"",methods:[],displayName:"_default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/block-mover/stories/index.js"]={name:"_default",docgenInfo:_default.__docgenInfo,path:"packages/block-editor/src/components/block-mover/stories/index.js"})}}]);