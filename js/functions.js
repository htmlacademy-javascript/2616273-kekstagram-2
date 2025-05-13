const checkLength = (string = '', maxLength = 1) => string.length <= maxLength;

const isPalindrome = (string = '') => {
  string = string.replaceAll(' ', '').toLowerCase();
  let reversLine = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversLine += string[i];
  }
  return string === reversLine;
};

const extractNumbers = (string) => {
  let result = '';
  string = string.toString();
  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }
  return result === '' ? NaN : Number(result);
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
