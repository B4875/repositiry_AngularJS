'use strict';


angular.module('racunDetail', []).config(['$sceDelegateProvider', function($sceDelegateProvider) {  
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
	'https://meteo.arso.gov.si/**'
  ]);
}]);

angular.
  module('racunDetail').
  component('racunDetail', {
    templateUrl: 'racun-detail/racun-detail.template.html',
   controller: ['Racun', '$routeParams', '$scope', '$http',
      function RacunDetailController(Racun, $routeParams, $scope, $http) {

$scope.doku = {};
var dataj4;
var dataj3;
$scope.httpp={};
$scope.httpp.httpa="https://127.0.0.1:8080/tp7?leto1=20&leto2=20&mesec1=01&mesec2=01";
$scope.response1 = {};

this.clickEventTp7 = function() {

	var dataGet;
		$http({		method: 'GET',
                    url: 'https://127.0.0.1:8080/tp8',
	params:{'leto1':'19', 'leto2':'19', 'mesec1':'01','mesec2':'01'},
                    data: {},
                }).then(function (response) {
			    console.log("data");
//				$scope.descText = "#";
				var resp1 = angular.toJson(response); 
				$scope.descText = resp1;	//JSON.stringify(resp1,null,2);
				$scope.response1 = resp1;
		});   

	var saveLatency = "12;"
	console.log('That thing was saved in... ' + saveLatency + 'ms.');


	this.msg='Button is Clicked.';
	return this.msg;
};

this.clickEventARSO2 = function() {
	var url1 = 'https://meteo.arso.gov.si/uploads/probase/www/observ/surface/text/sl/recent/observationAms_MARIBOR_SLIVNICA_history.xml'

	console.log("1");
	this.http.get(url1,{ responseType: 'text' });  
	console.log("2");
}


function appendTransform(defaults, transform) {
console.log("transform");
  // We can't guarantee that the default transformation is an array
  defaults = angular.isArray(defaults) ? defaults : [defaults];

  // Append the new transformation to the defaults
  return defaults.concat(transform);
}

function doTransform(value) {
	return {"v1":"v2"};
}

this.clickEventARSO = function() {

	var dataGet;
		$http({		method: 'GET',
		url:'http://localhost:3030/space/',
		headers:  {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
		'Access-Control-Allow-Credentials': 'true'
            },
                    data: {},
                }).then(function (response) {
			    console.log("data");
		});   

	var saveLatency = "12;"
	console.log('That thing was saved in... ' + saveLatency + 'ms.');


	this.msg='Button is Clicked.';
	return this.msg;
};

$scope.sendData = function() {  

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
    PLACILO: "495.2834",
    age: "2",
    DOKU: "0045  19",
    VEZ: null,
    VEZS: "0045  19",
    DATP: "20190121",
    DATK: "20190220",
    DATN: "20190121",
    PART: "100214",
    IME: "EUROMEDIA DISTRIBUCIJA d.o.o. NOV ZAPIS",
    ZAS: "False",
    DGNAB: "0",
    DGVPV: "405.97",
    DGVPD: "89.31",
    DGMPV: "495.28",
    DGSTO: "405.97",
    PR1: [
      {
        "DOKU": "0045  19",
        "ZAPO": "001",
        "OZNAKA": "",
        "TEKST": "Letak 160x250mm -Pomaranca",
        "RABAT": "0",
        "NCENA": "0.0148",
        "MPC": "0.0181",
        "KOLICINA": "10000",
        "ZNESEK": "181",
        "DATUM": "20190121",
        "PD": "22",
        "PDI": "22",
        "EM": "kom"
      },
      {
        "DOKU": "0045  19",
        "ZAPO": "002",
        "OZNAKA": "Ã·",
        "TEKST": "PoÅ¡tnina za 1076kom",
        "RABAT": "0",
        "NCENA": "5.97",
        "MPC": "7.2834",
        "KOLICINA": "1",
        "ZNESEK": "7.2834",
        "DATUM": "20190121",
        "PD": "22",
        "PDI": "22",
        "EM": "kom"
      },
      {
        "DOKU": "0045  19",
        "ZAPO": "003",
        "OZNAKA": "Ã·",
        "TEKST": "Dopis A4f 4/0-9og brl.-LOPA",
        "RABAT": "0",
        "NCENA": "0.0126",
        "MPC": "0.0154",
        "KOLICINA": "20000",
        "ZNESEK": "308",
        "DATUM": "20190121",
        "PD": "22",
        "PDI": "22",
        "EM": "kom"
      }
]
};

		alert("click send!!");
var saveLatency = "12";
	console.log('That thing was saved in... ' + saveLatency + 'ms.');


//var payload = $.param({ jobId: 2 });
$http({		method: 'POST',
                    url: 'https://127.0.0.1:8080/tp6',
                    data: {dataj1},
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(function (response) {
    console.log("data");
});  
}; 

$scope.setTextareaValue = function(doku) {
var dataj1 = {
    "PLACILO" : "495.2834",
    "age" : "2",
    "DOKU" : "0045  19",
    "VEZ" : null,
    "VEZS" : "0045  19",
    "DATP" : "20190121",
    "DATK" : "20190220",
    "DATN" : "20190121",
    "PART" : "100214",
    "IME" : "EUROMEDIA DISTRIBUCIJA d.o.o. NOV ZAPIS",
    "ZAS" : "False",
    "DGNAB" : "0",
    "DGVPV" : "405.97",
    "DGVPD" : "89.31",
    "DGMPV" : "495.28",
    "DGSTO" : "405.97",
    "PR1" : [
      {
        "DOKU": "0045  19",
        "ZAPO": "001",
        "OZNAKA": "",
        "TEKST": "Letak 160x250mm -Pomaranca",
        "RABAT": "0",
        "NCENA": "0.0148",
        "MPC": "0.0181",
        "KOLICINA": "10000",
        "ZNESEK": "181",
        "DATUM": "20190121",
        "PD": "22",
        "PDI": "22",
        "EM": "kom"
      },
      {
        "DOKU": "0045  19",
        "ZAPO": "002",
        "OZNAKA": "Ã·",
        "TEKST": "PoÅ¡tnina za 1076kom",
        "RABAT": "0",
        "NCENA": "5.97",
        "MPC": "7.2834",
        "KOLICINA": "1",
        "ZNESEK": "7.2834",
        "DATUM": "20190121",
        "PD": "22",
        "PDI": "22",
        "EM": "kom"
      },
      {
        "DOKU": "0045  19",
        "ZAPO": "003",
        "OZNAKA": "Ã·",
        "TEKST": "Dopis A4f 4/0-9og brl.-LOPA",
        "RABAT": "0",
        "NCENA": "0.0126",
        "MPC": "0.0154",
        "KOLICINA": "20000",
        "ZNESEK": "308",
        "DATUM": "20190121",
        "PD": "22",
        "PDI": "22",
        "EM": "kom"
      }
]
};

	dataj3 = "{" + '\n';
	dataj4 = "{";
	for(let ent in dataj1){
		 dataj3 += '"' + ent + '"'; 
		var entVal = encodeURIComponent(dataj1[ent]);
		if (ent != "PR1"){
			if (entVal == "undefined"){
				dataj3 += ':' + '"' + '",' + "\n";
	//			dataj4 += '"' + ent + '"' +  ':' + '"' + '",';
			}
			else{
				dataj3 += ':' + '"' + entVal +'",' + "\n";
	//			dataj4 += '"' + ent + '"' +  ':' + '"' + entVal + '",';
			}
		}
		else
			dataj3 += ': [' + '\n'; 
	}

	var datajPR1 = dataj1["PR1"];
	for(let i2 in datajPR1){
		dataj3 += '   {' + '\n';
		dataj11 = datajPR1[i2];
		for(let ent2 in dataj11){
			dataj3 += '     "' + ent2 + '"'; 
			var entVal2 = encodeURIComponent(dataj11[ent2]);
			if (entVal2 == "undefined")
				dataj3 += ':' + '"' + '",' + "\n";
			else
				dataj3 += ':' + '"' + entVal2 +'",' + "\n";
			//var entVal2 = encodeURIComponent(entVal[ent2]);
			//if (entVal2 == "undefined")
			//	dataj3 += ':' + '"' + '",' + "\n";
			//else
			//	dataj3 += ':' + '"' + entVal2 +'",' + "\n";
		}
		dataj3 +=  '   },' + '\n';
	}
	dataj3 +=  ']' + '\n' + "}";

//	dataj3 =dataj3.substring(0, dataj3.length -2) + '\n' + "}";
//	dataj4 = dataj4.substring(0, dataj4.length -1) + "}";

	$scope.descText = dataj3;
 };

 $scope.postTextareaValue = function(user) {
	alert("click send!!");
	var saveLatency = "12";
	dataj3 = $scope.descText;
	//console.log(dataj3);
	var dataj1 = JSON.parse(dataj3);

	$http({method: 'POST',
                    url: 'https://127.0.0.1:8080/tp6',
                    data: {dataj1},
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(function (response) {
    			console.log("data");
		});  

 };



var dataj11 = {
    "PLACILO" : "495.2834",
    "age" : "2",
    "DOKU" : "0045  19",
    "VEZ" : null,
    "VEZS" : "0045  19",
    "DATP" : "20190121",
    "DATK" : "20190220",
    "DATN" : "20190121",
    "PART" : "100214",
    "IME" : "EUROMEDIA DISTRIBUCIJA d.o.o. NOV ZAPIS",
    "ZAS" : "False",
    "DGNAB" : "0",
    "DGVPV" : "405.97",
    "DGVPD" : "89.31",
    "DGMPV" : "495.28",
    "DGSTO" : "405.97",
   "PR1" : [
      {
        "DOKU": "0045  19",
        "ZAPO": "001",
        "OZNAKA": "",
        "TEKST": "Letak 160x250mm -Pomaranca",
        "RABAT": "0",
        "NCENA": "0.0148",
        "MPC": "0.0181",
        "KOLICINA": "10000",
        "ZNESEK": "181",
        "DATUM": "20190121",
        "PD": "22",
        "PDI": "22",
        "EM": "kom"
      },
      {
        "DOKU": "0045  19",
        "ZAPO": "002",
        "OZNAKA": "Ã·",
        "TEKST": "PoÅ¡tnina za 1076kom",
        "RABAT": "0",
        "NCENA": "5.97",
        "MPC": "7.2834",
        "KOLICINA": "1",
        "ZNESEK": "7.2834",
        "DATUM": "20190121",
        "PD": "22",
        "PDI": "22",
        "EM": "kom"
      },
      {
        "DOKU": "0045  19",
        "ZAPO": "003",
        "OZNAKA": "Ã·",
        "TEKST": "Dopis A4f 4/0-9og brl.-LOPA",
        "RABAT": "0",
        "NCENA": "0.0126",
        "MPC": "0.0154",
        "KOLICINA": "20000",
        "ZNESEK": "308",
        "DATUM": "20190121",
        "PD": "22",
        "PDI": "22",
        "EM": "kom"
      }
]
};

var dataj12 = {
    "id": 1,
    "name": "abc",
    "PR2": [{
        "streetName": "cde",
        "streetId": 2
    }, {
        "streetName": "xyz",
        "streetId": 102
    }, ],
  "PR1" : [
      {
        "DOKU": "0045  19",
        "ZAPO": "001",
        "OZNAKA": "",
        "TEKST": "Letak 160x250mm -Pomaranca",
        "RABAT": "0",
        "NCENA": "0.0148",
        "MPC": "0.0181",
        "KOLICINA": "10000",
        "ZNESEK": "181",
        "DATUM": "20190121",
        "PD": "22",
        "PDI": "22",
        "EM": "kom"
      },
      {
        "DOKU": "0045  19",
        "ZAPO": "002",
        "OZNAKA": "Ã·",
        "TEKST": "PoÅ¡tnina za 1076kom",
        "RABAT": "0",
        "NCENA": "5.97",
        "MPC": "7.2834",
        "KOLICINA": "1",
        "ZNESEK": "7.2834",
        "DATUM": "20190121",
        "PD": "22",
        "PDI": "22",
        "EM": "kom"
      },
      {
        "DOKU": "0045  19",
        "ZAPO": "003",
        "OZNAKA": "Ã·",
        "TEKST": "Dopis A4f 4/0-9og brl.-LOPA",
        "RABAT": "0",
        "NCENA": "0.0126",
        "MPC": "0.0154",
        "KOLICINA": "20000",
        "ZNESEK": "308",
        "DATUM": "20190121",
        "PD": "22",
        "PDI": "22",
        "EM": "kom"
      }
]
}

var data2 = dataj11["PR1"];
for (let i in data2) {
    console.log(data2[i]["streetName"]);
	console.log(data2[i]["DOKU"]);
}

console.log("test4");
this.count2 = 0;
      }		//function
    ]
  });




