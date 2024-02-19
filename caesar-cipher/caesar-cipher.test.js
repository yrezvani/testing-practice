const caesarCipher = require('./caesar-cipher');

it('wraps correctly from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
});

it('keeps the same case', () => {
    expect(caesarCipher('aBcDeF', 2)).toBe('cDeFgH');
})

it('handle punctuation', () => {
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!')
});

it('handles negative shift', () => {
    expect(caesarCipher('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
});

it('handles shift larger than 26', () => {
    expect(caesarCipher('abc', 27)).toBe('bcd');
});

it('handles no shift', () => {
    expect(caesarCipher('abc',0)).toBe('abc');
});

