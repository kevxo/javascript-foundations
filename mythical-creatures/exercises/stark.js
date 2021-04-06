var Direwolf = require('./direwolf');


class Stark {
  constructor(data){
    this.name = data["name"];
    this.location = data["area"] || 'Winterfell';
    this.safe = false;
  }

  sayHouseWords(){
    if (this.safe === false){
      return 'Winter is Coming'
    } else {
      return 'The North Remembers'
    }
  }

  callDirewolf(name, location){
   var wolf = new Direwolf(name, location);
   console.log(wolf)
   return wolf.protect(this);
  }
}

module.exports = Stark;