// 1. fs(파일시스템) 모듈 사용
var fs = require('fs');

// 2. 비동기방식의 파일읽기. 
// 파일을 읽은 후 마지막 파라미터에 넘긴 callback 함수가 호출
fs.readFile('home.js', 'utf-8', function(error, data){
    console.log('01 readAsync: %s', data);
});

// 3. 동기방식의 파일읽기.
// 파일을 읽은 후 data 변수에 저장
var data = fs.readFileSync('home.js', 'utf-8');
console.log('02 readSync: %s', data);

/*
    02 readSync: console.log('home.js')
    01 readAsync: console.log('home.js')

    첫번째는 함수는 비동기방식으로 파일을 읽는 함수가 다른 thread 에 의해서 실행되기 때문에 
    로그의 순서가 두번째 함수인 '02 readSync: ...' 가 먼저 출력
*/