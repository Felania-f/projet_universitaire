"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LevelOne {
    constructor(selectedMethod = 'add') {
        this.selectedMethodNoOfArgs = 2;
        this.selectedMethod = selectedMethod;
        this.setSelectedMethodNoOfArgs();
    }
    setSelectedMethodNoOfArgs() {
        switch (this.selectedMethod) {
            case 'is_even':
            case 'is_leap':
                this.selectedMethodNoOfArgs = 1;
                break;
            case 'delta':
            case 'root':
                this.selectedMethodNoOfArgs = 3;
                break;
            default:
                this.selectedMethodNoOfArgs = 2;
                break;
        }
        return this;
    }
    is_even({ a }) {
        return a % 2 === 0;
    }
    is_leap({ a }) {
        if ((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)) {
            return true;
        }
        else {
            return false;
        }
    }
    add({ a, b }) {
        return a + b;
    }
    is_div({ a, b }) {
        if (a % b === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    min_nb({ a, b }) {
        if (a < b) {
            return a;
        }
        else {
            return b;
        }
    }
    mult({ a, b }) {
        return a * b;
    }
    max_nb({ a, b }) {
        if (a > b) {
            return a;
        }
        else {
            return b;
        }
    }
    delta({ a, b, c }) {
        return Math.pow(b, 2) - 4 * a * c;
    }
    root({ a, b, c }) {
        const deltaResult = this.delta({ a: a, b: b, c: c });
        if (deltaResult < 0) {
            return [];
        }
        else if (deltaResult === 0) {
            const rootUnique = -b / (2 * a);
            return [rootUnique];
        }
        else {
            const root1 = (-b - Math.sqrt(deltaResult)) / (2 * a);
            const root2 = (-b + Math.sqrt(deltaResult)) / (2 * a);
            return [root1, root2];
        }
    }
    getNoOfArgs() {
        return this.selectedMethodNoOfArgs;
    }
    setSelectedMethod(selectedMethod) {
        this.selectedMethod = selectedMethod;
        this.setSelectedMethodNoOfArgs();
        return this;
    }
    getSelectedMethod() {
        return this.selectedMethod;
    }
    setInputParameters(inputParameters) {
        this.inputParameters = { ...this.inputParameters, ...inputParameters };
    }
    getInputParameters() {
        return this.inputParameters;
    }
    functionExists() {
        try {
            if ((this[this.getSelectedMethod()]))
                return true;
        }
        catch {
            return false;
        }
        return false;
    }
    runSelected() {
        if (!this.getInputParameters())
            return console.log("Input parameters empty");
        return this[this.getSelectedMethod()](this.getInputParameters());
    }
}
exports.default = LevelOne;
//# sourceMappingURL=levelOneClass.js.map