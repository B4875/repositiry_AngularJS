'use strict';

angular.
  module('core.klavzula').
  factory('Klavzula', ['$resource', 
    function($resource) {
        return $resource('https://server4875.si/:space9/:naslov', {space9:'@space9',naslov:'@naslov'}, {
        query: {
//	headers: {'Access-Control-Allow-Origin': '*'},
        method: 'GET',

	params:{'id':'@id', 'usr':'@usr'},
          isArray: true
        }
      });
    }
  ]);
