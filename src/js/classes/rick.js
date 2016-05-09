export class Rick {

  constructor() {
    this.progress = 0;
  }

  argues(arguePoints) {
    this.progress += arguePoints;
    console.log(this.progress);
    rickProgress.value = this.progress;
  }

}
