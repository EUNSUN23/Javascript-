"use strict";

//strict mode활성화. 가장 첫줄에 써야함. strict mode는 개발자로 하여금
//의도치 않은 실수를 하지 않게 해 줌.
//1. 콘솔에 에러 명시 기능
//2. 특정 실수를 방지해줌.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log("I can't drive");

//**2. declaration vs expressions

console.log(calcAge1(1099));
// 선언형 함수는 호스팅(함수 선언 전 호출)이 가능하다. not a good idea though.

function calcAge1(birthYear) {
  return 2038 - birthYear;
}

//function expression : calcAge2라는 변수에 function이하의 계산 value를 저장한다.
const calcAge2 = function (birthYear) {
  return 2038 - birthYear;
};

//자바스크립트에서 함수는 value다. 그래서 변수에 저장할 수 있는 것임. -> key/value페어로 객체에 저장 할 수 있는 이유.***매우중요***

//**3. 화살표 함수

const calcAge3 = (birthYear) => 2037 - birthYear;
//1.  인자가 1개일 때는 괄호 생략가능
//2. 계산이 1줄일 때는 curly braces, return 생략가능.
