const findLongestword = (str) => {
    let splittedWords=str.split(' ');
    let longestword="";
    console.log(splittedWords);
   
    splittedWords.forEach(element => {
        if(element.length>longestword.length){
            longestword=element;
        }
    });

    return longestword;
}

console.log(findLongestword('Theasdasdasdas quick brown fox jumped over the lazy dog')); //jumped