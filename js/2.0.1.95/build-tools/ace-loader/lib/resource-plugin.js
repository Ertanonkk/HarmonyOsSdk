"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var fs=require("fs"),path=require("path"),SingleEntryPlugin=require("webpack/lib/SingleEntryPlugin"),THEME_PROP_GROUPS=require("./theme/customThemeStyles"),FILE_EXT_NAME=[".js",".css",".jsx",".less",".sass",".scss",".md",".DS_Store",".hml"],red="[31m",reset="[39m",input="",output="",manifestFilePath="",shareThemePath="",internalThemePath="";function copyFile(e,t){try{if(fs.existsSync(e)){var i=path.join(t,"..");fs.existsSync(i)&&fs.statSync(i).isDirectory()||mkDir(i);var r=path.parse(e);if(".json"===r.ext&&(r.dir===shareThemePath||r.dir===internalThemePath)&&themeFileBuild(e,t))return;var n=fs.createReadStream(e),s=fs.createWriteStream(t);n.pipe(s),n.on("close",function(){s.end()})}}catch(t){throw console.error(red,"Failed to build file ".concat(e,"."),reset),t.message}}function mkDir(e){var t=path.join(e,"..");fs.existsSync(t)&&!fs.statSync(t).isFile()||mkDir(t),fs.mkdirSync(e)}function circularFile(e,t,i){var r=path.join(e,i);fs.existsSync(r)&&r!==output&&fs.readdirSync(r).forEach(function(n){var s=path.join(r,n),a=fs.statSync(s);if(a.isFile()){var o=path.basename(s),c=path.extname(s);if(FILE_EXT_NAME.indexOf(c)<0&&".DS_Store"!==o){var l=path.join(t,i,path.basename(n));if(l===path.join(output,"manifest.json"))return;if(fs.existsSync(l)){var f=fs.statSync(l);f.isFile()&&a.size!==f.size&&copyFile(s,l)}else copyFile(s,l)}}else a.isDirectory()&&circularFile(e,t,path.join(i,n))})}var ResourcePlugin=function(){function e(t,i,r){_classCallCheck(this,e),input=t,output=i,manifestFilePath=r,shareThemePath=path.join(t,"../share/resources/styles"),internalThemePath=path.join(t,"resources/styles")}return _createClass(e,[{key:"apply",value:function(e){e.hooks.beforeCompile.tap("resource Copy",function(){circularFile(input,output,""),circularFile(input,output,"../share"),copyManifest()}),e.hooks.normalModuleFactory.tap("OtherEntryOptionPlugin",function(){for(var t in addPageEntryObj(),entryObj){if(!e.options.entry[t])new SingleEntryPlugin("",entryObj[t],t).apply(e)}})}}]),e}();function copyManifest(){copyFile(manifestFilePath,path.join(output,"manifest.json"))}var entryObj={};function addPageEntryObj(){if(entryObj={},!fs.existsSync(manifestFilePath))throw Error("ERROR: missing manifest").message;var e=fs.readFileSync(manifestFilePath).toString(),t=JSON.parse(e).pages;if(void 0===t)throw Error("ERROR: missing pages").message;t.forEach(function(e){var t=e;entryObj["./"+e]=input+"/"+t+".hml?entry"})}function themeFileBuild(e,t){if(fs.existsSync(e)){var i=JSON.parse(fs.readFileSync(e)),r={};if(i&&i.style){r.style={};var n=i.style;return Object.keys(n).forEach(function(e){var t=THEME_PROP_GROUPS[e];t?r.style[t]=n[e]:r.style[e]=n[e]}),fs.writeFileSync(t,JSON.stringify(r,null,2)),!0}}return!1}module.exports=ResourcePlugin;