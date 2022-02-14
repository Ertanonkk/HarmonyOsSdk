import { EcmaCloseiterator, EcmaCopydataproperties, EcmaCopymodule, EcmaCreatearraywithbuffer, EcmaCreateemptyarray, EcmaCreateemptyobject, EcmaCreateobjecthavingmethod, EcmaCreateobjectwithbuffer, EcmaCreateobjectwithexcludedkeys, EcmaCreateregexpwithliteral, EcmaDefineasyncfunc, EcmaDefineclasswithbuffer, EcmaDefinefuncdyn, EcmaDefinegeneratorfunc, EcmaDefinegettersetterbyvalue, EcmaDefinemethod, EcmaDefinencfuncdyn, EcmaGetiterator, EcmaGetiteratornext, EcmaGetnextpropname, EcmaGetpropiterator, EcmaImportmodule, EcmaIsfalse, EcmaIstrue, EcmaLdglobalvar, EcmaLdhomeobject, EcmaLdlexenvdyn, EcmaLdlexvardyn, EcmaLdmodvarbyname, EcmaLdobjbyindex, EcmaLdobjbyname, EcmaLdsuperbyname, EcmaNewlexenvdyn, EcmaNewobjdynrange, EcmaPoplexenvdyn, EcmaReturnundefined, EcmaSetobjectwithproto, EcmaStarrayspread, EcmaStglobalvar, EcmaStlexvardyn, EcmaStmodulevar, EcmaStobjbyindex, EcmaStobjbyname, EcmaStownbyindex, EcmaStownbyvalue, EcmaStownbyvaluewithnameset, EcmaStsuperbyname, EcmaStsuperbyvalue, EcmaSupercall, EcmaSupercallspread, EcmaThrowconstassignment, EcmaThrowdeletesuperproperty, EcmaThrowifnotobject, EcmaThrowifsupernotcorrectcall, EcmaThrowpatternnoncoercible, EcmaThrowthrownotexists, EcmaThrowundefinedifhole, EcmaTryldglobalbyname, EcmaTrystglobalbyname, IRNode, Label, EcmaStclasstoglobalrecord, EcmaStconsttoglobalrecord, EcmaStlettoglobalrecord, VReg } from "../irnodes";
export declare function loadAccumulatorInt(value: number): IRNode;
export declare function loadAccumulatorFloat(value: number): IRNode;
export declare function loadAccumulatorString(value: string): IRNode;
export declare function loadAccumulator(vreg: VReg): IRNode;
export declare function storeAccumulator(vreg: VReg): IRNode;
export declare function deleteObjProperty(obj: VReg, prop: VReg): IRNode;
export declare function moveVreg(vd: VReg, vs: VReg): IRNode;
export declare function jumpTarget(target: Label): IRNode;
export declare function creatDebugger(): IRNode;
export declare function throwException(): IRNode;
export declare function throwConstAssignment(name: VReg): EcmaThrowconstassignment;
export declare function throwUndefinedIfHole(hole: VReg, name: VReg): EcmaThrowundefinedifhole;
export declare function throwThrowNotExists(): EcmaThrowthrownotexists;
export declare function throwDeleteSuperProperty(): EcmaThrowdeletesuperproperty;
export declare function newLexicalEnv(numVars: number): EcmaNewlexenvdyn;
export declare function loadLexicalEnv(): EcmaLdlexenvdyn;
export declare function popLexicalEnv(): EcmaPoplexenvdyn;
export declare function loadLexicalVar(level: number, slot: number): EcmaLdlexvardyn;
export declare function storeLexicalVar(level: number, slot: number, value: VReg): EcmaStlexvardyn;
export declare function tryLoadGlobalByName(key: string): EcmaTryldglobalbyname;
export declare function tryStoreGlobalByName(key: string): EcmaTrystglobalbyname;
export declare function loadGlobalVar(name: string): EcmaLdglobalvar;
export declare function storeGlobalVar(name: string): EcmaStglobalvar;
export declare function loadObjByName(obj: VReg, key: string): EcmaLdobjbyname;
export declare function storeObjByName(obj: VReg, key: string): EcmaStobjbyname;
export declare function loadObjByIndex(obj: VReg, index: number): EcmaLdobjbyindex;
export declare function storeObjByIndex(obj: VReg, index: number): EcmaStobjbyindex;
export declare function loadObjByValue(obj: VReg, prop: VReg): IRNode;
export declare function storeObjByValue(obj: VReg, prop: VReg): IRNode;
export declare function storeOwnByName(obj: VReg, key: string, nameSetting: boolean): IRNode;
export declare function storeOwnByIndex(obj: VReg, index: number): EcmaStownbyindex;
export declare function storeOwnByValue(obj: VReg, value: VReg, nameSetting: boolean): EcmaStownbyvaluewithnameset | EcmaStownbyvalue;
export declare function throwIfSuperNotCorrectCall(num: number): EcmaThrowifsupernotcorrectcall;
export declare function call(args: VReg[], passThis: boolean): IRNode;
export declare function newObject(args: VReg[]): EcmaNewobjdynrange;
export declare function getPropIterator(): EcmaGetpropiterator;
export declare function getNextPropName(iter: VReg): EcmaGetnextpropname;
export declare function returnUndefined(): EcmaReturnundefined;
export declare function createEmptyObject(): EcmaCreateemptyobject;
export declare function createObjectHavingMethod(idx: number): EcmaCreateobjecthavingmethod;
export declare function createObjectWithBuffer(idx: number): EcmaCreateobjectwithbuffer;
export declare function setObjectWithProto(proto: VReg, object: VReg): EcmaSetobjectwithproto;
export declare function copyDataProperties(dstObj: VReg, srcObj: VReg): EcmaCopydataproperties;
export declare function defineGetterSetterByValue(obj: VReg, name: VReg, getter: VReg, setter: VReg): EcmaDefinegettersetterbyvalue;
export declare function createEmptyArray(): EcmaCreateemptyarray;
export declare function createArrayWithBuffer(idx: number): EcmaCreatearraywithbuffer;
export declare function storeArraySpread(array: VReg, index: VReg): EcmaStarrayspread;
export declare function defineClassWithBuffer(id: string, idx: number, parameterLength: number, env: VReg, base: VReg): EcmaDefineclasswithbuffer;
export declare function createObjectWithExcludedKeys(obj: VReg, args: VReg[]): EcmaCreateobjectwithexcludedkeys;
export declare function throwObjectNonCoercible(): EcmaThrowpatternnoncoercible;
export declare function throwIfNotObject(v: VReg): EcmaThrowifnotobject;
export declare function getIterator(): EcmaGetiterator;
export declare function getIteratorNext(iter: VReg, nextMethod: VReg): EcmaGetiteratornext;
export declare function closeIterator(iter: VReg): EcmaCloseiterator;
export declare function superCall(num: number, start: VReg): EcmaSupercall;
export declare function superCallSpread(vs: VReg): EcmaSupercallspread;
export declare function ldSuperByName(obj: VReg, key: string): EcmaLdsuperbyname;
export declare function stSuperByName(obj: VReg, key: string): EcmaStsuperbyname;
export declare function stSuperByValue(obj: VReg, prop: VReg): EcmaStsuperbyvalue;
export declare function ldSuperByValue(obj: VReg, prop: VReg): IRNode;
export declare function importModule(name: string): EcmaImportmodule;
export declare function loadModuleVarByName(name: string, module: VReg): EcmaLdmodvarbyname;
export declare function storeModuleVariable(name: string): EcmaStmodulevar;
export declare function copyModuleIntoCurrentModule(mod: VReg): EcmaCopymodule;
export declare function loadHomeObject(): EcmaLdhomeobject;
export declare function defineFunc(name: string, env: VReg, paramLength: number): EcmaDefinefuncdyn;
export declare function defineAsyncFunc(name: string, env: VReg, paramLength: number): EcmaDefineasyncfunc;
export declare function defineGeneratorFunc(name: string, env: VReg, paramLength: number): EcmaDefinegeneratorfunc;
export declare function defineNCFunc(name: string, env: VReg, paramLength: number): EcmaDefinencfuncdyn;
export declare function defineMethod(name: string, env: VReg, paramLength: number): EcmaDefinemethod;
export declare function isTrue(): EcmaIstrue;
export declare function isFalse(): EcmaIsfalse;
export declare function createRegExpWithLiteral(pattern: string, flags: number): EcmaCreateregexpwithliteral;
export declare function stLetToGlobalRecord(name: string): EcmaStlettoglobalrecord;
export declare function stConstToGlobalRecord(name: string): EcmaStconsttoglobalrecord;
export declare function stClassToGlobalRecord(name: string): EcmaStclasstoglobalrecord;
//# sourceMappingURL=bcGenUtil.d.ts.map