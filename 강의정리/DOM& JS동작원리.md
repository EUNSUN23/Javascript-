4. node.js : 자바스크립트가 브라우저 밖에서도 작동할 수 있게 해 주는 런타임. 개발자도구 탑재됨.

##5. DOM(Document Object Model)
"Structured representation of html documents allows javascript
to access html elements and styles to manipulate them."

html과 js의 연결점. html의 복사 모델. tree구조로 되어있으며 html요소와 텍스트들이 객체화되어져서 이 tree를 구성하고 있다.
부모-자식-형제 등으로 각 html요소가 연결되어 있음. dom트리의 가장 최상단은 document 객체이고,
js로 이 document객체에 접근할 수 있다.

ex) document.querySelector() -> document객체의 요소임.

document의 가장 첫번째 자식은 html이다. (대개 root 요소가 html이기때문에.)
그 다음 자식은 head와 body.(형제사이) head와 body에서 자식요소들이 뻗어나간다.

(!) DOM은 자바스크립트가 아니다. 자바스크립트로 접근 가능한
Web API(API: Application Programming Interface//브라우저에 내장된 라이브러리)의 일종이다.

##6-1. Javascript의 동작원리

Javascript :"high-level, object-oriented, multi-paradigm programming language ".

"high-level, prototype-based, object-oriented, multi-paradigm, interpreted or just-in-time compiled
dynamic single-threaded garbage-collected programming language with first-class functions
and a non-blocking event-loop concurrency model".

1. high-level:

c등의 low-level언어에서는 cpu등의 하드웨어를 직접 다룬다. 반면 js나 파이썬같은
high-level언어는 cpu등을 직접 다루지 않는다. 그래서 배우기는 쉽지만 c언어 동작하는것처럼
절대 빠를 수 없다.

2. garbage-collected :

자바스크립트 내부적으로 garbage콜렉터가 작동한다. 메모리 청소기능.

3. interpreted or just-in-time:

컴퓨터는 0과 1만 이해한다. 자바스크립트 언어를 0과 1로 바꾸는 작업을 compile이라고 한다.
자바스크립트 엔진에서 이 작업이 일어난다.

4. multi paradigm :

자바스크립트가 인기있는 이유는 multi paradigm이기 때문에.

1)절차적 프로그래밍 2)객체지향 프로그래밍 3)함수형 프로그래밍

-> 자바스크립트는 이 세가지를 다 한다.

5. prototype-based:

자바스크립트의 거의 모든 요소가 객체다. (배열, 객체...)
push, pop등의 배열메소드도 prototype의 예.

6. first-class functions:

In a language with first-class functions, 함수가 하나의
변수처럼 다뤄진다. 따라서 다른 함수에 인자로 넘겨줄 수도 있고,
함수를 통해 return하는 것도 가능하다.

--> 함수형 프로그래밍이 가능한 이유.

7. dynamic language:

변수에 값을 할당할 때 데이터 타입을 선언하지 않는다. javascript가
작업을 할 때서야 알게됨. 그리고 변수의 데이터 타입도 값을 재할당함으로써 쉽게 바꿀 수 있다.
(좋은점도 있고 나쁜점도 있음. 타입과 함께 자바스크립트를 쓰려면 typescript를 공부할것.)

--> java등의 다른 언어에는 없는 것.

8. concurrency model(비동기모델):

자바스크립트는 한번에 한가지만 처리하는 single thread방식으로 작동하기때문에
여러가지 작업을 한번에 처리하기위해서는 비동기적으로 작동해야한다.

\*event-loop : 비동기 작업을 "back-ground" 에서 처리한 후 처리가 끝난 후에 메인 thread로 다시
그것을 가져옴.

##6-2. 자바스크립트의 동작원리

1.실행 컨텍스트 : 자바스크립트 코드가 실행되는 일종의 박스라고 보면 됨. 코드 실행에 필요한 변수 등 모든 정보를 저장한다. 자바스크립트 코드는 항상 실행 컨텍스트 안에서 실행된다.

콜스택은 이 실행 컨텍스트들로 이루어져 있다.(가장 먼저 실행되는 함수가 가장 나중에 쌓임.)

