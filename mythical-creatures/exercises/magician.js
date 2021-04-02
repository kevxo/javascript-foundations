class Magician {
  constructor (data){
    this.name = `The Great ${data["name"]}`;
    this.assistant = data["assistant"]

    if (data["clothing"]){
      this.favoriteAccessory = data["clothing"]
    } else {
      this.favoriteAccessory = 'top hat'
    }

    this.confidencePercentage = 10
  }

  performIncantation(phrase) {
    return `${phrase.toUpperCase()}!`;
  }

  performTrick() {
    if (this.favoriteAccessory === 'top hat') {
      this.confidencePercentage += 10;
      return 'PULL RABBIT FROM TOP HAT'
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
  }

  performShowStopper() {
    if (this.assistant === true && this.confidencePercentage > 10){
      return 'WOW! The magician totally just sawed that person in half!'
    } else if (this.assistant === true && this.confidencePercentage === 10) {
      return 'Oh no, this trick is not ready!'
    } else {
      return 'Oh no, this trick is not ready!'
    }
  }
}

module.exports = Magician