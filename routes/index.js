var express = require('express');
var path = require('path');
var router = express.Router();

var room = [];


/* GET home page. */
router.get('/', function(req, res, next) {
  var id = Math.floor( Math.random() * 100000000 );
  res.redirect( '/' + id );
  // res.render('index', { title: 'Express' });

});

router.get( '/:id([0-9]+)', function( req, res ) {
  var temp = router.stack[1].path;
  var id = temp.split('/')[1];
  if( !room[id]){ //create room
      room[id] = 1;
      res.sendFile( path.resolve( 'views/index.html' ) );
  }else{
    if(room[id] < 2){ //less than 2
      room[id] = 2;
      res.sendFile( path.resolve( 'views/index.html' ) );
    }else{
      id = Math.floor( Math.random() * 100000000 );
      res.redirect( '/' + id );
    }
  }
} );



module.exports = router;
