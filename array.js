const arr = [1,2,3,4,5];
const reversedArr = arr.reverse(); //buildin method

//Using for loop
function reversedArray(arr){
    const reversed = [];
    for(let i=arr.length-1; i>=0;i--){
        reversed.push(arr[i]);
    }
    return reversed;
}

// console.log(reversedArray([1,2,3,4,5,6]));

//usomg redice
let array = [1,2,3,4,5,6,7];
let reversedArray2 = array.reduce((acc, val) => [val, ...acc],[]);
// console.log(reversedArray2);

//using Map
const array2 = [1,2,3,4];
const arrayReversed = array2.map((_,i,a)=> a[a.length-1 - i]);
console.log(arrayReversed);