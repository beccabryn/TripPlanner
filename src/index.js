const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const buildMarker = require('./marker');


mapboxgl.accessToken = 'pk.eyJ1IjoicmR1aGFtZWw5IiwiYSI6ImNrMzRvcHF5NDE3ZzkzZGszOWlta290Z2EifQ.KohinvWpTGd3gTmTmkqLQw';
const map = new mapboxgl.Map({
container: "map",
center: [-74.009, 40.705],
zoom: 12,
style: 'mapbox://styles/mapbox/streets-v11'
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


const hotelMarker = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
hotelMarker.style.backgroundImage = "http://i.imgur.com/D9574Cu.png"


const restaurantMarker = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
restaurantMarker.style.backgroundImage = "http://i.imgur.com/cqR6pUI.png";


const activityMarker = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
activityMarker.style.backgroundImage = "http://i.imgur.com/WbMOfMl.png";


new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

const marker = buildMarker("activity", coords);
marker.addTo(map);



