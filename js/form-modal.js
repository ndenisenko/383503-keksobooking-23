const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const MAX_PRICE = 1000000;
let priceValue = 0;

const userNameInput = document.querySelector('input[name="title"]');
const userPriceInput = document.querySelector('input[name="price"]');
const userRoomsInput = document.querySelector('select[name="rooms"]');
const userCapacityInput = document.querySelector('select[name="capacity"]');
const userApartTypeInput = document.querySelector('select[name="type"]');
const userTimeInInput = document.querySelector('select[name="timein"]');
const userTimeOutInput = document.querySelector('select[name="timeout"]');

const timeInOutHandler = function (userTime, autoTime) {
  switch (userTime.value) {
    case '12:00':
      autoTime.value = '12:00';
      break;
    case '13:00':
      autoTime.value = '13:00';
      break;
    case '14:00':
      autoTime.value = '14:00';
      break;
    default:
  }
};

const userTimeInInputHandler = function () {
  return timeInOutHandler(userTimeInInput, userTimeOutInput);
};

const userTimeOutInputHandler = function () {
  return timeInOutHandler(userTimeOutInput, userTimeInInput);
};

const userApartTypeInputHandler = function () {
  //
  switch (userApartTypeInput.value) {
    case 'bungalow':
      priceValue = 0;
      break;
    case 'flat':
      priceValue = 1000;
      break;
    case 'hotel':
      priceValue = 3000;
      break;
    case 'palace':
      priceValue = 10000;
      break;
    case 'house':
      priceValue = 5000;
      break;
    default:
  }
  userPriceInput.setAttribute('placeholder', priceValue);

  if (userPriceInput.value < userPriceInput.getAttribute('placeholder')) {
    userPriceInput.setCustomValidity(`Цена должна быть больше ${ userPriceInput.getAttribute('placeholder')} руб.`);
  } else {
    userPriceInput.setCustomValidity('');
  }
  userPriceInput.reportValidity();
};

const userNameInputHandler = function () {
  const valueLength = userNameInput.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Еще ${ MIN_NAME_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Уберите ${ valueLength - MAX_NAME_LENGTH} симв.`);
  } else {
    userNameInput.setCustomValidity('');
  }

  userNameInput.reportValidity();
};

const userPriceInputHandler = function () {
  if (userPriceInput.value > MAX_PRICE) {
    userPriceInput.setCustomValidity(`Цена должна быть меньше ${ MAX_PRICE} руб.`);
  } else if (userPriceInput.value < userPriceInput.getAttribute('placeholder')) {
    userPriceInput.setCustomValidity(`Цена должна быть больше ${ userPriceInput.getAttribute('placeholder')} руб.`);
  } else {
    userPriceInput.setCustomValidity('');
  }

  userPriceInput.reportValidity();
};

const userRoomsCapacityHandler = function (nodeName) {
  if (userRoomsInput.value < userCapacityInput.value) {
    nodeName.setCustomValidity('Количество комнат должно быть не меньше количества гостей');
  } else {
    nodeName.setCustomValidity('');
  }
  nodeName.reportValidity();
};

const userRoomsInputHandler = function () {
  return userRoomsCapacityHandler(userRoomsInput);
};

const userCapacityInputHandler = function () {
  return userRoomsCapacityHandler(userRoomsInput);
};

const form = document.querySelector('.ad-form');
const formItemsList = form.querySelectorAll('fieldset');
const map = document.querySelector('.map__filters');
const mapFilterList = map.querySelectorAll('select');

const blockMap = function () {
  formItemsList.forEach((item) => item.setAttribute('disabled', true));
  form.classList.add('ad-form--disabled');

  map.classList.add('.map__filters--disabled');
  mapFilterList.forEach((item) => item.setAttribute('disabled', true));
};

const unblockMap = function () {
  formItemsList.forEach((item) => item.removeAttribute('disabled', true));
  form.classList.remove('ad-form--disabled');

  map.classList.remove('.map__filters--disabled');
  mapFilterList.forEach((item) => item.removeAttribute('disabled'));
};


userNameInput.addEventListener('input', userNameInputHandler);
userPriceInput.addEventListener('input', userPriceInputHandler);
userRoomsInput.addEventListener('change', userRoomsInputHandler);
userCapacityInput.addEventListener('change', userCapacityInputHandler);
userApartTypeInput.addEventListener('change', userApartTypeInputHandler);
userTimeInInput.addEventListener('change', userTimeInInputHandler);
userTimeOutInput.addEventListener('change', userTimeOutInputHandler);

export {blockMap, unblockMap};
