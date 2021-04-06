class Ogre {
  constructor(data) {
    this.name = data['name']
    this.home = data['abode'] || 'Swamp'
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter += 1;

    if (human.encounterCounter % 3 === 0) {
      human.knockedOut = true;
      this.swings += 1;
    }
  }

  swingAt(human){
    this.swings += 1;
  }

  apologize(human){
    human.knockedOut = false;
  }
}

module.exports = Ogre