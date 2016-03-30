juke.controller('AlbumsCtrl', function(HttpFactory, $scope, $rootScope){
  console.log('albumsCtrl', $rootScope);
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

juke.controller('SidebarCtrl', function($scope, $rootScope){
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
});
