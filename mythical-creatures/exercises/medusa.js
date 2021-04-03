var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim){

    if (this.statues.length === 3){
      var person = this.statues.shift();
      this.statues.push(new Statue(victim.name));
      return new Person(person.name, 'relieved');
    } else {
      this.statues.push(new Statue(victim.name));
    }
  }
}

module.exports = Medusa