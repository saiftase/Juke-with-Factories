juke.controller('SidebarCtrl', function(ArtistFactory, $scope, $rootScope){
  var activeView = 'albumsView';
  $rootScope.$on('viewSwap', function(event, data){
    activeView = data.name;
  });

  $scope.viewAlbums = function(){
    if (activeView !=='albumsView')
      activeView = 'albumView';
    else {
      activeView = 'albumsView';
    }
    $rootScope.$broadcast('viewSwap', {name: activeView});
  };

  $scope.viewAllArtists = function(){
    ArtistFactory.fetchAll()
    .then(function(artists){
      $scope.artists = artists;
    });
  }

});
