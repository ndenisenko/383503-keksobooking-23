import {generateAds} from './generate-ads.js';
import {createCard} from './create-card.js';
import {blockMap, unblockMap} from './form-modal.js';

blockMap();

const map = L.map('map-canvas')
  .on('load', () => {
    unblockMap();
    const userAddressInput = document.querySelector('input[name="address"]');
    userAddressInput.setAttribute('readonly', 'readonly');
  })
  .setView({
    lat: 35.85000,
    lng: 139.80000,
  }, 10);

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
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const points = generateAds(10);

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


const mainMarker = L.marker(
  {
    lat: 35.85000,
    lng: 139.80000,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  evt.target.getLatLng();
});
