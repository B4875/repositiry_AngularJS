'use strict';

angular.
  module('core.mdata').
  factory('Mdata', ['$resource',
    function($resource) {
        return $resource('https://server4875.si/:space9/:naslov', {space9:'@space9',naslov:'@naslov'}, {
        query: {
//	headers: {'Access-Control-Allow-Origin': '*'},
          method: 'GET',
		params:{'usr':'@usr'},
          isArray: true
        }
      });
    }
  ]);
