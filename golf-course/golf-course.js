class GolfCourse {
  constructor(name, difficulty, openings = 0, features = []) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

  checkInGroup(group){
    var new_array = group.sort(function(a,b){
      return a.handicap - b.handicap;
    })

    var pushCount = 0
    for (var i = 0; i < new_array.length; i++){
      if (this.currentlyPlaying.length <= this.openings){
        this.currentlyPlaying.unshift(new_array[i].name);
        pushCount++;
      }
    }

    var x = this.openings - new_array.length
    this.openings = (this.openings - pushCount);

    if (x >= 0){
      return 'You\'re checked in. Have fun!'
    } else {
      return 'Sorry, we are currently booked! Please come back later.'
    }

  }
}

module.exports = GolfCourse;
