var mongoose = require( 'mongoose' );

var playlistSchema = mongoose.Schema( {
	title : String,
	videoID : String,
	session : String
} );

// Create a model
var Playlist = mongoose.model( 'Playlist', playlistSchema );

module.exports = Playlist;
