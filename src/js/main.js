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
// let rickQuotes = $('.rickQuotes').text();
// let mortyQuotes = $('.mortyQuotes').text();

var rickQuotesList = [
"Ohh yea, you gotta get schwifty.",

"He's not pressing charges... That's gotta be the 'you shot me' equivalent of not being mad.",

"This isn't Game of Thrones, Morty",

"You don't have to try to impress me Morty.",

"No jumping in the sewer!",

"Think for yourselves, don't be sheep.",

"Yo! What up my glip glops!",

"Then it's time to get your beak wet tonight playa!",

"Wubbalubbadubdub!",

"ALLAH BLEHHHH AKBAR"
];

console.log(rickQuotesList[3]);

var mortyQuoteList = [

"Aw, c'mon Rick. That doesn't seem so bad.",

"Aww, gee, you got me there, Rick.",,

"Don't be trippin dog we got you",

"Don't even trip about your pants, dawg. We got an extra pair right here.",

"Are you kidding? I'm hoping I can get to both of them, Rick!",

"I just killed my family! I don’t care who they were!",

"Why are you doing this bit? We're gonna die.",

"You're like Hitler, except...Hitler cared about Germany, or something",

"You're talking about Inception?",

"Nobody exists on purpose. Nobody belongs anywhere. Everybody’s gonna die. Come watch TV?"

];

console.log(mortyQuoteList);


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
  // morty.quotes(mortyQuotesList);

  // Rick zings back
  setTimeout( function () {
    let arguePoints = _.random(1, 20);
    rick.argues(arguePoints);
    // rick.quotes(rickQuotesList);

  }, 100);

  arguement.checkState(rick, morty);

});
