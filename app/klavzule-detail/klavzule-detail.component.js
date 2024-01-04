'use strict';

angular.
  module('klavzuleDetail').
  component('klavzuleDetail', {
    templateUrl: 'klavzule-detail/klavzule-detail.template.html',
   controller: ['Klavzula', 'Klavzule', 'Udata', 'BSearch', '$scope', '$http', '$routeParams',
      function KlavzulaListController(Klavzula, Klavzule, Udata, BSearch, $scope, $http, route, $location) {
		  console.log("test1");

		$scope.zapisi = "ZAPIŠI NOVO KLAVZULO";
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

		  var idp = route.id;
		  this.idp = idp;
		$scope.PA0 = [{}];
		$scope.uporabnik = {uporabnik:"PUBLIC", uporabnikp:"", uname:""};
		   this.udata = Udata.query();


	if (this.idp != undefined) {
		$scope.zapisi = "ZAPIŠI SPREMEMBE";
		console.log("partner:");
		
		    this.udata.$promise.then( function (data) {
		    if ( ((data.user.username) == "PUBLIC") || ((data.user.uname) == "PUB00") || ((data.user.role).substr(1,2) != "pt")){
					$scope.disabledDokuZap = true;
					$scope.publicReadOnly = "  -  uporabnik z omejenim dostopom (READ ONLY) ";
					}		

        $scope.uporabnik.uporabnik = data.user.username;
        $scope.uporabnik.uname = data.user.uname;
                	$scope.PA0 = Klavzula.query({id:idp, space9:($scope.applist[appn].space9), naslov:'tp1', usr:data.user.uname});
		console.log($scope.PA0);
    });


	}else{
		$scope.PA0[0].LETO_0 = "21";
		$scope.PA0[0].LETO = ((new Date).toJSON()).substring(2,4);
		    this.udata.$promise.then( function (data) {
		    if ( ((data.user.username) == "PUBLIC") || ((data.user.uname) == "PUB00") || ((data.user.role).substr(1,2) != "pt")){
					$scope.disabledDokuZap = true;
					$scope.publicReadOnly = "  -  uporabnik z omejenim dostopom (READ ONLY) ";
					}		

		    
        $scope.uporabnik.uporabnik = data.user.username;
                $scope.uporabnik.uname = data.user.uname;
    });


	}



$scope.sendData = function(uporabnik) {  

console.log("uporabnik:");
console.log(uporabnik);

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
	console.log('That thing was saved in... ' + saveLatency + 'ms.');


		  var idp = route.id;
		  this.idp = idp;


	if (this.idp != undefined) {
		$http({method: 'PUT',
		            url: 'https://server4875.si/' + $scope.applist[$scope.appns].space912 + '/tp1' + '?usr=' + uporabnik.uname,
		            data: {dataj1},
		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		        }).then(function (response) {
	    			console.log("data");
	    			alert(response.status + "  " + response.statusText + "  " + response.xhrStatus);
			}); 
	}
	else{
		$http({method: 'POST',
		            url: 'https://server4875.si/' + $scope.applist[$scope.appns].space911 + '/tp1' + '?usr=' + uporabnik.uname,
		            data: {dataj1},
		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		        }).then(function (response) {
	    			console.log("data");
	    			alert(response.status + "  " + response.statusText + "  " + response.xhrStatus);
		        	$scope.disabledDokuZapShow = false;
			        $scope.disabledDokuZap = true;
			}); 

	} 
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




