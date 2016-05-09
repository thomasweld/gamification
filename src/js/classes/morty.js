export class Morty {

  constructor() {
    this.progress = 0;
    this.quote = '';
  }

  argues(arguePoints) {
    this.progress += arguePoints;
    console.log(this.progress);
    mortyProgress.value = this.progress;
  }

  // quotes(mortyQuotesList) {
  //   this.quote = mortyQuotesList[ (_.random(1, 10)) ];
  //   rickQuotes = this.quote;
  // }

}
