'use strict';



angular.
  module('core.racun').
  factory('Racun', ['$resource', 'AuthInterceptor',
    function($resource, AuthInterceptor) {
        return $resource('https://server4875.si/:space9/:naslov', {space9:'@space9',naslov:'@naslov'}, {
        query: {

          method: 'GET',

	params:{'leto':'@leto','doku':'@doku', 'ppp':'@ppp', 'usr':'@usr', 'usr':'@usr'},

          isArray: true
        }
      });
    }
  ]);
