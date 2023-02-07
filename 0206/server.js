const http = require('http');
const fs = require('fs');
const mySet = function(request, response) {
 let url = request.url; //const 고칠 수 없음, let 가능
 if(request.url==='/') {
    url = '/index.html';
 }
 response.writeHead(200, {'Content-Type': 'text/html'});
 const htmlFile = fs.readFileSync(__dirname + url);
 response.end(htmlFile); //끝났음
};
const app = http.createServer(mySet);
app.listen(8080); //8080 포트에서 들을래