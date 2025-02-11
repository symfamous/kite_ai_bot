import fs from 'fs';
import chalk from 'chalk';
import validator from 'validator';

const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));

function randomQuestion() {
  return questions[Math.floor(Math.random() * questions.length)];
}

async function main() {
  console.log(chalk.blue('Welcome to Kite AI Bot!'));
  console.log(chalk.yellow('Today\'s question is:'));
  console.log(chalk.green(randomQuestion()));
  
  // Here you would implement logic to answer the question or integrate with an AI service
  console.log(chalk.magenta('Answer: This is a placeholder response. Implement actual functionality here.'));
}

main();
