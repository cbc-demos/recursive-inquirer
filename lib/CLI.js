const inquirer = require("inquirer");

class CLI {
  constructor() {
    this.foods = [];
  }
  run() {
    this.foodPrompt();
  }
  foodPrompt() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "food",
          message: "Enter a food you like:",
        },
      ])
      .then(({ food }) => {
        this.foods.push(food);
        this.printFoods();
        return this.continuePrompt();
      });
  }

  printFoods() {
    console.log("=".repeat(60));
    console.log("Your favorite foods:");
    console.log(this.foods.join("\n"));
    console.log("=".repeat(60));
  }

  continuePrompt() {
    return inquirer
      .prompt([
        {
          type: "confirm",
          name: "addFood",
          message: "Would you like to add another food?",
        },
      ])
      .then(({ addFood }) => {
        if (addFood) {
          // if the user says yes, then we make the recursive call to foodPrompt so the user can
          // add another food
          return this.foodPrompt();
        }
        console.log("good bye!");
      });
  }
}

module.exports = CLI;
