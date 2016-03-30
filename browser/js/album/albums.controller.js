juke.controller('AlbumsCtrl', function(HttpFactory, $scope, $rootScope){
  $scope.show = true;
  $scope.$on('viewSwap', function(event, arg){
    $scope.show = (arg.name === "albumsView");
  });

  $scope.getAll = function(){
    HttpFactory.fetchAll()
    .then(function(albums){
      $scope.albums = albums;
    });
  };

  $scope.loadAlbum = function(index){
    $rootScope.$broadcast('newAlbum', $scope.albums[index]);
    $rootScope.$broadcast('viewSwap', {name: 'albumView'});
  };
  $scope.getAll();

});
