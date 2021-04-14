class SkatePark {
  constructor(data) {
    this.name = data['name']
    this.yearFounded = data['year']
    this.style = data['type']
    this.features = data['features']
    this.isPrivate = data['isPrivate'] || false
    this.cost = data['price'] || 0
    this.occupants = []
  }

  admit(skater) {
    if (skater.money < this.cost) {
      return 'Sorry, you don\'t have enough money.'
    }

    if (this.occupants.length === 3) {
      return 'Sorry, we are at max capacity. Thank you for understanding.'
    }

    if (this.isPrivate === false) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`;
    } else {
      this.occupants.push(skater);
      skater.money -= this.cost;
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    }

  }
}

module.exports = SkatePark;