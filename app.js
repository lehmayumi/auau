// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Create a map instance and set the initial view coordinates and zoom level
  var map = L.map('map').setView([-23.52772015578366, -46.66783567505396], 13);


  // Add a tile layer to the map from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);


  // Create a marker with popup and add it to the map
  var marker = L.marker([-23.52772015578366, -46.66783567505396]).addTo(map);
  marker.bindPopup("dia especial!").openPopup();
});

  var greenIcon = L.icon({
    iconUrl: 'https://static.vecteezy.com/system/resources/thumbnails/016/761/881/small_2x/the-dog-smiles-because-he-is-happy-png.png',
 
    iconSize:     [80, 60], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marker2 = L.marker([-23.52772015578366, -46.66783567505396], {icon: greenIcon}).addTo(map);
  marker2.bindPopup("auauau").openPopup();
