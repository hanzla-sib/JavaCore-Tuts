
const removeDuplciate=(arr)=>{
// const dupArr=[];
// for(let i of arr){
//     if(!dupArr.includes(i)){
//         dupArr.push(i)
//     }
// }
// return dupArr
let setNum=new Set(arr);
return setNum;

}


console.log(removeDuplciate([1,2,3,4,4,5,6,7,7,8]));