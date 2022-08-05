// Get net module 
const net = require('net');

//Configuration ===================================
//const port = 46200;
const port = 1025;


//Create an instance of the server and attach the client handling callback
const server = net.createServer(onClientConnection);
//process.env.PORT
//Start listening on given port and host.
server.listen(process.env.PORT || port,function(){
   //console.log(`Server started on port ${process.env.PORT}`);
   console.log("Server started on port "+ port+" "+process.env.PORT);
});


//the client handling callback
function onClientConnection(sock){
    //Log when a client connnects.
    console.log(`${sock.remoteAddress}:${sock.remotePort} Connected`);
    
	//Handle the client data.
    sock.on('data',function(data){
        //Log data received from the client
        console.log(`>> data received : ${data} `);
		
		//prepare and send a response to the client 
		let serverResp = "Hello from the server"
		sock.write(serverResp);
		
		//close the connection 
		sock.end()        
	});
    
	//Handle when client connection is closed
    sock.on('close',function(){
        console.log(`${sock.remoteAddress}:${sock.remotePort} Connection closed`);
    });
    
	//Handle Client connection error.
    sock.on('error',function(error){
        console.error(`${sock.remoteAddress}:${sock.remotePort} Connection Error ${error}`);
    });
};