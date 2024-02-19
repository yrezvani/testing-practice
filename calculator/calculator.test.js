const calculator = require('./calculator');

it('calculates the sum of two numbers', () => {
    expect(calculator.add(3, 5)).toBe(8);
})

it('subtracts two numbers', () => {
    expect(calculator.subtract(6, 2)).toBe(4);
})

it('divides two numbers', () => {
    expect(calculator.divide(12, 4)).toBe(3);
})

it('multiplies two numbers', () => {
    expect(calculator.multiply(9, 2)).toBe(18);
})

