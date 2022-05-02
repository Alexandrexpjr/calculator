import Calculator from "../calculator";

describe('Verifica o comportamento do método "multiply"', () => {
  it('Quando são passados 3 e 5 como parâmetros', () => {
    expect(Calculator.multiply(3, 5)).toBe(15);
    expect(Calculator.memorizedNumber).toBe(15);
  });

  it('Quando são passados -5 e 12 como parâmetros', () => {
    expect(Calculator.multiply(-5, 12)).toBe(-60);
    expect(Calculator.memorizedNumber).toBe(-60);
  });

  it('Quando são passados 2.5 e 4.8 como parâmetros', () => {
    expect(Calculator.multiply(2.5, 4.8)).toBe(12);
    expect(Calculator.memorizedNumber).toBe(12);
  });

  it('Quando é passado somente um parâmetro', () => {
    expect(Calculator.multiply(3)).toBe(36);
    expect(Calculator.memorizedNumber).toBe(36);
  });
});