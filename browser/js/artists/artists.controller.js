juke.controller('ArtistsCtrl', function(ArtistFactory, $scope, $rootScope){
  $scope.show = false;
  console.log('ArtistsCtrl', $scope.show);

  $scope.hello = function(){
    console.log("Hi.");
  }
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