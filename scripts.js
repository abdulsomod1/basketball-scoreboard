const homeAddPoint = document.getElementById('#home-add-point');
const guestPts = document.getElementById('#guest-pts');

const homeCountOne = document.getElementById('#home-count-one');
const homeCountTwo = document.getElementById('#home-count-two');
const homeCountThree = document.getElementById('#homeCountThree');

const guestCountOne = document.getElementById('#guest-count-one');
const guestCountTwo = document.getElementById('#guest-count-two');
const guestCountThree = document.getElementById('#guest-count-three');

homeCountOne.addEventListener('click', function handler() {
  homeAddPoint.textContent = Number(homeAddPoint.textContent) + 1;
});

homeCountTwo.addEventListener('click', function handler() {
  homeAddPoint.textContent = Number(homeAddPoint.textContent) + 2;
});

homeCountThree.addEventListener('click', function handler() {
  homeAddPoint.textContent = Number(homeAddPoint.textContent) + 3;
});

guestCountOne.addEventListener('click', function handler() {
  guestPts.textContent = Number(guestPts.textContent) + 1;
});

guestCountTwo.addEventListener('click', function handler() {
  guestPts.textContent = Number(guestPts.textContent) + 2;
});

guestCountThree.addEventListener('click', function handler() {
  guestPts.textContent = Number(guestPts.textContent) + 3;
});
