import _ from 'lodash';

export class Rick {

  constructor() {
    this.progress = 0;
    this.quote = '';
    this.quoteList = [
      "They're robots Morty! It's okay to shoot them! They're just robots!",
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
  }

  argues(arguePoints) {
    this.progress += arguePoints;
    console.log(this.progress);
    rickProgress.value = this.progress;
  }

  quotes(rickQuotes) {
    this.quote = this.quoteList[ (_.random(1, 10)) ];
    rickQuotes.text(this.quote);
  }

}
