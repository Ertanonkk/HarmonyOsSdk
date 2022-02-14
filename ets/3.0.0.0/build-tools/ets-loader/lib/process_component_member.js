"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.processMemberVariableDecorators=processMemberVariableDecorators,exports.createViewCreate=createViewCreate,exports.createCustomComponentNewExpression=createCustomComponentNewExpression,exports.curPropMap=exports.UpdateResult=exports.stateObjectCollection=exports.decoratorParamSet=exports.simpleTypes=exports.immutableDecorators=exports.setUpdateParamsDecorators=exports.mandatoryToInitViaParamDecorators=exports.forbiddenSpecifyDefaultValueDecorators=exports.mandatorySpecifyDefaultValueDecorators=exports.appStorageDecorators=exports.propAndLinkDecorators=exports.observedPropertyDecorators=void 0;var _typescript=_interopRequireDefault(require("typescript")),_pre_define=require("./pre_define"),_component_map=require("./component_map"),_validate_ui_syntax=require("./validate_ui_syntax"),_process_component_constructor=require("./process_component_constructor"),_utils=require("./utils"),_process_component_class=require("./process_component_class");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,n=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){n=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(n)throw i}}}}function _newArrowCheck(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var observedPropertyDecorators=new Set([_pre_define.COMPONENT_STATE_DECORATOR,_pre_define.COMPONENT_PROVIDE_DECORATOR]);exports.observedPropertyDecorators=observedPropertyDecorators;var propAndLinkDecorators=new Set([_pre_define.COMPONENT_PROP_DECORATOR,_pre_define.COMPONENT_LINK_DECORATOR]);exports.propAndLinkDecorators=propAndLinkDecorators;var appStorageDecorators=new Set([_pre_define.COMPONENT_STORAGE_PROP_DECORATOR,_pre_define.COMPONENT_STORAGE_LINK_DECORATOR]);exports.appStorageDecorators=appStorageDecorators;var mandatorySpecifyDefaultValueDecorators=new Set([].concat(_toConsumableArray(observedPropertyDecorators),_toConsumableArray(appStorageDecorators)));exports.mandatorySpecifyDefaultValueDecorators=mandatorySpecifyDefaultValueDecorators;var forbiddenSpecifyDefaultValueDecorators=new Set([].concat(_toConsumableArray(propAndLinkDecorators),[_pre_define.COMPONENT_CONSUME_DECORATOR,_pre_define.COMPONENT_OBJECT_LINK_DECORATOR]));exports.forbiddenSpecifyDefaultValueDecorators=forbiddenSpecifyDefaultValueDecorators;var mandatoryToInitViaParamDecorators=new Set([].concat(_toConsumableArray(propAndLinkDecorators),[_pre_define.COMPONENT_OBJECT_LINK_DECORATOR]));exports.mandatoryToInitViaParamDecorators=mandatoryToInitViaParamDecorators;var setUpdateParamsDecorators=new Set([].concat(_toConsumableArray(observedPropertyDecorators),[_pre_define.COMPONENT_PROP_DECORATOR,_pre_define.COMPONENT_OBJECT_LINK_DECORATOR]));exports.setUpdateParamsDecorators=setUpdateParamsDecorators;var immutableDecorators=new Set([_pre_define.COMPONENT_STORAGE_PROP_DECORATOR,_pre_define.COMPONENT_OBJECT_LINK_DECORATOR]);exports.immutableDecorators=immutableDecorators;var simpleTypes=new Set([_typescript.default.SyntaxKind.StringKeyword,_typescript.default.SyntaxKind.NumberKeyword,_typescript.default.SyntaxKind.BooleanKeyword,_typescript.default.SyntaxKind.EnumDeclaration]);exports.simpleTypes=simpleTypes;var decoratorParamSet=new Set;exports.decoratorParamSet=decoratorParamSet;var stateObjectCollection=new Set;exports.stateObjectCollection=stateObjectCollection;var UpdateResult=function(){function e(){_classCallCheck(this,e),_defineProperty(this,"itemUpdate",!1),_defineProperty(this,"ctorUpdate",!1),_defineProperty(this,"properity",void 0),_defineProperty(this,"ctor",void 0),_defineProperty(this,"variableGet",void 0),_defineProperty(this,"variableSet",void 0),_defineProperty(this,"updateParams",void 0),_defineProperty(this,"deleteParams",!1),_defineProperty(this,"controllerSet",void 0)}return _createClass(e,[{key:"setProperity",value:function(e){this.itemUpdate=!0,this.properity=e}},{key:"setCtor",value:function(e){this.ctorUpdate=!0,this.ctor=e}},{key:"setControllerSet",value:function(e){this.controllerSet=e}},{key:"getControllerSet",value:function(){return this.controllerSet}},{key:"setVariableGet",value:function(e){this.variableGet=e}},{key:"setVariableSet",value:function(e){this.variableSet=e}},{key:"setUpdateParams",value:function(e){this.updateParams=e}},{key:"setDeleteParams",value:function(e){this.deleteParams=e}},{key:"isItemUpdate",value:function(){return this.itemUpdate}},{key:"isCtorUpdate",value:function(){return this.ctorUpdate}},{key:"getProperity",value:function(){return this.properity}},{key:"getCtor",value:function(){return this.ctor}},{key:"getUpdateParams",value:function(){return this.updateParams}},{key:"getVariableGet",value:function(){return this.variableGet}},{key:"getVariableSet",value:function(){return this.variableSet}},{key:"isDeleteParams",value:function(){return this.deleteParams}}]),e}();exports.UpdateResult=UpdateResult;var curPropMap=new Map;function processMemberVariableDecorators(e,t,r,a,o,i,s,n){var c=new UpdateResult,p=t.name;if(t.decorators&&t.decorators.length){if(!t.type)return validatePropertyNonType(p,i),c;processPropertyNodeDecorator(e,t,c,r,p,a,i,s,n)}else curPropMap.set(p.escapedText.toString(),_pre_define.COMPONENT_NON_DECORATOR),c.setProperity(void 0),c.setUpdateParams(createUpdateParams(p,_pre_define.COMPONENT_NON_DECORATOR)),c.setCtor((0,_process_component_constructor.updateConstructor)(r,[],[createVariableInitStatement(t,_pre_define.COMPONENT_NON_DECORATOR,i,s,n)])),c.setControllerSet(createControllerSet(t,e,p,o));return c}function createControllerSet(e,t,r,a){if(_validate_ui_syntax.componentCollection.customDialogs.has(t.getText())&&e.type&&e.type.getText()===_pre_define.SET_CONTROLLER_CTR_TYPE)return a.hasController=!0,_typescript.default.factory.createMethodDeclaration(void 0,void 0,void 0,_typescript.default.factory.createIdentifier(_pre_define.SET_CONTROLLER_METHOD),void 0,void 0,[_typescript.default.factory.createParameterDeclaration(void 0,void 0,void 0,_typescript.default.factory.createIdentifier(_pre_define.SET_CONTROLLER_CTR),void 0,_typescript.default.factory.createTypeReferenceNode(_typescript.default.factory.createIdentifier(_pre_define.SET_CONTROLLER_CTR_TYPE),void 0),void 0)],void 0,_typescript.default.factory.createBlock([_typescript.default.factory.createExpressionStatement(_typescript.default.factory.createBinaryExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createThis(),r),_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsToken),_typescript.default.factory.createIdentifier(_pre_define.SET_CONTROLLER_CTR)))],!0))}function processPropertyNodeDecorator(e,t,r,a,o,i,s,n,c){for(var p=0,d=0;d<t.decorators.length;d++){var l=t.decorators[d].getText().replace(/\(.*\)$/,"").trim();if(l!==_pre_define.COMPONENT_WATCH_DECORATOR&&curPropMap.set(o.escapedText.toString(),l),_component_map.BUILDIN_STYLE_NAMES.has(l.replace("@",""))&&validateDuplicateDecorator(t.decorators[d],s),l!==_pre_define.COMPONENT_WATCH_DECORATOR&&isForbiddenUseStateType(t.type))return void validateForbiddenUseStateType(o,l,t.type.typeName.getText(),s);if(e.getText()===_validate_ui_syntax.componentCollection.entryComponent&&mandatoryToInitViaParamDecorators.has(l)&&validateHasIllegalDecoratorInEntry(e,o,l,s),t.initializer&&forbiddenSpecifyDefaultValueDecorators.has(l))return void validatePropertyDefaultValue(o,l,s);if(!t.initializer&&mandatorySpecifyDefaultValueDecorators.has(l))return void validatePropertyNonDefaultValue(o,l,s);t.questionToken&&mandatoryToInitViaParamDecorators.has(l)&&validateHasIllegalQuestionToken(o,l,s),isSimpleType(t.type,n)||stateObjectCollection.add(o.escapedText.toString()),l===_pre_define.COMPONENT_WATCH_DECORATOR&&validateWatchDecorator(o,t.decorators.length,s)?processWatch(t,t.decorators[d],i,s):_pre_define.INNER_COMPONENT_MEMBER_DECORATORS.has(l)&&(p+=1,processStateDecorators(t,l,r,a,s,n,c))}p>1&&validateMultiDecorators(o,s)}function processStateDecorators(e,t,r,a,o,i,s){var n=e.name;r.setProperity(void 0);var c=[],p=createVariableInitStatement(e,t,o,i,s);p&&c.push(p),addAddProvidedVar(e,n,t,c),r.setCtor((0,_process_component_constructor.updateConstructor)(a,[],[].concat(c),!1)),r.setVariableGet(createGetAccessor(n,_pre_define.CREATE_GET_METHOD)),immutableDecorators.has(t)||r.setVariableSet(createSetAccessor(n,_pre_define.CREATE_SET_METHOD)),setUpdateParamsDecorators.has(t)&&r.setUpdateParams(createUpdateParams(n,t)),r.setDeleteParams(!0)}function processWatch(e,t,r,a){if(e.name){var o=e.name.getText();if(t.expression&&_typescript.default.isCallExpression(t.expression)&&t.expression.arguments&&1===t.expression.arguments.length){var i=_validate_ui_syntax.classMethodCollection.get(e.parent.name.getText()),s=t.expression.arguments[0];if(_typescript.default.isStringLiteral(s))i.has(s.text)?r.set(o,s):a.push({type:_utils.LogType.ERROR,message:"Cannot find name ".concat(s.getText()," in struct '").concat(e.parent.name.getText(),"'."),pos:s.getStart()});else if(_typescript.default.isIdentifier(t.expression.arguments[0])){var n=t.expression.arguments[0].getText(),c=createPropertyAccessExpressionWithThis(n);r.set(o,c),decoratorParamSet.add(n),validateWatchParam(_utils.LogType.WARN,s.getStart(),a)}else _typescript.default.isPropertyAccessExpression(t.expression.arguments[0])?(r.set(o,t.expression.arguments[0]),validateWatchParam(_utils.LogType.WARN,s.getStart(),a)):validateWatchParam(_utils.LogType.ERROR,s.getStart(),a)}}}function createVariableInitStatement(e,t,r,a,o){var i,s,n=e.name;switch(e.type&&(i=e.type),t){case _pre_define.COMPONENT_NON_DECORATOR:s=updateNormalProperty(e,n,r,o);break;case _pre_define.COMPONENT_STATE_DECORATOR:case _pre_define.COMPONENT_PROVIDE_DECORATOR:s=updateObservedProperty(e,n,i,a);break;case _pre_define.COMPONENT_LINK_DECORATOR:s=updateSynchedPropertyTwoWay(n,i,a);break;case _pre_define.COMPONENT_PROP_DECORATOR:s=updateSynchedPropertyOneWay(n,i,t,r,a);break;case _pre_define.COMPONENT_STORAGE_PROP_DECORATOR:case _pre_define.COMPONENT_STORAGE_LINK_DECORATOR:s=updateStoragePropAndLinkProperty(e,n,t===_pre_define.COMPONENT_STORAGE_PROP_DECORATOR?_pre_define.APP_STORAGE_SET_AND_PROP:_pre_define.APP_STORAGE_SET_AND_LINK,r);break;case _pre_define.COMPONENT_OBJECT_LINK_DECORATOR:s=updateSynchedPropertyNesedObject(n,i,t,r);break;case _pre_define.COMPONENT_CONSUME_DECORATOR:s=updateConsumeProperty(e,n)}return s}function createUpdateParams(e,t){var r;switch(t){case _pre_define.COMPONENT_NON_DECORATOR:case _pre_define.COMPONENT_STATE_DECORATOR:case _pre_define.COMPONENT_PROVIDE_DECORATOR:r=createUpdateParamsWithIf(e);break;case _pre_define.COMPONENT_PROP_DECORATOR:r=createUpdateParamsWithoutIf(e);break;case _pre_define.COMPONENT_OBJECT_LINK_DECORATOR:r=createUpdateParamsWithSet(e)}return r}function createUpdateParamsWithIf(e){return _typescript.default.factory.createIfStatement(_typescript.default.factory.createBinaryExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createIdentifier(_pre_define.CREATE_CONSTRUCTOR_PARAMS),_typescript.default.factory.createIdentifier(e.escapedText.toString())),_typescript.default.factory.createToken(_typescript.default.SyntaxKind.ExclamationEqualsEqualsToken),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CONSTRUCTOR_UNDEFINED)),_typescript.default.factory.createBlock([createUpdateParamsWithoutIf(e)],!0),void 0)}function createUpdateParamsWithoutIf(e){return _typescript.default.factory.createExpressionStatement(_typescript.default.factory.createBinaryExpression(createPropertyAccessExpressionWithThis(e.getText()),_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsToken),createPropertyAccessExpressionWithParams(e.getText())))}function createUpdateParamsWithSet(e){return _typescript.default.factory.createExpressionStatement(_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(createPropertyAccessExpressionWithThis("__".concat(e.getText())),_typescript.default.factory.createIdentifier(_pre_define.CREATE_SET_METHOD)),void 0,[createPropertyAccessExpressionWithParams(e.getText())]))}function updateNormalProperty(e,t,r,a){var o=_typescript.default.visitNode(processCustomDialogController(e,r),function e(t){(0,_process_component_class.isProperty)(t)&&(t=(0,_process_component_class.createReference)(t));return _typescript.default.visitEachChild(t,e,a)});return _typescript.default.factory.createExpressionStatement(_typescript.default.factory.createBinaryExpression(createPropertyAccessExpressionWithThis(t.getText()),_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsToken),o||_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CONSTRUCTOR_UNDEFINED)))}function processCustomDialogController(e,t){return e.initializer&&_typescript.default.isNewExpression(e.initializer)&&_typescript.default.isIdentifier(e.initializer.expression)&&e.initializer.expression.getText()===_pre_define.SET_CONTROLLER_CTR_TYPE?createCustomDialogController(e,e.initializer,t):e.initializer}function createCustomDialogController(e,t,r){var a=this;if(t.arguments&&1===t.arguments.length&&_typescript.default.isObjectLiteralExpression(t.arguments[0])&&t.arguments[0].properties){var o=t.arguments[0].properties.map(function(t){return _newArrowCheck(this,a),isCustomDialogControllerPropertyAssignment(t,r)&&(t=processCustomDialogControllerPropertyAssignment(e,t)),t}.bind(this));return _typescript.default.factory.createNewExpression(t.expression,t.typeArguments,[_typescript.default.factory.createObjectLiteralExpression(o,!0),_typescript.default.factory.createThis()])}}function isCustomDialogControllerPropertyAssignment(e,t){if(_typescript.default.isPropertyAssignment(e)&&_typescript.default.isIdentifier(e.name)&&e.name.getText()===_pre_define.CUSTOM_DIALOG_CONTROLLER_BUILDER){if(_typescript.default.isCallExpression(e.initializer)&&_typescript.default.isIdentifier(e.initializer.expression)&&_validate_ui_syntax.componentCollection.customDialogs.has(e.initializer.expression.getText()))return!0;validateCustomDialogControllerBuilderInit(e,t)}}function processCustomDialogControllerPropertyAssignment(e,t){if(_typescript.default.isCallExpression(t.initializer))return _typescript.default.factory.updatePropertyAssignment(t,t.name,processCustomDialogControllerBuilder(e,t.initializer))}function processCustomDialogControllerBuilder(e,t){var r=createCustomComponentNewExpression(t);return createCustomComponentBuilderArrowFunction(e,_typescript.default.factory.createIdentifier(_pre_define.JS_DIALOG),r)}function updateObservedProperty(e,t,r,a){return _typescript.default.factory.createExpressionStatement(_typescript.default.factory.createBinaryExpression(createPropertyAccessExpressionWithThis("__".concat(t.getText())),_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsToken),_typescript.default.factory.createNewExpression(_typescript.default.factory.createIdentifier(isSimpleType(r,a)?_pre_define.OBSERVED_PROPERTY_SIMPLE:_pre_define.OBSERVED_PROPERTY_OBJECT),void 0,[e.initializer,_typescript.default.factory.createThis(),_typescript.default.factory.createStringLiteral(t.escapedText.toString())])))}function updateSynchedPropertyTwoWay(e,t,r){var a=e.escapedText.toString();return createInitExpressionStatementForDecorator(a,isSimpleType(t,r)?_pre_define.SYNCHED_PROPERTY_SIMPLE_TWO_WAY:_pre_define.SYNCHED_PROPERTY_OBJECT_TWO_WAY,createPropertyAccessExpressionWithParams(a))}function updateSynchedPropertyOneWay(e,t,r,a,o){var i=e.escapedText.toString();if(isSimpleType(t,o))return createInitExpressionStatementForDecorator(i,_pre_define.SYNCHED_PROPERTY_SIMPLE_ONE_WAY,createPropertyAccessExpressionWithParams(i));validateNonSimpleType(e,r,a)}function updateStoragePropAndLinkProperty(e,t,r,a){if(isSingleKey(e)){var o=getDecoratorKey(e);return _typescript.default.factory.createExpressionStatement(_typescript.default.factory.createBinaryExpression(createPropertyAccessExpressionWithThis("__".concat(t.getText())),_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsToken),_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createIdentifier(_pre_define.APP_STORAGE),_typescript.default.factory.createIdentifier(_pre_define.APP_STORAGE_GET_OR_SET)),void 0,[]),_typescript.default.factory.createIdentifier(r)),void 0,[_typescript.default.factory.createStringLiteral(o),e.initializer,_typescript.default.factory.createThis()])))}validateAppStorageDecoractorsNonSingleKey(e,a)}function getDecoratorKey(e){var t,r=e.decorators[0].expression.arguments[0];return _typescript.default.isIdentifier(r)?(t=r.getText(),decoratorParamSet.add(t)):_typescript.default.isStringLiteral(r)&&(t=r.text),t}function updateSynchedPropertyNesedObject(e,t,r,a){if(isObservedClassType(t))return createInitExpressionStatementForDecorator(e.getText(),_pre_define.SYNCHED_PROPERTY_NESED_OBJECT,createPropertyAccessExpressionWithParams(e.getText()));validateNonObservedClassType(e,r,a)}function updateConsumeProperty(e,t){var r,a=t.getText();return r=isSingleKey(e)?getDecoratorKey(e):a,_typescript.default.factory.createExpressionStatement(_typescript.default.factory.createBinaryExpression(createPropertyAccessExpressionWithThis("__".concat(a)),_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsToken),_typescript.default.factory.createCallExpression(createPropertyAccessExpressionWithThis(_pre_define.INITIALIZE_CONSUME_FUNCTION),void 0,[_typescript.default.factory.createStringLiteral(r),_typescript.default.factory.createStringLiteral(a)])))}function createCustomComponentBuilderArrowFunction(e,t,r){return _typescript.default.factory.createArrowFunction(void 0,void 0,[],void 0,_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsGreaterThanToken),_typescript.default.factory.createBlock([_typescript.default.factory.createVariableStatement(void 0,_typescript.default.factory.createVariableDeclarationList([_typescript.default.factory.createVariableDeclaration(t,void 0,void 0,r)],_typescript.default.NodeFlags.Let)),_typescript.default.factory.createExpressionStatement(_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(t,_typescript.default.factory.createIdentifier(_pre_define.SET_CONTROLLER_METHOD)),void 0,[_typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createThis(),e.name)])),_typescript.default.factory.createExpressionStatement(createViewCreate(t))],!0))}function createViewCreate(e){return(0,_utils.createFunction)(_typescript.default.factory.createIdentifier(_pre_define.BASE_COMPONENT_NAME),_typescript.default.factory.createIdentifier(_pre_define.COMPONENT_CREATE_FUNCTION),_typescript.default.factory.createNodeArray([e]))}function createCustomComponentNewExpression(e){return addCustomComponentId(_typescript.default.factory.createNewExpression(e.expression,e.typeArguments,e.arguments.length?e.arguments:[]))}function addCustomComponentId(e){var t,r=this,a=_createForOfIteratorHelper(_validate_ui_syntax.componentCollection.customComponents);try{for(a.s();!(t=a.n()).done;){var o=t.value;_utils.componentInfo.componentNames.add(o)}}catch(e){a.e(e)}finally{a.f()}return _utils.componentInfo.componentNames.forEach(function(t){_newArrowCheck(this,r);var a,o=e.expression;e.arguments&&e.arguments.length&&(a=Array.from(e.arguments)),o&&(_typescript.default.isIdentifier(o)&&o.escapedText===t||_typescript.default.isPropertyAccessExpression(o)&&_typescript.default.isIdentifier(o.name)&&o.name.escapedText===t)?(a||(a=[_typescript.default.factory.createObjectLiteralExpression([],!0)]),a.unshift(_typescript.default.factory.createStringLiteral((++_utils.componentInfo.id).toString()),_typescript.default.factory.createThis()),e=_typescript.default.factory.updateNewExpression(e,e.expression,e.typeArguments,a)):a&&(e=_typescript.default.factory.updateNewExpression(e,e.expression,e.typeArguments,a))}.bind(this)),e}function createInitExpressionStatementForDecorator(e,t,r){return _typescript.default.factory.createExpressionStatement(_typescript.default.factory.createBinaryExpression(createPropertyAccessExpressionWithThis("__".concat(e)),_typescript.default.factory.createToken(_typescript.default.SyntaxKind.EqualsToken),_typescript.default.factory.createNewExpression(_typescript.default.factory.createIdentifier(t),void 0,[r,_typescript.default.factory.createThis(),_typescript.default.factory.createStringLiteral(e)])))}function createPropertyAccessExpressionWithParams(e){return _typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createIdentifier(_pre_define.CREATE_CONSTRUCTOR_PARAMS),_typescript.default.factory.createIdentifier(e))}function createPropertyAccessExpressionWithThis(e){return _typescript.default.factory.createPropertyAccessExpression(_typescript.default.factory.createThis(),_typescript.default.factory.createIdentifier(e))}function addAddProvidedVar(e,t,r,a){r===_pre_define.COMPONENT_PROVIDE_DECORATOR&&(isSingleKey(e)&&a.push(createAddProvidedVar(getDecoratorKey(e),t)),a.push(createAddProvidedVar(t.getText(),t)))}function createAddProvidedVar(e,t){return _typescript.default.factory.createExpressionStatement(_typescript.default.factory.createCallExpression(createPropertyAccessExpressionWithThis(_pre_define.ADD_PROVIDED_VAR),void 0,[_typescript.default.factory.createStringLiteral(e),createPropertyAccessExpressionWithThis("__".concat(t.getText()))]))}function createGetAccessor(e,t){return _typescript.default.factory.createGetAccessorDeclaration(void 0,void 0,e,[],void 0,_typescript.default.factory.createBlock([_typescript.default.factory.createReturnStatement(_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(createPropertyAccessExpressionWithThis("__".concat(e.getText())),_typescript.default.factory.createIdentifier(t)),void 0,[]))],!0))}function createSetAccessor(e,t){return _typescript.default.factory.createSetAccessorDeclaration(void 0,void 0,e,[_typescript.default.factory.createParameterDeclaration(void 0,void 0,void 0,_typescript.default.factory.createIdentifier(_pre_define.CREATE_NEWVALUE_IDENTIFIER),void 0,void 0,void 0)],_typescript.default.factory.createBlock([_typescript.default.factory.createExpressionStatement(_typescript.default.factory.createCallExpression(_typescript.default.factory.createPropertyAccessExpression(createPropertyAccessExpressionWithThis("__".concat(e.getText())),_typescript.default.factory.createIdentifier(t)),void 0,[_typescript.default.factory.createIdentifier(_pre_define.CREATE_NEWVALUE_IDENTIFIER)]))],!0))}function isForbiddenUseStateType(e){return!!(_typescript.default.isTypeReferenceNode(e)&&_typescript.default.isIdentifier(e.typeName)&&_component_map.forbiddenUseStateType.has(e.typeName.getText()))}function isSimpleType(e,t){var r;t&&(r=t.getTypeChecker());var a=getEnumType(e,r);if(simpleTypes.has(a||e.kind)||isEnumtype(e))return!0;if(_typescript.default.isUnionTypeNode(e)&&e.types){for(var o=e.types,i=0;i<o.length;i++){var s=getEnumType(o[i],r);if(!simpleTypes.has(s||o[i].kind)&&!isEnumtype(e))return!1}return!0}return!1}function getEnumType(e,t){if(t&&_typescript.default.isTypeReferenceNode(e)&&_typescript.default.isIdentifier(e.typeName)){var r=t.getBaseTypeOfLiteralType(t.getTypeAtLocation(e.typeName));if(r.symbol&&r.symbol.valueDeclaration)return r.symbol.valueDeclaration.kind}}function isEnumtype(e){if(_typescript.default.isTypeReferenceNode(e)&&_typescript.default.isIdentifier(e.typeName))return _validate_ui_syntax.enumCollection.has(e.typeName.getText())}function isObservedClassType(e){if(_typescript.default.isTypeReferenceNode(e)&&_validate_ui_syntax.observedClassCollection.has(e.getText()))return!0;if(_typescript.default.isUnionTypeNode(e)&&e.types){for(var t=e.types,r=0;r<t.length;r++)if(!_validate_ui_syntax.observedClassCollection.has(t[r].getText()))return!1;return!0}return!1}function validateAppStorageDecoractorsNonSingleKey(e,t){_typescript.default.isIdentifier(e.decorators[0].expression)?validateDecoratorNonSingleKey(e.decorators[0].expression,t):_typescript.default.isCallExpression(e.decorators[0].expression)&&_typescript.default.isIdentifier(e.decorators[0].expression.expression)&&validateDecoratorNonSingleKey(e.decorators[0].expression.expression,t)}function isSingleKey(e){if(_typescript.default.isCallExpression(e.decorators[0].expression)&&e.decorators[0].expression.arguments&&1===e.decorators[0].expression.arguments.length&&(_typescript.default.isIdentifier(e.decorators[0].expression.arguments[0])||_typescript.default.isStringLiteral(e.decorators[0].expression.arguments[0])))return!0}function validateMultiDecorators(e,t){t.push({type:_utils.LogType.ERROR,message:"The property '".concat(e.escapedText.toString(),"' cannot have mutilate state management decorators."),pos:e.getStart()})}function validateDecoratorNonSingleKey(e,t){t.push({type:_utils.LogType.ERROR,message:"The decorator ".concat(e.escapedText.toString()," should have a single key."),pos:e.getStart()})}function validatePropertyNonDefaultValue(e,t,r){r.push({type:_utils.LogType.ERROR,message:"The ".concat(t," property '").concat(e.getText(),"' must be specified a default value."),pos:e.getStart()})}function validatePropertyDefaultValue(e,t,r){r.push({type:_utils.LogType.ERROR,message:"The ".concat(t," property '").concat(e.getText(),"' cannot be specified a default value."),pos:e.getStart()})}function validatePropertyNonType(e,t){t.push({type:_utils.LogType.ERROR,message:"The property '".concat(e.getText(),"' must specify a type."),pos:e.getStart()})}function validateNonSimpleType(e,t,r){r.push({type:_utils.LogType.ERROR,message:"The type of the ".concat(t," property '").concat(e.getText(),"' ")+"can only be string, number or boolean.",pos:e.getStart()})}function validateNonObservedClassType(e,t,r){r.push({type:_utils.LogType.ERROR,message:"The type of the ".concat(t," property '").concat(e.getText(),"' can only be ")+"objects of classes decorated with ".concat(_pre_define.COMPONENT_OBSERVED_DECORATOR," class decorator in ets (not ts)."),pos:e.getStart()})}function validateHasIllegalQuestionToken(e,t,r){r.push({type:_utils.LogType.WARN,message:"The ".concat(t," property '").concat(e.getText(),"' cannot have a question token."),pos:e.getStart()})}function validateHasIllegalDecoratorInEntry(e,t,r,a){a.push({type:_utils.LogType.WARN,message:"The @Entry component '".concat(e.getText(),"' cannot have the ")+"".concat(r," property '").concat(t.getText(),"'."),pos:t.getStart()})}function validateForbiddenUseStateType(e,t,r,a){a.push({type:_utils.LogType.ERROR,message:"The ".concat(t," property '").concat(e.getText(),"' cannot be a '").concat(r,"' object."),pos:e.getStart()})}function validateDuplicateDecorator(e,t){t.push({type:_utils.LogType.ERROR,message:"The decorator '".concat(e.getText(),"' cannot have the same name as the build-in ")+"style attribute '".concat(e.getText().replace("@",""),"'."),pos:e.getStart()})}function validateWatchDecorator(e,t,r){return 1!==t||(r.push({type:_utils.LogType.ERROR,message:"Regular variable '".concat(e.escapedText.toString(),"' can not be decorated with @Watch."),pos:e.getStart()}),!1)}function validateWatchParam(e,t,r){r.push({type:e,message:"The parameter should be a string.",pos:t})}function validateCustomDialogControllerBuilderInit(e,t){t.push({type:_utils.LogType.ERROR,message:"The builder should be initialized with a @CustomDialog Component.",pos:e.getStart()})}exports.curPropMap=curPropMap;