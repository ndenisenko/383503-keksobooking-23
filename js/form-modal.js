const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const MAX_PRICE = 1000000;

const userNameInput = document.querySelector('input[name="title"]');
const userPriceInput = document.querySelector('input[name="price"]');
const userRoomsInput = document.querySelector('select[name="rooms"]');
const userCapacityInput = document.querySelector('select[name="capacity"]');

userNameInput.addEventListener('input', () => {
  const valueLength = userNameInput.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Еще ${ MIN_NAME_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Уберите ${ valueLength - MAX_NAME_LENGTH} симв.`);
  } else {
    userNameInput.setCustomValidity('');
  }

  userNameInput.reportValidity();
});

userPriceInput.addEventListener('input', () => {
  if (userPriceInput.value > MAX_PRICE) {
    userPriceInput.setCustomValidity(`Цена должнабыть меньше ${ MAX_PRICE} руб.`);
  } else {
    userPriceInput.setCustomValidity('');
  }

  userPriceInput.reportValidity();
});

userRoomsInput.addEventListener('change', () => {
  if (userRoomsInput.value < userCapacityInput.value) {
    userRoomsInput.setCustomValidity('Количество комнат должно быть не меньше количества гостей');
  } else {
    userRoomsInput.setCustomValidity('');
  }

  userRoomsInput.reportValidity();
});

userCapacityInput.addEventListener('change', () => {

});
