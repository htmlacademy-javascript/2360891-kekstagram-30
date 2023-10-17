const fitsLength = (text,lengthText) => text.length <= lengthText;


fitsLength('проверяемая строка', 20);
fitsLength('проверяемая строка', 18);
fitsLength('проверяемая строка', 10);

const isPalindrome = (sequence) => {
  sequence = sequence.toLowerCase().replaceAll(' ', '');
  return sequence === sequence.split('').reverse().join('');
};

isPalindrome('топот'); // true
isPalindrome('ДовОд'); // true
isPalindrome('Кекс'); // false
isPalindrome('Лёша на полке клопа нашёл '); // true

const parseDigits = (data) => {
  const result = data.toString().split('').filter((item)=> !Number.isNaN(parseInt(item,10)));
  return parseInt(result.join(''), 10);
};

parseDigits('2023 год'); // 2023
parseDigits('ECMAScript 2022'); // 2022
parseDigits('1 кефир, 0.5 батона'); // 105
parseDigits('агент 007'); // 7
parseDigits('а я томат'); // NaN
parseDigits(2023); // 2023
parseDigits(-1); // 1
parseDigits(1.5); // 15

