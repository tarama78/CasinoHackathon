initMap = function() {

  var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 3,
	center: {lat: 46.736919, lng: 2.422437}
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
	return new google.maps.Marker({
	  position: location,
	  label: labels[i % labels.length]
	});
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
	  {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
var locations = [
  {lat: 49.785020, lng: 2.294850},
  {lat: 48.872776, lng: 0.218599},
  {lat: 48.897111, lng: 2.322675}
]
