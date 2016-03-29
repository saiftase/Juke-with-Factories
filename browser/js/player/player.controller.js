'use strict';

juke.controller('PlayerCtrl', function ($scope, PlayerFactory) {

  // // initialize audio player (note this kind of DOM stuff is odd for Angular)
  // var audio = document.createElement('audio');
  // audio.addEventListener('ended', function () {
  //   $scope.next();
  //   // $scope.$apply(); // triggers $rootScope.$digest, which hits other scopes
  //   $scope.$evalAsync(); // likely best, schedules digest if none happening
  // });
  // audio.addEventListener('timeupdate', function () {
  //   $scope.progress = 100 * audio.currentTime / audio.duration;
  //   // $scope.$digest(); // re-computes current template only (this scope)
  //   $scope.$evalAsync(); // likely best, schedules digest if none happening
  // });


  //For Player
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

    $scope.progress = function(){
      return PlayerFactory.getProgress();
    }

    // functionality
    function pause () {
      PlayerFactory.pause();
    }
    function play (event, song) {
      PlayerFactory.start(song);
    }

    $scope.next = function() { PlayerFactory.next(); }
    $scope.prev  = function() { PlayerFactory.previous(); }


});
