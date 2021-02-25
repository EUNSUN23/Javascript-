##Variable environment : Hoisting and The TDZ

Hoisting: 특정 타입의 변수들을 선언 전에 접근/사용 할 수 있게 하는 것. "자기가 속한 스코프
최상단으로 끌어올려지는 것"

<Hoisting 원리>

\*함수 호출 전, 실행컨텍스트의 "creation phase"단계에서 변수 선언이 있는지 코드스캔이 먼저 일어나는데, 이 때 각 변수의 property가 'variable environment object'에 생성된다.

<변수의 타입마다 hoisting다르게 적용된다>

-function declarations
:호이스팅 가능(호출 전에 초기value값인 실제 함수가 variable environment object에 저장되기 때문에), 초기value값 : 실제 함수

-var variables
:호이스팅 가능(호이스팅이 가능 하지만 값은 undefined. undefine와 error는 다른것 기억하기), 초기value값 : undefined

-let & const
:호이스팅 자체는 되지만, 초기value <uninitialized>가 variable environment에 저장된다(사용할 수 없는 값임). 해당 scope의 시작지점부터 실제 선언이 있는 코드 전까지 공간을 "TDZ(temporal dead zone)"이라고 부르는데, 이 공간이 끝나서 실제 선언이 있는 부분부터 해당 변수에 접근할 수 있다. 즉 선언 전에 let과 const에 접근하는건 불가능.

-function expressions and arrows
:const/var/let 중 어떤 걸로 생성되었는지에 따라 다름.(function expressions와 화살표함수는 변수취급 받기 때문에.)

하지만 var로 생성되어 호이스팅이 가능하다고 해도 var의 초기값은 undefined이기 때문에 function expression은 선언 전에 호출할수없다고 하는 것임.

<TDZ>
let & const는 자기가 속한 스코프의 시작점부터 declaration 되는 부분 전까지 TDZ(Temporal Dead Zone)이라는
공간을 가진다. 이 공간에서 let과 const는 "uninitialized"이다. (not defined와 다름. 아직 initialized되지 않았다는 말.)같은 스코프 안에 있을지라도 이 공간 안에서는 접근할 수 없다.

\*\*TDZ가 존재하는 이유

1. declaration이 안된 변수를 사용/접근하려 하면 확실한 에러메세지를 표시하기 위해서 TDZ가 등장했다.
   (var처럼 단순 에러메세지가 아니라 'undefined'로 표시되면 버그 유발한다)

2. const의 할당이 실제 declaration이 일어날 때 한번만 이뤄지게 하기 위해서(var처럼 초기값 undefined 설정, 그후 재할당 못하게 하기 위해서).

<Hoisting이 존재하는 이유>

-자바스크립트 개발자가 hoisting기능을 넣은 이유는 function declarations을 선언 전에 쓸 수 있게 하기 위해서. mutual recursion같은 프로그래밍에는 이게 필수적이기 때문임.
var는 호이스팅 기능을 위해 태어났음.

<호이스팅으로 인한 버그 예방법>

- var는 사용하지 말고 const, let사용하기
- 모든 변수는 스코프내 최상단에 선언하기
- 함수 호출은 선언 뒤에 하기
