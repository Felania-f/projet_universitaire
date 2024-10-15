class LevelOne {
    private selectedMethod: string
    private inputParameters: any
    private selectedMethodNoOfArgs = 2
    public constructor(selectedMethod = 'add') {
        this.selectedMethod = selectedMethod
        this.setSelectedMethodNoOfArgs()
    }
    private setSelectedMethodNoOfArgs() {
        switch (this.selectedMethod) {
            case 'is_even':
            case 'is_leap':
                this.selectedMethodNoOfArgs = 1
                break
            case 'delta':
            case 'root':
                this.selectedMethodNoOfArgs = 3
                break
            default:
                this.selectedMethodNoOfArgs = 2
                break
        }
        return this
    }

    public is_even({ a }: { a: number }): boolean {
        return a % 2 === 0;
    }

    public is_leap({ a }: { a: number }): boolean {
        if ((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)) {
            return true;
        } else {
            return false;
        }
    }
    public add({ a, b }: { a: number, b: number }): number {
        return a + b;
    }


    public is_div({ a, b }: { a: number, b: number }): boolean {
        if (a % b === 0) {
            return true;
        } else { return false; }
    }

    public min_nb({ a, b }: { a: number, b: number }): number {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    }

    public mult({ a, b }: { a: number, b: number }): number {
        return a * b;
    }

    public max_nb({ a, b }: { a: number, b: number }): number {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    public delta({ a, b, c }: { a: number, b: number, c: number }): number {
        return Math.pow(b, 2) - 4 * a * c;
    }

    public root({ a, b, c }: { a: number, b: number, c: number }): number[] {
        const deltaResult = this.delta({ a: a, b: b, c: c });

        if (deltaResult < 0) {
            return [];
        } else if (deltaResult === 0) {
            const rootUnique = -b / (2 * a);
            return [rootUnique];
        } else {
            const root1 = (-b - Math.sqrt(deltaResult)) / (2 * a);
            const root2 = (-b + Math.sqrt(deltaResult)) / (2 * a);
            return [root1, root2];
        }
    }

    public getNoOfArgs() {
        return this.selectedMethodNoOfArgs
    }

    public setSelectedMethod(selectedMethod: string): LevelOne {
        this.selectedMethod = selectedMethod
        this.setSelectedMethodNoOfArgs()
        return this
    }

    public getSelectedMethod(): string {
        return this.selectedMethod
    }

    public setInputParameters(inputParameters: any) {
        this.inputParameters = { ...this.inputParameters, ...inputParameters }
    }

    public getInputParameters() {
        return this.inputParameters
    }

    public functionExists(): boolean {
        try { if ((this[this.getSelectedMethod() as keyof LevelOne])) return true } catch {
            return false
        }
        return false
    }

    public runSelected(): any {
        if (!this.getInputParameters()) return console.log("Input parameters empty")
        return this[this.getSelectedMethod() as keyof LevelOne](this.getInputParameters())
    }
}
export default LevelOne