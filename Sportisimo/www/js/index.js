
var socket = io.connect('http://192.168.0.110:20001');
var defLocation = {lat: 43.3209, lng: 21.8958};   
var map; 
function initialize() 
{
    map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: defLocation
        });
	testiranje();
	alert(getLocation());
}
google.maps.event.addDomListener(window, 'load', initialize);
	
function testiranje()
{
	
	socket.emit("news",'zika');
}


socket.on("database_data",function(data)
{
	for (i=0;i<data.length;i++)
	{	
		//alert(data[i].Naziv);
		dodajMarker(data[i].Lat,data[i].Lon,data[i].Naziv)
	}
});

function dodajMarker(latitude,longitude,naziv)
{
	var markerLocation = {lat: parseFloat(latitude), lng: parseFloat(longitude)}; 
	var image = 'http://s32.postimg.org/dzvkt2975/stadium.png';
	var marker = new google.maps.Marker(
	{
		position: markerLocation,
		icon: image
    });
	
	marker.setTitle(naziv);
	marker.addListener('click', function() 
	{
		if (marker.getAnimation() !== null) {
			marker.setAnimation(null);
		} 
		else 
		{
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	});
	marker.setMap(map); 
}

