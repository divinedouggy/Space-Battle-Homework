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

function playGame() {
    newAlienShip = alienShip;
    yourAttack();
    
    function yourAttack() {
        if (Math.random() < .7) {
            console.log('You hit the alien scum!');
            console.log(newAlienShip.hull)
            newAlienShip.hull -= 5;
            console.log(newAlienShip.hull)
        } else {
            console.log('Dang! You missed!');
        } if (newAlienShip.hull <= 0) {
            return console.log("Alien dead! You win!")
        } else {
            console.log("The alien is attacking!");
            enemyAttack()
        }

    }  // end of yourAttack function

function enemyAttack() {
    if (Math.random() < newAlienShip.accuracy) {
        console.log('You have been hit!');
        console.log(yourShip.hull)
        yourShip.hull -= newAlienShip.firepower;
        console.log(yourShip.hull)
        } else {
            console.log('Phew! That was close!')
        } if (yourShip.hull <= 0) {
            return console.log("NOOOO! YOU'VE BEEN DEFEATED!")
        } else {
            console.log("You're still alive!");
           yourAttack()
        }
}
    
 


} // end of playGame function


playGame() // calling playGame











