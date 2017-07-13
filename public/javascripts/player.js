var tag = document.createElement( 'script' );
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName( 'script' )[ 0 ];
firstScriptTag.parentNode.insertBefore( tag, firstScriptTag );

var player;
var videoToPlay = '';
var playlist = [];
var playIndex = -1;

function setVideoToPlay( data ) {
	videoToPlay = data;
	setVideo( videoToPlay );
	player.stopVideo();
}

function onYouTubeIframeAPIReady() {
	player = new YT.Player( 'player', {
		height : '390',
		width : '640',
		playerVars: { 'controls' : 0 },
		videoId : '',
		events : {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange,
		}
	} );
}

function getState(){
	return player.getPlayerState();
}

function onPlayerReady( event ) {
	setVideo( videoToPlay );
	player.stopVideo();
}

function setVideo( id ){
	// player.loadVideoById( 'R_M-QkdyQt0' );
	// if(player.getPlayerState() != 1){
		player.loadVideoById( id );
	// }
}

var done = false;
// var pause = true;
function onPlayerStateChange( event ) {
	// if ( event.data == YT.PlayerState.PLAYING && ! done ) {
	// 	setTimeout(stopVideo, 600000);
	// 	done = true;
	// }
	if( event.data == YT.PlayerState.ENDED ){
		socket.emit( 'next' );
	}
}

function stopVideo() {
	player.stopVideo();
}

function pauseVideo() {
	if(player.getPlayerState() != 5){
		player.pauseVideo();
	}
	// pause = true;
}

function playVideo() {
	// if ( pause == true) {
		player.playVideo();
		// pause = false;
	// }
}

function muteVideo() {
	player.mute();
}

function unmuteVideo() {
	player.unMute();
}

function fastForwardVideo() {
	var currentTime = player.getCurrentTime();
	player.seekTo( currentTime + 2.0 );
}

function rewindVideo() {
	var currentTime = player.getCurrentTime();
  player.seekTo( currentTime - 2.0 );
}

window.addEventListener( 'resize', function() {
	if ( window.innerWidth >= 992 ) {
		if ( player === null ) {
			player = new YT.Player( 'player', {
				height : '390',
				width : '640',
				playerVars: { 'controls' : 0 },
				videoId : '',
				events : {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange,
				}
			} );
		}
 	} else {
 		player.destroy(); // Destroy the video player
 		player = null;
 	}
} );
