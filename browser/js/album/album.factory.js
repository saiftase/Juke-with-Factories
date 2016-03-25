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

juke.factory('HttpFactory', function($http){
  return {
    fetchAll: function(callback, callbackFail){
      return $http.get('/api/albums/')
      .then(function(res){

        callback(res)
      }, function(err){
        callbackFail(err);
      });
    },
    fetchById: function(id, cb, cbf){
      return $http.get('/api/albums/' + id)
      .then(function(res){
        cb(res);
      }, function(err){
        cbf(err);
      });
    }
  };
});
