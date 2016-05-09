import _ from 'lodash';

export class Morty {

  constructor() {
    this.progress = 0;
    this.quote = '';
    this.quoteList = [
      "Aw, c'mon Rick. That doesn't seem so bad.",
      "Aww, gee, you got me there, Rick.",
      "Don't be trippin dog we got you",
      "Don't even trip about your pants, dawg. We got an extra pair right here.",
      "Are you kidding? I'm hoping I can get to both of them, Rick!",
      "I just killed my family! I don’t care who they were!",
      "Why are you doing this bit? We're gonna die.",
      "You're like Hitler, except...Hitler cared about Germany, or something",
      "You're talking about Inception?",
      "Nobody exists on purpose. Nobody belongs anywhere. Everybody’s gonna die. Come watch TV?"
    ];
  }

  argues(arguePoints) {
    this.progress += arguePoints;
    console.log(this.progress);
    mortyProgress.value = this.progress;
  }

  quotes(mortyQuotes) {
    this.quote = this.quoteList[ (_.random(1, 10)) ];
    mortyQuotes.text(this.quote);
  }

}
