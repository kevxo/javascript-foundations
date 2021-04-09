class Golfer {
  constructor(data) {
    this.name = data['name'];
    this.handicap = data['handicap'];
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    var avg = ((par + this.handicap) / 1)
    return `I usually shoot a ${avg} on average.`
  }

  playRound(course){
    if (course.difficulty === 'hard'){
      this.frustration += 500
    } else {
      this.frustration += 100
    }
  }

  hitTheRange() {
    this.confidence += 10
  }

  simulatePractice(times, player){
    (times * 10 ) + player.confidence
  }

  marvel(course) {
    return `I love the ${course.features[0]} and ${course.features[1]} on this course!`
  }

  whatYaShoot(score){
    if (score < 0) {
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!'
    } else if (score === 0) {
      this.frustration -= 10;
      return 'Booyah!'
    } else if (score > 0){
      this.frustration += 20;
      return 'Doh!'
    }
  }
}

module.exports = Golfer;
