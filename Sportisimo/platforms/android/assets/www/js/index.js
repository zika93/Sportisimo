
var socket = io.connect('http://192.168.0.110:20001');
    

	
function testiranje()
{
	
	socket.emit("news",'zika');
}
