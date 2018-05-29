var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(request, response){

    // 1. post로 전달된 데이터를 다믈 변수를 선언
    var postdata = '';

    // 2. request객체에 on() 함수로 'data' 이벤트를 연결
    request.on('data', function(data){
        // 3. data 이벤트가 발생할 때마다 callback을 통해 postdata 변수에 값을 저장
        postdata = postdata + data;
    });

    // 4. request 객체에 on() 함수로 'end' 이벤트를 연결
    request.on('end', function(){
        // 5. end 이벤트가 발생하면(end 이벤트는 한번만 발생) 3번에서 저장해둔 postdata를 qeurystring으로 객체화
        var parseQuery =  querystring.parse(postdata);
        // 6. 객체화된 데이터를 로그로 출력
        console.log(parseQuery);
        // 7. 성공 HEADER와 데이터를 담아서 클라이언트에 응답처리
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end('var1의 값 = ');
    });

});

server.listen(8080, function(){
    console.log('Server is running...');
});