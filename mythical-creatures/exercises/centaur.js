class Centaur {
  constructor(data) {
    this.name = data["name"]
    this.breed = data["type"]
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.crankyCount = 0;
  }

  shootBow(){
    this.crankyCount += 1;
    if (this.crankyCount === 3){
      this.cranky = true;
    }

    if (this.cranky === true){
      return 'NO!'
    } else if (this.layingDown === true){
      return 'NO!'
    }else {
      return 'Twang!!!'
    }
  }

  run(){
    this.crankyCount += 1;
    if (this.crankyCount === 3){
      this.cranky = true;
    }

    if (this.cranky === true){
      return 'NO!'
    } else if (this.layingDown === true){
      return 'NO!'
    } else {
      return 'Clop clop clop clop!!!'
    }

  }

  sleep(){
    if (this.standing) {
      return 'NO!'
    } else if (this.layingDown === true){
      this.cranky = false;
      return 'ZZZZ'
    }
  }

  layDown(){
    this.standing = false;
    this.layingDown = true;
  }

  standUp(){
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion(){
    if (this.layingDown === false){
      this.cranky = false;

    } else {
      return 'Not while I\'m laying down!'
    }
  }
}


module.exports = Centaur;