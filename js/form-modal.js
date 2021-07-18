const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const MAX_PRICE = 1000000;

const userNameInput = document.querySelector('input[name="title"]');
const userPriceInput = document.querySelector('input[name="price"]');
const userRoomsInput = document.querySelector('select[name="rooms"]');
const userCapacityInput = document.querySelector('select[name="capacity"]');

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
    userPriceInput.setCustomValidity(`Цена должнабыть меньше ${ MAX_PRICE} руб.`);
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

userNameInput.addEventListener('input', userNameInputHandler);
userPriceInput.addEventListener('input', userPriceInputHandler);
userRoomsInput.addEventListener('change', userRoomsInputHandler);
userCapacityInput.addEventListener('change', userCapacityInputHandler);