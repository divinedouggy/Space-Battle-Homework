
// The following determines the alien-ships beginning Hull and Firepower
function randomNumBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function alienHull() {
    return randomNumBetween(3, 6)
}

function alienFirepower() {
    return randomNumBetween(2, 4)
}


// The following determines the alien-ships beginning Accuracy 
function randomAccuracy(min, max) {
    let num = Math.random() * (max - min) + min;
    return Math.round(num * 10) / 10
}

function alienAccuracy() {
    return randomAccuracy(.6, .8)
}



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

// Alien Objects

let firstShip = new spaceShip(alienHull(), alienFirepower(), alienAccuracy())
let secondShip = new spaceShip(alienHull(), alienFirepower(), alienAccuracy())
let thirdShip = new spaceShip(alienHull(), alienFirepower(), alienAccuracy())
let fourthShip = new spaceShip(alienHull(), alienFirepower(), alienAccuracy())
let fifthShip = new spaceShip(alienHull(), alienFirepower(), alienAccuracy())
let sixthShip = new spaceShip(alienHull(), alienFirepower(), alienAccuracy())

ships = [firstShip, secondShip, thirdShip, fourthShip, fifthShip, sixthShip];


function playGame() {
    
    console.log("%c SpAcE bAttLe", 'font-size:40px; text-shadow: -2px -2px 1px #ad6eff');
    console.log('\n\n');

    let start = prompt("Oh look, aliens!.... in spaceships. How original.\nMaybe they're more afraid of us than we are of them?\nBut then again maybe not; let's destroy them?\nType YES or NO")
    start = start.toUpperCase();
    if (start === 'YES'){
        alert("Yeah I thought so.\n(Open your console.)");
    } else if (start === 'NO'){
        alert("R... really? Are you sure? You know what, fine, whatever.");
        ships = [];
    } else { alert("I'll take that as a yes.\n(Open your console.)")}

    let shipcount = 0;

    for (let i = 0; i < ships.length; i++) {

        currentShip = ships[i]
        
        yourAttack();

        // console.log('%c You have done ' + player.firepower + ' damage ', 'font-style: italic; background: azure; border: 1px solid grey;');

        function yourAttack() {
            console.log("%c You attack! ", 'font-style: italic; font-weight: bold; background: lightgreen; font-size: 20px');
            if (Math.random() < .7) {
                console.log('%c You hit the alien scum!', 'color:green; font-size: 25px');
                console.log(`%c Their HP was ${currentShip.hull}`,'color:green; font-size: 14px')
                currentShip.hull -= 5;
                console.log(`%c You did ${yourShip.firepower} damage`,'color:red; font-style:italic; font-size: 15px')
            } else {
                console.log('%cDang! You missed!', 'color: red; font-size: 13px');
            } 
            
            if (currentShip.hull <= 0) {
                shipcount+=1;
                console.log("%c YOU KILLED AN ALIEN! ", 'color:limegreen; font-style:italic; font-size: 20px; font-weight:bold; background-color:black');
                console.log("%c Why are you so happy about this? Are you a terrible person? ", 'font-style:italic; font-size: 16px; background-color:limegreen');
                console.log('\n\n\n\n')
                
                if (shipcount == 6) {

                    console.log("%c \nWait, that was the last one!", 'font-size: 18px');
                    console.log("%c You win!", "font-size:70px; color:indigo; font-weight: bold; font-style: italic; text-shadow: -2px -2px 1px cyan")}
                
                let input = prompt("You took down the ship\nWill you fight another or retreat?\nType FIGHT or RUN");
                input = input.toUpperCase();
                if (input === "FIGHT") {
                    console.log("%c \nYou press onward!\n\n\n", 'font-style:italic; font-size:20px')

                } else if (input === "RUN") {
                    
                    console.log("%c Oh so you're some kind of pacifist now?",'font-size:37px; color:magenta;');
                    console.log(`%c Well, you killed ${shipcount} ships... so there's that.`,'font-size:37px; color:magenta;')
                    ships = [];

                } else {alert("Why didn't you type- HOLD THAT THOUGHT! HE'S COMIN' RIGHT FOR US!")

                }
           
            } else if (currentShip.hull > 0) {
                console.log("%c He attack! ", 'color: red; font-style: italic; font-weight: bold; background: lightyellow; border:black; border-style:dotted; font-size:22px');
                
                enemyAttack()
            }

        }  

        function enemyAttack() {
            if (Math.random() < currentShip.accuracy) {
                console.log('%c You have been hit!', 'color:red; font-size: 33px');
                console.log(`%c Your HP was ${yourShip.hull}`,'color:green; font-size: 14px')
                yourShip.hull -= currentShip.firepower;
                console.log(`%c They did ${currentShip.firepower} damage`,'color:red; font-style:italic; font-size: 15px')
            } else {
                console.log('%c Phew! That was close!','font-style:italic; font-size: 17px')
            } if (yourShip.hull <= 0) {
                console.log("%c NOOOO! YOU'RE DEAD! YOU'RE SERIOUSLY DEAD! YOU LOSE!",'font-size:50px; color:red; font-style:italic');
                ships = [];
            } else {
                
                yourAttack()
            }
        }
        
        
    } // end of for loop
   
} // end of playGame function


playGame() 