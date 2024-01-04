'use strict';

angular.
  module('core.partnerji').
	factory('Partnerji', ['$resource',
		function($resource) {
        return $resource('https://server4875.si/:pspace9/:pnaslov', {pspace9:'@pspace9',pnaslov:'@pnaslov'}, {
        query: {
//	headers: {'Access-Control-Allow-Origin': '*'},
          method: 'GET',

	params:{'leto1':'@leto1', 'leto2':'@leto2', 'mesec1':'@mesec1','mesec2':'@mesec2', 'usr':'@usr'},
          isArray: true
        }
      });
    }
  ]);
