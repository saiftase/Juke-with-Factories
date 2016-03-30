juke.controller('ArtistsCtrl', function(ArtistFactory, $scope, $rootScope){
  $rootScope.$on('viewSwap', function (evt, data){
    $scope.show = (data.name === 'artistsView');
  });

  ArtistFactory.fetchAll().then(function(artists){
    $scope.artists = artists;
  });

  $scope.viewOneArtist = function(id){
    $rootScope.$broadcast('viewSwap', {name: 'artistView'});
    $rootScope.$broadcast('loadArtist', id);
  };


  // $scope.$on('viewSwap', function(event, arg){
  //   $scope.show = (arg.name === "albumsView");
  // });

  // $scope.getAll = function(){
  //   HttpFactory.fetchAll()
  //   .then(function(albums){
  //     $scope.albums = albums;
  //   });
  // };

  // $scope.loadAlbum = function(index){
  //   $rootScope.$broadcast('newAlbum', $scope.albums[index]);
  //   $rootScope.$broadcast('viewSwap', {name: 'albumView'});
  // };
  // $scope.getAll();

});
