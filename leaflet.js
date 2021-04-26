var mymap = L.map('mapid').setView([56.1572, 10.2107], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FuZHJhYmlya2UiLCJhIjoiY2tueWI2cnBpMDU1aTJxcmpkZGRlN3A1MiJ9.9YHT3VTXpPmzcWZHe3upgw'
}).addTo(mymap);
/*
//Den Gamle By
var denGamleBy = L.marker([56.1587826, 10.1899265]).addTo(mymap);
denGamleBy.bindPopup("<b>Den Gamle By</b><br>I am a popup.").openPopup();

//Salling ROOFTOP
var sallingRooftop = L.marker([56.1543098,10.2050384]).addTo(mymap);
sallingRooftop.bindPopup("<b>Salling ROOFTOP</b><br>I am a popup.").openPopup();

//AROS
var aros = L.marker([56.153919,10.1975273]).addTo(mymap);
aros.bindPopup("<b>ARoS</b><br>I am a popup.").openPopup();

//Byen ved bugten
var byenVedBugten = L.marker([56.164897, 10.224258]).addTo(mymap);
byenVedBugten.bindPopup("<b>Byen ved bugten</b><br>I am a popup.").openPopup();
*/

var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [30, 41.82],
        iconAnchor:   [22, 94],
        popupAnchor:  [-3, -76]
    }
});

var brunPin = new LeafIcon({iconUrl: 'img/brun-pin.png'}),
    blaaPin = new LeafIcon({iconUrl: 'img/blaa-pin.png'}),
    gronPin = new LeafIcon({ iconUrl: 'img/gron-pin.png' });
    gulPin = new LeafIcon({ iconUrl: 'img/gul-pin.png' });
    rodPin = new LeafIcon({ iconUrl: 'img/rod-pin.png' });
    sortPin = new LeafIcon({iconUrl: 'img/sort-pin.png'});

L.icon = function (options) {
    return new L.Icon(options);
};

L.marker([56.1587826, 10.1899265], {icon: brunPin}).addTo(mymap).bindPopup("<strong>Den Gamle By</strong>");
L.marker([56.1543098,10.2050384], {icon: gulPin}).addTo(mymap).bindPopup("<strong>Salling ROOFTOP</strong>");
L.marker([56.153919,10.1975273], {icon: rodPin}).addTo(mymap).bindPopup("<strong>ARoS</strong>");
L.marker([56.164897, 10.224258], {icon: blaaPin}).addTo(mymap).bindPopup("<strong>Byen ved bugten</strong>");


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);


