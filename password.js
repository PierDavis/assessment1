const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please enter a password.", function(input){


    
    	// This line closes the connection to the command line interface.
	reader.close()

});