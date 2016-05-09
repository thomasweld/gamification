
export class Arguement {

  constructor() {
    this.state = 'arguing';
  }

  checkState(rick, morty) {

    if (rick.progress >= 100) {
      this.state = 'Game Over, Rick Won the Argument!';
      alert(this.state);
      document.getElementById("argue").disabled = true;
    } else if (morty.progress >= 100) {
      this.state = 'Game Over, Morty Wins the Argument!';
      alert(this.state);
      document.getElementById("argue").disabled = true;
    }

  }

}
