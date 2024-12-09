const Aangram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let anagram1 = str1.split("").sort().join("");
  let anagram2 = str2.split("").sort().join("");

  if (anagram1 == anagram2) {
    return true;
  }
  return false
};

console.log(Aangram("listen", "silent"));
