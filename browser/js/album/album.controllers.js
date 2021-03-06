//'use strict';

juke.controller('AlbumCtrl', function($scope, $http, $log, $rootScope, StatsFactory, PlayerFactory, HttpFactory) {

  $rootScope.$on('viewSwap', function(event, data){
    $scope.show = (data.name === 'albumView');
  });

  $rootScope.$on("newAlbum", function(event, album){
    loadAlbum(album);
  });
  // load our initial data
  function loadAlbum(album){
    HttpFactory.fetchById(album._id).then(function (album) {
    album.imageUrl = '/api/albums/' + album._id + '.image';
    album.songs.forEach(function (song, i) {
      song.audioUrl = '/api/songs/' + song._id + '.audio'; //must be populated before statsFactory is called!
      song.albumIndex = i;
    });
    $scope.album = album;
    return StatsFactory.totalTime(album);
    })
    .then(function(duration){
      $scope.album.totalTime = duration;
      //$scope.$evalAsync();
    })
    .catch($log.error); // $log service can be turned on and off; also, pre-bound
  }
  // main toggle
  $scope.toggle = function (song) {
    if (PlayerFactory.isPlaying() && song === PlayerFactory.getCurrentSong()) {
      pause();
    } else
      play(null, song);
  };

  $scope.getCurrentSong = function(){
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function(){
    return PlayerFactory.isPlaying();
  };

  // functionality
  function pause () {
    PlayerFactory.pause();
  }
  function play (event, song) {
    PlayerFactory.start(song, $scope.album.songs);
  }

  function next () { PlayerFactory.next(); }
  function prev () { PlayerFactory.previous(); }

});
