"use strict";function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,a,n){return a&&_defineProperties(e.prototype,a),n&&_defineProperties(e,n),e}var output,webpackPath,fs=require("fs"),path=require("path"),process=require("child_process"),js2abc=path.join(__dirname,"..","bin","panda","build","src","index.js"),js2abc_win=path.join(__dirname,"..","bin","panda","build-win","src","index.js"),js2abc_mac=path.join(__dirname,"..","bin","panda","build-mac","src","index.js"),libraryPath=path.join(__dirname,"..","bin","panda","build","panda","lib"),libraryJsonPath=path.join(__dirname,"..","bin","panda","build","lib"),forward='(global.___mainEntry___ = function (globalObjects) {\n  var define = globalObjects.define;\n  var require = globalObjects.require;\n  var bootstrap = globalObjects.bootstrap;\n  var register = globalObjects.register;\n  var render = globalObjects.render;\n  var $app_define$ = globalObjects.$app_define$;\n  var $app_bootstrap$ = globalObjects.$app_bootstrap$;\n  var $app_require$ = globalObjects.$app_require$;\n  var history = globalObjects.history;\n  var Image = globalObjects.Image;\n  (function(global) {\n    "use strict";\n',last="\n})(this.__appProto__);\n})",firstFileEXT="_.js",isWin=!1,isMac=!1,isDebug=!1,GenAbcPlugin=function(){function e(a,n,t){_classCallCheck(this,e),output=a,webpackPath=n,isDebug=t}return _createClass(e,[{key:"apply",value:function(e){if(fs.existsSync(path.resolve(webpackPath,"panda/build-win")))isWin=!0;else if(fs.existsSync(path.resolve(webpackPath,"panda/build-mac")))isMac=!0;else if(!fs.existsSync(path.resolve(webpackPath,"panda/build")))return void console.error("[31m","find build fail","[39m");e.hooks.emit.tap("GenAbcPlugin",function(e){var a=e.assets;Object.keys(a).forEach(function(e){if(output&&webpackPath&&".js"===path.extname(e)){var n=forward+a[e].source()+last,t=e.replace(/\.js$/,firstFileEXT);writeFileSync(n,path.resolve(output,t),e)}})})}}]),e}();function writeFileSync(e,a,n){var t=path.join(a,"..");fs.existsSync(t)&&fs.statSync(t).isDirectory()||mkDir(t),fs.writeFileSync(a,e),fs.existsSync(a)?qjscFirst(a):console.error("[31m","Failed to convert file ".concat(n," to bin. ").concat(a," is lost"),"[39m")}function mkDir(e){var a=path.join(e,"..");fs.existsSync(a)&&!fs.statSync(a).isFile()||mkDir(a),fs.mkdirSync(e)}function qjscFirst(e){var a,n="-r";isDebug&&(n+=" --debug"),a=isWin?'node "'.concat(js2abc_win,'" "').concat(e,'" ').concat(n):isMac?'node "'.concat(js2abc_mac,'" "').concat(e,'" ').concat(n):'export LD_LIBRARY_PATH="'.concat(libraryPath,'":"').concat(libraryJsonPath,'":$LD_LIBRARY_PATH;node "').concat(js2abc,'" "').concat(e,'" ').concat(n);try{process.execSync(a),console.info(a)}catch(a){console.error("[31m","Failed to convert file ".concat(e," to abc"),"[39m")}fs.existsSync(e)?fs.unlinkSync(e):console.error("[31m","Failed to convert file ".concat(e," to abc. ").concat(e," is lost"),"[39m");var t=e.replace(/\.js$/,".json");fs.existsSync(t)?fs.unlinkSync(t):console.error("[31m","".concat(t," is lost"),"[39m");var i=e.replace(/\.js$/,".abc");if(fs.existsSync(i)){var s=i.replace(/\_.abc$/,".abc");fs.renameSync(i,s)}else console.error("[31m","".concat(i," is lost"),"[39m")}module.exports=GenAbcPlugin;