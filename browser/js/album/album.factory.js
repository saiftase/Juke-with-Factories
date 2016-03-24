'use strict';

juke.factory('StatsFactory', function ($q) {
  var statsObj = {}
  statsObj.totalTime = function (album) {
    var audio = document.createElement('audio');
    return $q(function (resolve, reject) {
      var sum = 0;
      var n = 0;
      function resolveOrRecur () {
        if (n >= album.songs.length) resolve(sum);
        else{
        	console.log("songs", album.songs);
        	console.log("songs n++", album.songs[n++]);
        	console.log("everything", album.songs[n++].audioUrl);
        	audio.src = album.songs[n++].audioUrl;
        }
      }
      audio.addEventListener('loadedmetadata', function () {
        sum += audio.duration;
        resolveOrRecur();
      });
      resolveOrRecur();
    });
  };
  return statsObj;
});