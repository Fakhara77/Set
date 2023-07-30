//Find a with b
let a = [4, 5, 8, 9];


let b = [3, 4, 5, 7];

let A=new Set(a);
let B=new Set(b);
let c=a.filter((num)=>!B.has(num));
let C=new Set(c);
console.log(C);