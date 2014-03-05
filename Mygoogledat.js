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
	var mygoogleDatavizArray = [];

//These are my headers
	
	var mygoogleheaderArray = ["Date", "value"];
	
		
	mygoogleDatavizArray.push(headerArray);

//this is the pointer to my observations array
	var mygoogleObsData = Mygoogledat.observations;
	
		//to create the visualization I need to convert the Json data
		//to an array of arrays using a for loop
	for (var i = 0; i < mygoogleObsData.length; i++) {
	
	var dataLoaded = mygoogleObsData[i];
	var newArray = [dataLoaded.date, Number(dataLoaded.value)];
	myDataArray.push(newArray);
	
	var myDataTable = google.visualization.arrayToDataTable(myDataArray);
	
	var options = {
          title: 'Unemployment rate'
        };
	}
//console.log(myDataArray);


function googleVizLoaded(){
	
google.load("visualization", "1", {packages:["corechart"],callback : "googleVizLoaded"});


function dataLoaded() {

	console.log(myObsData);

	
}
	

	
		//create reference to current object in list
		var currObj = myObsData[i]

		var currArray = [currObj.date, Number(currObj.value)];

		myDataArray.push(currArray);

		//end for loop
	}
	
	console.log(myDataArray);
	
	
	//feed data to visualization library
	//create options object to actually customize the look of the chart
	
	
	//tell it to create a column chart
	var myChart = new google.visualization.LineChart(document.getElementById("myChartDiv"));
	myChart.draw(myDataTable);
}

function googleLoaded() {
	
	console.log("googleLoaded");
	
	//This gets my json file
	$.get("Mygoogledat.json", dataLoaded, "json");
	
}

console.log("google loaded");

function pageLoad() {

	console.log("go to page loaded");

	//this loads the google visualization library
	google.load("visualization", '1', {
		packages : ["corechart"],
		callback : "googleLoaded"
	}); 
	

	//

	

}


$(document).ready(pageLoad);

