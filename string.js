function reverString(str){
    return str.split('').reverse().join('')
}

console.log(reverString('Dharshana'));

function treditionalStringReverse(str){
   let reversedString='';
    for(let char of str){
        reversedString = char + reversedString;
    }
    return reversedString
}

console.log(treditionalStringReverse("Dharshana"));