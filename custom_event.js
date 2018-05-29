/* event 사용하기 

1. EventEmitter :
    node.js 의 모든 이벤트처리가 정의된 기본객체입니다. 이벤트를 사용하기 위해서는 이 객체를 재정의해서 사용해야할 수 있습니다.
2. on()
    이벤트를 연결하는 함수입니다. 이전장에서 request 객체에 on() 함수를 이용해서 'data'라는 이벤트를 캐치해서 사용했었는데 모든 이벤트처리는 이런 동일한 루틴을 거쳐서 사용하게 됩니다.
3. emit() 
    이벤트를 발생시키는 함수입니다. 위의 on() 함수에서 'data'라는 이벤트가 캐치되기 위해서는 emit('data') 의 형태로 이벤트를 발생시켜야 합니다.
*/

/* 가. 이벤트를 가진 객체 만들기 */

// 1. 이벤트가 정의되 있는 events 모듈 생성, 이전 버전의 process.EventEmitter()는 deprecated!
var EventEmitter = require('events');

// 2. 생성된 이벤트 모듈을 사용하기 위해 custom_object로 초기화
var custom_object = new EventEmitter();

// 3. events 모듈에 선언되어 있는 on() 함수를 재정의 하여 'call' 이벤트를 처리
custom_object.on('call', ()=> {
    console.log('called events!');
});

// 4. call 이벤트를 강제로 발생
custom_object.emit('call');


