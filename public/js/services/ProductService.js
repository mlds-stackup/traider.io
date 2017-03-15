angular.module('ProductService', []).factory('Products', ['$http',
    function($http) {
        return {
            getAll: function(callback) {
                $http({
                    method: 'get',
                    url: '/api/products'
                }).success(function(data) {
                    //console.log(data);
                    callback(data);
                }).error(function() {
                    alert("error");
                });
            },
            getOne: function(id, callback) {
                $http({
                    method: 'get',
                    url: '/api/products/' + id
                }).success(function(data) {
                    //console.log(data);
                    callback(data);
                }).error(function() {
                    alert("error");
                });
            },
           /*,create: function(productData) {
                return $http.post('/api/products', productData);
            },
            delete: function(id) {
                return $http.delete('/api/products/' + id);
            }*/
           getTags: function(id, callback) {
               $http({
                   method: 'get',
                   url: '/api/products/tags/' +id
               }).success(function(data) {
                   callback(data);
               }).error(function() {
                   alert('error')
               })
           },
           getRecommendations: function(id, callback) {
               $http({
                   method: 'get',
                   url: '/api/products/recommendations/' +id
               }).success(function(data) {
                   callback(data);
               }).error(function() {
                   alert('error')
               })
           }
        };
    }
]);