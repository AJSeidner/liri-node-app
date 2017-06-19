var keys = require("./keys.js");

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");

//We need an if statement for the movie-this component.
if (process.argv[3] == "movie-this") {
	console.log("movie");
	//var movieName = process.argv[4];
	console.log(process.argv[4]);
	//var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json&key=40e9cece";
	//request(queryUrl, function(error, response, body) {
  	//if (!error && response.statusCode === 200) {
    //console.log("Release Year: " + JSON.parse(body).Year);
    //console.log(process.argv[4]);

  	//}
	//});

}
//We need an if statement for the my-tweets compnonent
if (process.argv[3] == "my-tweets"){

	
}







//we need an if statement for the spotify-this song component







//we need an if statment for the do-what-it says component













