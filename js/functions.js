const  checkLength (string str = '', int maxLength =0) =>
 str.length <= maxLength;
console.log(checkLength)('проверяемая строка', 20); // true
console.log(checkLength)('проверяемая строка', 18); // true
console.log(checkLength)('проверяемая строка', 10); // false

const isPalindrome (string str) =>
 left=0, int right=-1;
while (left<right);
if (str.charAt(left) != str.charAt(right)) return false;
left++;
right--;

console.log(isPalindrome)('топот'); // true
console.log(isPalindrome)('ДовОд'); // true
console.log(isPalindrome)('Кекс');  // false

srf = replaceAll(" ", "");

console.log(isPalindrome)('Лёша на полке клопа нашёл '); // true
