const romanToInt = (roman = 'III') => {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;
  let lastChar = undefined;

  roman.split('').forEach(symb => {
    if (lastChar) {
      if (symbols[lastChar] < symbols[symb]) {
        result -= symbols[lastChar];
        result += symbols[symb] - symbols[lastChar];
      } else {
        result += symbols[symb];
      }
    } else {
      result += symbols[symb];
    }
    lastChar = symb;
  });
  return result;
};

module.exports = romanToInt;
