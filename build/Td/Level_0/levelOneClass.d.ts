declare class LevelOne {
    private selectedMethod;
    private inputParameters;
    private selectedMethodNoOfArgs;
    constructor(selectedMethod?: string);
    private setSelectedMethodNoOfArgs;
    is_even({ a }: {
        a: number;
    }): boolean;
    is_leap({ a }: {
        a: number;
    }): boolean;
    add({ a, b }: {
        a: number;
        b: number;
    }): number;
    is_div({ a, b }: {
        a: number;
        b: number;
    }): boolean;
    min_nb({ a, b }: {
        a: number;
        b: number;
    }): number;
    mult({ a, b }: {
        a: number;
        b: number;
    }): number;
    max_nb({ a, b }: {
        a: number;
        b: number;
    }): number;
    delta({ a, b, c }: {
        a: number;
        b: number;
        c: number;
    }): number;
    root({ a, b, c }: {
        a: number;
        b: number;
        c: number;
    }): number[];
    getNoOfArgs(): number;
    setSelectedMethod(selectedMethod: string): LevelOne;
    getSelectedMethod(): string;
    setInputParameters(inputParameters: any): void;
    getInputParameters(): any;
    functionExists(): boolean;
    runSelected(): any;
}
export default LevelOne;
