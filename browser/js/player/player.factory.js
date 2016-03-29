juke.factory('PlayerFactory', function($rootScope){
  // non-UI logic in here
  var audio = document.createElement('audio');
  var fac = {};
  var currentSong = null;
  var playing = false;
  var songs = null;
  var currentIndex;
  var progress =0;

  audio.addEventListener('timeupdate', function () {
    progress = audio.currentTime / audio.duration * 100;
    $rootScope.$evalAsync();
  });
  audio.addEventListener('ended', function () {
    fac.next();
  });

  fac.start = function(song, songlist){
    if (songlist){
      songs = songlist;
      currentIndex = songlist.indexOf(song);
    }
    fac.pause();
    playing = true;
    if (song === currentSong) return audio.play();
    currentSong = song;
    audio.src = song.audioUrl;
    audio.load();
    progress = 0;
    audio.play();

  };

  fac.pause = function(){
    audio.pause();
    playing = false;

  };

  fac.resume = function(){
    audio.play();
    playing = true;
  };

  fac.isPlaying = function(){
    return playing;
  };

  fac.getCurrentSong = function(){
    return currentSong;
  };

  fac.next = function(){
    if (songs){
      currentIndex = currentIndex + 1 > songs.length -1 ? 0 : currentIndex+1;
      fac.start(songs[currentIndex]);
    }
  };

  fac.previous = function(){
    if (songs){
      currentIndex = currentIndex -1 < 0 ? songs.length -1 : currentIndex - 1;
      fac.start(songs[currentIndex]);
    }
  };

  fac.getProgress = function(){
    return progress;
  };



  return fac;
});
