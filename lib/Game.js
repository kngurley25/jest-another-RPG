//dependencies
const inquirer = require("inquirer");
const Enemy = require("./Enemy");
const Player = require("./Player");

function Game() {
    //declarations to constructor
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    //will be assigned with initializeGame method
    this.currentEnemy;
    this.player;

    Game.prototype.initializeGame = function() {

        this.enemies.push(new Enemy("goblin", "sword"));
        this.enemies.push(new Enemy("orc", "baseball bat"));
        this.enemies.push(new Enemy("skeleton", "axe"));
        
        this.currentEnemy = this.enemies[0];

        inquirer
            .prompt({
                type: "text",
                name: "name",
                message: "What is your name?"
            })
            // destructure name from prompt object
            .then(({name}) => {
                this.player = new Player(name);

                // test the object creation
                console.log(this.currentEnemy, this.player);
            })
    };

}



module.exports = Game;