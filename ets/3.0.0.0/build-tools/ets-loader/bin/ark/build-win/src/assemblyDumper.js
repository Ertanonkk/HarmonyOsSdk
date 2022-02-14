"use strict";
/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.__esModule = true;
exports.AssemblyDumper = exports.IntrinsicInfo = void 0;
var irnodes_1 = require("./irnodes");
var tryStatement_1 = require("./statement/tryStatement");
var util_1 = require("./base/util");
var IntrinsicInfo = /** @class */ (function () {
    function IntrinsicInfo(intrinsicName, argsNum, returnType) {
        this.intrinsicName = intrinsicName;
        this.argsNum = argsNum;
        this.returnType = returnType;
    }
    return IntrinsicInfo;
}());
exports.IntrinsicInfo = IntrinsicInfo;
var AssemblyDumper = /** @class */ (function () {
    function AssemblyDumper(pg) {
        this.labelPrefix = "LABEL_";
        this.pg = pg;
        this.labels = new Map();
        this.labelId = 0;
        this.output = "";
    }
    AssemblyDumper.writeLanguageTag = function (out) {
        out.str += ".language ECMAScript\n";
        out.str += "\n";
    };
    AssemblyDumper.prototype.writeFunctionHeader = function () {
        var parametersCount = this.pg.getParametersCount();
        this.output += ".function any " + this.pg.internalName + "(";
        for (var i = 0; i < parametersCount; ++i) {
            this.output += "any a" + i.toString();
            if (i !== parametersCount - 1) {
                this.output += ", ";
            }
        }
        this.output += ") {\n";
    };
    AssemblyDumper.prototype.writeFunctionBody = function () {
        var irNodes = this.pg.getInsns();
        var parametersCount = this.pg.getParametersCount();
        /* the first parametersCount insns are move insn for argument initialization,
           we can directly dump them into text
        */
        for (var i = 0; i < parametersCount; ++i) {
            var node = irNodes[i];
            this.output += "\t";
            this.output += node.mnemonic + " v" + node.operands[0].num + ", a" + (node.operands[0].num) + "\n";
        }
        for (var i = parametersCount; i < irNodes.length; ++i) {
            var node = irNodes[i];
            if (node.kind === irnodes_1.IRNodeKind.VREG || node.kind === irnodes_1.IRNodeKind.IMM) {
                continue;
            }
            if (node.kind === irnodes_1.IRNodeKind.LABEL) {
                this.writeLabel(node);
                continue;
            }
            this.output += "\t";
            this.output += node.mnemonic + " ";
            var operands = node.operands;
            var formats = node.formats;
            var outputRangeVregNum = util_1.getRangeExplicitVregNums(node);
            for (var j = 0; j < operands.length; ++j) {
                if (outputRangeVregNum == 0) {
                    break;
                }
                var format = formats[0];
                var kind = format[j].kind;
                var op = operands[j];
                if (kind == irnodes_1.OperandKind.Imm) {
                    var imm = op;
                    this.output += imm.value.toString();
                }
                else if (kind == irnodes_1.OperandKind.Id) {
                    this.output += op;
                }
                else if (kind == irnodes_1.OperandKind.StringId) {
                    var escapedOp = op.toString().replace(/\\/g, "\\\\").replace(/\t/g, "\\t")
                        .replace(/\n/g, "\\n").replace(/\"/g, "\\\"");
                    this.output += "\"" + escapedOp + "\"";
                }
                else if (kind == irnodes_1.OperandKind.DstVReg
                    || kind == irnodes_1.OperandKind.SrcDstVReg
                    || kind == irnodes_1.OperandKind.SrcVReg) {
                    var v = op;
                    if (v.num < 0) {
                        throw Error("invalid register, please check your insn!\nRegister was allocated at:\n" + v.getStackTrace() + "\n");
                    }
                    this.output += "v" + v.num.toString();
                    // we don't need to print all the registers for range inst, just the first one
                    if (util_1.isRangeInst(node)) {
                        outputRangeVregNum--;
                        continue;
                    }
                }
                else if (kind == irnodes_1.OperandKind.Label) {
                    this.output += this.getLabelName(op);
                }
                else {
                    throw new Error("Unexpected OperandKind");
                }
                if (j < operands.length - 1) {
                    this.output += ", ";
                }
            }
            this.output += "\n";
        }
    };
    AssemblyDumper.prototype.writeFunctionTail = function () {
        this.output += "}\n";
    };
    AssemblyDumper.prototype.writeFunctionCatchTable = function () {
        var _this = this;
        var catchTables = tryStatement_1.generateCatchTables(this.pg.getCatchMap());
        if (catchTables.length == 0) {
            return;
        }
        this.output += "\n";
        catchTables.forEach(function (catchTable) {
            var catchBeginLabel = catchTable.getCatchBeginLabel();
            var labelPairs = catchTable.getLabelPairs();
            labelPairs.forEach(function (labelPair) {
                _this.output += ".catchall " + _this.getLabelName(labelPair.getBeginLabel())
                    + ", " + _this.getLabelName(labelPair.getEndLabel())
                    + ", " + _this.getLabelName(catchBeginLabel)
                    + "\n";
            });
        });
    };
    AssemblyDumper.prototype.getLabelName = function (label) {
        var labelName;
        if (!this.labels.has(label.id)) {
            labelName = this.labelPrefix + this.labelId++;
            this.labels.set(label.id, labelName);
        }
        else {
            labelName = this.labels.get(label.id);
        }
        return labelName;
    };
    AssemblyDumper.prototype.writeLabel = function (label) {
        var labelName = this.getLabelName(label);
        this.output += labelName + ":\n";
    };
    AssemblyDumper.prototype.dump = function () {
        this.writeFunctionHeader();
        this.writeFunctionBody();
        this.writeFunctionCatchTable();
        this.writeFunctionTail();
        console.log(this.output);
    };
    AssemblyDumper.dumpHeader = function () {
        var out = { str: "" };
        AssemblyDumper.writeLanguageTag(out);
        console.log(out.str);
    };
    AssemblyDumper.intrinsicRec = new Map();
    return AssemblyDumper;
}());
exports.AssemblyDumper = AssemblyDumper;
//# sourceMappingURL=assemblyDumper.js.map