var mongoose = require( 'mongoose' );
var uristring = process.env.MONGOLAB_URI || 'mongodb://heroku_v1d3r0cg:5743f5j1qm8dfcqgg7vanlmb5l@ds023530.mlab.com:23530/heroku_v1d3r0cg';

var db = mongoose.connection;

db.on( 'error', console.error );
db.once( 'open', function() {
	console.log( 'Connection established' );
	db.close();
	console.log( 'Disconnected' );
} );
mongoose.connect( uristring );
