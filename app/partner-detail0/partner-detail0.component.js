'use strict';

angular.
  module('partnerDetail0').
  component('partnerDetail0', {
    templateUrl: 'partner-detail0/partner-detail0.template.html',
   controller: ['Partner', '$scope', '$http', '$routeParams',
      function PartnerListController(Partner, $scope, $http, route, $location) {
		  console.log("test1");

		  var appn = route.app;
		this.appn1 = route.app;
		$scope.appns = route.app;

		$scope.applist = [{port:8080, bcolor1:'#1c87c9', bcolor2:'#1c87c9', bcolor3:'#50c0f4', bcolor4:'#007bff'},{port:8080, bcolor1:'#1c87c9', bcolor2:'#1c87c9', bcolor3:'#1c8cf9', bcolor4:'#007bff'},{port:8070,bcolor1:'#1cc987', bcolor2:'#1cc987', bcolor3:'#1cdc99', bcolor4:'#007b7b'}];
//50c0f4 -> 1c9cf9
//50f4c0 -> 1cccc9 -> 1cdcb9
$scope.style1={"background-color":$scope.applist[appn].bcolor1};
$scope.style2={"background-color":$scope.applist[appn].bcolor2};
$scope.style3={"background-color":$scope.applist[appn].bcolor3};
$scope.style4={"background-color":$scope.applist[appn].bcolor4};


		  var idp = route.id;
		  this.idp = idp;
		$scope.PA0 = [{}];

	if (this.idp != undefined) {
		console.log("partner:");
        	$scope.PA0 = Partner.query({id:idp, port:($scope.applist[appn].port), naslov:'tp7'});
		console.log($scope.PA0);
	}else{
		$scope.PA0[0].NOVTRR = "NOV TRR!";
		$scope.PA0[0].R = 1;
		$scope.PA0[0].G = 1;
		$scope.PA0[0].B = 1;
		$scope.PA0[0].SIFRA = "123";
	}


$scope.user = {}
var dataj4;
var dataj3;

this.clickEvent = function() {

	alert("clicked me!!");
	$http({		method: 'GET',
                    url: 'https://server4875.si:' + ($scope.applist[$scope.appns].port).toString() + '/tp9',
	params:{'leto1':'19', 'leto2':'19', 'mesec1':'01','mesec2':'01'},
                    data: {},
	//                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(function (response) {
			    console.log("data");
		});   

	var saveLatency = "12;"
	console.log('That thing was saved in... ' + saveLatency + 'ms.');


	this.msg='Button is Clicked.';
	return this.msg;
};


$scope.sendData3 = function() {  
//$scope.user.sifra="444";
$scope.PA0[0] = {
        SIFRA : "444",
	NAZIV: "naziv1",
	KONT_OS: "os1",
	NASLOV1: "naslov1",
	NASLOV2: "naslov2",
	DDAVCNA: "666777"
    }
}

$scope.sendData = function(user) {  


	var dataj1 = {
		"ID": $scope.PA0[0].ID,
		"SIFRA": $scope.PA0[0].SIFRA,
		"NAZIV": $scope.PA0[0].NAZIV,
		"KONT_OS": $scope.PA0[0].KONT_OS,
		"NASLOV1": $scope.PA0[0].NASLOV1,
		"NASLOV1ST": $scope.PA0[0].NASLOV1ST,
		"KRAJ1": $scope.PA0[0].KRAJ1,
		"KRAJ1ST": $scope.PA0[0].KRAJ1ST,
		"DRZAVA1": $scope.PA0[0].DRZAVA1,
		"NASLOV2": $scope.PA0[0].NASLOV2,
		"NASLOV2ST": $scope.PA0[0].NASLOV2ST,
		"KRAJ2": $scope.PA0[0].KRAJ2,
		"KRAJ2ST": $scope.PA0[0].KRAJ2ST,
		"DRZAVA2": $scope.PA0[0].DRZAVA2,
		"TELEFON1": $scope.PA0[0].TELEFON1,
		"TELEFON2": $scope.PA0[0].TELEFON2,
		"EMAIL": $scope.PA0[0].EMAIL,
		"RABAT": $scope.PA0[0].RABAT,
		"ZIRO": $scope.PA0[0].ZIRO,
		"VEZA1": $scope.PA0[0].VEZA1,
		"VEZA2": $scope.PA0[0].VEZA2,
		"OPOMBA1": $scope.PA0[0].OPOMBA1,
		"OPOMBA2": $scope.PA0[0].OPOMBA2,
		"OPOMBA3": $scope.PA0[0].OPOMBA3,
		"ZAS": $scope.PA0[0].ZAS,
		"DNIVAL": $scope.PA0[0].DNIVAL,
		"DDAVCNA": $scope.PA0[0].DDAVCNA,
		"DDVVST": $scope.PA0[0].DDVVST,
		"IID": $scope.PA0[0].IID,
		"PP": $scope.PA0[0].PP,
		"NOVTRR": $scope.PA0[0].NOVTRR,
		"R": $scope.PA0[0].R,
		"G": $scope.PA0[0].G,
		"B": $scope.PA0[0].B,
		"DOKUL": "21",
		"DATM": "12",
		"DATD": "05"
	};

	alert("click send!!");
	var saveLatency = "12";
	console.log('That thing was saved in... ' + saveLatency + 'ms.');


		  var idp = route.id;
		  this.idp = idp;


	if (this.idp != undefined) {
		$http({method: 'PUT',
		            url: 'https://server4875.si:' + ($scope.applist[$scope.appns].port).toString() + '/tp4',
		            data: {dataj1},
		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		        }).then(function (response) {
	    			console.log("data");
			}); 
	}
	else{
		$http({method: 'POST',
		            url: 'https://server4875.si:' + ($scope.applist[$scope.appns].port).toString() + '/tp4',
		            data: {dataj1},
		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		        }).then(function (response) {
	    			console.log("data");
			}); 

	} 
}; 


$scope.sendData2 = function(user) {  
	var dataj = {
   	   name2: "name2",
	   age: "age",
	   address: "address"
	};

	var dataj2 = {
	    PLACILO: "495.2834",
	    age: "2",
	    DOKU: "0045  19",
	    VEZ: null,
	    VEZS: "0045  19",
	   DATP: "20190121",
	    DATK: "20190220",
	    DATN: "20190121",
	    PART: "100214",
	    IME: "EUROMEDIA DISTRIBUCIJA d.o.o.",
	    ZAS: "False",
	    DGNAB: "0",
	    DGVPV: "405.97",
	    DGVPD: "89.31",
	    DGMPV: "495.28",
	    DGSTO: "405.97",
	  PR1: [
	      {
	   	PLACILO: "495.2834",
		age: "2",
    	        DOKU: "0045  19",
         	VEZ: null,
	        VEZS: "0045  19",
       	   	DATP: "20190121",
	        DATK: "20190220",
	        DATN: "20190121",
	        PART: "100214",
	        IME: "EUROMEDIA DISTRIBUCIJA d.o.o.",
	        ZAS: "False",
	        DGNAB: "0",
	        DGVPV: "405.97",
	        DGVPD: "89.31",
	        DGMPV: "495.28",
	        DGSTO: "405.97"
	   }]
	};

	var dataj1 = {
	    SIFRA: "000002",
	    NAZIV: "test2",
	    DDAVCNA: "666777",
	    DOKUL: "20",
	    DATM: "12",
	    DATD: "05",
	    PR1: [
		{
		"SIFRA": "000002",
		"NAZIV": "test2",
		"KONT_OS": "",
		"NASLOV1": user.name,
		"NASLOV2": "",
		"TELEFON1": "",
		"TELEFON2": "",
		"TELEFAX": "",
		"RABAT": "",
		"ZIRO": "",
		"VEZA1": "",
		"VEZA2": "",
		"OPOMBA1": "",
		"OPOMBA2": "",
		"OPOMBA3": "",
		"ZAS": "",
		"DNIVAL": "",
		"DDAVCNA": "666777",
		"DDVVST": "",
		"DOKUL": "20",
		"DATM": "12",
		"DATD": "05"
		}
	   ]
	};

	alert("click test2!!");

	var saveLatency = "12";
	console.log('That thing was saved in... ' + saveLatency + 'ms.');
	console.log("send2");
	console.log(user.naziv);
}; 

$scope.descText = '';

 $scope.setTextareaValue = function(user) {

	var dataj1 = {
		"SIFRA": user.sifra,
		"NAZIV": user.naziv,
		"KONT_OS": user.kont_os,
		"NASLOV1": user.naslov1,
		"NASLOV2": user.naslov2,
		"TELEFON1": user.telefon1,
		"TELEFON2": user.telefon2,
		"TELEFAX": user.telefax,
		"RABAT": user.rabat,
		"ZIRO": user.racun,
		"VEZA1": user.veza1,
		"VEZA2": user.veza2,
		"OPOMBA1": user.opomba1,
		"OPOMBA2": user.opomba2,
		"OPOMBA3": user.opomba3,
		"ZAS": user.zas,
		"DNIVAL": user.dnival,
		"DDAVCNA": user.ddavcna,
		"DDVVST": user.ddvvst,
		"DOKUL": "20",
		"DATM": "12",
		"DATD": "05"
	};


	dataj3 = "{" + '\n';
	dataj4 = "{";
	for(let ent in dataj1){
		 dataj3 += '"' + ent + '"'; 
		var entVal = encodeURIComponent(dataj1[ent]);
		if (entVal == "undefined"){
			dataj3 += ':' + '"' + '",' + "\n";
//			dataj4 += '"' + ent + '"' +  ':' + '"' + '",';
		}
		else{
			dataj3 += ':' + '"' + entVal +'",' + "\n";
//			dataj4 += '"' + ent + '"' +  ':' + '"' + entVal + '",';
		}
		}
	dataj3 =dataj3.substring(0, dataj3.length -2) + "}";
//	dataj4 = dataj4.substring(0, dataj4.length -1) + "}";

	$scope.descText = dataj3;
 };

 $scope.postTextareaValue = function(user) {
	alert("click send!!");
	var saveLatency = "12";
	dataj3 = $scope.descText;
	console.log(dataj3);
	var dataj1 = JSON.parse(dataj3);

	$http({method: 'POST',
                    url: 'https://server4875.si:' + ($scope.applist[$scope.appns].port).toString() + '/tp9',
                    data: {dataj1},
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(function (response) {
    			console.log("data");
		});  

 };

      }		//function
//function clickEvent(){this.msg='Button is Clicked'; return this.msg; }
    ]
  });




