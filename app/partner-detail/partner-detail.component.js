'use strict';

angular.
  module('partnerDetail').
  component('partnerDetail', {
    templateUrl: 'partner-detail/partner-detail.template.html',
   controller: ['Partner', 'Partnerji', 'Udata', 'BSearch', '$scope', '$http', '$routeParams',
      function PartnerDetailController(Partner, Partnerji, Udata, BSearch, $scope, $http, route, $location) {

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

	var DatumP = new Date();
	var DatumPJ = DatumP.toJSON();
	console.log("date:" + new Date());
	console.log("date:" + (new Date()).toJSON());

		$scope.uporabnik = {uporabnik:"PUBLIC", uporabnikp:"", uname:""};
		   this.udata = Udata.query();

	if (this.idp != undefined) {
		console.log("partner:");
		this.udata.$promise.then( function (data) {
				    	if ( ((data.user.username) == "PUBLIC") || ((data.user.uname) == "PUB00") || ((data.user.role).substr(1,2) != "pt")){
					$scope.disabledDokuZap = true;
					$scope.publicReadOnly = "  -  uporabnik z omejenim dostopom (READ ONLY) ";
					}	

        	$scope.PA0 = Partner.query({id:idp, pspace9:($scope.applist[appn].pspace9), pnaslov:'tp4', usr:data.user.uname});
		console.log($scope.PA0);
        $scope.uporabnik.uporabnik = data.user.username;
        $scope.uporabnik.uname = data.user.uname;
    });

	}else{
		$scope.PA0[0].NOVTRR = "NOV TRR!";
		$scope.PA0[0].R = 1;
		$scope.PA0[0].G = 1;
		$scope.PA0[0].B = 1;
		$scope.PA0[0].SIFRA = "123";
		$scope.PA0[0].DATD = DatumPJ.substring(8,10);
		$scope.PA0[0].DATM = DatumPJ.substring(5,7);
		$scope.PA0[0].DOKUL = DatumPJ.substring(2,4);
		    this.udata.$promise.then( function (data) {
		    	if ( ((data.user.username) == "PUBLIC") || ((data.user.uname) == "PUB00") || ((data.user.role).substr(1,2) != "pt")){
					$scope.disabledDokuZap = true;
					$scope.publicReadOnly = "  -  uporabnik z omejenim dostopom (READ ONLY) ";
					}	
        $scope.uporabnik.uporabnik = data.user.username;
                $scope.uporabnik.uname = data.user.uname;
    });

	}


$scope.user = {}
var dataj4;
var dataj3;



$scope.sendData = function(uporabnik) {  


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
		"DATD": $scope.PA0[0].DATD,
		"MAT": $scope.PA0[0].MAT
	};

	alert("click send!!");
	var saveLatency = "12";
	console.log('That thing was saved in... ' + saveLatency + 'ms.');


		  var idp = route.id;
		  this.idp = idp;


	if (this.idp != undefined) {
		$http({method: 'PUT',
		            url: 'https://server4875.si/' + $scope.applist[$scope.appns].pspace912 + '/tp4' + '?usr=' + uporabnik.uname,
		            data: {dataj1},
		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		        }).then(function (response) {
	    			console.log("data");
	    			alert(response.status + "  " + response.statusText + "  " + response.xhrStatus);
			}); 
	}
	else{
		$http({method: 'POST',
		            url: 'https://server4875.si/' + $scope.applist[$scope.appns].pspace911 + '/tp4' + '?usr=' + uporabnik.uname,
		            data: {dataj1},
		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		        }).then(function (response) {
		        alert(response.status + "  " + response.statusText + "  " + response.xhrStatus);
		        $scope.disabledDokuZapShow = false;
		        $scope.disabledDokuZap = true;
	    			console.log("data");
			}); 

	} 
}; 


$scope.sendDataDel = function(uporabnik) {  

	alert("click send!!");
	var saveLatency = "12";
	console.log('That thing was saved in.... ' + saveLatency + 'ms.');

		  var idp = route.id;
		  this.idp = idp;

	if (this.idp != undefined) {
		$http({method: 'DELETE',
		            url: 'https://server4875.si/' + $scope.applist[$scope.appns].space913 + '/tp4' + '?id=' + idp + '&usr=' + uporabnik.uname,
		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		        }).then(function (response) {
	    			console.log("data");
			}); 


	}
	else{
	} 
}; 


$scope.descText = '';


$scope.b_search = function() {  
//	let encodedName = encodeURI('avtoprevoznistvo+novak');
//	let encodedName = ('avtoprevozništvo novak');
        $scope.searchPartnerji = BSearch.query({q:$scope.BS.NAZIV, test:'iskanje'});
//        $scope.searchPartnerji = BSearch.query({q:"", test:'iskanje'});
	console.log("b.s:");
	console.log($scope.searchPartnerji);
}

$scope.GetDetailsPA = function(partner){
	alert(partner.title);
	$scope.PA0[0].NAZIV = partner.title;
	$scope.PA0[0].KRAJ1 = partner.KRAJ1;
	$scope.PA0[0].KRAJ1ST = partner.KRAJ1_ST;
	$scope.PA0[0].NASLOV1 = partner.NASLOV;
	$scope.PA0[0].NASLOV1ST = partner.NASLOV_ST;
	$scope.PA0[0].MAT = partner.MST;
	$scope.PA0[0].DDAVCNA = partner.DST;
	$scope.PA0[0].DRZAVA1 = "Slovenija";					
}


      }		//function

    ]
  });





