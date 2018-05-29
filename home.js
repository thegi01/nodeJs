var module = require('./custom_module');

// 1. formatted 특수문자 %d를 사용해서 mudule.sum()에서 리턴된 숫자값을 출력
console.log( 'sum = %d' , module.sum(100) );

// 2. fomatted 특수문자 %s를 사용해서 module.var1의 문자값을 출력
console.log('var1 = %s', module.var1);

// 문자열 출력 여러개 하기
console.log('var1 = %d, var2 = %s, var3 = %d', 105, 'Hello!', 10098);