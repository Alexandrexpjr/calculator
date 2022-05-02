import Calculator from "../calculator";

describe('Verifica o comportamento do método "divide"', () => {
  it('Quando são passados 3 e 6 como parâmetros', () => {
    expect(Calculator.divide(3, 6)).toBe(2);
    expect(Calculator.memorizedNumber).toBe(2);
  });

  it('Quando são passados -5 e 12 como parâmetros', () => {
    expect(Calculator.divide(-5, 12)).toBe(-2.4);
    expect(Calculator.memorizedNumber).toBe(-2.4);
  });

  it('Quando são passados 2.5 e 5.25 como parâmetros', () => {
    expect(Calculator.divide(2.5, 5.25)).toBe(2.1);
    expect(Calculator.memorizedNumber).toBe(2.1);
  });

  it('Quando é passado somente um parâmetro', () => {
    expect(Calculator.divide(0.7)).toBe(3);
    expect(Calculator.memorizedNumber).toBe(3);
  });
});