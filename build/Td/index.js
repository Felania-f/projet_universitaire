"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const levelOneClass_1 = __importDefault(require("./Level_0/levelOneClass"));
const readlineSync = __importStar(require("readline-sync"));
let selectedFunction = readlineSync.question('Select function(uses "add" by default) ');
const levelOne = new levelOneClass_1.default(selectedFunction.length ? selectedFunction : 'add');
while (!levelOne.functionExists()) {
    console.log('function does not exist');
    selectedFunction = (_a = readlineSync.question('Select function(uses "add" by default) ')) !== null && _a !== void 0 ? _a : 'add';
    levelOne.setSelectedMethod(selectedFunction.length ? selectedFunction : 'add');
}
const noOfArgs = levelOne.getNoOfArgs();
levelOne.setInputParameters({
    a: Number(readlineSync.question('input 1: '))
});
if (noOfArgs > 1) {
    const input2 = (readlineSync.question('input 2: '));
    input2 && levelOne.setInputParameters({
        b: parseInt(input2)
    });
}
if (noOfArgs > 2) {
    const input3 = (readlineSync.question('input 3: '));
    input3 && levelOne.setInputParameters({
        c: parseInt(input3)
    });
}
console.log(levelOne.runSelected());
//# sourceMappingURL=index.js.map