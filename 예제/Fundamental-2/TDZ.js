"use strict";

const myName = "Jonas";

if (myName === "Jonas") {
  console.log(`Jonas is a ${job}`);
  // Reference error :"Can't access 'job' before initialization"
  //:이미 creation phase단계에서 job을 <uninitialized>로 variable environment에 저장했기 때문에.
  //실제 선언이 이루어지는 부분부터 safe한 값을 쓸 수 있다.
  const age = 2037 - 1989;
  console.log(age);
  const job = "teacher";
  console.log(x);
  // Reference error :"x is not defined"
  //x라는 값은 선언된적이 없고, variable environment에 저장되지 않았기 때문에.
}
