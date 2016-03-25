juke.controller('AlbumsController', function(HttpFactory, $scope){

  $scope.getAll = function(){
    HttpFactory.fetchAll()
    .then(function(albums){
      console.log(albums);
      return albums;
    });
  };

});
