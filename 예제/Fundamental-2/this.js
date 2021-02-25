"use strict";

// let,const 변수는 window object상에 property를 생성하지 않는다.

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

//console창에서 window 엔터 -> x:1 만 발견할수있음.
