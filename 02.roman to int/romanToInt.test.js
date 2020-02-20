const romanToInt = require('./romanToInt');

test('converts simple numbers', () => {
  expect(romanToInt('I')).toStrictEqual(1);
  expect(romanToInt('V')).toStrictEqual(5);
  expect(romanToInt('L')).toStrictEqual(50);
});

test('converts simple increments', () => {
  expect(romanToInt('II')).toStrictEqual(2);
  expect(romanToInt('III')).toStrictEqual(3);
  expect(romanToInt('XIX')).toStrictEqual(19);
});

test('converts simple decrements', () => {
  expect(romanToInt('IV')).toStrictEqual(4);
  expect(romanToInt('IX')).toStrictEqual(9);
  expect(romanToInt('XIV')).toStrictEqual(14);
  expect(romanToInt('XCIII')).toStrictEqual(93);
});

test('converts higher numbers', () => {
  expect(romanToInt('LVIII')).toStrictEqual(58);
  expect(romanToInt('MCMXCIV')).toStrictEqual(1994);
  expect(romanToInt('MMMCMXCIX')).toStrictEqual(3999);
});
