var http = require('http');
var uwu = require('upper-case');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uwu.upperCase("Loading...2023"));
    res.end();
}).listen(3000);