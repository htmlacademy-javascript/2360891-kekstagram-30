const fitsLength = (text,textLength) => text.length <= textLength;


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

const parseMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const checkMeetingDuration = (workStart, workEnd, meetingStart, meetingDuration) =>
  parseMinutes(workStart) <= parseMinutes(meetingStart) &&
  (parseMinutes(meetingStart) + meetingDuration) <= parseMinutes(workEnd);

// console.log(work('08:00', '17:30', '14:00', 90));
// console.log(work('8:0', '10:0', '8:0', 120));
// console.log(work('08:00', '14:30', '14:00', 90));
// console.log(work('14:00', '17:30', '08:0', 90));
// console.log(work('8:00', '17:30', '08:00', 900));

void(checkMeetingDuration);
