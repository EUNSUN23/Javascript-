"use strict";

// let,const 변수는 window object상에 property를 생성하지 않는다.

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

//console창에서 window 엔터 -> x:1 만 발견할수있음.

// * this keyword * //

// console.log(this); // window 객체

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // 함수의 owner가 따로 없는 상태임 : undefined
};

calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  //   console.log(this); // 화살표함수는 자체로 this를 가지고 있지 않음. 여기서 this는 lexical this임.
  // 즉 부모scope의 this키워드. : window객체
};

calcAgeArrow(1980);

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    //'jonas' 객체. 메소드를 '호출'한 객체를 가리킴. this가 jonas를 가리키는 이유는
    // jonas가 메소드를 '호출'한 존재기 때문이지, jonas안에서 생성된 method라서가 아님.(매우중요)
    console.log(2037 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`),
  // 'Hey undefined' : 화살표함수는 자체로 this를 가지고 있지 않기 때문에, lexical this를 쓴다.
  // greet의 부모스코프는 전역스코프임. 전역스코프는 window객체임. 객체 안에 존재하지 않는 property에 접근하려고 하면
  // 에러가 아니라 'undefined'를 결과로 얻게 된다. 그래서 this.firstName은 undefined임.
  // 만약 'var'로
  //(**jonas는 object literal임.(literal하게 object를 정의한것) 코드블록이 아님.)
};

jonas.greet();

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // 자바스크립트에서 함수는 value나 마찬가지이기 때문에 이렇게 복사하는 것이 가능함.
// method borrowing이라고 부름.
console.log(matilda); // {year:2017, calcAge:f}

matilda.calcAge(); // 20. (matilda.calcAge가 가리키는 this는 자기를 호출한 matilda임)

const f = jonas.calcAge; // f라는 변수에 calcAge를 복사함. 이 역시 함수가 value취급 받아서 가능한것. (복사한 거지 호출한게 아님!!)
f(); // 자기를 호출한 객체가 따로 없으므로, 이 안에서 this가 가리키는 것은 undefined임.
