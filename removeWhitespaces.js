const removeWhite_spaces = (str) => {
//   var removeWhite = "";
//   for (var i of str) {
//     if (i !== " ") {
//       removeWhite += i;
//     }
//   }
var removeWhite = str.replace(/\s/g,"");
  return removeWhite
};

console.log(removeWhite_spaces("  my Interview is    so    good"));
