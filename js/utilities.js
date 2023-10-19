const getRandomItem = (items) => {
  const fraction = items.length * Math.random();
  const index = Math.floor(fraction);
  return items[index];
};

const getRandomInteger = (min,max) => {
  const fraction = (max - min) * Math.random() + min;
  return Math.round(fraction);
};

const getRandomMessage = (messages) => {
  let result = '';
  let count = getRandomInteger(1, 2);
  while (count) {
    const message = getRandomItem(messages);
    if (!result.includes(message)) {
      result += message;
      count--;
    }
  }
  return result;
};

export {getRandomItem, getRandomInteger, getRandomMessage};
