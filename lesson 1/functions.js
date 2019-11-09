'use strict';

function getDayName (day) {
  const dayNames = 
    ['monday', 'thuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  return dayNames.filter((elem, index) => index + 1 == day).join('');
}

function getDistance (x1, y1, x2, y2) {
  const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  return Math.trunc(dist * 100) / 100;
};


console.log(getDayName(6));
console.log(getDistance(7, 8, -8, 5));