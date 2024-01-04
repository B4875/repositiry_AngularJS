'use strict';

angular.
  module('core.crdata').
  factory('CRdata', ['$resource',
    function($resource) {
	var rs =        $resource('https://server4875.si/login_cr', {username:'@username'}, {

        query: {
//	headers: {'Access-Control-Allow-Origin': '*'},
	
        method: 'GET',

          isArray: false
        }
      });
      return rs;
    }
  ]);
