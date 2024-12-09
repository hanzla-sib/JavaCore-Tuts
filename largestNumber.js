const findLargestnumber = (arr) => {
  let largestnum = 0;

  arr.forEach((element) => {
    if (element > largestnum) {
      largestnum = element;
    }
  });
  return largestnum
};

console.log(findLargestnumber([2, 4, 5, 6, 6, 8, 3]));
