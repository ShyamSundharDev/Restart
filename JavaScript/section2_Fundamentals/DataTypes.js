/*
JavaScript has the primitive data types:

null
undefined
boolean
number
string
symbol – available from ES2015
bigint – available from ES2020
and a complex data type object.
*/

// let a = null;
// let b = null;
// console.log(a === b);
// console.log(typeof(a));
// console.log(null === undefined);
// console.log(Number.MAX_VALUE * Number.MAX_VALUE);
// console.log(-Number.MAX_VALUE -  Number.MAX_VALUE);

// console.log(NaN == NaN)

// // console.log(NaN === NaN)
// console.log(Boolean(!undefined))
// let sym  = Symbol();
// console.log(sym , typeof(sym));

// Symbols
 let abc = Symbol('abc');
 let def = Symbol('def');

 console.log(abc == def);
 console.log(abc);
 console.log(def);

 console.log(typeof abc);
 
 // sharing symbol symbols.for

 let ijk = Symbol.for('ijk');
    abc     = Symbol.for('abc');

 let mk = Symbol.for('ijk');
 
 console.log(mk === ijk);
 console.log(abc === ijk);

console.log(Symbol.keyFor(mk));
let mk1 = Symbol('ijk');
console.log(Symbol.keyFor(mk1));