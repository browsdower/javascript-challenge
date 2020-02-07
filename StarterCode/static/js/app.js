// from data.js
var tableData = data;

// YOUR CODE HERE!
tbody = d3.select("tbody")

// get key, value data to the table and loop through to add 
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

//select the input and the filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

function clickSelect(){
   
    d3.event.preventDefault();
    //print the input
    console.log(dateInputText.property("value"));
    //new table showing the filterd data
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    //display new
    displayData(new_table);
}

//listener to handle change and click
dateInputText.on("change", clickSelect)