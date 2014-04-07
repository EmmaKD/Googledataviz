/**
 * @author
 */

// The following are the project steps

//I will set up document ready
//And load Google chart package
//I will then load the data
//And then render the chart

//Mygoogledat is the local name of the json file I just loaded
//And this is the file loader with thw file nickname
	function dataLoaded(Mygoogledat) {
		
		
		console.log("google visuals");


//I am trying to construct an array of arrays
//
	var gvizArray = [];

//These are my headers
	
	var vizheaderArray = ["Date", "value"];
	
		
	gvizArray.push(vizheaderArray);

//this is the pointer to my observations array
	var gObsData = Mygoogledat.observations;
	
		//to create the visualization I need to convert the Json data
		//to an array of arrays using a for loop
	for (var i = 0; i < gObsData.length; i++) {
	
	//this function is to tell the computer that of my various variables that I have in my json library 
	//I need data and value in such a way that this should appear in the x axis and y axis
	var dataLoaded = gObsData[i];
	var newvizArray = [dataLoaded.date, Number(dataLoaded.value)];
	
	
	//this will put my data array into my data list
	gvizArray.push(newvizArray);
	
	var iDataTable = google.visualization.arrayToDataTable(gvizArray);
	
	//this will be the title of ny chart
	var options = {
          title: 'Unemployment rate'
        };
	}
//console.log(mygooglevizArray);

//this is to define a new callback fucntion data chart
function mygvizLoaded(){
	
google.load("visualization", "1", {packages:["corechart"],callback : "mygvizLoaded"});

function dataLoaded() {

	console.log(gObsData);

	
}	
	
		//create reference to current object in the list
		var latestObj = gObsData[i]

		var latestArray = [latestObj.date, Number(latestObj.value)];

		gvizArray.push(latestArray);

		//end for loop
	}
	
	console.log(gvizArray);
	
	
	//feed data to visualization library
	//create options object to actually customize the look of the chart
	
	
	//tell it to create a column chart
	var googleChart = new google.visualization.LineChart(document.getElementById('my_Chart'));
	googleChart.draw(iDataTable);
}

function googleLoaded() {
	
	console.log("googleLoaded");
	
	//This gets my json file
	$.get("Mygoogledat.json", dataLoaded, "json");
	
}

console.log("google loaded");

function pageLoad() {

	console.log("go to page loaded");

	//this is the google chart load function
	//which in addition to having a property will add the callback function and the data chart.
	google.load("visualization", '1', {
		packages : ["corechart"],
		callback : "googleLoaded"
	}); 
	

	
}

//this is the document ready function and data source which is the name of my callback
$(document).ready(pageLoad);

