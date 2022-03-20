let maxNum = parseInt(prompt("Enter the maximum number"));
while (!maxNum) {
    maxNum = parseInt(prompt("Enter the maximum number"));
}

let randomNum = Math.floor(Math.random() * maxNum) + 1;

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;
while (parseInt(guess) !== randomNum) {
    attempts++;
    if (guess === "quit" || guess === "q") break;
    if (parseInt(guess) > randomNum) {
        guess = prompt("Too High! Try again");
    }
    else {
        guess = prompt("Too Low! Try again");
    }
};

if (guess === "quit" || guess === "q") {
    console.log("Okay, You Quit!!!");
}
else {
    console.log(`Congratulations!!! You guessed it correctly in ${attempts} chances!`);
}