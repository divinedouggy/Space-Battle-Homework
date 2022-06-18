// The following determines the alien-ships beginning Hull and Firepower
function randomNumBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const alienHull = randomNumBetween(3, 6)
  const alienFirepower = randomNumBetween(2, 4)

// The following determines the alien-ships beginning Accuracy 
function randomAccuracy(min, max) {
    let num = Math.random() * (max - min) + min;
    return Math.round(num * 10) / 10
  }
  
  const alienAccuracy = randomAccuracy(.6, .8)


// My foundation is a Class for the ship Objects, and both Objects inherting from that.
// VIABILITY TBD

// Constructor Class
class spaceShip {
     constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

// USS HelloWorld Object
const yourShip = new spaceShip(20, 5, .7);

// Alien Object
const alienShip = new spaceShip(alienHull, alienFirepower, alienAccuracy)



// My attack
function yourAttack() {

    if (Math.random() < .7) {
        // alienShip.hull -= yourShip.firepower
        console.log('You hit the alien scum!');
        console.log(alienShip.hull)
        alienShip.hull -= 5;
        console.log(alienShip.hull)
        console.log('')
    } else {
        console.log('Dang! You missed!');
    } 
}
yourAttack()

// Their attack
function enemyAttack () {
    if (Math.random() < alien[0].accuracy) {
        target.hull -= 
        console.log('You have been hit!');
    }
}


