import {createCard} from './create-card.js';
import {blockMap, unblockMap} from './form-modal.js';

const userAddressInput = document.querySelector('input[name="address"]');

const INITIAL_LOCATION = [35.675, 139.75];
const INITIAL_ZOOM = 13;
const COORDINATES_PRECISION = 5;

const map = L.map('map-canvas');

blockMap();

const setInputInitial = () => {
  const {lat, lng} = L.latLng(INITIAL_LOCATION);
  userAddressInput.value = `${lat.toFixed(COORDINATES_PRECISION)}, ${lng.toFixed(COORDINATES_PRECISION)}`;
};

map
  .on('load', () => {
    unblockMap();
    setInputInitial();
    userAddressInput.setAttribute('readonly', 'readonly');
  })
  .setView({
    lat: INITIAL_LOCATION[0],
    lng: INITIAL_LOCATION[1],
  }, INITIAL_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [26, 52],
});

const renderMarkers = function (points) {
  points.forEach((item) => {
    const marker = L.marker(
      {
        lat: item.location.lat,
        lng: item.location.lng,
      },
      {
        icon: pinIcon,
      },
    );
    marker
      .addTo(map)
      .bindPopup(
        createCard(item),
      );
  });
};


const mainMarker = L.marker(
  {
    lat: 35.675,
    lng: 139.75,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  userAddressInput.value = `${  evt.target.getLatLng().lat.toFixed(COORDINATES_PRECISION)  } ${  evt.target.getLatLng().lng.toFixed(COORDINATES_PRECISION)}`;
});

const setInitialView = () => {
  mainMarker.setLatLng({
    lat: INITIAL_LOCATION[0],
    lng: INITIAL_LOCATION[1],
  });

  map.setView({
    lat: INITIAL_LOCATION[0],
    lng: INITIAL_LOCATION[1],
  }, INITIAL_ZOOM);

  setInputInitial();
};

export {renderMarkers, setInitialView};
