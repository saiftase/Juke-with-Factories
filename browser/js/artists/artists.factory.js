juke.factory('ArtistFactory', function($http){

  return {
    fetchAll: function (){
      return $http.get('/api/artists/')
      .then(function(res){
        return res.data;
      });
    }
  }
});