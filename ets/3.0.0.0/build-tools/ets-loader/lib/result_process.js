"use strict";var _path=_interopRequireDefault(require("path")),_pre_define=require("./pre_define"),_process_ui_syntax=require("./process_ui_syntax"),_validate_ui_syntax=require("./validate_ui_syntax"),_utils=require("./utils"),_main=require("../main");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _newArrowCheck(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}module.exports=function(e,t){var r=this;if(process.env.compiler=_pre_define.BUILD_OFF,/\.ets$/.test(this.resourcePath)&&(_utils.componentInfo.id=0,_validate_ui_syntax.propertyCollection.clear(),_validate_ui_syntax.linkCollection.clear(),(0,_validate_ui_syntax.resetComponentCollection)(),_process_ui_syntax.transformLog&&_process_ui_syntax.transformLog.errors.length)){var i=_process_ui_syntax.transformLog.sourceFile,n=_process_ui_syntax.transformLog.errors.map(function(e){if(_newArrowCheck(this,r),e.pos){var t=i.getLineAndCharacterOfPosition(e.pos);e.line=t.line+1,e.column=t.character+1}else e.line=void 0,e.column=void 0;return e.fileName=i.fileName.replace(/.ts$/,""),e}.bind(this));(0,_utils.emitLogInfo)(this,n),(0,_process_ui_syntax.resetLog)()}var a=_path.default.basename(this.resourcePath);["app.ets",_main.abilityConfig.abilityEntryFile].includes(a)&&(e=e.replace(/exports\.default/,"globalThis.exports.default")),this.callback(null,e,t)};