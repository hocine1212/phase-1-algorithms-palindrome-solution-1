function isPalindrome(word) {
  // Write your algorithm here
  
  /*
   t a palindrome.expect calling isPalindrome function that will receive one argument, a string. This function should return true if the string is a palindrome (that is, if it reads the same forwards and backwards, like "mom" or "racecar"), and return false if it is no
  */
  function reverseString(word) {
    return word.split("").reverse().join("");
  }
  const reversedWord = reverseString(word);
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  reverse the input string
  if the reversed string is the same as the input
     return true
  else
     return false
*/

/*
  Add written explanation of your solution here
   The isPalindrome function checks if a given word is a palindrome.first we create a function that split the word(string) using split method to separated letters then we used another method called reverse to reverse the order of the letters and after that we used join method to gather the letters in one word  and we returned the output of all this methods ,after that we created a variable and we assigned it to the function reverseString and then we made an if statement to check if the word is equal to the variable we created the function isPalindrome should return true and if it doesn't return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
