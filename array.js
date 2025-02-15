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

console.log(reversedArray([1,2,3,4,5,6]));