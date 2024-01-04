'use strict';

angular.
  module('core.racunipartnerji').
  factory('RacuniPartnerji', ['$resource',
    function($resource) {
        return $resource('https://server4875.si/:space9/:naslov', {space9:'@space9',naslov:'@naslov'}, {
        query: {
          method: 'GET',

	 params:{'leto1':'@leto1', 'leto2':'@leto2', 'mesec1':'@mesec1','mesec2':'@mesec2', 'usr':'@usr'},
          isArray: false
        }	//query
      });	//return
    }	  //function
  ]);	//factory



