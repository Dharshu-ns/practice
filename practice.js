// const array=[1,2,3,4,5,4,6];

// function removeDuplicate(arr){
//     let uniqArr = [...new Set(arr)];
//     console.log(uniqArr)
//     uniqArr.sort((a,b)=>b-a);
//     return uniqArr[1]
// }

// console.log(removeDuplicate(array));

const str="HELLO";

// function removeDuplicateStr(s){
//    let uniqStr = [...new Set(s)];
//     console.log(uniqStr)
//     return uniqStr.join('')
// }

function removeDuplicateStr(s){
    // return s.split('').reverse().join('')
    let seen = new Set();
    let result = '';
    for (let char of s){
        if(!seen.has(char)){
            seen.add(char)
            result += char;
        }
    }
    return result;
}
console.log(removeDuplicateStr(str))