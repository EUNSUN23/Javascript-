##this

#####this는 무엇인가:

1. 모든 실행컨텍스트(즉 모든 함수)에 생성되는 특별한 종류의 변수. this keyword가 사용되는 함수가 속한 owner를 가리킨다.

2. this의 value는 항상 동일하지 않다. 함수가 어떻게 호출됐느냐에 따라 this가 가리키는 것도 달라진다. 그리고 this의 value는 함수가 실제로 호출 되었을 때에만 할당된다.

(보통의 경우라면 x라는 변수에 5를 할당하면 x는 항상 5지만, this는 자기가 속한 함수가 호출되는 방식에 따라 값이 달라진다.)

#####this가 의미하는것 :

- 함수 메소드일 경우(object에 딸려있는) : method를 호출한 object.

```js
ex)

const jonas = {
    name:'Jonas',
    year:1989,
    calcAge:function(){
        return 2037 - this.year
        //여기서의 this는 calcAge함수를 호출한 객체 jonas를 가리킴.
        // *** jonas.year 이렇게 호출하는 것보다 this키워드 사용하는 것이 더 나음.
    }
};

jonas.calcAge(); // 48
```

- 보통 함수 호출일 경우: undefined (strict 모드에서만. strict모드가 아닌 경우window객체를 가리킴.)

- 화살표 함수 : 'this'키워드를 가지고 있지 않음. 화살표함수 내에서 this를 쓸 경우, 이 this는 자기를 둘러싸고 있는 surrounding 함수(부모 함수)의 this임(lexical this).

- 함수가 이벤트리스너로써 호출될 경우 : 핸들러 함수가 attached된 dom element를 가리킴.

#####this가 절대 가리키지 않는것 :

- 자기가 속한 함수 그 자체
- 자기가 속한 함수의 variable environment.
