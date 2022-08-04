const 	express = require("express"),app = express(),
		bodyParser = require('body-parser'),
		https = require('https'),http = require('http'),fs = require('fs');
		var path=require('path');
		var cookieParser = require('cookie-parser');
		
app.listen(process.env.PORT || 8443,function(){
	console.log("server 8443");
});

//external modules





//Middle wares
		app.use(bodyParser.urlencoded({extended:true}));
		app.use(bodyParser.json());
		app.use(cookieParser());
		
//express static files
		app.use(express.static(path.join(__dirname, 'static'),{ maxAge: 2592000000 }));//30days
		app.use(express.static(path.join(__dirname, 'public'),{ maxAge: 86400000 }));//1 day

//view engine
		app.engine('html',require("ejs").renderFile);
		app.set('view engine','html');

//external modules
		
		
		
app.get("/",function(req,res){
    console.log("Inside get request", req.body);
    res.end('Get request');
});

app.post("/",function(req,res){
    console.log("Inside post request", req.body);
    res.end('Post request');
});
 
		
		


//var httpServer = http.createServer(app);
//httpServer.listen(8080);
//console.log("http running at 8080");