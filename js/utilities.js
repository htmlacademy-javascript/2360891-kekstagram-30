const request = async (url, options) => {
  const response = await fetch(url, options);
  if(!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};


const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback(...rest), timeoutDelay);
  };
};

const getRandomItem = (items) => {
  const fraction = items.length * Math.random();
  const index = Math.floor(fraction);
  return items[index];
};

const getRandomPictures = (pictures, items = 10) => {
  const randomPictures = new Set();
  while (randomPictures.size < items) {
    randomPictures.add(getRandomItem(pictures));
  }
  return [...randomPictures];
};

export {request, debounce, getRandomPictures};
