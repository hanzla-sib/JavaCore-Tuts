const CheckPalindrome = (str) => {
  let duplicateStr = str.split("").reverse().join("");
  if(duplicateStr===str){
    return true
  }
  return false

};

console.log(CheckPalindrome("racecar"));
