var module = require('./custom_module_timer');

// 1. moduel 내부에 선언된 timer 객체를 통해 tick 이벤트를 캐치하고, 이벤트 발생시마다 현재시간을 출력
module.timer.on('tick', function(){
    var time = new Date(); // 2. 현재 시간을 가져오기 위한 Date 객체 생성
    console.log('now:'+time);
});