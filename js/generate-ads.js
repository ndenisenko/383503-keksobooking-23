import {getRandomPositiveFloat} from './utils/get-random-positive-float.js';
import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';

const TITLES = ['Уютная квартира',
  'Апартаменты у реки',
  'Апартаменты на ',
  'Отель №1',
  'Апартаменты в ЖК Кристалл',
  'Дом у пляжа',
  '1-к. квартира',
  'ЖК Дом на Блюхера',
  'ЖК Иван да Марья',
  'ЖК Паруса',
];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['Идеально чистая квартира', 'Недорогой отель', 'Со всеми удобствами', 'Курить запрещено', 'Можно с животными'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const generateFeatures = (amount) => {
  const featuresArray = [];
  const featuresCopy = FEATURES.slice();
  for (let step = 0; step <= amount; step++) {
    featuresArray.push(featuresCopy[getRandomPositiveInteger(0, featuresCopy.length - 1)]);
    const index = featuresCopy.indexOf(featuresArray[step]);
    if (index > -1) {
      featuresCopy.splice(index, 1);
    }
  }
  return featuresArray;
};

const generateAd = () => {
  const photosArray = PHOTOS.slice(0, getRandomPositiveInteger(0, 3));

  let randomAvatarIndex = getRandomPositiveInteger(1, 10);
  if (randomAvatarIndex < 10) {
    randomAvatarIndex = `0${  randomAvatarIndex}`;
  }

  const location = {
    lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
  };

  const author = {
    avatar: `img/avatars/user${  randomAvatarIndex  }.png`,
  };

  const offer = {
    title: TITLES[getRandomPositiveInteger(0,TITLES.length - 1)],
    address: `${location.lat  },${  location.lng}`,
    price: getRandomPositiveInteger(1000,20000),
    type: TYPES[getRandomPositiveInteger(0,TYPES.length - 1)],
    rooms: getRandomPositiveInteger(1,5),
    guests: getRandomPositiveInteger(1,10),
    checkin: CHECKINS[getRandomPositiveInteger(0,CHECKINS.length - 1)],
    checkout: CHECKOUTS[getRandomPositiveInteger(0,CHECKOUTS.length - 1)],
    features: generateFeatures(getRandomPositiveInteger(1, FEATURES.length - 1)),
    description: DESCRIPTIONS[getRandomPositiveInteger(0,DESCRIPTIONS.length - 1)],
    photos: photosArray,
  };

  return {
    location,
    offer,
    author,
  };

};

function generateAds (adsCount) {
  const list = [];
  for (let index = 0; index < adsCount; index++) {
    list.push(generateAd());
  }
  return list;
}

export {generateAds};
