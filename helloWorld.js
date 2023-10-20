// var http = require('http');
// var url = require('url');
// var server = http.createServer(function(req, res){

// 	var page = url.parse(req.url).pathname;
// 	console.log(page);

// 	res.writeHead(200, {'Contente-Type': 'text/html'});

// 	res.write('<!DOCTYPE html>'+
// 					'<html>'+
// 					'<head>'+
// 						'<title></title>'+
// 					'</head>'+
// 					'<body>page node js</body>'+
// 					'</html>');
// 	res.end();
// });
// server.listen(8080);



// var http = require('http');
// var url = require('url');
// var server = http.createServer(function(req, res){

// 	var page = url.parse(req.url).pathname;
	

// 	res.writeHead(200, {'Contente-Type': 'text/plain'});

// 	if(page == '/')
// 		res.write("Vous etes à la d'accueil");
// 	else if(page == '/sous')
// 		res.write("Vous etes dans une sous page");
// 	else if(page == '/sous/sous')
// 		res.write("Vous etes dans une sous sous page");
// 	else
// 		res.write("Vous vous etes perdu");

// 	res.end();
// });
// server.listen(8080);



// var http = require('http');
// var url = require('url');
// var queryString = require('querystring');

// var server = http.createServer(function(req, res){

// 	var params = queryString.parse(url.parse(req.url).query);

// 	res.writeHead(200, {'Contente-Type': 'text/plain'});

// 	if('nom' in params && 'prenom' in params)
// 		res.write('Votre nom est : ' +params['nom']+ ' et le prenom : ' +params['prenom'])
// 	else
// 		res.write('Vous devriez avoir un nom et prenom non????');

// 	res.end();
// });
// server.listen(8080);



// var http = require('http');
// var server  = http.createServer(function(req, res){
// 	res.writeHead(200, {'Contente-Type': 'text/plain'});

// 	for(let i = 0; i <= 15; i++)
// 	{
// 		for(let j = 0; j < i; j++)
// 		{
// 			res.write('*');
// 		}
// 		res.write('<br/>');
// 	}
// 	res.end();
// });
// server.listen(8080);




// var http = require('http');
// var url = require('url');
// var queryString = require('querystring');

// var server = http.createServer(function(req, res){

// 	var params = queryString.parse(url.parse(req.url).query);



// 	res.writeHead(200, {'Contente-Type': 'text/plain'});

// 	if('n1' in params && 'n2' in params)
// 	{
// 		var a = parseInt(params['n1']);
// 		var b = parseInt(params['n2']);
		
// 		var somme = a + b;
		
// 		res.write('La somme de ' +a+ ' ' +b+ ' vaut : ' +somme);
// 	}
// 	else{
// 		res.write('Une des valeurs à additionner est manquante');
// 	}

// 	res.end();
// });
// server.listen(8080);


// var EventEmitter = require('events').EventEmitter;
// var jeu = new EventEmitter();

// 	jeu.on('gameover', function(){
// 		console.log('Ecouter le gameover');
// 	});

// 	jeu.emit('gameover', 'Emission de gameover');



// var direBonjour = function() {
//  console.log('Bonjour !');
// }
// var direByeBye = function() {
//  console.log('Bye bye !');
// }
// exports.direBonjour = direBonjour;
// exports.direByeBye = direByeBye;


// var leModule = require('./monmodule');
// leModule.direBonjour();
// leModule.direByeBye();


// var mark = require('markdown').markdown;
// console.log(mark.toHTML('Un paragraphe en **markdown** !'));





// var express = require('express');
// var app = express();

// // app.get('/', function(req, res){
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.send('Vous etes a laccueil');
// // });

// // app.get('/log', function(req, res){
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.send('Vous etes a login');
// // });

// // app.get('/com/:num', function(req, res){
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.send('C\'est la commande ' +req.params.num);
// // });

// // // Si vous souhaitez renvoyer une réponse "page introuvable" pour les autres routes, vous pouvez le faire en dehors des gestionnaires de route.
// // app.use(function(req, res){
// //     res.status(404).send('page introuvable');
// // });

// // app.get('/com/:numCom', function(req, res) {
// //  res.render('test.ejs', {numCom: req.params.numCom});
// // }); 


// // app.get('/compter/:num', function(req, res) {
// // 	var noms = ['lno', 'liano', 'reservado'];
// //  		res.render('test2.ejs', {num: req.params.num, noms: noms});
// // }); 


// 	// app.use(function (req, res, next) {
// 	// 	console.log('Heure:', Date.now());
// 	// 	next();
// 	// }); 


// 	// app.use('/user/:id', function (req, res, next) {
// 	// 	console.log('Type de requete:', req.method);
// 	// 	next();
// 	// });

// 	// app.get('/user/:id', function (req, res, next) {
// 	//  	res.send('USER');
// 	// });


// 	// app.use('/user/:id', function(req, res, next) {
// 	// 	console.log('Request URL:', req.originalUrl);
// 	// 	next();
// 	// }, function (req, res, next) {
// 	// 	console.log('Request Type:', req.method);
// 	// 	next();
// 	// });


// 	app.get('/user/:id', function (req, res, next) {
// 		console.log('ID:', req.params.id);
// 		next();
// 	}, function (req, res, next) {
// 	 res.send('User Info');
// 	});
// 	app.get('/user/:id', function (req, res, next) {
// 		res.end(req.params.id);
// 	});


// app.listen(8080);


