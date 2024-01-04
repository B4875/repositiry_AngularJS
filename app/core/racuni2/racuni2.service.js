'use strict';


angular.
  module('core.racuni2').
  factory('Racuni2', ['$resource', 'AuthInterceptor',
    function($resource) {
        return $resource('https://server4875.si/:space9/:naslov', {space9:'@space9',naslov:'@naslov'}, {

        query: {

          method: 'GET',

	params:{'leto1':'@leto1', 'leto2':'@leto2', 'mesec1':'@mesec1','mesec2':'@mesec2', 'neplac':'@neplac', 'usr':'@usr'},

          isArray: true

        }
      });

      function naslov($resource) {
      	console.log("$resource"); 
      	console.log($resource); 
      	return $resource.params.leto1
      };

    }
  ]);
