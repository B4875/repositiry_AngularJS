'use strict';

angular.
  module('mdataDetail').
  component('mdataDetail', {
    templateUrl: 'mdata-detail/mdata-detail.template.html',
   controller: ['Mdata', 'Udata', 'BSearch', '$scope', '$http', '$routeParams',
      function MdataController(Mdata, Udata, BSearch, $scope, $http, route, $location) {
		  console.log("test1");

		$scope.zapisi = "ZAPIŠI MOJE PODATKE";
		  var appn = route.app;
		this.appn1 = route.app;
		$scope.appns = route.app;

		$scope.applist = 	[{space9:'space1080', space911:'space1180', space912:'space1280', space913:'space1380', pspace9:'space1080', pspace911:'space1180', pspace912:'space1280', pportp:"local", bcolor1:'#1c87c9', bcolor2:'#1c87c9', bcolor3:'#50c0f4', bcolor4:'#007bff', dokument:"RAČUN", dokument1:"DOBAVNICA", port:8080, pport:8080, naslov:'tp7', rnaslov:'tp6', pnaslov:'tp9', apppred:4},

{space9:'space1080', space911:'space1180', space912:'space1280', space913:'space1380', pspace9:'space1080', pspace911:'space1180', pspace912:'space1280', pportp:"local", bcolor1:'#1c87c9', bcolor2:'#1c87c9', bcolor3:'#50c0f4', bcolor4:'#007bff', dokument:"RAČUN", dokument1:"DOBAVNICA", port:8080, pport:8080, naslov:'tp7', rnaslov:'tp6', pnaslov:'tp9', apppred:4},

{space9:'space1070', space911:'space1170', space912:'space1270', space913:'space1370', pspace9:'space1080', pspace911:'space1180', 
pspace912:'space1280', pportp:"local", bcolor1:'#1cc987', bcolor2:'#1cc987', bcolor3:'#50f4c0', bcolor4:'#007b7b', dokument:"PONUDBA", dokument1:"PONUDBA", port:8070, pport:8080, naslov:'tp7', rnaslov:'tp6', pnaslov:'tp9', apppred:6},

{space9:'space1070', space911:'space1170', space912:'space1270', space913:'space1370', pspace9:'space1070', pspace911:'space1170', 
pspace912:'space1270', pportp:"local", bcolor1:'#b2bd62', bcolor2:'#b2bd62', bcolor3:'#d1d7a6', bcolor4:'#909a45', dokument:"PONUDBA", dokument1:"PONUDBA", port:8070, pport:8070, naslov:'tp7', rnaslov:'tp6', pnaslov:'tp9', apppred:6},

{space9:'space1080', space911:'space1180', space912:'space1280', space913:'space1380', pspace9:'space1080', pspace911:'space1180', 
pspace912:'space1280', pportp:"local", bcolor1:'#7dc8fa', bcolor2:'#7dc8fa', bcolor3:'#9ed7fa', bcolor4:'#007bff', dokument:"PREDRAČUN", dokument1:"DOBAVNICA", port:8080, pport:8080, naslov:'tp22', rnaslov:'tp23', pnaslov:'tp9', apppred:4},

{space9:'space1060', space911:'space1160', space912:'space1260', space913:'space1360', pspace9:'space1060', pspace911:'space1160', 
pspace912:'space1260', pportp:"local", bcolor1:'#8b3a16', bcolor2:'#8b3a16', bcolor3:'#d85e29', bcolor4:'#782f0f', dokument:"RAČUN", dokument1:"DOBAVNICA", port:8060, pport:8060, naslov:'tp7', rnaslov:'tp6', pnaslov:'tp9', apppred:7},

{space9:'space1070', space911:'space1170', space912:'space1270', space913:'space1370', pspace9:'space1070', pspace911:'space1170', 
pspace912:'space1270', pportp:"local", bcolor1:'#b2bd62', bcolor2:'#b2bd62', bcolor3:'#d1d7a6', bcolor4:'#909a45', dokument:"PREDRAČUN", dokument1:"PONUDBA", port:8070, pport:8070, naslov:'tp22', rnaslov:'tp23', pnaslov:'tp9', apppred:6},

{space9:'space1060', space911:'space1160', space912:'space1260', space913:'space1360', pspace9:'space1060', pspace911:'space1160', 
pspace912:'space1260', pportp:"local", bcolor1:'#8b3a16', bcolor2:'#8b3a16', bcolor3:'#d85e29', bcolor4:'#782f0f', dokument:"PREDRAČUN", dokument1:"DOBAVNICA", port:8060, pport:8060, naslov:'tp22', rnaslov:'tp23', pnaslov:'tp9', apppred:7}];

$scope.publicReadOnly = "";	//"  -  uporabnik z omejenim dostopom (READ ONLY) ";
$scope.disabledDokuDel = true;
$scope.disabledDokuDelShow = false;
$scope.disabledDokuZapShow = true;
$scope.disabledDokuZap = false;

//50c0f4 -> 1c9cf9
//50f4c0 -> 1cccc9 -> 1cdcb9
$scope.style1={"background-color":$scope.applist[appn].bcolor1};
$scope.style2={"background-color":$scope.applist[appn].bcolor2};
$scope.style3={"background-color":$scope.applist[appn].bcolor3};
$scope.style4={"background-color":$scope.applist[appn].bcolor4};
$scope.BS = {"NAZIV":""};
$scope.sst = -1;


		$scope.PA0 = [{}];
		$scope.PA0[0].TEMPLATE = "empty";
		$scope.uporabnik = {uporabnik:"PUBLIC", uporabnikp:"", uname:""};
		   this.udata = Udata.query();


//	if (this.idp != undefined) {
		$scope.zapisi = "ZAPIŠI SPREMEMBE";
		console.log("mdata:");
		
		    this.udata.$promise.then( function (data) {
		    if ( ((data.user.username) == "PUBLIC") || ((data.user.uname) == "PUB00") || ((data.user.role).substr(1,2) != "pt")){
					$scope.disabledDokuZap = true;
					$scope.publicReadOnly = "  -  uporabnik z omejenim dostopom (READ ONLY) ";
					}		

        $scope.uporabnik.uporabnik = data.user.username;
        $scope.uporabnik.uname = data.user.uname;
                	$scope.PA0 = Mdata.query({space9:($scope.applist[appn].space9), naslov:'tp26', usr:data.user.uname});
		console.log($scope.PA0);
    });




$scope.sendData = function(uporabnik) {  

console.log("uporabnik:");
console.log(uporabnik);


		var dataj2 = {
		"TEKST1": ( ((($scope.PA0[0].TEKST1) == undefined) || ((($scope.PA0[0].TEKST1).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST1).substring(0,200) ),
		"TEKST2": ( ((($scope.PA0[0].TEKST2) == undefined) || ((($scope.PA0[0].TEKST2).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST2).substring(0,200) ),
		"TEKST3": ( ((($scope.PA0[0].TEKST3) == undefined) || ((($scope.PA0[0].TEKST3).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST3).substring(0,200) ),
		"TEKST4": ( ((($scope.PA0[0].TEKST4) == undefined) || ((($scope.PA0[0].TEKST4).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST4).substring(0,200) ),
		"TEKST5": ( ((($scope.PA0[0].TEKST5) == undefined) || ((($scope.PA0[0].TEKST5).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST5).substring(0,200) ),
		"TEKST6": ( ((($scope.PA0[0].TEKST6) == undefined) || ((($scope.PA0[0].TEKST6).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST6).substring(0,200) ),
		"TEKST7": ( ((($scope.PA0[0].TEKST7) == undefined) || ((($scope.PA0[0].TEKST7).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST7).substring(0,200) ),
		"TEKST8": ( ((($scope.PA0[0].TEKST8) == undefined) || ((($scope.PA0[0].TEKST8).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST8).substring(0,200) ),
		"TEKST9": ( ((($scope.PA0[0].TEKST9) == undefined) || ((($scope.PA0[0].TEKST9).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST9).substring(0,200) ),
		"TEKST10": ( ((($scope.PA0[0].TEKST10) == undefined) || ((($scope.PA0[0].TEKST10).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST10).substring(0,200) ),
		"TEKST11": ( ((($scope.PA0[0].TEKST11) == undefined) || ((($scope.PA0[0].TEKST11).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST11).substring(0,200) )	,		
		"TEKST12": ( ((($scope.PA0[0].TEKST12) == undefined) || ((($scope.PA0[0].TEKST12).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST12).substring(0,200) ),
			"TEMPLATE": ( ((($scope.PA0[0].TEMPLATE) == undefined) || ((($scope.PA0[0].TEMPLATE).trim().length)==0))?undefined : ($scope.PA0[0].TEMPLATE).substring(0,200) ),
			};

	var dataj1 = {	
			"STR1": dataj2, "STR2":"", "DATM":"01", "DATD":"22", "LETO":"22", "TXT1":"", "TXT2":""
		};

	alert("click send!!");
	var saveLatency = "12";
	console.log('That thing was saved in... ' + saveLatency + 'ms.');



		$http({method: 'PUT',
		            url: 'https://server4875.si/' + $scope.applist[$scope.appns].space912 + '/tp26' + '?usr=' + uporabnik.uname,
		            data: {dataj1},
		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		        }).then(function (response) {
		        alert(response.status + "  " + response.statusText + "  " + response.xhrStatus);
		        $scope.disabledDokuZapShow = false;
		        $scope.disabledDokuZap = true;
	    			console.log("data");
			}); 
}; 


$scope.sendDataDel = function(uporabnik) {  

	var dataj1 = {
		"ID": $scope.PA0[0].ID,
		"OZNAKA": $scope.PA0[0].OZNAKA,
		"TEKST1": ( ((($scope.PA0[0].TEKST1) == undefined) || ((($scope.PA0[0].TEKST1).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST1) ),
		"TEKST2": ( ((($scope.PA0[0].TEKST2) == undefined) || ((($scope.PA0[0].TEKST2).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST2) ), 
		"TEKST3": ( ((($scope.PA0[0].TEKST3) == undefined) || ((($scope.PA0[0].TEKST3).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST3) ),
		"TEKST4": ( ((($scope.PA0[0].TEKST4) == undefined) || ((($scope.PA0[0].TEKST4).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST4) ),
		"TEKST5": ( ((($scope.PA0[0].TEKST5) == undefined) || ((($scope.PA0[0].TEKST5).trim().length)==0))? 
			undefined : ($scope.PA0[0].TEKST5) ),
		"LETO":( ((($scope.PA0[0].LETO) == undefined) || ((($scope.PA0[0].LETO).trim().length)==0))? 
			"00" : ($scope.PA0[0].LETO) )
	};


	alert("click send!!");
	var saveLatency = "12";
	console.log('That thing was saved in.... ' + saveLatency + 'ms.');


		  var idp = route.id;
		  this.idp = idp;


	if (this.idp != undefined) {
		$http({method: 'DELETE',
		            url: 'https://server4875.si/' + $scope.applist[$scope.appns].space913 + '/tp1' + '?id=' + idp + '&usr=' + uporabnik.uname,
		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		        }).then(function (response) {
	    			console.log("data");
			}); 


	}
	else{
	} 
}; 

      }		//function

    ]
  });




