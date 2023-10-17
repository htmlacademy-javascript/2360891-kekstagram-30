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
  while (count){
    const message = getRandomItem(messages);
    if(!result.includes(message)){
      result += message;
      count--;
    }
  }
  return result;
};


const createCommentsData = (itemCount) => {
  const usersNames = ['Артем', 'Игорь', 'Анна', 'Дмитрий'];
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  return new Array(itemCount).fill(1).map((start, index)=>({
    id: start + index,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomMessage(messages),
    name: getRandomItem(usersNames),
  }));
};

const createPictureData = (itemCount = 25) => {
  const descriptions = ['Описание1', 'Описание2', 'Описание3'];

  return new Array(itemCount).fill(1).map((start, index)=>({
    id: start + index,
    url: `photos/${start + index}.jpg`,
    description: getRandomItem(descriptions),
    likes: getRandomInteger(15, 200),
    comments: createCommentsData(getRandomInteger(0, 30)),
  }));
};


void (getRandomItem,getRandomInteger,createPictureData,createCommentsData);
