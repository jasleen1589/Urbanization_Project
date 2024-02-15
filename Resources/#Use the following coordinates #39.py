#Use the following coordinates #39.0996453445, -122.753183909

#Creating the map object
let California_Counties = L.map("map", {
  center: [39.0996453445, -122.753183909],
  zoom: 11
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(California_Counties);

// Use this link to get the GeoJSON data.
let link = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/California_Counties.geojson";

