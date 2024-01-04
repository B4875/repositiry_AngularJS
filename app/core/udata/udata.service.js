'use strict';

angular.
  module('core.udata').
  factory('Udata', ['$resource',
    function($resource) {
        return $resource('https://server4875.si/protected', {}, {

        query: {
          method: 'GET',

//	header: {'Access-Control-Allow-Origin': '*'},
          isArray: false
        }
      });

    }
  ]);
