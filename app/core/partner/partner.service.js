'use strict';


angular.
  module('core.partner').
  factory('Partner', ['$resource', 
    function($resource) {
        return $resource('https://server4875.si/:pspace9/:pnaslov', {pspace9:'@pspace9',pnaslov:'@pnaslov'}, {
        query: {
//	headers: {'Access-Control-Allow-Origin': '*'},
          method: 'GET',

		params:{'id':'@id', 'usr':'@usr'},
          isArray: true
        }
      });
    }
  ]);
