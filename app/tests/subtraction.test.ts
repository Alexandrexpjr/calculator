import Calculator from "../class/calculator";

describe('Verifica o comportamento do método "subtract"', () => {
  it('Quando são passados 5 e 10 como parâmetros', () => {
    expect(Calculator.subtract(5, 10)).toBe(5);
    expect(Calculator.memorizedNumber).toBe(5);

  });
  it('Quando são passados -5 e 10 como parâmetros', () => {
    expect(Calculator.subtract(-5, 10)).toBe(15);
    expect(Calculator.memorizedNumber).toBe(15);

  });
  it('Quando são passados 4.5 e 2.8 como parâmetros', () => {
    expect(Calculator.subtract(4.5324, 2.8234)).toBe(-1.709);
    expect(Calculator.memorizedNumber).toBe(-1.709);
  });
  it('Quando é passado somente um parâmetro', () => {
    Calculator.memorizedNumber = 10;
    expect(Calculator.subtract(5)).toBe(5);
  })
});