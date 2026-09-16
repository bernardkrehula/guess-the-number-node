const generateRandomNumber = () => {
  const min = 1;
  const max = 100;

  return Math.floor(Math.random() * (max - min + 1) + min);
};

function runGame() {
  const number = generateRandomNumber();
  let attempts = 0;

  process.stdout.write("Welcome to Guess-the-Number!\n");
  process.stdout.write("\nGuess a number: ");

  process.stdin.on("data", function (input) {
    input = parseInt(input.toString().trim());
    attempts++;

    if (isNaN(input)) {
      process.stdout.write('\nError: Please enter a valid number\n');
    }
    else if (input === number) {
      process.stdout.write(`\n🏆 You win!\n📈 Attempts: ${attempts}\n`);
      process.exit(0);
    }
    else if (input > number) {
      process.stdout.write('🔺 Too high!\n');
    }
    else {
      process.stdout.write('🔻 Too low!\n');
    }

    process.stdout.write('\nGuess a number: ');
  });
}

runGame();
