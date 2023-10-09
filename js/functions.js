const lengthString = (string,symbols) => {
  if (string.length <= symbols){
    return true;
  }
  return false;
};

lengthString('проверяемая строка', 20);
lengthString('проверяемая строка', 18);
lengthString('проверяемая строка', 10);

const checkPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');

  if (string === string.split('').reverse().join('')){
    return true;
  }
  return false;
};

checkPalindrome('топот'); // true
checkPalindrome('ДовОд'); // true
checkPalindrome('Кекс'); // false
checkPalindrome('Лёша на полке клопа нашёл '); // true

const searchNumbers = (data) => {
  const result = [];
  const numbers = ['0','1','2','3','4','5','6','7','8','9'];

  data.toString().split('').forEach((element) => {
    numbers.forEach((number) => {
      if (element === number) {
        result.push(element);
      }
    });
  });
  return result.length > 0 ? result.join('') : NaN;
};

searchNumbers('2023 год'); // 2023
searchNumbers('ECMAScript 2022'); // 2022
searchNumbers('1 кефир, 0.5 батона'); // 105
searchNumbers('агент 007'); // 7
searchNumbers('а я томат'); // NaN
searchNumbers(2023); // 2023
searchNumbers(-1); // 1
searchNumbers(1.5); // 15

