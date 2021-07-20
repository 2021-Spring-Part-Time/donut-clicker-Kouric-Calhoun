class DonutMaker {
  constructor(numDonuts, numAutoClickers) {
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
  }

  //lteation 1 feature 1 and 5
  addDonut() {
    this.numDounts++;
  }

  //lteration 1 feature 2 and 4
  addAutoClicker() {
    if (this.numDonuts >= 100) {
      this.numAutoClickers++;
      this.numDonuts -= 100;
    }
  }

  //lteation 1 feature 5
  activateAutoClickers() {
    if (this.numAutoClickers > 0) {
      this.numDonuts += this.numAutoClickers * 1;
    }
  }

  addMultiplier() {
    if (this.numDonuts >= 10) {
      this.addMultiplier++;
      this.numDonuts -= 10;
    }
  }
}

export default DonutMaker;
