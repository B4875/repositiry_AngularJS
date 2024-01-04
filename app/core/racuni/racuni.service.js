'use strict';


angular.
  module('core.racuni').
  factory('Racuni', ['$resource', 'AuthInterceptor',
    function($resource) {
var rs =        $resource('https://server4875.si/:space9/:naslov', {space9:'@space9',naslov:'@naslov'}, {

        query: {

	headers:{'Authorization2':naslov},
          method: 'GET',

		params:{'leto1':'@leto1', 'leto2':'@leto2', 'mesec1':'@mesec1','mesec2':'@mesec2', 'neplac':'@neplac', 'usr':'@usr'},
          isArray: true
        }
      });

      function naslov($resource) {
      	return $resource.params.leto1
      };
      return rs;
    }
  ]);
