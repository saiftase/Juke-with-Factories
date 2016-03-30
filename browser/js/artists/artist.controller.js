juke.controller('ArtistCtrl', function($scope, ArtistFactory, $rootScope, $q){
  $rootScope.$on('viewSwap', function(evt, data){
    $scope.show = (data.name === 'artistView');
  });

  $rootScope.$on("loadArtist", function(evt, id){
    loadArtist(id);
  });

  function loadArtist(id){
    $q.all([ArtistFactory.fetchOne(id), ArtistFactory.fetchSongs(id), ArtistFactory.fetchAlbums(id)])
    .then(function(data){
      $scope.artist = data[0];
      $scope.songs = data[1];
      $scope.albums = data[2];
    });
  }
});
