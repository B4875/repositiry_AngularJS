'use strict';

angular.
  module('core.racunipartnerjil').
  factory('RacuniPartnerjiL', ['$resource',
    function($resource) {
        return $resource('https://server4875.si/:space9/:naslov', {space9:'@space9',naslov:'@naslov'}, {
        query: {
          method: 'GET',
	 params:{'dokul':'@dokul', 'datm':'@datm', 'leto':'@leto', 'usr':'@usr'},
          isArray: false
        }	//query
      });	//return
    }	  //function
  ]);	//factory



