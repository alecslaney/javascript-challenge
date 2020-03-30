var tableData = data;

// References to HTML elements for changing page
var tbody = d3.select("tbody");
var input = d3.select("#datetime");
var filterButton = d3.select("#filter-btn");

// Constructs table on page based on filter criteria
function buildTable(filter) {
  filter.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

// Event handler for "Filter" button. Filters data based on user-input date
filterButton.on("click", () => {
  var userDate = input.property("value");
  tbody.html("");
  if (userDate) {
    var filtered = tableData.filter(x => x.datetime === userDate);
    buildTable(filtered);
  } else {
    buildTable(data);
  }
});

// On page load, constructs table in its entirety
buildTable(data);