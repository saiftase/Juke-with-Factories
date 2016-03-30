juke.factory('ArtistFactory', function($http){

  return {
    fetchAll: function (){
      return $http.get('/api/artists/')
      .then(function(res){
        return res.data;
      });
    },
    fetchOne: function(id){
        return $http.get('/api/artists/' + id).then(function(res){
          return res.data;
        });
    },
    fetchSongs: function(id){
      return $http.get('/api/artists/' + id + '/songs').then(function(res){
        return res.data;
      });
    },
    fetchAlbums: function(id){
      return $http.get('/api/artists/' + id + '/albums').then(function(res){
        return res.data;
      });
    }
  };
});
