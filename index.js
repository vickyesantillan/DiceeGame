//Setting the first img

var range1 = 6 * Math.random() + 1; // randoms numbers from 1.000-5.99999
var randomNumber1 = Math.floor(range1); //randoms numbers from 1-6
//var imgRandomPath1To6 = 'images/dice' + randomNumber1 + '.png';

//Setting the second img

var range2 = 6 * Math.random() + 1;
var randomNumber2 = Math.floor(range2);

// document.addEventListener('click',document.querySelector('.img1'))

//Selecting the first img
document
  .querySelector('.img1')
  .setAttribute('src', 'images/dice' + randomNumber1 + '.png');

//Selecting the second img
document
  .querySelector('.img2')
  .setAttribute('src', 'images/dice' + randomNumber2 + '.png');

function winner() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').textContent = '🚩 Player 1 Wins!';
  }
  if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').textContent = 'Player 2 wins 🚩';
  }
  if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').textContent = 'Draw 🏳';
  }
}
winner();
