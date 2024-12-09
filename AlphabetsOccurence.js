function countAlphabets(str) {
  var dupstr = str.split("");
  var countOccurence = {};

  for (var i of dupstr) {
    var char = i.toLowerCase();
    if (char >= "a" && char <= "z") {
      countOccurence[char] = countOccurence[char]
        ? countOccurence[char] + 1
        : 1;
    }
  }
  return countOccurence
}

console.log(countAlphabets("hanzlA Sibghat"));
