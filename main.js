// initialize a map and set its view to geographical coordinates and a zoom level:
const map = L.map('map').setView([51.505, -0.09], 13);

// add a tile layer with the maximum zoom level and the attribution text
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// add a marker to the map
const marker = L.marker([51.5, -0.09]).addTo(map);

// add a circle to the map
const circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

// add a polygon to the map
const polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(map);
