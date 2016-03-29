juke.controller('AlbumsCtrl', function(HttpFactory, $scope){

  $scope.getAll = function(){
    HttpFactory.fetchAll()
    .then(function(albums){
      $scope.albums = albums;
    });
  };
  $scope.getAll();

});
