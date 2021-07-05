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

const createCard = function (list) {
  list.forEach((item) => {
    const element = popup.cloneNode(true);
    const itemOffer = item.offer;

    const addContent = function (node, content) {
      if (content) {
        node.textContent = content;
      } else {
        node.style.display = 'none';
      }
    };

    const addTextWithFormatting = function (node, content, str) {
      if (content) {
        node.textContent = str;
      } else {
        node.style.display = 'none';
      }
    };

    addContent(element.querySelector('.popup__text--address'), itemOffer.address);
    addTextWithFormatting(element.querySelector('.popup__text--price'), itemOffer.price, `${itemOffer.price } ₽/ночь`);
    addContent(element.querySelector('.popup__type'), apartmentTypes[itemOffer.type]);
    addTextWithFormatting(element.querySelector('.popup__text--capacity'), itemOffer.rooms, `${itemOffer.rooms  } комнаты для ${  itemOffer.guests  } гостей`);
    addTextWithFormatting(element.querySelector('.popup__text--time'), itemOffer.checkin, `Заезд после ${  itemOffer.checkin  }, выезд после ${  itemOffer.checkout}`);
    addContent(element.querySelector('.popup__description'), itemOffer.description);

    const photoList = element.querySelector('.popup__photos');
    const photo = photoList.querySelector('.popup__photo');
    const photosOffer = itemOffer.photos;
    if (photosOffer[0]){
      photo.src = itemOffer.photos[0];
      for (let count = 1; count < photosOffer.length; count++) {
        const photoCloned = photo.cloneNode(true);
        photoCloned.src = itemOffer.photos[count];
        photoList.appendChild(photoCloned);
      }
    } else {
      photoList.style.display = 'none';
    }

    const featuresList = element.querySelector('.popup__features');
    const features = itemOffer.features;
    const modifiers = features.map((feature) =>  `popup__feature--${feature}`);
    featuresList.querySelectorAll('.popup__feature').forEach((elem) => {
      const modifier = elem.classList[1];
      if (! modifiers.includes(modifier)) {
        elem.remove();
      }
    });

    element.querySelector('.popup__avatar').src = item.author.avatar;
    mapCanvas.appendChild(element);
  });
};

export {createCard};
