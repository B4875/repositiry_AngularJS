'use strict';

angular.
  module('racunDetail2').
  component('racunDetail2', {
    templateUrl: 'racun-detail2/racun-detail2.template.html',
   controller: ['Partnerji', 'Partner', 'Racun', 'Doku', 'Udata', '$scope', '$http', 'moment', '$routeParams', '$location',
      function RacunDetailController(Partnerji, Partner, Racun, Doku, Udata, $scope, $http, moment, route, $location) {


Date.prototype.toJSON = function(){ return moment(this).format(); }

$scope.date2 = (new Date());//.toJSON;
$scope.placiloNeto = 0.0000;
$scope.placiloDDV = 0.0000;

$scope.datumPL = { d : new Date() };
$scope.doku0 = {DOKU:"0001"};
$scope.doku = {id:"0000", placilo:0.0000, doku:"0000  20"};
$scope.PR1Index = 0;
$scope.PL1Index = 0;
$scope.zapisi = "ZAPIŠI NOV RAČUN";
$scope.zapisiPredracun = "PRENESI";  //$scope[appn].dokument	
//$scope.PR0 = [];
$scope.PR000 = [{DOKU:"0001 01", DOKU0:{DOKU:"0000  01"}, DATN:new Date(),DATP:new Date(),DATK:new Date(),DGMPV:(0.0000).toFixed(2),IME:"", PARTN:"", PL:(0.0000).toFixed(2), NEPL:(0.0000).toFixed(2),NARO:"",
		 PR1:[{KOLICINA:0, NCENA:0.0000, TEKST:"", MPC:0.0000, ZNESEK:(0.0000).toFixed(4), ZNESEKDDV:(0.0000).toFixed(4), PD:"", EM:"kos"}], 
		 PL1:[{ZNESEK:0.00, DATUM:(new Date()), TEKST:"", DATUMS:(new Date())}],
		PA:[{NASLOV1:"", NASLOV1ST:"",KRAJ1:"", KRAJ1ST:"", DRZAVA1:""}]
 }];
$scope.PR00 = {DGMPV:0.0000, IME:"aa", PARTN:"", PL:(0.0000).toFixed(2), NEPL:(0.0000).toFixed(2),
		PR1:[{KOLICINA:0, NCENA:0.0000, TEKST:"", MPC:0.0000, ZNESEK:0.0000, ZNESEKDDV:0.0000, PD:"",NARO:"", EM:"kos"}],
		PL1:[{ZNESEK:0.00, DATUM:(new Date()), TEKST:"", DATUMS:(new Date())}],
		PA:[{NASLOV1:"", NASLOV1ST:"",KRAJ1:"", KRAJ1ST:"", DRZAVA1:""}] };
$scope.PR1 = [{KOLICINA:0, NCENA:0.0000, TEKST:"", MPC:0.0000, ZNESEK:0.0000, ZNESEKDDV:0.0000, PD:"", EM:"kos"}];
$scope.PR2 = {KOLICINA:0, NCENA:0.0000, TEKST:"", MPC:0.0000, ZNESEK:0.0000, ZNESEKDDV:0.0000, PD:"", EM:"kos"};
$scope.PL1 = [{ZNESEK:0.00, DATUM:(new Date()), TEKST:"", DATUMS:(new Date())}];
$scope.PL2 = {ZNESEK:0.00, DATUM:(new Date()), TEKST:""};

$scope.pos_test = [{
       TEKST : "444",
	EM: "kos",
	KOLICINA: "666777"
},
{
       TEKST : "444",
	EM: "naziv1",
	KOLICINA: "666777"
}];

var racunPR0;

var dataj2 = {
    PLACILO: "495.2834",
    age: "2",
    DOKU: "0045  19",
    VEZ: null,
    VEZS: "0045  19",
    DATP: "20190121",
    DATK: "20190220",
    DATN: "20190121",
    PART: "doku.partn",
    IME: "doku.naziv",
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
        "EM": "kos"
      },
      {
        "DOKU": "0045  19",
        "ZAPO": "002",
        "OZNAKA": "Ã·",
        "TEKST": "doku.naziv",
        "RABAT": "0",
        "NCENA": "5.97",
        "MPC": "7.2834",
        "KOLICINA": "1",
        "ZNESEK": "7.2834",
        "DATUM": "20190121",
        "PD": "22",
        "PDI": "22",
        "EM": "kos"
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
        "EM": "kos"
      }
]
};


		var appn = route.app;
		$scope.appns = route.app;
//		$scope.applist = [{port:8080},{port:8080},{port:8070}];
		$scope.applist = [{space9:'space1080', space911:'space1180', space912:'space1280', space913:'space1380', pspace9:'space1080', pspace911:'space1180', pspace912:'space1280', pportp:"local", bcolor1:'#1c87c9', bcolor2:'#1c87c9', bcolor3:'#50c0f4', bcolor4:'#007bff', dokument:"RAČUN", dokument1:"DOBAVNICA", port:8080, pport:8080, naslov:'tp7', rnaslov:'tp6', pnaslov:'tp9', apppred:4},

{space9:'space1080', space911:'space1180', space912:'space1280', space913:'space1380', pspace9:'space1080', pspace911:'space1180', pspace912:'space1280', pportp:"local", bcolor1:'#1c87c9', bcolor2:'#1c87c9', bcolor3:'#50c0f4', bcolor4:'#007bff', dokument:"RAČUN", dokument1:"DOBAVNICA", port:8080, pport:8080, naslov:'tp7', rnaslov:'tp6', pnaslov:'tp9', apppred:4},

{space9:'space1070', space911:'space1170', space912:'space1270', space913:'space1370', pspace9:'space1080', pspace911:'space1180', 
pspace912:'space1280', pportp:"local", bcolor1:'#1cc987', bcolor2:'#1cc987', bcolor3:'#50f4c0', bcolor4:'#007b7b', dokument:"PONUDBA", dokument1:"PONUDBA", port:8070, pport:8080, naslov:'tp7', rnaslov:'tp6', pnaslov:'tp9', apppred:6},

{space9:'space1070', space911:'space1170', space912:'space1270', space913:'space1370', pspace9:'space1070', pspace911:'space1170', 
pspace912:'space1270', pportp:"local", bcolor1:'#b2bd62', bcolor2:'#b2bd62', bcolor3:'#d1d7a6', bcolor4:'#909a45', dokument:"PONUDBA", dokument1:"PONUDBA", port:8070, pport:8070, naslov:'tp7', rnaslov:'tp6', pnaslov:'tp9', apppred:6},

{space9:'space1080', space911:'space1180', space912:'space1280', space913:'space1380', pspace9:'space1080', pspace911:'space1180', 
pspace912:'space1280', pportp:"local", bcolor1:'#7dc8fa', bcolor2:'#7dc8fa', bcolor3:'#9ed7fa', bcolor4:'#007bff', dokument:"PREDRAČUN", dokument1:"RAČUN", port:8080, pport:8080, naslov:'tp22', rnaslov:'tp23', pnaslov:'tp9', apppred:4},

{space9:'space1060', space911:'space1160', space912:'space1260', space913:'space1360', pspace9:'space1060', pspace911:'space1160', 
pspace912:'space1260', pportp:"local", bcolor1:'#8b3a16', bcolor2:'#8b3a16', bcolor3:'#d85e29', bcolor4:'#782f0f', dokument:"RAČUN", dokument1:"DOBAVNICA", port:8060, pport:8060, naslov:'tp7', rnaslov:'tp6', pnaslov:'tp9', apppred:7},

{space9:'space1070', space911:'space1170', space912:'space1270', space913:'space1370', pspace9:'space1070', pspace911:'space1170', 
pspace912:'space1270', pportp:"local", bcolor1:'#b2bd62', bcolor2:'#b2bd62', bcolor3:'#d1d7a6', bcolor4:'#909a45', dokument:"PREDRAČUN", dokument1:"PONUDBA", port:8070, pport:8070, naslov:'tp7', rnaslov:'tp23', pnaslov:'tp9', apppred:6},

{space9:'space1060', space911:'space1160', space912:'space1260', space913:'space1360', pspace9:'space1060', pspace911:'space1160', 
pspace912:'space1260', pportp:"local", bcolor1:'#8b3a16', bcolor2:'#8b3a16', bcolor3:'#d85e29', bcolor4:'#782f0f', dokument:"PREDRAČUN", dokument1:"RAČUN", port:8060, pport:8060, naslov:'tp7', rnaslov:'tp23', pnaslov:'tp9', apppred:7}];

$scope.zapisiPredracun = "PRENESI V " + $scope.applist[appn].dokument1;	

$scope.style1={"background-color":$scope.applist[appn].bcolor1};
$scope.style2={"background-color":$scope.applist[appn].bcolor2};
$scope.style3={"background-color":$scope.applist[appn].bcolor3};
$scope.style4={"background-color":$scope.applist[appn].bcolor4};
//$scope.disabledDoku=false;
$scope.publicReadOnly = "";	//"  -  uporabnik z omejenim dostopom (READ ONLY) ";
$scope.disabledDokuPrepisiShow = true;
$scope.disabledDokuDel = true;
$scope.disabledDokuDelShow = false;
$scope.disabledDokuZapShow = true;
$scope.disabledDoku2 = ((($location.path() == "/racun0") ? true : false) || (appn == 0));
$scope.disabledDoku = !((($location.path() == "/racun0") ? true : false) && (appn == 0));
$scope.disabledDokuZap = 
	!( (($location.path() == "/racun0") ? true : false) && (appn == 0) && (route.leto != undefined) && (route.doku != undefined)
     || (($location.path() != "/racun0") ? true : false) && (appn != 0)	);
$scope.disabledDokuPrepisi = 
	!( (($location.path() == "/racun0") ? true : false) && (appn == 0) && (route.leto != undefined) && (route.doku != undefined)
     || (($location.path() != "/racun0") ? true : false) && (appn != 0)	&& (route.leto != undefined) && (route.doku != undefined));
     if (appn != 4)
	$scope.disabledDokuPrepisiShow = false;


		  console.log("test3");
		  var leto = route.leto;
		  var doku = route.doku;

		  var leto1 = route.leto1;
		  var leto2 = route.leto2;
		  var mesec1 = route.mesec1;
		  var mesec2 = route.mesec2;
		var mesec3 = route.mesec3;

		  this.l1 = leto;
		  this.l2 = doku;
		  this.m1 = mesec1;
		  this.m2 = mesec2;	
		this.m3 = mesec3;	  

		  console.log("leto3:" + this.m3);
		  console.log(this.m3==undefined);
		  console.log(this.m2==undefined);
		  //$scope.leto3 = route.leto1;
		  
		  this.user1 = location;
		  this.user2 = "recho";

		$scope.uporabnik = {uporabnik:"PUBLIC", uporabnikp:"", uname:""};
		   this.udata = Udata.query();

	if ((this.l1 != undefined) && (this.l2 != undefined)){
		console.log("racun:");
		$scope.zapisi = "ZAPIŠI SPREMEMBE";
		this.udata.$promise.then( function (data) {
		        $scope.partnerji = Partnerji.query({leto1:"00", leto2:"99", mesec1:"01", mesec2:"12", pspace9:$scope.applist[appn].pspace9, pnaslov:'tp9', usr:data.user.uname});
	console.log($scope.partnerji);
	
					if ( ((data.user.username) == "PUBLIC") || ((data.user.uname) == "PUB00") || ((data.user.role).substr(1,2) != "pt")){
					$scope.disabledDokuZap = true;
					$scope.publicReadOnly = "  -  uporabnik z omejenim dostopom (READ ONLY) ";
					$scope.disabledDokuPrepisi = true;
					$scope.disabledDoku = true;
					$scope.disabledDokuPrepisiShow = false;
					}

		    $scope.PR0 = Racun.query({leto:leto, doku:doku, ppp:$scope.applist[appn].pportp , space9:$scope.applist[appn].space9, naslov:$scope.applist[appn].rnaslov, usr:data.user.uname});
		console.log($scope.PR0);
        $scope.uporabnik.uporabnik = data.user.username;
        $scope.uporabnik.uname = data.user.uname;
    });

		
	}else{
		$scope.disabledDokuPrepisi = true;
		$scope.PR0 = $scope.PR000;
		var leto0 = "21";
		var leto = ((new Date).toJSON()).substring(2,4);
		console.log("leto:"+leto0);
//		$scope.doku0 = Doku.query({leto:leto});
		this.udata.$promise.then( function (data) {
		        $scope.partnerji = Partnerji.query({leto1:"00", leto2:"99", mesec1:"01", mesec2:"12", pspace9:$scope.applist[appn].pspace9, pnaslov:'tp9', usr:data.user.uname});
	console.log($scope.partnerji);

				if ( ((data.user.username) == "PUBLIC") || ((data.user.uname) == "PUB00") || ((data.user.role).substr(1,2) != "pt")){
					//$scope.disabledDokuZap = true;
					$scope.publicReadOnly = "  -  uporabnik z omejenim dostopom (READ ONLY) ";
					$scope.disabledDokuPrepisi = true;
					$scope.disabledDoku = true;
					$scope.disabledDokuPrepisiShow = false;
					}
				$scope.PR0[0].DOKU0 = (Doku.query({leto:leto, space9:$scope.applist[appn].space9, naslov:'tp5', usr:data.user.uname}));
        $scope.uporabnik.uporabnik = data.user.username;
                $scope.uporabnik.uname = data.user.uname;
    });

	}

        //this.orderProp = 'age';

$scope.setData3 = function() {  
//$scope.user.sifra="444";
		  console.log("test_set");
$scope.doku = {
        doku : "444",
	naziv: "naziv1",
	naziv: "os1",
	partn: "666777"
    };
};


$scope.addData = function(pos) {


	$scope.PR0[0].PR1.push(angular.copy($scope.PR2));
	$scope.PR1Index = ($scope.PR0[0].PR1.length) -1;
	console.log("route:"+ route.doku);

}


$scope.addDataPL = function(pos) {

	//let PL3 = angular.copy($scope.PR0[0].PL1[$scope.PL1Index]);
	$scope.PR0[0].PL1.push(angular.copy($scope.PL2));
	$scope.PL1Index = ($scope.PR0[0].PL1.length) -1;
	//$scope.PL1Index=1;
	//$scope.PR0[0].PL1[$scope.PL1Index] = angular.copy($scope.PL2);

}


$scope.postData3 = function(doku, prepisi, uporabnik) {
	console.log(doku.naziv); 
	//var dat1 = {{2019,05,05},{10,10,10}};
	var dat2 = new Date();
	console.log("toLocaleString:" + dat2.toLocaleString());
	console.log("toJSON:" + dat2.toJSON());

var o = { d : new Date() };
var dn = { d : new Date($scope.PR0[0].DATN) };
var dk = { d : new Date($scope.PR0[0].DATK) };
var dp = { d : new Date($scope.PR0[0].DATP) };
dp.d.setHours(o.d.getHours());
dp.d.setMinutes(o.d.getMinutes());
dp.d.setSeconds(o.d.getSeconds());
dk.d.setHours(o.d.getHours());
dk.d.setMinutes(o.d.getMinutes());
dk.d.setSeconds(o.d.getSeconds());


//Date.prototype.toJSON = function(){ return moment(this).format(); }
////var json = JSON.stringify(o);  //  '{"d":"2015-06-28T13:51:13-07:00"}'

dp.d.toJSON = function(){ return moment(this).format(); }
	console.log("toJSON2:" + dp.d.toJSON());


	var dataj1 = {
	    PL:$scope.PR0[0].PL,
	    NEPL:$scope.PR0[0].NEPL,
	    PLACILO: $scope.PR0[0].DGMPV,
	    age: "2",
	    DOKU: $scope.PR0[0].DOKU0.DOKU,
	    VEZ: null,
	    VEZS: "0045  19",

	    DATP: dp.d.toJSON(),
	    DATK: dk.d.toJSON(),
	    DATN: dn.d.toJSON(),
	    PARTN: $scope.PR0[0].PARTN,
	    IME: $scope.PR0[0].IME,
	    ZAS: "False",
	    DGNAB: "0",
	    DGVPV: $scope.placiloNeto,
	    DGVPP: $scope.value2,
	    DGVPD: $scope.placiloDDV,
	    DGMPV: $scope.PR0[0].DGMPV,
	    DGSTO: $scope.PR0[0].DGMPV,
	    NARO: $scope.PR0[0].NARO,
	    PR1: [],
	   PL1:[],
	NICNIC:((($location.path() == "/racun0") ? true : false) && (appn == 0))?route.doku:"0000"
	};

	for(let i in $scope.PR0[0].PR1){
		console.log($scope.PR0[0].PR1[i].TEKST);
		dataj1.PR1.push($scope.PR0[0].PR1[i]);
	}
	for(let j in $scope.PR0[0].PL1){
		dataj1.PL1.push($scope.PR0[0].PL1[j]);
	}


	  var leto = route.leto;
	  var doku = route.doku;
	  this.l1 = leto;
	  this.l2 = doku;



	if ((this.l1 != undefined) && (this.l2 != undefined)){
		$http({		method: 'PUT',
		            url: 'https://server4875.si/' + $scope.applist[appn].space912 + '/' + $scope.applist[appn].rnaslov + '?prepisi=' + prepisi + "&leto=" + this.l1 + "&doku=" + this.l2 + "&usr=" + uporabnik.uname ,
		            data: {dataj1},
		            headers: { 'Access-Control-Allow-Methods':'PUT,POST,GET', 'Content-Type': 'application/x-www-form-urlencoded' }
		        }).then(function (response) {
		        alert(response.status + "  " + response.statusText + "  " + response.xhrStatus);
		console.log("data");
		}); 
	}
	else{
			if (prepisi == 1){
		$http({		method: 'POST',

		            url: 'https://server4875.si/' + $scope.applist[appn].space911 + '/' + $scope.applist[1].rnaslov + '?prepisi=' + 0 + "&usr=" + uporabnik.uname,
		            data: {dataj1},
		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		        }).then(function (response) {
		        alert(response.status + "  " + response.statusText + "  " + response.xhrStatus);

		}); 
		
		}
	else{
		$http({		method: 'POST',

		            url: 'https://server4875.si/' + $scope.applist[appn].space911 + '/' + $scope.applist[appn].rnaslov + '?prepisi=' + prepisi + "&usr=" + uporabnik.uname,
		            data: {dataj1},
		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		        }).then(function (response) {
		        alert(response.status + "  " + response.statusText + "  " + response.xhrStatus);
		        $scope.disabledDokuZapShow = false;
		        $scope.disabledDokuZap = true;
		        $scope.disabledDokuPrepisiShow = ((appn==4)?true:false) && (response.status =="201");
		        $scope.disabledDokuPrepisi = !(((appn==4)?true:false) && (response.status =="201"));

		console.log("data");
		}); 
		}
	} 
 
};


$scope.updatePrice = function(){
	$scope.PR0[0].PR1[$scope.PR1Index].ZNESEK = 
		Math.round($scope.PR0[0].PR1[$scope.PR1Index].NCENA*$scope.PR0[0].PR1[$scope.PR1Index].KOLICINA*10000)/10000;
	$scope.PR0[0].PR1[$scope.PR1Index].MPC = 
		(Math.round($scope.PR0[0].PR1[$scope.PR1Index].NCENA*(1+$scope.PR0[0].PR1[$scope.PR1Index].PD/100)*10000)/10000);
	$scope.PR0[0].PR1[$scope.PR1Index].ZNESEKDDV = 
		Math.round(($scope.PR0[0].PR1[$scope.PR1Index].NCENA*$scope.PR0[0].PR1[$scope.PR1Index].KOLICINA+ (($scope.PR0[0].PR1[$scope.PR1Index].NCENA*$scope.PR0[0].PR1[$scope.PR1Index].PD*$scope.PR0[0].PR1[$scope.PR1Index].KOLICINA)/100))*10000)/10000;

//(Number.isInteger(x)) ? (x + ".0") : (x.toString());
//(($scope.PR0[0].PR1[$scope.PR1Index].NCENA)*(1+$scope.PR0[0].PR1[$scope.PR1Index].PD)/100).toFixed(4)//+(($scope.PR0[0].PR1[$scope.PR1Index].NCENA*10*$scope.PR0[0].PR1[$scope.PR1Index].PD)/1000)).toFixed(4);
//Math.round(1.12345678*1000)/1000;
	$scope.PR0[0].DGMPV = Math.round((Object.values($scope.PR0[0].PR1).reduce((t, {ZNESEK,PD}) => t + (ZNESEK*(1+PD/100)), 0))*100)/100;
	$scope.value2 = Object.values($scope.PR1).reduce((t, {ZNESEK,PD}) => t + (ZNESEK*(1+PD/100)), 0);
	$scope.placiloNeto = Math.round((Object.values($scope.PR1).reduce((t, {ZNESEK}) => t + ZNESEK, 0))*100)/100;
	$scope.placiloDDV = Math.round((Object.values($scope.PR1).reduce((t, {ZNESEK,PD}) => t + (ZNESEK*PD/100), 0))*100)/100;

		$scope.updatePlacila();
}

$scope.updatePlacila = function(){
	$scope.PR0[0].PL = Object.values($scope.PR0[0].PL1).reduce((t, {ZNESEK}) => t + (ZNESEK), 0);
	$scope.PR0[0].NEPL = Math.round(
		(((Object.values($scope.PR0[0].PR1).reduce((t, {ZNESEK,PD}) => t + (ZNESEK*(1+PD/100)), 0)
		)- ($scope.PR0[0].PL))*100)  
					)/100;
	$scope.PR0[0].PL1[$scope.PL1Index].DATUMS = (new Date()).toJSON();
}

$scope.updateDatum = function(){
//	$scope.PR0[0].PL1[$scope.PL1Index].DATUM = ($scope.PR0[0].PL1[$scope.PL1Index].DATUM).toJSON();
	console.log($scope.PR0[0].PL1[$scope.PL1Index]);
	var o = { d : new Date() };
//	$scope.PR0[0].PL1[$scope.PL1Index].DATUM = ($scope.datumPL.d).toJSON();
var o = { d : new Date() };
var on = { d : new Date($scope.datumPL.d) };
on.d.setHours(o.d.getHours());
on.d.setMinutes(o.d.getMinutes());
on.d.setSeconds(o.d.getSeconds());

	$scope.PR0[0].PL1[$scope.PL1Index].DATUM = (on.d).toJSON();
}

$scope.GetDetailsPA = function (partner) {

		$scope.PR0[0].IME = partner.NAZIV;//$scope.partnerji[index].NAZIV;
		$scope.PR0[0].PARTN = partner.ID;//$scope.partnerji[index].ID;
		$scope.PR0[0].PA[0].NASLOV1 = partner.NASLOV1;
		$scope.PR0[0].PA[0].NASLOV1ST = partner.NASLOV1ST;
		$scope.PR0[0].PA[0].KRAJ1 = partner.KRAJ1;
		$scope.PR0[0].PA[0].KRAJ1ST = partner.KRAJ1ST;
		$scope.PR0[0].PA[0].DRZAVA1 = partner.DRZAVA1;
		$scope.PR0[0].PA[0].DNIVAL = Number.isInteger(Number(partner.DNIVAL)) ? (Number(partner.DNIVAL)) : 8;
//		$scope.PR0[0].DATP = new Date("2019-05-05");

var dp = { d : new Date($scope.PR0[0].DATP) };
var d0 = { d : new Date() };
var dms = 24*3600*1000;

//dp.d.setHours(o.d.getHours());
		console.log("DATP:");
		console.log($scope.PR0[0].DATP);
		console.log("DATK:");
		console.log((new Date($scope.PR0[0].DATP)).getFullYear());
		console.log((new Date($scope.PR0[0].DATP)).getMonth());
		console.log((new Date($scope.PR0[0].DATP)).getDate());
		console.log((new Date(new Date(($scope.PR0[0].DATP)).getFullYear(), new Date(($scope.PR0[0].DATP)).getMonth(), new Date(($scope.PR0[0].DATP)).getDate())).getTime());
		console.log($scope.PR0[0].PA[0].DNIVAL);

//		$scope.PR0[0].DATK = new Date(new Date(($scope.PR0[0].DATP)).getFullYear(), new Date(($scope.PR0[0].DATP)).getMonth(), new Date(($scope.PR0[0].DATP)).getDate());
		$scope.PR0[0].DATK = new Date( (new Date($scope.PR0[0].DATP)).getTime() + (dms*$scope.PR0[0].PA[0].DNIVAL) );

            };

$scope.GetDetailsPR = function (index) {

		console.log("index:" + index);
		console.log($scope.PR1);
		$scope.PR1Index = index;
	console.log("date2:" + new Date($scope.date2).toJSON());
		console.log($scope.value1);
		console.log($scope.value2);
//		$scope.doku.placilo = 100.0000;
            };

$scope.GetDetailsPL = function (index) {
		console.log("index:" + index);
		$scope.PL1Index = index;
		// (new Date()).toJSON();
		 $scope.datumPL.d = $scope.PR0[0].PL1[$scope.PL1Index].DATUM;
		$scope.updatePlacila();
//	console.log("date2:" + new Date($scope.date2).toJSON());

            };


$scope.DeleteDetails = function (index) {

		$scope.PR0[0].PR1.splice(index,1);
		console.log(index);
		console.log($scope.PR1);
		$scope.updatePlacila();
            };

$scope.DeleteDetailsPL = function (index) {

		$scope.PR0[0].PL1.splice(index,1);
		console.log(index);
				$scope.updatePlacila();

            };

$scope.sendDataDel = function(uporabnik) {  

	alert("click send!!");
	var saveLatency = "12";
	console.log('That thing was saved in.... ' + saveLatency + 'ms.');

		  var doku = route.doku;
  		  var leto = route.leto;
		  this.doku = doku;
		  this.leto= leto;

	if ( (this.leto != undefined) && (this.doku != undefined) ) {
		$http({method: 'DELETE',
		            url: 'https://server4875.si/' + $scope.applist[$scope.appns].space913 + '/tp6' + '?doku=' + doku + '&leto=' + leto + '&usr=' + uporabnik.uname,
		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		        }).then(function (response) {
	    			console.log("data");
			}); 


	}
	else{
	} 
}; 


      }
    ]
  });
