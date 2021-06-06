function getRandomInt (min, max) {
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));
  if (min > max) {
    return getRandomInt(max, min);
  }
  return Math.round(Math.random() * (max - min) + min);
}

getRandomInt (3, 1);

function getRandomFloat (min, max, round) {
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));
  if (min > max) {
    return getRandomInt(max, min);
  }
  return (Math.random() * (max - min) + min).toFixed(round);
}

getRandomFloat (1, 5, 2);
