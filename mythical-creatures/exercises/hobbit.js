class Hobbit {
  constructor (name) {
    this.name = name['name'];
    this.age = 0;
    this.hasRing = false;
    this.adult = false;
    this.old = false;
  }

  celebrateBirthday() {
    this.age++;

    if (this.age >= 101){
      this.old = true;
    } else {
      this.old;
    }

    if (this.age <= 32) {
      this.adult;
    } else {
      this.adult = true;
    }
  }

  getRing () {
    if (this.name == 'Frodo') {
      this.hasRing = true;
      return 'Here is the ring!'
    } else {
      this.hasRing;
      return 'You can\'t have it!'
    }
  }
}

module.exports = Hobbit