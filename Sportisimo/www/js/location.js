 // Try HTML5 geolocation.
 var pos;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
		return pos;
    } 
	else {
        alert("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    pos = {lat: position.coords.latitude, lng:position.coords.longitude};   
}