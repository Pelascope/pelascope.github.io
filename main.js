const { getAppVersion } = require('./version');
const { writeToChangelog } = require('./write');

const version = getAppVersion(process.argv);

// Array to store lines of input in memory.
var release_notes = [];

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
console.log('\nWhat\'s New in ' + version + '? Write a list:');
readline.prompt();
readline.on('line', (input) => {
  release_notes.push(input);
})
readline.on('close', () => {
  writeToChangelog(release_notes, version);  // Update the changelog file.
  process.exit(0);                           // Stop the stdin/out processes.
})