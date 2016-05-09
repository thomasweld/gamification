export class Rick {

  constructor() {
    this.progress = 0;
    this.quote = '';
  }

  argues(arguePoints) {
    this.progress += arguePoints;
    console.log(this.progress);
    rickProgress.value = this.progress;
  }

  // quotes(rickQuotesList) {
  //   rickQuotes = rickQuotesList[ (_.random(1, 10)) ];
  // }

}
