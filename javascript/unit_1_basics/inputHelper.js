
const readline = require('readline');

function getInput(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(`${question}\n`, (input) => {
            rl.close();
            resolve(input); // Resolve the promise with the input
        });
    });
}

module.exports = {
    getInput
};
