export class Operations {
  private a: number;
  private b: number;

  public constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  public add(): number {
    return this.a + this.b;
  }

  public sub(): number {
    return this.a - this.b;
  }

  public mult(): number {
    return this.a * this.b;
  }

  public div(): number {
    if (this.a === 0) {
      throw new Error("impossible");
    }
    return this.a / this.b;
  }

  public greaterThan(): boolean {
    return this.a > this.b;
  }

  public greaterOrEqual(): boolean {
    return this.a >= this.b;
  }

  public lowerThan(): boolean {
    return this.a < this.b;
  }
}

const calc = new Operations(10, 5);

console.log("Addition: ", calc.add());
console.log("Soustraction: ", calc.sub());
console.log("Multiplication: ", calc.mult());
console.log("Division: ", calc.div());
console.log("Greater than: ", calc.greaterThan());
console.log("Greater or equal: ", calc.greaterOrEqual());
console.log("Lower than: ", calc.lowerThan()); 