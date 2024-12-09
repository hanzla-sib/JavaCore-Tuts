const countVowels = (str) => {
    const strArray=str.split("")
    console.log(strArray)
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;

  strArray.forEach((element) => {
    if (vowels.includes(element)) {
      count++;
    }
  });

  return count
};

console.log(countVowels("Hello world"));
