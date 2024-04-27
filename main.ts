
//      100 DAYS OF CODING CHALLENGE

//         " Day 4 Challenge: Start Coding!"

//Q10) Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//     If the programs are straightforward at this point, 
//     just add your name and the current date at the top of each program file.
//     Then, write one sentence describing what the program does.


//Date:26/4/2024
//1 comment)
let whiteSpace = "\n\tRabab Muhammad\n\t";// \n is use for new line and \t is use for whitespace
console.log(whiteSpace);

//2 comment)
let without_white_space = whiteSpace.trim();// trim() is use to remove whitespace
console.log(without_white_space);

//Q11) Names: Store the names of a few of your friends in an array called names. 
//     Print each person’s name by accessing each element in the list, one at a time.

let friendNames = ["Maria","Arwa","Sakina","Zainab"]//[] is use for array/list
console.log(friendNames[0]);
console.log(friendNames[1]);
console.log(friendNames[2]);
console.log(friendNames[3]);

//Q12) Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them.
//      The message should be the same for each person, but personalized with their name.

let friend_names = ["Maria","Arwa","Sakina","Zainab"]
let message = "You’re excelling in your coding classes—keep up the great work!";
console.log("Hello",friend_names[0],message);
console.log("Hello",friend_names[1],message);
console.log("Hello",friend_names[2],message);
console.log("Hello",friend_names[3],message);