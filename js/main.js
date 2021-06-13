function getRandomPositiveFloat (a, b, digits = 1) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower) + lower;

  // И в конце с помощью метода toFixed любого числа в JavaScript
  // указать требуемое количество знаков после точки
  return result.toFixed(digits);
}

function getRandomPositiveInteger (a, b) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий пожарный случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

  // И в конце с помощью метода Math.floor мы округляем полученный результат,
  // потому что Math.random() генерирует только дробные числа и ноль.
  return Math.floor(result);
}

const APARTMENTS_COUNT = 10;
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

const getRandomArrayElement = (elements) => elements[_.random(0, elements.length - 1)];

const showAd = () => {

  const featuresArray = new Array(getRandomPositiveInteger(1, FEATURES.length - 1)).fill(null);
  const featuresNoRepeat = FEATURES;
  for (let i = 0; i <= featuresArray.length -1; i++) {
    featuresArray[i] = featuresNoRepeat[getRandomPositiveInteger(0, featuresNoRepeat.length - 1)];
    const index = featuresNoRepeat.indexOf(featuresArray[i]);
    if (index > -1) {
      featuresNoRepeat.splice(index, 1);
    }
  }
  //
  const photosArray = new Array(getRandomPositiveInteger(1, PHOTOS.length - 1)).fill(null);
  const photosNoRepeat = PHOTOS;
  for (let i = 0; i <= photosArray.length -1; i++) {
    photosArray[i] = photosNoRepeat[getRandomPositiveInteger(0, photosNoRepeat.length - 1)];
    const index = photosNoRepeat.indexOf(photosArray[i]);
    if (index > -1) {
      photosNoRepeat.splice(index, 1);
    }
  }

  let randomAvatarIndex =   getRandomPositiveInteger(1,10);
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
    features: featuresArray,
    description: DESCRIPTIONS[getRandomPositiveInteger(0,DESCRIPTIONS.length - 1)],
    photos: photosArray,
  };

  return {
    location,
    offer,
    author,
  };

};

const apartments = new Array(APARTMENTS_COUNT).fill(null).map(() => showAd());
