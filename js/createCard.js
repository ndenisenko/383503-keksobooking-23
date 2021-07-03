import {list} from './generate-ads.js';

const apartmentTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const itemTemplate = document.querySelector('#card').content;
const popup = itemTemplate.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');

const generateSimilarElements = function () {

  // Формирование одного объявления
  for (let index = 0; index < 1; index++) {
    const element = popup.cloneNode(true);
    const itemOffer = list[index]['offer'];

    // Конструкция рабочая, но множить не хочу, придумаю функцию
    if (itemOffer['title']) {
      element.querySelector('.popup__title').textContent = itemOffer['title'];
    } else {
      element.querySelector('.popup__title').style.display = 'none';
    }

    element.querySelector('.popup__text--address').textContent = itemOffer['address'];
    element.querySelector('.popup__text--price').textContent = `${itemOffer['price'].toString()  } ₽/ночь`;
    element.querySelector('.popup__type').textContent = apartmentTypes[itemOffer['type']];
    element.querySelector('.popup__text--capacity').textContent = `${itemOffer['rooms'].toString()  } комнаты для ${  itemOffer['guests'].toString()  } гостей`;
    element.querySelector('.popup__text--time').textContent = `Заезд после ${  itemOffer['checkin'].toString()  }, выезд после ${  itemOffer['checkout'].toString()}`;
    element.querySelector('.popup__description').textContent = itemOffer['description'];

    const photoList = element.querySelector('.popup__photos');
    const photo = photoList.querySelector('.popup__photo');
    const photosOffer = itemOffer['photos'];
    if (photosOffer[0]){
      photo.src = itemOffer['photos'][0];
      for (let jIndex = 1; jIndex < photosOffer.length; jIndex++) {
        const photoCloned = photo.cloneNode(true);
        photoCloned.src = itemOffer['photos'][jIndex];
        photoList.appendChild(photoCloned);
      }
    } else {
      photoList.style.display = 'none';
    }

    const featuresList = element.querySelector('.popup__features');
    const features = itemOffer['features'];
    const modifiers = features.map((feature) =>  `popup__feature--${feature}`);
    featuresList.querySelectorAll('.popup__feature').forEach((item) => {
      const modifier = item.classList[1];
      if (! modifiers.includes(modifier)) {
        item.remove();
      }
    });

    element.querySelector('.popup__avatar').src = list[index]['author']['avatar'];
    mapCanvas.appendChild(element);
  }
};

generateSimilarElements();

export {generateSimilarElements};
