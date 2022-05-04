import Calculator from "../class/calculator";

describe('Verifica o comportamento do método "sum"', () => {
  it('Quando são passados 5 e 10 como parâmetros', () => {
    expect(Calculator.sum(5, 10)).toBe(15);
    expect(Calculator.memorizedNumber).toBe(15);
  });
  it('Quando são passados -5 e 10 como parâmetros', () => {
    expect(Calculator.sum(-5, 10)).toBe(5);
    expect(Calculator.memorizedNumber).toBe(5);

  });
  it('Quando são passados 1.5 e 2.8 como parâmetros', () => {
    expect(Calculator.sum(1.5, 2.8)).toBe(4.3);
    expect(Calculator.memorizedNumber).toBe(4.3);
  });
  it('Quando é passado somente um parâmetro', () => {
    expect(Calculator.sum(5)).toBe(9.3);
    expect(Calculator.memorizedNumber).toBe(9.3);
  });
});