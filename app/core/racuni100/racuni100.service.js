'use strict';

angular.
  module('core.racuni100').
  factory('Racuni100', ['$resource',
    function($resource) {
        return $resource('https://server4875.si/:space9/:naslov', {space9:'@space9',naslov:'@naslov'}, {
        query: {
          method: 'GET',

	  params:{'leto':'@leto', 'usr':'@usr'},
          isArray: false
        }	//query
      });	//return
    }	  //function
  ]);	//factory




