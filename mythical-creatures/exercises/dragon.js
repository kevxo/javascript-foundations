class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.count = 0
    this.hungry = true;
  }

  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.count += 1;
    if (this.count < 3){
      this.hungry;
    } else {
      this.hungry = false;
    }
  }

}

module.exports = Dragon;
