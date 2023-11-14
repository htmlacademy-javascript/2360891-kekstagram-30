const DEFAULT_DELAY = 500;

const request = async (url, options) => {
  const response = await fetch(url, options);
  if(!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

const debounce = (callback, timeoutDelay = DEFAULT_DELAY) => {
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

const shuffleItems = (items, limit) => {
  const randomItems = new Set();
  while (randomItems.size < limit) {
    randomItems.add(getRandomItem(items));
  }
  return [...randomItems];
};

export {request, debounce, shuffleItems};
