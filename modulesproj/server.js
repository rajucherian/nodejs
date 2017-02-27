var http = require("http");
var module1 = require("./module1");

http.createServer(onRequest).listen(8000);

function onRequest(request, response){
	response.writeHead(200,{'Content-Type' : 'text/plain'});
	response.write(module1.myString);
	response.end();
	module1.MyFunction();
}


console.log("Http server started at port 8000....");