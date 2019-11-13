
function getDayName (day) {
  day = Number(day);
  if (isNaN(day)) return "not valid data"
  if (day < 1 || day > 7) {
    return "not valid data"
  }
  const dayNames = 
    ['monday', 'thuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  for (let i = 0; i < dayNames.length; i++) {
    if (day == i+1) {
      return dayNames[i]
    }
  }
 }

function getDistance (x1, y1, x2, y2) {
  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) return "not valid data"
  const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  return Math.trunc(dist * 100) / 100;
};


console.log(getDayName(6));
console.log(getDistance(7, 8, -8, 5));