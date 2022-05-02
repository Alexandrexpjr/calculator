export default class Calculator {
  private static _memorizedNumber: number;

  public static get memorizedNumber(): number {
    return Calculator._memorizedNumber;
  }

  public static set memorizedNumber(value: number) {
    Calculator._memorizedNumber = value;
  }

  public static sum(a: number, b: number = Calculator.memorizedNumber) {
    const result = this.normalize(a + b);

    this.memorizedNumber = result;
    return result;
  }
  
  public static subtract(a: number, b: number = Calculator.memorizedNumber) {
    const result = this.normalize(b - a);

    this.memorizedNumber = result;
    return result;
  }

  public static multiply(a: number, b: number = Calculator.memorizedNumber) {
    const result = this.normalize(a * b);

    this.memorizedNumber = result;
    return result;
  }

  public static divide(a:number, b: number = Calculator.memorizedNumber) {
    const result = this.normalize(b / a);

    this.memorizedNumber = result;
    return result;
  }

  private static normalize(n: number) {
    return parseFloat(n.toPrecision(12));
  }
}