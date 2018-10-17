var http = require('http');
var url = require('url');
var fs = require('fs');
var dt = require('./myfirstmodule.js');

function server1(req, res) {
 	res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write("The date and time are currently: "+dt.myDateTime());
    //res.write(req.url);
    //res.end('Hello World!');

    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt);
    res.end();
 }

function server2(req, res) {
	fs.readFile('demo.html', function (err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("<h1> Heieieieieieieiei </h1>");
		res.write(data);
		res.end();
	})
}

function server3(req, res) {
	fs.appendFile('tekst1.txt', 'Dette er innholdet fra server 3', function (err) {
		if (err) throw err;
		console.log("saved");
	})
}

function server4(req, res) {
	fs.open('tekst1.txt', 'w', function (err) {
		if (err) throw err;
		console.log("saved");
	})
}

function server5(req, res) {
	fs.writeFile('tekst1.txt', 'Her er innhold fra server5', function (err) {
		if (err) throw err;
		console.log("saved");
	})
}

http.createServer(server5).listen(8080);