class Sphinx {
  constructor(name) {
    this.name = name;
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    if (this.riddles.length === 3) {
      this.riddles.shift();
      this.riddles.push(riddle);
    } else {
      this.riddles.push(riddle);
    }
  }

  attemptAnswer(answer) {
    for (let i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answer){
        this.riddles.splice(i);
        return "That wasn't that hard, I bet you don't get the next one"
      }
    }

    if (this.riddles.length === 3){
      this.heroesEaten += 1;
    } else if (this.riddles.length === 0){
      return 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"Halfway, after that it\'s running out.\"???'
    }
  }
}

module.exports = Sphinx