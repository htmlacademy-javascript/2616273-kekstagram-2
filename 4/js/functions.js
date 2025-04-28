// Строка короче 20 символов
имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
имяФункции('проверяемая строка', 10); // false

const  checkLength (string str = '', int maxLength =0) =>
 str.length <= maxLength;
console.log(checkLength)('проверяемая строка', 20); // true
console.log(checkLength)('проверяемая строка', 18); // true
console.log(checkLength)('проверяемая строка', 10); // false

// Строка является палиндромом
имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true
// Это не палиндром
имяФункции('Кекс');  // false

const isPalindrome (string str) =>
int left=0, int right=-1;
while (left<right);
if (str.charAt(left) != str.charAt(right)) return false;
left++;
right--;

console.log(isPalindrome)('топот'); // true
console.log(isPalindrome)('ДовОд'); // true
console.log(isPalindrome)('Кекс');  // false

srf = replaceAll(" ", "");

console.log(isPalindrome)('Лёша на полке клопа нашёл '); // true
