//Objective 1
// Create a function called printNumbers that will loop over a number provided as an argument.
	//In the function, add a console log to display the number provided.
	//In the function, create a loop that will use the number provided by the user and count down to 0
		//In the loop, create an if-else statement:

			// If the counter number value provided is less than or equal to 50, terminate the loop and exactly show the following message in the console:
				//"The current value is at " + count + ". Terminating the loop."

			// If the counter number value is divisible by 10, skip printing the number and show the following message in the console:
				//"The number is divisible by 10. Skipping the number."

			// If the counter number  value is divisible by 5, print/console log the counter number.

function printNumbers(num) {
    console.log("The number you provided is " + num + ".");
    for(let count=num; count > 0; count--){

        if (count <= 50) {
            console.log("The current value is at " + count + ". Terminating the loop.")
            break;
        }

        if (count % 10 === 0) {
            console.log("The number is divisible by 10. Skipping the number.")
            continue;
        }

        if (count % 5 === 0) {
            console.log(count);
        }

    }
}

let result = printNumbers(parseInt(prompt("Enter a number:")));
console.log(result);



/* 

    8. Create a variable that will contain the string supercalifragilisticexpialidocious.
    9. Create another variable that will store the consonants from the string.
    10. Create another for Loop that will iterate through the individual letters of the string based on it’s length.
    11. Create an if statement that will check if the letter of the string is equal to a vowel and continue to the next iteration of the loop if it is true.
    12. Create an else statement that will add the letter to the second variable.
    13. Create a git repository named S16.
    14. Initialize a local git repository, add the remote link and push to git with the commit message of Add activity code.
    15. Add the link in Boodle.

*/


//Objective 2
let string = 'supercalifragilisticexpialidocious';
console.log(string);
let filteredString = '';


//Add code here

for(let i=0; i < string.length; i++) {
    let letter = string[i]
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
        continue;
    }
    else {
        filteredString += letter;
    };
};

console.log(filteredString);


//Do not modify
//For exporting to test.js
try {
    module.exports = {
       printNumbers, filteredString
    }
} catch(err) {

}
