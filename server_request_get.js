var http =  require('http');

// 1. 요청한 url을 객체로 만들기 위해 url 모듈사용
// node.js 에는 console 과 같은 내장객체와 더불어 미리 정의되어 있는 내장 module 이 있다.
// 그중 url 은 클라이언트가 요청한 주소값을 javascript 객체로 변환해서 사용할 수 있게 하는 모듈
var url = require('url');

// 2. 요청한 url 중에 Query String을 객체로 만들기 위해 qeurystring 모듈 사용
// querystring은 주소로 전달된 Query String 을 변환해서 javascript 객체로 사용할 수 있게 해주는 모듈
var querystring = require('querystring');

var server = http.createServer(function(request, response){

    // 3. 콘솔화면에 로그 시작 부분을 출력
    console.log('--- log start ---');

    // 4. 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
    // url 모듈의 parse() 함수를 사용해서 request 객체에 있는 url 값을 parsedUrl 변수에 담은후에 로그로 출력
    var parseUrl = url.parse(request.url);
    console.log(parseUrl);
    /*
        Url {
          protocol: null,
          slashes: null,
          auth: null,
          host: null,
          port: null,
          hostname: null,
          hash: null,
          search: '?var1=newData&var2=153&var3=testdata2017',
          query: 'var1=newData&var2=153&var3=testdata2017',
          pathname: '/',
          path: '/?var1=newData&var2=153&var3=testdata2017',
          href: '/?var1=newData&var2=153&var3=testdata2017' }
    */

    // 5. 객체화된 url 중에 Query String 부분만 따로 객체화 후 출력
    var parseQuery = querystring.parse(parseUrl.query, '&', '=');
    console.log(parseQuery);
    /*
        { var1: 'newData', var2: '153', var3: 'testdata2017' }
    */

    // 6. 콘솔화면에 로그 종료 부분을 출력
    console.log('--- log end ---');

    response.writeHead(200, {
        'Content-Type': 'text/html',
        'charset': 'utf-8'
    });
    response.end('var2의 값은 = ' + parseQuery.var1 + 'var2의 값은 = ' + parseQuery.var2 + 'var3의 값은 = ' + parseQuery.var3);
});

server.listen(8080, function(){
    console.log('Server is running...');
});