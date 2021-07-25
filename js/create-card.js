const apartmentTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const itemTemplate = document.querySelector('#card').content;
const popup = itemTemplate.querySelector('.popup');

const addContent = (node, content) => {
  if (content) {
    node.textContent = content;
  } else {
    node.style.display = 'none';
  }
};

const addTextWithFormatting = (node, content, str) => {
  if (content) {
    node.textContent = str;
  } else {
    node.style.display = 'none';
  }
};

const addPhotos = (photosOffer, photo, photoList) => {
  if (photosOffer) {
    photosOffer.forEach((el) => {
      const photoCloned = photo.cloneNode(true);
      photoCloned.src = el;
      photoList.appendChild(photoCloned);
      photo.remove();
    });
  } else {
    photoList.style.display = 'none';
  }
};

const addFeatures = (featuresOffer, featuresList) => {
  const features = featuresOffer;
  if (features) {
    const modifiers = features.map((feature) =>  `popup__feature--${feature}`);
    featuresList.querySelectorAll('.popup__feature').forEach((elem) => {
      const modifier = elem.classList[1];
      if (! modifiers.includes(modifier)) {
        elem.remove();
      }
    });
  }
};

const createCard = function (item) {
  const element = popup.cloneNode(true);
  const itemOffer = item.offer;
  const photosOffer = itemOffer.photos;
  const featuresOffer = itemOffer.features;
  const photoList = element.querySelector('.popup__photos');
  const featuresList = element.querySelector('.popup__features');
  const photo = photoList.querySelector('.popup__photo');

  addContent(element.querySelector('.popup__text--address'), itemOffer.address);
  addTextWithFormatting(element.querySelector('.popup__text--price'), itemOffer.price, `${itemOffer.price } ₽/ночь`);
  addContent(element.querySelector('.popup__type'), apartmentTypes[itemOffer.type]);
  addTextWithFormatting(element.querySelector('.popup__text--capacity'), itemOffer.rooms, `${itemOffer.rooms  } комнаты для ${  itemOffer.guests  } гостей`);
  addTextWithFormatting(element.querySelector('.popup__text--time'), itemOffer.checkin, `Заезд после ${  itemOffer.checkin  }, выезд после ${  itemOffer.checkout}`);
  addContent(element.querySelector('.popup__description'), itemOffer.description);

  addPhotos(photosOffer, photo, photoList);
  addFeatures(featuresOffer, featuresList);
  element.querySelector('.popup__avatar').src = item.author.avatar;
  return element;
};

export {createCard};
