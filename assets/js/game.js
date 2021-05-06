// Game States
// "Win" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
// "Lose" - Player's robot health is zero or less than zero



// this creates a function named 'fight'
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "amy android", "robo trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// function to start a new game
var startGame = function () {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        var storeConfirm = window.confirm("the fight is over, visit the store before the next round?");
        if (storeConfirm) {
            shop();
        }
        if (playerHealth > 0 && i < enemyNames.length - 1) { 
            shop();
        
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (i < enemyNames.length - 1) {
                shop();
            }
        }
        else {
            window.alert("you have lost your robot in battle!  Game Over!");
            break;
        }
        }
        endGame ();
        };

        var endGame = function () {
            if (playerHealth > 0) {
                window.alert("Great job, you've survived the game!  You now have a score of " + playerMoney + ".");
            }
            else {
                window.alert("you've lost your robot in battle.");
            }
            window.alert("The game has now ended.  Let's see how you did!");
        var playAgainConfirm = window.confirm("would you like to play again?");
        if (playAgainConfirm) {
            var shop = function() {
                var shopOptionPrompt = window.prompt(
                    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store?  Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
                );
                switch (shopOptionPrompt) {
                    case "REFILL":
                    case "refill": 
                        if (playerMoney >= 7) {
                            window.alert("refilling player's health by 20 for 7 dollars.")
                            playerHealth = playerHealth + 20;
                            playerMoney = playerMoney - 7;
                        }
                        else {
                            window.alert("You don't have enough money!");
                        }

                        break;
                        case "UPGRADE":
                        case "upgrade":
                            if (playerMoney >= 7) {
                                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                                playerAttack = playerAttack + 6;
                                playerMoney = playerMoney - 7;
                            }
                            else {
                                window.alert("You don't have enough money!");
                            }
                            break;
                            case "LEAVE":
                            case "leave":
                                window.alert("Leaving the store.");
                                break;
                            default:
                                window.alert("You did not pick a valid option.  Try again.");
                                shop();
                                break;
                        
                        window.alert("Refilling player's health by 20 for 7 dollars.");
                        playerHealth = playerHealth + 20;
                        playerMoney = playerMoney - 7;
                        break;
                        case "leave":
                            window.alert("Leaving the store.");
                            break;
                            default:
                                window.alert("You did not pick a valid option.  Try again.");
                                shop();
                                break;
                }
            }
            startGame ();
        }       
        else {
            window.alert("Thank you for playing Robot Gladiators!  Come back soon!");
        }
        };
    

// You can also log multiple values at once like this

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight =window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    // if player choses to fight, then fight
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + 'has decided to skip this fight.  Bye!');
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break;
        }
        }
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        ); 
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            break;
          } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
          }

          // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );
  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
}
};
  // if player choses to skip
    // if no (false), ask question again by running fight() again
        fight();
  window.alert("You need to choose a valid option. Try again!");

    // alert players that they are starting the round
  // subtract the value of 'playerAttack' from the value of 'enemyHealth and use that result to update the value in the enemyHealth var
  // log a resulting message to the console so we know it worked
  // subtract the value of 'enemyAttack' from the value of 'playerHealth and use that result to update the value in the 'playerHealth var
  // log a message to the console so we know it worked
    // put new code under this
  
  // check enemy's health
  // put new code under this
  // check player's health
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
};
startGame();
