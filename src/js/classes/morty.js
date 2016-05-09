export class Morty {

  constructor() {
    this.progress = 0;
  }

  argues(arguePoints) {
    this.progress += arguePoints;
    console.log(this.progress);
    mortyProgress.value = this.progress;
  }

}
