var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require('fs');

var spotify = new Spotify(keys.spotifyKeys);
 

//We need an if statement for the movie-this component.
if (process.argv[2] === "movie-this") {
	var movieName = process.argv[3];
	//creat query URL w/ API key
	var queryUrl = "http://www.omdbapi.com/?apikey=40e9cece&t=" + movieName + "&tomatoes=true&y=&plot=short&r=json";
	request(queryUrl, function(error, response, body) {
  	 if (!error && response.statusCode == 200) {
  	 	//parse body to make it pretty
        	body = JSON.parse(body);
            console.log('Movie Title: ' + body.Title);
            console.log('Year Released: ' + body.Released);
            console.log('Rating: ' + body.Rated);
            console.log('Production Country: ' + body.Country);
            console.log('Language: ' + body.Language);
            console.log('Plot: ' + body.Plot);
            console.log('Actors: ' + body.Actors);
            console.log('Rotten Tomatoes Rating: ' + body.tomatoUserRating);
            console.log('Rotten Tomatoes URL: ' + body.tomatoURL);
        } else {
            console.log('Error occurred: ' + error);
        }
	});

}
//We need an if statement for the my-tweets compnonent
if (process.argv[2] === "my-tweets"){

  var client = new Twitter(keys.twitterKeys);

  var params = { screen_name: 'TheSpanklebunny', count: 20};

  client.get('statuses/user_timeline', params, function(error, tweets, response) {

    if (!error) {
      var dataTweets = []; 
      for (var i = 0; i < tweets.length; i++) {
        dataTweets.push({
            'created at: ' : tweets[i].created_at,
            'Tweets: ' : tweets[i].text,
        });
      }
      console.log(dataTweets);
    
    }
  });

};

//We need an if statement for spotify-this-song
if(process.argv[2] === "spotify-this-song"){

    var song = process.argv[3];
    spotify.search({ type: 'track', query: song, limit: 1}, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }else{
     //we need to console.log Artist(s)
    console.log("Artists:" + JSON.stringify(data.tracks.items[0].artists[0].name, null, 2) + "\n ");
    //we need the song's name
   console.log("Song Title: " + JSON.stringify(data.tracks.items[0].name) + "\n ");
    //we need a preview linkg for the song from Spotify
  console.log("Album: " +JSON.stringify(data.tracks.items[0].album.name) + "\n ");
    //The album that the song is on
  console.log("Link: " + JSON.stringify(data.tracks.items[0].album.external_urls));
  } 


})
}

//we need an if statment for the do-what-it says component
if (process.argv[2] === "do-what-it-says"){
  //spotify-this-song,"I Want it That Way"
  fs.readFile("random.txt", "utf8", function(error, data) {
    console.log(data);
    var dataArr= data.split(',');
    var songSearch= dataArr[1];

    spotify.search({ type: 'track', query: songSearch, limit: 1}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }else{
   //we need to console.log Artist(s)
  console.log("Artists:" + JSON.stringify(data.tracks.items[0].artists[0].name, null, 2) + "\n ");
  //we need the song's name
 console.log("Song Title: " + JSON.stringify(data.tracks.items[0].name) + "\n ");
  //we need a preview linkg for the song from Spotify
console.log("Album: " +JSON.stringify(data.tracks.items[0].album.name) + "\n ");
  //The album that the song is on
console.log("Link: " + JSON.stringify(data.tracks.items[0].album.external_urls));
  }
  });
    
  })
}
















