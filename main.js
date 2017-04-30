var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('main.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8000);

var static = require( 'node-static' ),
    port = 8087,
    http = require( 'http' );

// config
var file = new static.Server( './public', {
    cache: 3600,
    gzip: true
} );

// serve
http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen( port );