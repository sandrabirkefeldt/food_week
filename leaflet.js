var mymap = L.map('mapid').setView([56.1572, 10.2107], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FuZHJhYmlya2UiLCJhIjoiY2tueWI2cnBpMDU1aTJxcmpkZGRlN3A1MiJ9.9YHT3VTXpPmzcWZHe3upgw'
}).addTo(mymap);

//Den Gamle By
var denGamleBy = L.marker([56.1587826, 10.1899265]).addTo(mymap);
denGamleBy.bindPopup("<b>Den Gamle By</b><br>I am a popup.").openPopup();

//Salling ROOFTOP
var sallingRooftop = L.marker([56.1543098,10.2050384]).addTo(mymap);
sallingRooftop.bindPopup("<b>Salling ROOFTOP</b><br>I am a popup.").openPopup();

//AROS
var aros = L.marker([56.153919,10.1975273]).addTo(mymap);
aros.bindPopup("<b>ARoS</b><br>I am a popup.").openPopup();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);


