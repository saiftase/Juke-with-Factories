juke.controller('SidebarCtrl', function(ArtistFactory, $scope, $rootScope){
  $scope.activeView = 'albumsView';
  $rootScope.$on('viewSwap', function(event, data){
    $scope.activeView = data.name;
  });

  $scope.viewAlbums = function(){
    $rootScope.$broadcast('viewSwap', {name: 'albumsView'});
  };

  $scope.viewAllArtists = function(){
    $rootScope.$broadcast('viewSwap', {name: 'artistsView'});
  };

});
