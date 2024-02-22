// Create an array of each country's numbers
let lower_tier = Object.values(data.lower_tier);
let middle_tier = Object.values(data.middle_tier);
let upper_middle_tier = Object.values(data.upper_middle_tier);
let upper_tier = Object.values(data.upper_tier);

// Create an array of category labels
let labels = Object.keys(data.lower_tier);

// Display the default plot
function init() {
  let data = [{
    values: lower_tier,
    labels: labels,
    type: "pie"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the groups's data
  let data = [];

  if (dataset == 'lower_tier') {
      data = lower_tier;
  }
  else if (dataset == 'middle_tier') {
      data = middle_tier;
  }
  else if (dataset == 'upper_middle_tier') {
      data = upper_middle_tier;
  }
  else if (dataset == 'upper_tier') {
    data = upper_tier;
  }
// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();
