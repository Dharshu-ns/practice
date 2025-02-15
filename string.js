function reverString(str){
    return str.split('').reverse().join('')
} //Buildin method

console.log(reverString('Dharshana'));

function treditionalStringReverse(str){
   let reversedString='';
    for(let char of str){
        reversedString = char + reversedString;
    }
    return reversedString
}//traditional method

console.log(treditionalStringReverse("Dharshana"));