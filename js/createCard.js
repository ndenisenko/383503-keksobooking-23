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

/*const checkOnEmptiness = function (array) {
  array.forEach ((item) => {
    if (! item.textContent) {
      item.style.display = 'none';
    } else {
      item.style.display = 'block';
    }
  })
};*/

const generateSimilarElements = function () {
  // const arraytoCheck = [];

  // Формирование одного объявления
  for (let i = 0; i < 1; i++) {
    const element = popup.cloneNode(true);
    const itemOffer = list[i]['offer'];
    element.querySelector('.popup__title').textContent = itemOffer['title'];
    element.querySelector('.popup__text--address').textContent = itemOffer['address'];
    element.querySelector('.popup__text--price').textContent = `${itemOffer['price'].toString()  } ₽/ночь`;
    element.querySelector('.popup__type').textContent = apartmentTypes[itemOffer['type']];
    element.querySelector('.popup__text--capacity').textContent = `${itemOffer['rooms'].toString()  } комнаты для ${  itemOffer['guests'].toString()  } гостей`;
    element.querySelector('.popup__text--time').textContent = `Заезд после ${  itemOffer['checkin'].toString()  }, выезд после ${  itemOffer['checkout'].toString()}`;

    const photoList = element.querySelector('.popup__photos');
    const photo = photoList.querySelector('.popup__photo');
    const photosOffer = itemOffer['photos'];

    if (photosOffer[0]){
      photo.src = itemOffer['photos'][0];
      for (let j = 1; j < photosOffer.length; j++) {
        const photoCloned = photo.cloneNode(true);
        photoCloned.src = itemOffer['photos'][j];
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

    element.querySelector('.popup__description').textContent = itemOffer['description'];
    element.querySelector('.popup__avatar').src = list[i]['author']['avatar'];

    mapCanvas.appendChild(element);
  }
};

generateSimilarElements();

export {generateSimilarElements};
