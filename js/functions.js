const fitsLength = (string,symbols) => {
  if (string.length <= symbols){
    return true;
  }
  return false;
};

fitsLength('проверяемая строка', 20);
fitsLength('проверяемая строка', 18);
fitsLength('проверяемая строка', 10);

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
  data.toString().split('').forEach((element) => {
    if (!Number.isNaN(parseInt(element,10))) {
      result.push(element);
    }
  });
  return result ? parseInt(result.join(''), 10) : NaN;
};

searchNumbers('2023 год'); // 2023
searchNumbers('ECMAScript 2022'); // 2022
searchNumbers('1 кефир, 0.5 батона'); // 105
searchNumbers('агент 007'); // 7
searchNumbers('а я томат'); // NaN
searchNumbers(2023); // 2023
searchNumbers(-1); // 1
searchNumbers(1.5); // 15

