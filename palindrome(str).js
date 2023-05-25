function palindrome(str) {
    let reversedStr = str.toLowerCase().match(/[^\. \- _\\ \/,\(\)]/g).reverse().join('');
    
    return reversedStr == str.toLowerCase().match(/[^\. \- _\\ \/,\(\)]/g).join('');
  }
  
  
  console.log(palindrome("_eye"));