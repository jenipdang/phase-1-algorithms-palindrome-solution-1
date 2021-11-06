function reverse(word){
  //'abc' => 'cba' 
  // const wordArray = word.split("") // 'abc' => ['a', 'b', 'c']
  // const reverseWordArray = wordArray.reverse() // ['a', 'b', 'c'] => ['c', 'b', 'a']
  // const reverseWord = reverseWordArray.join("") // ['c', 'b', 'a'] => 'cba'
  // return reverseWord // 'cba'
  return word.split("").reverse().join("")
}

function isPalindrome(word) {
  // Write your algorithm here
  //reverse the input string 
  const reversedWord = reverse(word)
  //if the input is the same as the reverse input
  return word === reversedWord
  
}
   // return true
  //else 
   // return false 

/* 
  Add your pseudocode here
  that means if the word is the same as the word in reverse, I should return true. 
  reverse the input string 

  if the input is the same as the reverse input
    return true
  else 
    return false  
*/

/*
  Add written explanation of your solution here
 
*/
/*
  Rewrite your problem 
  Make a function that returns true if a word is a plaindrome and false if not. 
  that means if the word is the same as the word in reverse, I should return true. 

  mom === mom // true
  abc === cba // false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
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


