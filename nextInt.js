const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an integer: ", (num) => {
    console.log("The next integer is:", parseInt(num) + 1);
    rl.close();
});
