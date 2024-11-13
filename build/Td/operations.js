"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operations = void 0;
class Operations {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
    sub() {
        return this.a - this.b;
    }
    mult() {
        return this.a * this.b;
    }
    div() {
        if (this.a === 0) {
            throw new Error("impossible");
        }
        return this.a / this.b;
    }
    greaterThan() {
        return this.a > this.b;
    }
    greaterOrEqual() {
        return this.a >= this.b;
    }
    lowerThan() {
        return this.a < this.b;
    }
}
exports.Operations = Operations;
const calc = new Operations(10, 5);
console.log("Addition: ", calc.add());
console.log("Soustraction: ", calc.sub());
console.log("Multiplication: ", calc.mult());
console.log("Division: ", calc.div());
console.log("Greater than: ", calc.greaterThan());
console.log("Greater or equal: ", calc.greaterOrEqual());
console.log("Lower than: ", calc.lowerThan());
//# sourceMappingURL=operations.js.map