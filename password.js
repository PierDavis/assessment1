const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Enter a password", function(input){
console.log(input)
const userPassword = input;
//const userPasswordPier = 'starship';
console.log('password is', userPassword)
//console.log('Pier password is', userPasswordPier)

    	// This line closes the connection to the command line interface.
	reader.close()

});
