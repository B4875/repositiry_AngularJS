'use strict';

angular.
  module('tiskApp').
  config(['$routeProvider', 
    function config($routeProvider) {
      $routeProvider.
        when('/tisk', {
          template: '<racuni-list></racuni-list>'
        }).
       when('/tisk2', {
          template: '<racuni-list2></racuni-list2>'
        }).
       when('/racuni12', {
          template: '<racuni12-list></racuni12-list>'
        }).
       when('/racuni12gr', {
          template: '<racuni12-graph></racuni12-graph>'
        }).

       when('/racun', {
          template: '<racun-detail2></racun-detail2>'
        }).
       when('/racun2', {
          template: '<racun-detail2></racun-detail2>'
        }).
       when('/racun3', {
          template: '<racun-detail3></racun-detail3>'
        }).

       when('/racun20', {
          template: '<racun-detail2></racun-detail2>'
        }).

       when('/partnerji', {
          template: '<partner-list></partner-list>'
        }).
       when('/partnerji-ajpes', {
          template: '<partner-list-ajpes></partner-list-ajpes>'
        }).


       when('/partner', {
          template: '<partner-detail></partner-detail>'
        }).
       when('/partner0', {
          template: '<partner-detail2></partner-detail2>'
        }).
       when('/klavzula', {
          template: '<klavzule-detail></klavzule-detail>'
        }).
       when('/klavzule', {
          template: '<klavzule-list></klavzule-list>'
        }).
       when('/mdata', {
          template: '<mdata-detail></mdata-detail>'
        }).
       when('/tekst', {
          template: '<tekst-detail></tekst-detail>'
        }).
       when('/tekst5', {
          template: '<tekst-list></tekst-list>'
        }).
       

//        otherwise($location.path('/tisk').search({'leto1':'08','leto2':'09','mesec1':'01','mesec2':'12'}});
//        otherwise($location.url('/tisk'));
        otherwise('/tisk');
    }
  ]);
