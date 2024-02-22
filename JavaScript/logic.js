// A function to determine the marker size based on the population
function markerSize(population) {
  return Math.sqrt(population) * 50;
}

function markerTwo(density) {
  return (density) * 5
}
// Define arrays to hold the created population and density markers
let populationMarker = [];
let densityMarker = [];

// Loop through counties, and create the population and density markers.
for (let i = 0; i < counties.length; i++) {
  // Setting the marker radius for the population by passing population into the markerSize function
  populationMarker.push(
    L.circle(counties[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "white",
      radius: markerSize(counties[i].county.population)
    }).bindPopup(`<h1>${counties[i].county.name}</h1> <hr> <h3>Population: ${counties[i].county.population}</h3>`)
  );

  // Set the marker radius for the density by passing the density to the markerSize() function.
  densityMarker.push(
    L.circle(counties[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "#ffb3ff",
      fillColor: "#ffb3ff",
      radius: markerTwo(counties[i].county.density)
    }).bindPopup(`<h1>${counties[i].county.name}</h1> <hr> <h3>Density: ${counties[i].county.density}</h3>`)
  );
}

// Create the base layers.
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create two separate layer groups: one for the population markers and another for the density markers.
let populations = L.layerGroup(populationMarker);
let densities = L.layerGroup(densityMarker);

// Create a baseMaps object.
let baseMaps = {
  "Street Map": street,
  "Topographic Map": topo
};

// Create an overlay object.
let overlayMaps = {
  "County Populations": populations,
  "County Densities": densities
};

// Define a map object.
let myMap = L.map("map", {
  center: [37.09, -120],
  zoom: 5,
  layers: [street, populations, densities]
});

// Pass our map layers to our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
