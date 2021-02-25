"use strict";

// * 변수 hoisting * //

console.log(me);
// console.log(job); //job은 temporal dead zone에 있는 상태임.
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

// * 함수 hoisting * //

console.log(addDecl(2, 3));
//선언형 : 초기값 함수가 variable environment에 저장되기 때문에
//호이스팅도 되고, 제대로 된 값도 출력함

// console.log(addExpr(2, 3)); //const로 생성한 addDecl : "before initialized~" : const 변수로 취급되기 때문에 temporal dead zone.
// console.log(addArrow(2.3)); //const로 생성한 addArrow : 위와 동일.

console.log(addExpr(2, 3)); // var로 선언한 addDecl : "addDecl is not a function"
console.log(addArrow(2, 3)); // var로 생성한 addArrow : 위와 동일.

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//  Example : var 변수가 undefined 값으로 호이스팅 되는것이 좋지 않은 이유

//numProducts가 0일 때 deleteShoppingCart 실행되게 하지만, 실제 numProducts가 10임에도
//numProducts가 호이스팅, undefined값이라서 deleteShoppingCart가 실행됨.
//undefined가 에러가 아니라 false 값이라서 생겨난 일.

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}
