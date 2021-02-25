"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age},
        born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Steven";
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      //js는 현재 스코프 내에서 변수를 찾으려고 하기 때문에 현재스코프 내의 firstName인 Steven출력
      //현재 스코프 내에 찾는 변수가 존재한다면 스코프체인은 작동하지 않는다.
      //다른 스코프에 있다면 똑같은 변수명을 써도 다른 변수.
      //--> 각각 다른 함수에 같은 인자 변수명을 설정할 수 있는 이유.
      //함수의 params는 그 함수 스코프에서만 정의되기 때문에.
      function add(a, b) {
        return a + b;
      }
      output = "New output"; //블록 안에서 이미 존재하는 부모스코프의 output을 재할당함. 따라서 부모스코프 output의 값이 실제로 바뀜.
    }

    console.log(millenial); //var는 함수스코프이기 때문에 블록 무시하고 접근할수있음.
    //     add(2, 3);     // "add is not defined" 함수는 es6부터 strict모드에서 블록스코프이기 때문에 선언된 블록 바깥에서 접근 불가.

    console.log(output);
  }

  printAge();
  return age;
}

const firstName = "Jonas";
calcAge(1991);
