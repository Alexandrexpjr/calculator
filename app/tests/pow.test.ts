import Calculator from "../class/calculator";

describe('Verifica o comportamento do método "pow"', () => {
  it('Quando são passados 2 e 3 como parâmetros', () => {
    expect(Calculator.pow(2, 3)).toBe(9);
    expect(Calculator.memorizedNumber).toBe(9);
  });

  it('Quando são passados 3 e -3 como parâmetros', () => {
    expect(Calculator.pow(3, -3)).toBe(-27);
    expect(Calculator.memorizedNumber).toBe(-27);
  });

  it('Quando são passados -2 e 2 como parâmetros', () => {
    expect(Calculator.pow(-2, 2)).toBe(0.25);
    expect(Calculator.memorizedNumber).toBe(0.25);
  });

  it('Quando é passado somente um parâmetro', () => {
    Calculator.memorizedNumber = 2;
    expect(Calculator.pow(5)).toBe(32);
    expect(Calculator.memorizedNumber).toBe(32);
  });
});