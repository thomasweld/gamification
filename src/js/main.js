import $ from 'jquery';
import _ from 'lodash';

// Classes
import { Arguement } from './classes/argue';
import { Rick } from './classes/rick';
import { Morty } from './classes/morty';

// Get Some Elements
let rickProgress = $('#rickProgress');
let mortyProgress = $('#mortyProgress');
let argueButton = $('#argue');
let rickQuotes = $('.rickQuotes');
let mortyQuotes = $('.mortyQuotes');

// Instantiate Our Players & Game
let arguement = new Arguement();
let rick = new Rick();
let morty = new Morty();

// Start Each Round Of Fighting
argueButton.on('click', function (event) {
  event.preventDefault();

  // Morty Goes First
  let arguePoints = _.random(1, 20);
  morty.argues(arguePoints);
  morty.quotes(mortyQuotes);

  // Rick zings back
  setTimeout( function () {
    let arguePoints = _.random(1, 20);
    rick.argues(arguePoints);
    rick.quotes(rickQuotes);

  }, 100);

  arguement.checkState(rick, morty);

});
