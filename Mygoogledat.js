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
	var googlevizArray = [];

//These are my headers
	
	var vizheaderArray = ["Date", "value"];
	
		
	googlevizArray.push(vizheaderArray);

//this is the pointer to my observations array
	var googleObsData = Mygoogledat.observations;
	
		//to create the visualization I need to convert the Json data
		//to an array of arrays using a for loop
	for (var i = 0; i < googleObsData.length; i++) {
	
	var dataLoaded = googleObsData[i];
	var newvizArray = [dataLoaded.date, Number(dataLoaded.value)];
	googlevizArray.push(newvizArray);
	
	var myDataTable = google.visualization.arrayToDataTable(googlevizArray);
	
	var options = {
          title: 'Unemployment rate'
        };
	}
//console.log(mygooglevizArray);


function mygooglevizLoaded(){
	
google.load("visualization", "1", {packages:["corechart"],callback : "mygooglevizLoaded"});


function dataLoaded() {

	console.log(googleObsData);

	
}
	

	
		//create reference to current object in list
		var latestObj = googleObsData[i]

		var latestArray = [latestObj.date, Number(latestObj.value)];

		googlevizArray.push(latestArray);

		//end for loop
	}
	
	console.log(googlevizArray);
	
	
	//feed data to visualization library
	//create options object to actually customize the look of the chart
	
	
	//tell it to create a column chart
	var googleChart = new google.visualization.LineChart(document.getElementById('my_Chart'));
	googleChart.draw(myDataTable);
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

