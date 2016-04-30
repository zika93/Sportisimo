//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/Sportisimo';

var io = require('socket.io').listen(20001);
io.sockets.on('connection', function (socket) 
{
    socket.on('news', function (data) 
		{
			console.log('Usao u news');
			console.log(data);
			testPozivBaze();
		});
});





//funkcije za rad sa bazom 
function testPozivBaze()
{
	console.log('test poziv f-je');
	MongoClient.connect(url, function (err, db) {
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		//HURRAY!! We are connected. :)
		console.log('Connection established to', url);
		
		// Get the documents collection
		var collection = db.collection('Lokacije');
	
		// Insert some users
		collection.find().toArray(function (err, result) {
		if (err) {
			console.log(err);
		} else if (result.length) {
			//console.log('Found:', result);
			 io.sockets.emit("database_data",result);
		} else {
			console.log('No document(s) found with defined "find" criteria!');
		}
		//Close connection
		db.close();
		});
	}
	});
};


console.log("==========================\nSportisimo server started.\n==========================");