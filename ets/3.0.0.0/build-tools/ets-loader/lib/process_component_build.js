"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.processComponentBuild=processComponentBuild,exports.processComponentBlock=processComponentBlock,exports.bindComponentAttr=bindComponentAttr,exports.getName=getName,exports.isAttributeNode=isAttributeNode,exports.appComponentCollection=void 0;var _typescript=_interopRequireDefault(require("typescript")),_path=_interopRequireDefault(require("path")),_pre_define=require("./pre_define"),_component_map=require("./component_map"),_validate_ui_syntax=require("./validate_ui_syntax"),_process_custom_component=require("./process_custom_component"),_utils=require("./utils"),_main=require("../main"),_process_ui_syntax=require("./process_ui_syntax");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _newArrowCheck(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}var appComponentCollection=new Set;function processComponentBuild(e,t){var r=_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_RENDER_FUNCTION);return e.body&&e.body.statements&&e.body.statements.length&&validateRootNode(e,t)?_typescript.default.factory.updateMethodDeclaration(e,e.decorators,e.modifiers,e.asteriskToken,r,e.questionToken,e.typeParameters,e.parameters,e.type,processComponentBlock(e.body,!1,t)):_typescript.default.factory.updateMethodDeclaration(e,e.decorators,e.modifiers,e.asteriskToken,r,e.questionToken,e.typeParameters,e.parameters,e.type,e.body)}function processComponentBlock(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=[];return processComponentChild(e,a,r),t&&a.unshift(createRenderingInProgress(!0)),n&&(a.unshift(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_TRANSITION_NAME),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_FUNCTION),null))),a.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_TRANSITION_NAME),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_POP_FUNCTION),null)))),t&&a.push(createRenderingInProgress(!1)),_typescript.default.factory.updateBlock(e,a)}function validateRootNode(e,t){var r=!1;if(e.body.statements.length<4)switch(e.body.statements.length){case 1:validateFirstNode(e.body.statements[0])&&(r=!0);break;case 2:validateFirstNode(e.body.statements[0])&&validateBlockNode(e.body.statements[1])&&(r=!0);break;case 3:validateFirstNode(e.body.statements[0])&&validateBlockNode(e.body.statements[1])&&validateSecondNode(e.body.statements[2])&&(r=!0)}return r||t.push({type:_utils.LogType.ERROR,message:"There should have a root container component.",pos:e.body.statements.pos}),r}function processComponentChild(e,t,r){var n=this;e.statements.length&&e.statements.forEach(function(a,o){if(_newArrowCheck(this,n),_typescript.default.isExpressionStatement(a)){var s=getName(a);switch(getComponentType(a,r,s)){case ComponentType.innerComponent:processInnerComponent(a,o,Array.from(e.statements),t,r,s);break;case ComponentType.customComponent:(0,_process_custom_component.processCustomComponent)(a,t,r);break;case ComponentType.forEachComponent:processForEachComponent(a,t,r);break;case ComponentType.customBuilderMethod:t.push(a)}}else _typescript.default.isIfStatement(a)?(appComponentCollection.add(_pre_define.COMPONENT_IF),processIfStatement(a,t,r)):_typescript.default.isBlock(a)||r.push({type:_utils.LogType.ERROR,message:"Only UI component syntax can be written in build method.",pos:a.getStart()})}.bind(this))}function processInnerComponent(e,t,r,n,a,o){var s=createComponent(e,_pre_define.COMPONENT_CREATE_FUNCTION);if(n.push(s.newNode),_main.projectConfig.isPreview&&!_component_map.NO_DEBUG_LINE_COMPONENT.has(o)){var i=_process_ui_syntax.transformLog.sourceFile.getLineAndCharacterOfPosition(getRealNodePos(e)),p=_main.projectConfig.projectPath,c=_process_ui_syntax.transformLog.sourceFile.fileName.replace(/.ts$/,""),_="".concat(_path.default.relative(p,c).replace(/\\+/g,"/"))+"(".concat(i.line+1,":").concat(i.character+1,")"),u=_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(_typescript.default.factory.createIdentifier(getName(e)),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_DEBUGLINE_FUNCTION),_typescript.default.factory.createNodeArray([_typescript.default.factory.createStringLiteral(_)])));n.push(u)}t+1<r.length&&_typescript.default.isBlock(r[t+1])?(s.isButton&&(_main.projectConfig.isPreview?n.splice(-2,1,createComponent(e,_pre_define.COMPONENT_CREATE_CHILD_FUNCTION).newNode):n.splice(-1,1,createComponent(e,_pre_define.COMPONENT_CREATE_CHILD_FUNCTION).newNode)),t+2<r.length&&_typescript.default.isExpressionStatement(r[t+2])&&isAttributeNode(r[t+2])&&bindComponentAttr(r[t+2],s.identifierNode,n,a),processComponentChild(r[t+1],n,a)):bindComponentAttr(e,s.identifierNode,n,a),(s.isContainerComponent||s.needPop)&&n.push(createComponent(e,_pre_define.COMPONENT_POP_FUNCTION).newNode)}function getRealNodePos(e){return-1===e.pos&&e.expression?getRealNodePos(e.expression):e.getStart()}function processForEachComponent(e,t,r){var n=_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(e.expression.expression,_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_POP_FUNCTION),null));if(_typescript.default.isCallExpression(e.expression)){var a,o=_typescript.default.factory.createPropertyAccessExpression(e.expression.expression,_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_FUNCTION)),s=Array.from(e.expression.arguments);s.length&&(a=_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createIdentifier(_pre_define.FOREACH_OBSERVED_OBJECT),_typescript.default.factory.createIdentifier(_pre_define.FOREACH_GET_RAW_OBJECT)),void 0,[s[0]])),s.splice(0,1,a);var i=processForEachBlock(e.expression,r);i&&s.splice(1,1,i),e=addForEachId(_typescript.default.factory.updateExpressionStatement(e,_typescript.default.factory.updateCallExpression(e.expression,o,e.expression.typeArguments,s)))}t.push(e,n)}function addForEachId(e){var t=e.expression;return _typescript.default.factory.updateExpressionStatement(e,_typescript.default.factory.updateCallExpression(t,t.expression,t.typeArguments,[_typescript.default.factory.createStringLiteral((++_utils.componentInfo.id).toString()),_typescript.default.factory.createThis()].concat(_toConsumableArray(t.arguments))))}function processForEachBlock(e,t){if(e.arguments.length>1&&_typescript.default.isArrowFunction(e.arguments[1])){var r=e.expression.getText()===_pre_define.COMPONENT_LAZYFOREACH,n=e.arguments[1],a=n.body;if(!(e.arguments.length>2)||_typescript.default.isArrowFunction(e.arguments[2])){if(_typescript.default.isBlock(a))return _typescript.default.factory.updateArrowFunction(n,n.modifiers,n.typeParameters,n.parameters,n.type,n.equalsGreaterThanToken,processComponentBlock(a,r,t));var o=_typescript.default.factory.createExpressionStatement(a),s=_typescript.default.factory.createBlock([o],!0);return o.parent=s,_typescript.default.factory.updateArrowFunction(n,n.modifiers,n.typeParameters,n.parameters,n.type,n.equalsGreaterThanToken,processComponentBlock(s,r,t))}t.push({type:_utils.LogType.ERROR,message:"There should be wrapped in curly braces in ForEach.",pos:a.getStart()})}return null}function createRenderingInProgress(e){return _typescript.default.factory.createExpressionStatement(_typescript.default.factory.createBinaryExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createThis(),_typescript.default.factory.createIdentifier(_pre_define.IS_RENDERING_IN_PROGRESS)),_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsToken),e?_typescript.default.factory.createTrue():_typescript.default.factory.createFalse()))}function processIfStatement(e,t,r){var n=createIfCreate(),a=processInnerIfStatement(e,0,r),o=createIfPop();t.push(n,a,o)}function processInnerIfStatement(e,t,r){_typescript.default.isIdentifier(e.expression)&&void 0===e.expression.originalKeywordKind&&!e.expression.escapedText&&(r.push({type:_utils.LogType.ERROR,message:"Condition expression cannot be null in if statement.",pos:e.expression.getStart()}),e=_typescript.default.factory.updateIfStatement(e,_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_IF_UNDEFINED),e.thenStatement,e.elseStatement));var n=processThenStatement(e.thenStatement,t,r),a=processElseStatement(e.elseStatement,t,r);return _typescript.default.factory.updateIfStatement(e,e.expression,n,a)}function processThenStatement(e,t,r){return _typescript.default.isExpressionStatement(e)&&_typescript.default.isIdentifier(e.expression)&&void 0===e.expression.originalKeywordKind&&!e.expression.escapedText&&r.push({type:_utils.LogType.ERROR,message:"Then statement cannot be null in if statement.",pos:e.expression.getStart()}),e&&(_typescript.default.isBlock(e)?e=processIfBlock(e,t,r):_typescript.default.isIfStatement(e)?(e=processInnerIfStatement(e,0,r),e=_typescript.default.factory.createBlock([createIfCreate(),createIfBranchId(t),e,createIfPop()],!0)):e=processIfBlock(e=_typescript.default.factory.createBlock([e],!0),t,r)),e}function processElseStatement(e,t,r){return e&&(e=_typescript.default.isBlock(e)?processIfBlock(e,t+1,r):_typescript.default.isIfStatement(e)?processInnerIfStatement(e,t+1,r):processIfBlock(e=_typescript.default.factory.createBlock([e],!0),t+1,r)),e}function processIfBlock(e,t,r){return addIfBranchId(t,processComponentBlock(e,!1,r))}function addIfBranchId(e,t){return _typescript.default.factory.updateBlock(t,[createIfBranchId(e)].concat(_toConsumableArray(t.statements)))}function createIf(){return _typescript.default.factory.createIdentifier(_pre_define.COMPONENT_IF)}function createIfCreate(){return _typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(createIf(),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_FUNCTION),_typescript.default.factory.createNodeArray([])))}function createIfPop(){return _typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(createIf(),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_POP_FUNCTION),null))}function createIfBranchId(e){return _typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(createIf(),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_IF_BRANCH_ID_FUNCTION),_typescript.default.factory.createNodeArray([_typescript.default.factory.createNumericLiteral(e)])))}function createComponent(e,t){for(var r={newNode:e,identifierNode:null,isContainerComponent:!1,isButton:!1,needPop:!1},n=_typescript.default.factory.createIdentifier(t),a=e.expression;a&&!_typescript.default.isIdentifier(a)&&a.expression;)a=a.expression;return a&&a.parent&&_typescript.default.isCallExpression(a.parent)&&_typescript.default.isIdentifier(a)&&(a.getText()===_pre_define.COMPONENT_BUTTON&&t!==_pre_define.COMPONENT_POP_FUNCTION&&(r.isButton=!0,n=t===_pre_define.COMPONENT_CREATE_CHILD_FUNCTION?_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_CHILD_FUNCTION):_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_LABEL_FUNCTION)),a.getText()===_pre_define.COMPONENT_BLANK&&(r.needPop=!0),_component_map.BUILDIN_CONTAINER_COMPONENT.has(a.getText())&&(r.isContainerComponent=!0),r.newNode=t===_pre_define.COMPONENT_POP_FUNCTION?_typescript.default.factory.updateExpressionStatement(e,(0,_utils.createFunction)(a,n,null)):_typescript.default.factory.updateExpressionStatement(e,(0,_utils.createFunction)(a,n,a.parent.arguments)),r.identifierNode=a),r}function bindComponentAttr(e,t,r,n){for(var a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=e.expression,s=[],i={statement:null,kind:!1};o&&_typescript.default.isCallExpression(o)&&o.expression;)if(_typescript.default.isPropertyAccessExpression(o.expression)&&o.expression.name&&_typescript.default.isIdentifier(o.expression.name))addComponentAttr(o,o.expression.name,i,s,t,n),o=o.expression.expression;else if(_typescript.default.isIdentifier(o.expression)){_component_map.INNER_COMPONENT_NAMES.has(o.expression.getText())||_component_map.GESTURE_TYPE_NAMES.has(o.expression.getText())||addComponentAttr(o,o.expression,i,s,t,n);break}i.statement&&i.kind&&s.push(i.statement),s.length&&(a?r.push.apply(r,_toConsumableArray(s.reverse())):r.push.apply(r,s))}function addComponentAttr(e,t,r,n,a,o){var s=t.getText();s===_pre_define.ATTRIBUTE_ANIMATION?(r.statement?n.push(r.statement):1===e.arguments.length&&e.arguments[0].kind===_typescript.default.SyntaxKind.NullKeyword||n.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(_typescript.default.factory.createIdentifier(_pre_define.GLOBAL_CONTEXT),t,[_typescript.default.factory.createNull()]))),r.statement=_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(_typescript.default.factory.createIdentifier(_pre_define.GLOBAL_CONTEXT),t,e.arguments)),r.kind=!1):_component_map.GESTURE_ATTRS.has(s)?(parseGesture(e,s,n,o),r.kind=!0):isExtendFunctionNode(a,s)?(validateExtendParameterCount(e,a,s,o),n.push(_typescript.default.factory.createExpressionStatement(_typescript.default.factory.createCallExpression(_typescript.default.factory.createIdentifier("__".concat(a.escapedText.toString(),"__").concat(s)),void 0,e.arguments))),r.kind=!0):(n.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(a,t,e.arguments))),r.kind=!0)}function isExtendFunctionNode(e,t){var r=this;if(e&&_component_map.EXTEND_ATTRIBUTE.has(e.escapedText.toString())&&_toConsumableArray(_component_map.EXTEND_ATTRIBUTE.get(e.escapedText.toString())).map(function(e){return _newArrowCheck(this,r),e.attribute}.bind(this)).includes(t))return!0;return!1}exports.appComponentCollection=appComponentCollection;var ComponentType,gestureMap=new Map([[_pre_define.PRIORITY_GESTURE_ATTRIBUTE,_pre_define.GESTURE_ENUM_VALUE_HIGH],[_pre_define.PARALLEL_GESTURE_ATTRIBUTE,_pre_define.GESTURE_ENUM_VALUE_PARALLEL],[_pre_define.GESTURE_ATTRIBUTE,_pre_define.GESTURE_ENUM_VALUE_LOW]]);function parseGesture(e,t,r,n){r.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_GESTURE),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_POP_FUNCTION),null))),parseGestureInterface(e,r,n);var a=_typescript.default.factory.createNodeArray([_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createIdentifier(_pre_define.GESTURE_ENUM_KEY),_typescript.default.factory.createIdentifier(gestureMap.get(t)))]);e.arguments&&e.arguments.length>1&&_typescript.default.isPropertyAccessExpression(e.arguments[1])&&a.push(e.arguments[1]),r.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_GESTURE),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_FUNCTION),a)))}function processGestureType(e,t,r){for(var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=[],o=_typescript.default.factory.createExpressionStatement(e),s=e.expression;s&&!_typescript.default.isIdentifier(s)&&s.expression;)s=s.expression;if(s&&s.parent&&_typescript.default.isCallExpression(s.parent)&&_typescript.default.isIdentifier(s)&&_component_map.GESTURE_TYPE_NAMES.has(s.escapedText.toString()))if(a.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(s,_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_POP_FUNCTION),null))),s.escapedText.toString()===_pre_define.COMPONENT_GESTURE_GROUP){var i=[];parseGestureInterface(s.parent,i,r,!0),a.push.apply(a,_toConsumableArray(i.reverse())),bindComponentAttr(o,s,a,r,!1);var p=null;s.parent.arguments&&s.parent.arguments.length&&(p=_typescript.default.factory.createNodeArray([s.parent.arguments[0]])),a.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(s,_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_FUNCTION),p)))}else bindComponentAttr(o,s,a,r,!1),a.push(_typescript.default.factory.createExpressionStatement((0,_utils.createFunction)(s,_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_FUNCTION),s.parent.arguments)));a.length&&(n?t.push.apply(t,_toConsumableArray(a.reverse())):t.push.apply(t,a))}function parseGestureInterface(e,t,r){var n=this,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.arguments&&e.arguments.length&&e.arguments.forEach(function(e){_newArrowCheck(this,n),_typescript.default.isCallExpression(e)&&processGestureType(e,t,r,a)}.bind(this))}function getName(e){for(var t,r=e.expression;r;){if(_typescript.default.isIdentifier(r)&&r.parent&&_typescript.default.isCallExpression(r.parent)){t=r.escapedText.toString();break}if(_typescript.default.isPropertyAccessExpression(r)&&r.name&&_typescript.default.isIdentifier(r.name)&&!_component_map.BUILDIN_STYLE_NAMES.has(r.name.escapedText.toString())){t=r.name.escapedText.toString();break}r=r.expression}return t}function isAttributeNode(e){for(var t,r=e.expression;r;){if(_typescript.default.isCallExpression(r)&&r.expression&&_typescript.default.isIdentifier(r.expression)){t=r.expression.escapedText.toString();break}r=r.expression}return _component_map.BUILDIN_STYLE_NAMES.has(t)}function validateFirstNode(e){var t=_validate_ui_syntax.componentCollection.entryComponent===_validate_ui_syntax.componentCollection.currentClassName;return!!(t&&validateEntryComponent(e)||!t&&validateCustomComponent(e))}function validateEntryComponent(e){return!(!_typescript.default.isExpressionStatement(e)||!_component_map.BUILDIN_CONTAINER_COMPONENT.has(getName(e)))}function validateCustomComponent(e){return!!(_typescript.default.isIfStatement(e)||_typescript.default.isExpressionStatement(e)&&(_component_map.INNER_COMPONENT_NAMES.has(getName(e))||_validate_ui_syntax.componentCollection.customComponents.has(getName(e))))}function validateBlockNode(e){return!!_typescript.default.isBlock(e)}function validateSecondNode(e){return!(!_typescript.default.isExpressionStatement(e)||!isAttributeNode(e))}function getComponentType(e,t,r){return _component_map.INNER_COMPONENT_NAMES.has(r)?ComponentType.innerComponent:_validate_ui_syntax.componentCollection.customComponents.has(r)?ComponentType.customComponent:r===_pre_define.COMPONENT_FOREACH||r===_pre_define.COMPONENT_LAZYFOREACH?(appComponentCollection.add(r),ComponentType.forEachComponent):_component_map.CUSTOM_BUILDER_METHOD.has(r)?ComponentType.customBuilderMethod:(isAttributeNode(e)||t.push({type:_utils.LogType.ERROR,message:"'".concat(e.getText(),"' does not meet UI component syntax."),pos:e.getStart()}),null)}function validateExtendParameterCount(e,t,r,n){var a=this,o=_toConsumableArray(_component_map.EXTEND_ATTRIBUTE.get(t.escapedText.toString())).filter(function(e){return _newArrowCheck(this,a),e.attribute===r}.bind(this))[0].parameterCount;e.arguments&&e.arguments.length!==o&&n.push({type:_utils.LogType.ERROR,message:"The '".concat(r,"' is expected ").concat(o," arguments, but got ").concat(e.arguments.length,"."),pos:e.getStart()})}!function(e){e[e.innerComponent=0]="innerComponent",e[e.customComponent=1]="customComponent",e[e.forEachComponent=2]="forEachComponent",e[e.customBuilderMethod=3]="customBuilderMethod"}(ComponentType||(ComponentType={}));