
var fs 	= 	require('fs');
var url	=	require('url');


function renderHTML(path, response){
	fs.readFile(path,null,function(error, data){
		if (error){
			response.writeHead(404,{'Content-Type' : 'text/plain'});
			response.write('URL not found');
			response.end();
		}
		else{
			response.writeHead(200,{'Content-Type' : 'text/html'});
			response.write(data);
			response.end();
		}
	});
}

module.exports 	= {handleRequest : function(request, response){
	
	var path	=	url.parse(request.url).path;

	switch (path){
		case '/' : 
			renderHTML ('./index.html', response);
			break;
		case '/login':
			renderHTML('./login.html',response);
			break;
		default:
			response.writeHead(404);
			response.write('URL not found');
			response.end();
	}



}


}