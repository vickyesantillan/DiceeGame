var range = 6 * Math.random() + 1; // randoms numbers from 1.000-5.99999
var randomNumber1 = Math.floor(range); //randoms numbers from 1-6
//var imgRandomPath1To6 = 'images/dice' + randomNumber1 + '.png';

// document.addEventListener('click',document.querySelector('.img1'))

document
  .querySelector('.img1')
  .setAttribute('src', 'images/dice' + randomNumber1 + '.png');