#####<자바스크립트가 동작하는 과정>

컴파일링 -> 글로벌 실행컨텍스트 생성,함수 바깥의 TOP LEVEL 코드 먼저 실행, 함수 선언 -> TOP LEVEL코드 실행 후 함수 실행 -> 각 함수마다 각각의 실행컨텍스트 생성, 함수 실행 -> 모든 함수 실행이 끝나도 엔진은 콜백함수를 기다리고 있다가 실행시킴.

#####<실행컨텍스트 구성요소>

#####1. variable environment
함수내에서 선언된 변수들과 함수, arguments object(함수로 전달되는 인자들)들이 저장되어있음.

#####2. Scope chain
함수 외부에 있는 변수들의 참조값을 담고 있음. 이 스코프 체인을 통해서 함수 내부에서 외부의 값에 접근 할 수 있다.

#####3. "this"

###### --> 세가지가 함수가 실행되기 직전 'creation phase'단계에서 생성된다.

######(!) 화살표함수의 실행 컨텍스트에는 this와 argument object이 없다.

#####<콜스택>
:콜스택은 실행컨텍스트들이 선입후출로 쌓여서, 함수들의 실행 순서를 기억한다.
실행이 완료된 함수의 실행컨텍스트는 콜스택 밖으로 pop out된다. (브라우저 탭을 닫거나 윈도우를 종료시키기 전까지는 여전히 메모리 상에는 남아있다.)
글로벌컨텍스트는 프로그램 자체가 종료될 때 까지 콜스택에 남아있는다.

자바스크립트는 single thread로 작동하기 때문에 함수들의 실행 순서를 기억하는 이
콜스택의 역할이 매우 중요하다.

#####<스코프 체인>

_스코핑: "how our programs' variables
are organized and accessed.
things like "where they live?" and
"where can we access a certain variable and where not?" "._

1)스코프
변수가 선언되고, 접근 가능한 장소(함수로 치자면
variable environment).

-scope는 모든 외부 스코프와 연결되는 chain을 가지고 있어서, 내부에 없는 변수가 호출되면 이 chain을 통해 바깥쪽 스코프에서 변수를 찾는다.

#####=> 이 때 바깥쪽 스코프의 변수를 '복사'하는 것이 아니라, 참조값을 사용하는 것이다.

-scope는 함수의 인자에도 적용된다.

---

- 글로벌 스코프:
  전역에 선언된 함수/변수는 전역에서 접근가능
- 함수 스코프:
  함수 안에 선언된 변수는 함수 안에서만 접근가능하다
- 블록(curly braces) 스코프:
  (es6부터)블록 안에 선언된 함수/변수는 블록 안에서만 접근 가능하다. const, let만 해당되고, 함수는 strict mode사용 시에.
- scope of variable

---

2)렉시컬 스코프
스코핑이 함수/블록의 '위치'에 따라 결정 된다.

```js
const myName="Jonas';

function first(){
    const age = 30;

    if(age>=30){
        const decade =3;
        var millenial = true;
    }

    function second(){
        const job = "teacher";
        console.log(`${myName} is a ${age}-old ${job}`);
    }

    second();
}

first();
```

1. if문(블록)과 함수 second는 서로 내부에 선언된 변수에 접근할 수 없다. 서로의 부모 스코프가 아니라 형제스코프이기 때문에.

2. 블록스코프는 const, let만 해당하기 때문에 var의 스코프는 함수 first이다.

---

- Scope와 Callstack의 차이

: scope는 함수/블록의 '위치'에 따라 결정되고,
callstack은 '호출된 시간' 순서를 따진다.

```js
const a = "Jonas";
first();

function first() {
  const b = "hello";
  second();

  function second() {
    const c = "Hi";
    third();
  }
  function third() {
    const d = "Hey";
    console.log(d + c + b + a);
    // Reference error
  }
}
```

#####1. second, third는 서로 위치상 형제지간이라 서로의 변수에 접근 불가능.

#####2. first와 third는 위치상 부모자식이기때문에, third에서 자기보다도 먼저 호출이 된 first안의 변수 b에 접근 할 수 있음.
