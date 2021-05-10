var mymap = L.map('mapid').setView([56.1572, 10.2107], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FuZHJhYmlya2UiLCJhIjoiY2tueWI2cnBpMDU1aTJxcmpkZGRlN3A1MiJ9.9YHT3VTXpPmzcWZHe3upgw'
}).addTo(mymap);

var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [20, 28.28],
        iconAnchor:   [20, -10],
        popupAnchor: [5, -5]
    }
});

var brunPin = new LeafIcon({iconUrl: 'img/brun-pin.png'}),
    blaaPin = new LeafIcon({iconUrl: 'img/blaa-pin.png'}),
    gronPin = new LeafIcon({iconUrl: 'img/gron-pin.png' });
    gulPin = new LeafIcon({iconUrl: 'img/gul-pin.png' });
rodPin = new LeafIcon({ iconUrl: 'img/rod-pin.png' });
    sortPin = new LeafIcon({ iconUrl: 'img/sort-pin.png' });

L.icon = function (options) {
    return new L.Icon(options);
};


L.marker([56.1587826, 10.1899265], {icon: brunPin}).addTo(mymap).bindPopup("<h2>Den Gamle By</h2> <p>Med over en halv mio. årlige gæster er Den Gamle By en af Aarhus’ mest kendte og elskede kulturinstitutioner. Det gør Den Gamle By til et oplagt sted for virksomheder, forskere og formidlere, der har en historisk vinkel på fødevarer og madkultur at samle aarhusianerne om spændende madaktiviteter.</p>");
L.marker([56.1543098,10.2050384], {icon: gulPin}).addTo(mymap).bindPopup("<strong>Salling ROOFTOP</strong>");
L.marker([56.153919,10.1975273], {icon: rodPin}).addTo(mymap).bindPopup("<strong>ARoS</strong>");
L.marker([56.165087650755915, 10.222491152274102], {icon: blaaPin}).addTo(mymap).bindPopup("<strong>Kystpromenaden</strong>");
L.marker([56.16382724715992, 10.226949940784534], {icon: blaaPin}).addTo(mymap).bindPopup("<strong>Spring ombord på fiskekutteren Tove</strong>");
L.marker([56.16776917270664, 10.226445581115856], {icon: blaaPin}).addTo(mymap).bindPopup("<strong>Byens længste ta’-selv-bord</strong>");
L.marker([56.15883167094611, 10.137131214746638], {icon: sortPin}).addTo(mymap).bindPopup("<strong>Fællesmiddag i Gellerup</strong>");
L.marker([56.151869450501536, 10.202816896891779], {icon: sortPin}).addTo(mymap).bindPopup("<strong>Fællesmiddag i Rådhustårnet</strong>");
L.marker([56.165222218860464, 10.226224425728649], {icon: sortPin}).addTo(mymap).bindPopup("<strong>Fællesmiddag i Generationernes hus</strong>");
L.marker([56.16671614197104, 10.21550224138891], {icon: gronPin}).addTo(mymap).bindPopup("<strong>Food Walks</strong>");
L.marker([56.16707407657883, 10.193216065246046], {icon: gronPin}).addTo(mymap).bindPopup("<strong>Food Walks</strong>");
L.marker([56.158542394000655, 10.215716531544128], {icon: gronPin}).addTo(mymap).bindPopup("<strong>Food Walks</strong>");
L.marker([56.15293312277212, 10.209716407197975], {icon: gronPin}).addTo(mymap).bindPopup("<strong>Food Walks</strong>");
L.marker([56.17375491026483, 10.226109604072292], {icon: gronPin}).addTo(mymap).bindPopup("<strong>Food Walks</strong>");


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);


