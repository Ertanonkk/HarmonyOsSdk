"use strict";var _require=require("./lite/lite-enum"),DEVICE_LEVEL=_require.DEVICE_LEVEL;module.exports=function(e,E){this.cacheable&&this.cacheable();var i=this.async();process.env.DEVICE_LEVEL===DEVICE_LEVEL.LITE?i(null,JSON.stringify({"manifest.json":"content"}),E):i(null,e,E)};