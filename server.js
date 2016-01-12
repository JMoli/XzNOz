var restify = require('restify'), server = restify.createServer(); //for https  use {certificate:'', key:''}
//var redis = require('redis'), redisClient = redis.createClient();
//var socket = require('socket.io')(server), io = socket.listen(server);
var fs = require('fs');

server.use(restify.bodyParser());

server.get('/', function(req, res, next){
	console.log(req.connection.remoteAddress);
	var home = fs.readFileSync('./base.html', 'utf-8');	
	res.writeHead(200, {
		'Content-Length' : Buffer.byteLength(home),
		'Content-Type' : 'text/html'
	});
	res.write(home);
	res.end();
	next();
});


server.get(/\/static\/?.*/, restify.serveStatic({
	directory: __dirname
}));


server.listen(8081, function(){
	console.log('listening on localhost:8081');
       ///
});

//var spider = require('./SpiderWeb.js');
//io.sockets.on('connection', function(socket){
//        spider.sockets(socket);
//});

//server = (function(server, redis, io){
 //       	server = spider.webs(server);
 //       	return server
// })(server, redis, io);

