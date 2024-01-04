'use strict';

angular.
  module('core.racunipartnerjim').
  factory('RacuniPartnerjiM', ['$resource',
    function($resource) {
        return $resource('https://server4875.si/:space9/:naslov', {space9:'@space9',naslov:'@naslov'}, {
        query: {
          method: 'GET',
	 params:{'leto':'@leto', 'doku':'@doku', 'dokul':'@dokul', 'usr':'@usr'},
          isArray: false
        }	//query
      });	//return
    }	  //function
  ]);	//factory


