const input = prompt("type your name");
if (input == input.toUpperCase()) {
  //checks if input is uppercase only
  alert("You are yelling");
} else if (input == input.toLowerCase()) {
  //checks if input is lowercase only
  alert("You are whispering");
} else {
  //the results of both upper and lower case
  alert("You are talking normally");
}
