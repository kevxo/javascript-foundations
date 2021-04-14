class Skater {
  constructor(data) {
    this.name = data['name']
    this.skill = data['skill']
    this.tricks = data['tricks']
    this.money = data['cash']
    this.frustration = 0
  }

  practice(trick){
    if (this.tricks[trick]) {
      this.frustration;
    } else {
      this.frustration += 1;
    }

    if (this.frustration === 3) {
      this.frustration = 0;
      this.tricks[trick] = true;
      return `I just learned to ${trick}!!!`
    }
  }
}

module.exports = Skater;