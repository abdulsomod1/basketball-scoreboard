const homeCountEl = document.querySelector('#home-count-el');
const guestCountEl = document.querySelector('#guest-count-el');

const homeCountOne = document.querySelector('#home-count-one');
const homeCountTwo = document.querySelector('#home-count-two');
const homeCountThree = document.querySelector('#home-count-three');

const guestCountOne = document.querySelector('#guest-count-one');
const guestCountTwo = document.querySelector('#guest-count-two');
const guestCountThree = document.querySelector('#guest-count-three');

const reset = document.querySelector('#reset');

homeCountOne.addEventListener('click', function handler() {
  homeCountEl.textContent = Number(homeCountEl.textContent) + 1;
});

homeCountTwo.addEventListener('click', function handler() {
  homeCountEl.textContent = Number(homeCountEl.textContent) + 2;
});

homeCountThree.addEventListener('click', function handler() {
  homeCountEl.textContent = Number(homeCountEl.textContent) + 3;
});

guestCountOne.addEventListener('click', function handler() {
  guestCountEl.textContent = Number(guestCountEl.textContent) + 1;
});

guestCountTwo.addEventListener('click', function handler() {
  guestCountEl.textContent = Number(guestCountEl.textContent) + 2;
});

guestCountThree.addEventListener('click', function handler() {
  guestCountEl.textContent = Number(guestCountEl.textContent) + 3;
});

reset.addEventListener('click', function handler() {
  homeCountEl.textContent = 0;
  guestCountEl.textContent = 0;
});
