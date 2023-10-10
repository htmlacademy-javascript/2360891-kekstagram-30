const fitsLength = (text,lengthText) => {
  if (text.length <= lengthText){
    return true;
  }
  return false;
};

fitsLength('проверяемая строка', 20);
fitsLength('проверяемая строка', 18);
fitsLength('проверяемая строка', 10);

const isPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};

isPalindrome('топот'); // true
isPalindrome('ДовОд'); // true
isPalindrome('Кекс'); // false
isPalindrome('Лёша на полке клопа нашёл '); // true

const parseDigits = (data) => {
  const result = data.toString().split('').filter((element)=> (!Number.isNaN(parseInt(element,10))));
  return result ? parseInt(result.join(''), 10) : NaN;
};

parseDigits('2023 год'); // 2023
parseDigits('ECMAScript 2022'); // 2022
parseDigits('1 кефир, 0.5 батона'); // 105
parseDigits('агент 007'); // 7
parseDigits('а я томат'); // NaN
parseDigits(2023); // 2023
parseDigits(-1); // 1
parseDigits(1.5); // 15

