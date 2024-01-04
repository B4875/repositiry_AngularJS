'use strict';

angular.
  module('partnerList').
  component('partnerList', {
    templateUrl: 'partner-list/partner-list.template.html',
   controller: ['Partnerji', 'Udata', '$scope', '$routeParams',  
      function PartnerListController(Partnerji, Udata, $scope, route,$location) {
		this.datum = {leto1:route.leto1, leto2:route.leto2, mesec1:route.mesec1, mesec2:route.mesec2};

		  var appn = route.app;
		this.appn1 = route.app;

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

$scope.style1={"background-color":$scope.applist[appn].bcolor1};
$scope.style2={"background-color":$scope.applist[appn].bcolor2};
$scope.style3={"background-color":$scope.applist[appn].bcolor3};
$scope.style4={"background-color":$scope.applist[appn].bcolor4};

	$scope.uporabnik = {uporabnik:"PUBLIC", uporabnikp:""};
	$scope.ajpes = {naziv:"", ddavcna:"", mat:""};
	$scope.ajpes0 = {naziv:"", ddavcna:"", mat:""};

		  console.log("test3");
		  var leto1 = route.leto1;
		  var leto2 = route.leto2;
		  var mesec1 = route.mesec1;
		  var mesec2 = route.mesec2;

		  this.l1 = leto1;
		  this.l2 = leto2;
		  this.m1 = mesec1;
		  this.m2 = mesec2;		  

		  console.log("test4");
		  console.log($scope);
		  
		  this.user1 = location;
		  this.user2 = "recho";

    this.udata = Udata.query();
    this.udata.$promise.then( function (data) {
        $scope.partnerji = Partnerji.query({leto1:leto1, leto2:leto2, mesec1:mesec1, mesec2:mesec2, pspace9:$scope.applist[appn].pspace9, pnaslov:$scope.applist[appn].pnaslov, usr:data.user.uname});
        $scope.uporabnik.uporabnik = data.user.username;
    });

	$scope.nov_partner = function(dat) {
		var url1 =  "https://server4875.si/#!/partner?app=" + appn.toString() + "&leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2;
		window.open(url1, "_blank", "width=1150, height=850");
	};

	$scope.get_details = function(id) {
		var url1 =  "https://server4875.si/#!/partner?app=" + appn.toString() + "&id=" + id;
		window.open(url1, "_blank", "width=1150, height=850");
	};
	
	$scope.preveri_ajpes = function(ali, naziv, ddavcna, mat) {
	if (ali == 0)
		var url1 = "https://server4875.si/#!/partnerji-ajpes?app=" + appn.toString() + "&naziv=" + naziv + "&DS=" + ddavcna + "&MS=" + mat + "&Q1=1&Q2=1&Q3=1"; 
	if (ali == 1)
		var url1 = "https://server4875.si/#!/partnerji-ajpes?app=" + appn.toString() + "&naziv=" + naziv + "&DS=" + ddavcna + "&MS=" + mat + "&Q1=1&Q2=0&Q3=0"; 
	if (ali == 2)
		var url1 = "https://server4875.si/#!/partnerji-ajpes?app=" + appn.toString() + "&naziv=" + naziv + "&DS=" + ddavcna + "&MS=" + mat + "&Q1=0&Q2=1&Q3=0";
	if (ali == 3)
		var url1 = "https://server4875.si/#!/partnerji-ajpes?app=" + appn.toString() + "&naziv=" + naziv + "&DS=" + ddavcna + "&MS=" + mat + "&Q1=0&Q2=0&Q3=1"; 


	window.open(url1, "_blank", "width=1150", "height=850");

	};

      }
    ]
  });
