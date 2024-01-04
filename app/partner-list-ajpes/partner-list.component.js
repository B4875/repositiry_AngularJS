'use strict';

angular.
  module('partnerListAjpes').
  component('partnerListAjpes', {
    templateUrl: 'partner-list-ajpes/partner-list.template.html',
   controller: ['Partner', 'Ajpes', '$q', '$scope','$http', '$routeParams',  
      function PartnerListAjpesController(Partner, Ajpes, $q, $scope, $http, route,$location) {

		  var leto1 = route.leto1;
		  var leto2 = route.leto2;
		  var mesec1 = route.mesec1;
		  var mesec2 = route.mesec2;
		  var testQ1 = route.Q1;
		  var testQ2 = route.Q2;
		  var testQ3 = route.Q3;
		  
		  //var sys_ZacetekObjave_od = route.zacetek;
		  var naziv = route.naziv;
		  var rds = route.DS;
		  var rms = route.MS;

		var dateNow = new Date();
		var mesec = dateNow.getMonth() -2;
		$scope.dateNow1 = dateNow.getDate() + "." + mesec + "." + dateNow.getFullYear();
		$scope.dateNow2 = dateNow.getDate() + "." + dateNow.getMonth() + "." + dateNow.getFullYear();
		$scope.nazivP = naziv;
		$scope.DS = rds;
		$scope.MS = rms;

		  this.l1 = leto1;
		  this.l2 = leto2;
		  this.m1 = mesec1;
		  this.m2 = mesec2;		  

		  console.log("test4");
		  console.log($scope);
		  //$scope.leto3 = route.leto1;
		  
		  this.user1 = location;
		  this.user2 = "recho";

function resolve0(res){
var parser = new DOMParser();
				//var doc = parser.parseFromString('<div>some html</div>', 'text/html');
				var doc = parser.parseFromString(res.data, 'text/html');
				var liElements = doc.getElementsByTagName("tbody");
				var itemTBODY = liElements.item(0);
				var liTBODY = itemTBODY.children;
//				var inH = liEl.innerHTML;
				var test = liTBODY[2];
				for(let itemH=0; itemH<liTBODY.length; itemH++){
					var itemTD = liTBODY[itemH];
					var str1 = (itemTD.children)[3].innerHTML;
					var str1 = (itemTD.children)[2].innerText + ':' + (itemTD.children)[3].innerText + ':' + (itemTD.children)[4].innerText + ':' + (itemTD.children)[5].innerText;
					console.log(str1);
				}

var str1 = {'tt':'tt'};
	return str1;
}

function doQuery22() {
   var d = $q.defer();
//	var result = {'tt':'tt'};
//	d.resolve(result);
   var result = Ajpes.query({Dolznik:naziv, MS:rms, DS:rds}, function() {
//        d.resolve(angular.toJson(result));
        d.resolve(result);
   });
   return d.promise;
}

function doQuery11() {
   var d = $q.defer(leto1, leto2, mesec1, mesec2);


//   var result = Ajpes.query({}, function() {
var result = Partner.query({leto1:leto1, leto2:leto2, mesec1:mesec1, mesec2:mesec2}, function() {
        d.resolve(result);
   });
   return d.promise;
}

function doQuery33() {return ['a','b','c'];}

function doQuery1() {
if (testQ1 == "1"){
	   var d = $q.defer();
	//	var result = {'tt':'tt'};
	//	d.resolve(result);
	   var result = Ajpes.query({Dolznik:naziv}, function() {
	//        d.resolve(angular.toJson(result));
		d.resolve(result);
	   });
	   return d.promise;
	   }else return [];
}

function doQuery2() {
if (testQ2 == "1"){
	   var d = $q.defer();
	//	var result = {'tt':'tt'};
	//	d.resolve(result);
	   var result = Ajpes.query({DS:rds}, function() {
	//        d.resolve(angular.toJson(result));
		d.resolve(result);
	   });
	   return d.promise;
	   }else return [];
}

function doQuery3() {
if (testQ3 == "1"){
	   var d = $q.defer();
	//	var result = {'tt':'tt'};
	//	d.resolve(result);
	   var result = Ajpes.query({MS:rms}, function() {
	//        d.resolve(angular.toJson(result));
		d.resolve(result);
	   });
	   return d.promise;
	   }else return [];
}


$scope.data = [];

$q.all([
//   doQuery1(leto1, leto2, mesec1, mesec2),
 doQuery1(),
 doQuery2(),
   doQuery3(),
//   doQuery('shipping')
]).then(function(responses) {
//   var billingAccounts = data[0];
//   var shippingAccounts = data[1];
//data0 = data[0];
//data1 = data[1];
   //TODO: something...
//var resp = responses[1];
//$scope.data = resp.map((resp) => resp.data);

//				var parser = new DOMParser();
//				//var doc = parser.parseFromString('<div>some html</div>', 'text/html');
//				var doc = parser.parseFromString(responses[0].data, 'text/html');
//				var liElements = doc.getElementsByTagName("tbody");
//				var itemTBODY = liElements.item(0);
//				var liTBODY = itemTBODY.children;
//				var inH = liEl.innerHTML;
//				var test = liTBODY[2];
//				for(let itemH=0; itemH<liTBODY.length; itemH++){
//					var itemTD = liTBODY[itemH];
//					var str1 = (itemTD.children)[3].innerHTML;
//					var str1 = (itemTD.children)[2].innerText + ':' + (itemTD.children)[3].innerText + ':' + (itemTD.children)[4].innerText + ':' + (itemTD.children)[5].innerText;
//					console.log(str1);
//				}


var resp3 = [];
for (let resp1 in responses[1]){
//console.log((responses[0][resp0]).DDAVCNA);
//console.log((responses[0][resp0]));

//	for (let resp1 in responses[1]){
//		if(responses[0][resp0].DDAVCNA == responses[1][resp1]){
////		if((responses[0][resp0]).DDAVCNA == "77475674"){
			resp3.push(responses[1][resp1]);
//			break;
//		}
//	}	//for

//resp3.push(responses[0][resp0]);
}	//for

for (let resp0 in responses[0]){
	resp3.push(responses[0][resp0]);
}
for (let resp2 in responses[2]){
	resp3.push(responses[2][resp2]);
}
$scope.data = resp3;
//$scope.data = responses[1];
//this.partnerji = responses[0];
//this.orderProp = 'age';
console.log("r:");
console.log($scope.data);

});		//function responses




/////////////////////////////////////////////////////////////////////////////////////////
      }	//function
    ]	//controller
  });
