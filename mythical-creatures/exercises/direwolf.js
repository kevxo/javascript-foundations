var Stark = require('./stark')

class Direwolf {
  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(person){
    if (this.home === person.location && this.starksToProtect.length <= 1){
      this.starksToProtect.push(person);
      person.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }

  leave(person){
    this.starksToProtect.shift(person);
    person.safe = false;
  }
}

module.exports = Direwolf