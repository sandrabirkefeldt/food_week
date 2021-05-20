//https://leafletjs.com/examples/quick-start/ (startguide)
//https://leafletjs.com/examples/custom-icons/ (ændre pins)

//Map-view med Aarhus' koordinater og zoom level
var mymap = L.map('mapid').setView([56.1572, 10.2107], 13);

//Henter map-API og tilføjer Leaflet Map til koden 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FuZHJhYmlya2UiLCJhIjoiY2tueWI2cnBpMDU1aTJxcmpkZGRlN3A1MiJ9.9YHT3VTXpPmzcWZHe3upgw'
}).addTo(mymap);

//Definition af icon class med funktioner, der skal gælde for alle pin-ikoner:
var IconPin = L.Icon.extend({
    options: {
        iconSize: [20, 28.28], 
    }
});

//Vi opretter vi alle seks pin-ikoner fra ovenstående icon class og bruger dem: 
var brunPin = new IconPin({iconUrl: 'img/brun-pin.png'}),
    blaaPin = new IconPin({iconUrl: 'img/blaa-pin.png'}),
    gronPin = new IconPin({iconUrl: 'img/gron-pin.png'}),
    gulPin = new IconPin({iconUrl: 'img/gul-pin.png'}),
    rodPin = new IconPin({iconUrl: 'img/rod-pin.png'}),
    sortPin = new IconPin({iconUrl: 'img/sort-pin.png'});


//Vi tilføjer koordinater til pin-ikonerne og laver en pop-up boks: 
L.marker([56.1587826, 10.1899265], {icon: brunPin}).addTo(mymap).bindPopup("<h2>Den Gamle By</h2> <p>Skriv tekst her...</p> <div><button>Se alle events</button> <button>Find vej</button></div>");
L.marker([56.1543098,10.2050384], {icon: gulPin}).addTo(mymap).bindPopup("<h2>Salling ROOFTOP</h2> <p>ROOFTOP er virkelighedens oversigtskort over Food Weeks events og venues.</p> <div><button>Se alle events</button> <button>Find vej</button></div>");
L.marker([56.153919,10.1975273], {icon: rodPin}).addTo(mymap).bindPopup("<h2>ARoS</h2> <p>Skriv tekst her...</p> <div><button>Se alle events</button> <button>Find vej</button></div>");
L.marker([56.165087650755915, 10.222491152274102], {icon: blaaPin}).addTo(mymap).bindPopup("<h2>Festivalpladsen</h2> <p>Skriv tekst her...</p> <div><button>Læs mere</button> <button>Find vej</button></div>");
L.marker([56.16382724715992, 10.226949940784534], {icon: blaaPin}).addTo(mymap).bindPopup("<h2>Spring ombord på fiskekutteren Tove</h2> <p>Skriv tekst her...</p> <div><button>Læs mere</button> <button>Find vej</button></div>");
L.marker([56.16776917270664, 10.226445581115856], {icon: blaaPin}).addTo(mymap).bindPopup("<h2>Byens længste ta'-selv-bord</h2> <p>Skriv tekst her...</p> <div><button>Læs mere</button> <button>Find vej</button></div>");
L.marker([56.15883167094611, 10.137131214746638], {icon: sortPin}).addTo(mymap).bindPopup("<h2>Fællesmiddag i Gellerup</h2> <p>Skriv tekst her...</p> <div><button>Læs mere</button> <button>Find vej</button></div>");
L.marker([56.151869450501536, 10.202816896891779], {icon: sortPin}).addTo(mymap).bindPopup("<h2>Fællesmiddag i Letbanen</h2> <p>Kokke og producenter står af og på.</p> <div><button>Læs mere</button> <button>Find vej</button></div>");
L.marker([56.165222218860464, 10.226224425728649], {icon: sortPin}).addTo(mymap).bindPopup("<h2>Fællesmiddag i Generationernes Hus</h2> <p>Skriv tekst her...</p> <div><button>Læs mere</button> <button>Find vej</button></div>");
L.marker([56.16671614197104, 10.21550224138891], {icon: gronPin}).addTo(mymap).bindPopup("<h2>Mystery Dinner</h2> <p>Skriv tekst her...</p> <div><button>Læs mere</button> <button>Find vej</button></div>");
L.marker([56.16707407657883, 10.193216065246046], {icon: gronPin}).addTo(mymap).bindPopup("<h2>Cocktail-skattejagt</h2> <p>Skriv tekst her...</p> <div><button>Læs mere</button> <button>Find vej</button></div>");
L.marker([56.158542394000655, 10.215716531544128], {icon: gronPin}).addTo(mymap).bindPopup("<h2>Smag på byens historie</h2> <p>Skriv tekst her...</p> <div><button>Læs mere</button> <button>Find vej</button></div>");
L.marker([56.15293312277212, 10.209716407197975], { icon: gronPin }).addTo(mymap).bindPopup("<h2>Arkitekternes natmad</h2> <p>Skriv tekst her...</p> <div><button>Læs mere</button> <button>Find vej</button></div>");

