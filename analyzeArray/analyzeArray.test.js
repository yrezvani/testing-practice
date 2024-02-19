const analyzeArray = require('./analyzeArray');

it('calculates average', () => {
    const result = analyzeArray([1,3,6]);
    expect(result.average).toBe(3.33);
});

it('calculates minimum number in the array', () => {
    const result = analyzeArray([1,3,6]);
    expect(result.min).toBe(1);
});

it('calculates maximum number in the array', () => {
    const result = analyzeArray([1,3,6]);
    expect(result.max).toBe(6);
});

it('calculates the length of the array', () => {
    const result = analyzeArray([1,3,6]);
    expect(result.length).toBe(3);
});



