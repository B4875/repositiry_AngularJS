'use strict';



angular.
  module('core.tekst').
  factory('Tekst', ['$resource', 
    function($resource) {
        return $resource('https://server4875.si/:space9/:naslov', {space9:'@space9',naslov:'@naslov'}, {
        query: {


          method: 'GET',

//// 'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
////'Access-Control-Allow-Headers': '*', 'Access-Control-Max-Age': '86400'
//},
//		params:{'leto1':'@leto1', 'leto2':'@leto2', 'mesec1':'@mesec1','mesec2':'@mesec2'},
		params:{'usr':'@usr', 'id':'@id'},
//	header: {'Access-Control-Allow-Origin': '*'},
          isArray: true
        }
      });
    }
  ]);
