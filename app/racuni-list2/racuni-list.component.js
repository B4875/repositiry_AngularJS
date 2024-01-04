'use strict';

var myApp = angular.module('racuniList2', ['ngCookies']);

myApp.config(function ($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
})
//angular.
//  module('racuniList', ['ngCookies']).
  myApp.component('racuniList2', {
    templateUrl: 'racuni-list2/racuni-list.template.html',
   controller: ['Racuni2', 'Racun', 'Mdata', 'Udata', 'CRdata', '$scope', '$http', '$location', '$cookies', '$routeParams', 
      function RacuniList2Controller(Racuni2, Racun, Mdata, Udata, CRdata, $scope, $http, $location, $cookies, route) {
	$scope.tt = "11";
		  
		var bcolor = {c:'#1c87c9'};
//		var bcolor = '#1c87c9';
//$scope.style1={"background-color":"blue"}

		  var appn = route.app;
	if (appn == undefined)	appn=1;
		this.appn1 = route.app;
	if (this.appn1 == undefined)	this.appn1=1;

		$scope.applist = [{space9:'space1080', space911:'space1180', space912:'space1280', space913:'space1380', pspace9:'space1080', pspace911:'space1180', pspace912:'space1280', pportp:"local", bcolor1:'#1c87c9', bcolor2:'#1c87c9', bcolor3:'#50c0f4', bcolor4:'#007bff', dokument:"RAČUN", dokument1:"DOBAVNICA", port:8080, pport:8080, naslov:'tp7', naslov2:'tp8', rnaslov:'tp6', pnaslov:'tp9', apppred:4},

{space9:'space1080', space911:'space1180', space912:'space1280', space913:'space1380', pspace9:'space1080', pspace911:'space1180', pspace912:'space1280', pportp:"local", bcolor1:'#1c87c9', bcolor2:'#1c87c9', bcolor3:'#50c0f4', bcolor4:'#007bff', dokument:"RAČUN", dokument1:"DOBAVNICA", port:8080, pport:8080, naslov:'tp7', naslov2:'tp8', rnaslov:'tp6', pnaslov:'tp9', apppred:4},

{space9:'space1070', space911:'space1170', space912:'space1270', space913:'space1370', pspace9:'space1080', pspace911:'space1180', 
pspace912:'space1280', pportp:"local", bcolor1:'#1cc987', bcolor2:'#1cc987', bcolor3:'#50f4c0', bcolor4:'#007b7b', dokument:"PONUDBA", dokument1:"PONUDBA", port:8070, pport:8080, naslov:'tp7', naslov2:'tp8', rnaslov:'tp6', pnaslov:'tp9', apppred:6},

{space9:'space1070', space911:'space1170', space912:'space1270', space913:'space1370', pspace9:'space1070', pspace911:'space1170', 
pspace912:'space1270', pportp:"local", bcolor1:'#b2bd62', bcolor2:'#b2bd62', bcolor3:'#d1d7a6', bcolor4:'#909a45', dokument:"PONUDBA", dokument1:"PONUDBA", port:8070, pport:8070, naslov:'tp7', naslov2:'tp8', rnaslov:'tp6', pnaslov:'tp9', apppred:6},

{space9:'space1080', space911:'space1180', space912:'space1280', space913:'space1380', pspace9:'space1080', pspace911:'space1180', 
pspace912:'space1280', pportp:"local", bcolor1:'#7dc8fa', bcolor2:'#7dc8fa', bcolor3:'#9ed7fa', bcolor4:'#007bff', dokument:"PREDRAČUN", dokument1:"DOBAVNICA", port:8080, pport:8080, naslov:'tp22', naslov2:'tp8', rnaslov:'tp23', pnaslov:'tp9', apppred:4},

{space9:'space1060', space911:'space1160', space912:'space1260', space913:'space1360', pspace9:'space1060', pspace911:'space1160', 
pspace912:'space1260', pportp:"local", bcolor1:'#8b3a16', bcolor2:'#8b3a16', bcolor3:'#d85e29', bcolor4:'#782f0f', dokument:"RAČUN", dokument1:"DOBAVNICA", port:8060, pport:8060, naslov:'tp7', naslov2:'tp8', rnaslov:'tp6', pnaslov:'tp9', apppred:7},

{space9:'space1070', space911:'space1170', space912:'space1270', space913:'space1370', pspace9:'space1070', pspace911:'space1170', 
pspace912:'space1270', pportp:"local", bcolor1:'#b2bd62', bcolor2:'#b2bd62', bcolor3:'#d1d7a6', bcolor4:'#909a45', dokument:"PREDRAČUN", dokument1:"PONUDBA", port:8070, pport:8070, naslov:'tp22', naslov2:'tp8', rnaslov:'tp23', pnaslov:'tp9', apppred:6},

{space9:'space1060', space911:'space1160', space912:'space1260', space913:'space1360', pspace9:'space1060', pspace911:'space1160', 
pspace912:'space1260', pportp:"local", bcolor1:'#8b3a16', bcolor2:'#8b3a16', bcolor3:'#d85e29', bcolor4:'#782f0f', dokument:"PREDRAČUN", dokument1:"DOBAVNICA", port:8060, pport:8060, naslov:'tp22', naslov2:'tp8', rnaslov:'tp23', pnaslov:'tp9', apppred:7}];


$scope.style1={"background-color":($scope.applist[appn]).bcolor1};
$scope.style2={"background-color":$scope.applist[appn].bcolor2};
$scope.style3={"background-color":$scope.applist[appn].bcolor3};
$scope.style4={"background-color":$scope.applist[appn].bcolor4};

	var usr, leto1, leto2, mesec1, mesec2, neplac;
	if (route.leto1 == undefined)	leto1 = "23";//"08";
		else	leto1 = route.leto1;
	if (route.leto2 == undefined)	leto2 = "23";//"12";
		else	leto2 = route.leto2;
	if (route.mesec1 == undefined)	mesec1 = "01";
		else	mesec1 = route.mesec1;
	if (route.mesec2 == undefined)	mesec2 = "12";
		else	mesec2 = route.mesec2;
	if (route.neplac == undefined)	neplac = "-1";
		else	neplac = route.neplac;	
	if (route.usr == undefined)	usr = "PUBLIC";
		else	usr = route.usr;	
		
//	this.datum = {leto1:route.leto1, leto2:route.leto2, mesec1:route.mesec1, mesec2:route.mesec2, neplac:route.neplac};
	this.datum = {leto1:leto1, leto2:leto2, mesec1:mesec1, mesec2:mesec2, neplac:neplac};
	$scope.uporabnik = {uporabnik:"PUBLIC", uporabnikp:"", uname:"", uporabnikp2:"" };
		  
		  this.l1 = leto1;
		  this.l2 = leto2;
		  this.m1 = mesec1;
		  this.m2 = mesec2;
		this.nepl = neplac;
		this.usr = usr;		  

		  console.log("$scope:");
		  console.log($scope);
		  console.log("$location");
		  console.log($location);
		  console.log("route");
		  console.log(route);
		  console.log("$location.$$path, $$port");
		  console.log($location.$$path);
		  console.log($location.$$port);
		  console.log(appn);
		  console.log("tostring");
		var testn = 1234567;
		  console.log(testn.toString().substring(1,4));

//		var portn = $location.$$port - 808;//8080;
//		var ports = (portn-808).toString();	//'8080';

		  //$scope.leto3 = route.leto1;
		  
		  this.user1 = location;
		  this.user2 = "recho";
		  
	this.udata = Udata.query();
	console.log(this.udata);

    this.udata.$promise.then( function (data) {
	console.log("111");
	console.log(data);
	console.log(data.user.username);
		$scope.uporabnik.uporabnik = data.user.username;
		$scope.uporabnik.uname = data.user.uname;
         $scope.racunilist = Racuni2.query({leto1:leto1, leto2:leto2, mesec1:mesec1, mesec2:mesec2, neplac:neplac, usr:data.user.uname, space9:$scope.applist[appn].space9, naslov:$scope.applist[appn].naslov2});

	});

	$scope.reload_page1 = function(dat) {
		var url1 =  "https://server4875.si/#!/tisk2?app=" + appn.toString() + "&leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2 + "&neplac=" + dat.neplac;
		window.open(url1,"_self");
	};
	$scope.reload_page2 = function(dat) {
		var url1 =  "https://server4875.si/#!/tisk2?app=" + appn.toString() + "&leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2 + "&neplac=" + dat.neplac;
		window.open(url1, '_blank').focus();
	};
	$scope.reload_page3 = function(dat) {
		var url1 =  "https://server4875.si/#!/tisk2?app=" + appn.toString() + "&leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2 + "&neplac=" + dat.neplac;
		window.open(url1, "_blank", "width=1150, height=850");
	};
	$scope.samo_racuni = function(dat) {
		var url1 =  "https://server4875.si/#!/tisk?app=" + appn.toString() + "&leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2 + "&neplac=" + dat.neplac;
		window.open(url1, "_blank").focus();
	//, "width=1150, height=850");
	};


	    $scope.GetDetails = function(doku) {
	console.log(doku);
		var url1 =  "https://server4875.si/#!/racun2?app=" + appn.toString() + "&leto=" + doku.substring(6,8) + "&doku=" + doku.substring(0,4) + "&usr=" + "TB1234";
		window.open(url1, "_blank", "width=1150, height=850");
	    };  

	    $scope.GetDetailsK = function(doku) {
	console.log(doku);
		var url1 =  "https://server4875.si/#!/racun3?app=" + appn.toString() + "&leto=" + doku.substring(6,8) + "&doku=" + doku.substring(0,4);
		window.open(url1, "_blank", "width=1150, height=850");
	    };  
	    
	$scope.mpodatki = function() {
		var url1 =  "https://server4875.si/#!/mdata?app=" + appn.toString();
		window.open(url1, "_blank", "width=1250, height=850");
	};

	$scope.sporocila = function() {
		var url1 =  "https://server4875.si/#!/tekst5?app=" + appn.toString();
		window.open(url1, "_blank", "width=1250, height=850");
	};

	$scope.nov_racun1 = function() {
		var url1 =  "https://server4875.si/#!/racun2?app=" + appn.toString();
		window.open(url1, "_self");
	};
	$scope.nov_racun2 = function() {
		var url1 =  "https://server4875.si/#!/racun2?app=" + appn.toString();
		window.open(url1, "_blank").focus();
	};
	$scope.nov_racun3 = function() {
		var url1 =  "https://server4875.si/#!/racun2?app=" + appn.toString();
		window.open(url1, "_blank", "width=1250, height=850");
	};

  
	$scope.partnerji1 = function(dat) {
		var url1 =  "https://server4875.si/#!/partnerji?app=" + appn.toString() + "&leto1=" + "02" + "&leto2="
				+ "01" + "&mesec1=" + "00" +  "&mesec2=" + "12";
		window.open(url1, "_self");
	};
	$scope.partnerji2 = function(dat) {
		var url1 =  "https://server4875.si/#!/partnerji?app=" + appn.toString() + "&leto1=" + "02" + "&leto2="
				+ "01" + "&mesec1=" + "00" +  "&mesec2=" + "12";
		window.open(url1, "_blank").focus();
	};
	$scope.partnerji3 = function(dat) {
		var url1 =  "https://server4875.si/#!/partnerji?app=" + appn.toString() + "&leto1=" + "02" + "&leto2="
				+ "01" + "&mesec1=" + "00" +  "&mesec2=" + "12";
		window.open(url1, "_blank", "width=1150, height=850");
	};
	$scope.partnerji4 = function(dat) {
		var url1 =  "https://server4875.si/#!/partnerji?app=" + appn.toString() + "&leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2;
		window.open(url1, "_self");
	};
	$scope.partnerji5 = function(dat) {
		var url1 =  "https://server4875.si/#!/partnerji?app=" + appn.toString() + "&leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2;
		window.open(url1, "_blank").focus();
	};
	$scope.partnerji6 = function(dat) {
		var url1 =  "https://server4875.si/#!/partnerji?app=" + appn.toString() + "&leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2;
		window.open(url1, "_blank", "width=1150, height=850");
	};

	$scope.partnerji7 = function(dat) {
		var url1 =  "https://server4875.si/#!/klavzule?app=" + appn.toString();
		window.open(url1, "_self");
	};
	$scope.partnerji8 = function(dat) {
		var url1 =  "https://server4875.si/#!/klavzule?app=" + appn.toString();
		window.open(url1, "_blank").focus();
	};
	$scope.partnerji9 = function(dat) {
		var url1 =  "https://server4875.si/#!/klavzule?app=" + appn.toString();
		window.open(url1, "_blank", "width=1150, height=850");
	};


	$scope.racuni12 = function(dat) {
		var url1 =  "https://server4875.si/#!/racuni12?app=" + appn.toString() + "&leto=" + dat.leto1;
		window.open(url1, "_blank", "width=1150, height=850");
	};

	$scope.racuni12gr = function(dat) {
		var url1 =  "https://server4875.si/#!/racuni12gr?app=" + appn.toString() + "&leto=" + dat.leto1;
		window.open(url1, "_blank", "width=1150, height=850");
	};

	$scope.racuni100 = function(dat) {
		var url1 =  "https://server4875.si/#!/racuni12?app=" + appn.toString();
		window.open(url1, "_blank", "width=1150, height=850");
	};

	$scope.racuniP = function(dat) {
		var url1 =  "https://server4875.si/#!/racuni12?app=" + appn.toString() + "&leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2;
		window.open(url1, "_blank", "width=1150, height=850");
	};
	$scope.predracuni = function(dat) {
		var url1 =  "https://server4875.si/#!/tisk?app=" + $scope.applist[appn].apppred + "&leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2 + "&neplac=" + dat.neplac;
		window.open(url1, "_blank").focus();
	};

	    $scope.GetDetails12 = function(dat, doku) {
	console.log(doku);
		var url1 = "https://server4875.si/#!/racuni12?app=" + appn.toString() + "&leto=" + dat.leto1 + "&doku=" + doku.substring(0,4) + "&dokul=" + doku.substring(6,8);
		window.open(url1, "_blank", "width=1150, height=850");
	    };  

	    $scope.GetDetails100 = function(dat, doku) {
	console.log(doku);
		var url1 = "https://server4875.si/#!/racuni12?&app=" + appn.toString() + "&doku=" + doku.substring(0,4) + "&dokul=" + doku.substring(6,8);
		window.open(url1, "_blank", "width=1150, height=850");
	    };
  
	    $scope.loginT = function(uporabnik) {
	console.log("loginT");
			console.log(uporabnik);
		$scope.uporabnik.uporabnik="";
		var url1 = "https://server4875.si/login";
		this.wdata = window.open(url1, "_blank", "width=550, height=85");
	console.log(this.wdata);
		this.udata = Udata.query();
	    this.udata.$promise.then( function (data) {
		console.log("111");
		console.log(data);
		console.log(data.user.username);
		uporabnik.uporabnik= data.user.username;
		$scope.uporabnik.uporabnik = data.user.username;
		$scope.uporabnik.uname = data.user.uname;
		parent.location.reload();
		});
	    };

window['cookieconsent_example_util'] = {
 
  initialisePopupSelector: function(options) {
    var examples = Object.keys(options.popups);
    var itemOpen = '<li><span>';
    var itemClose = '</span></li>';
    var instances = [];


      var myOpts = options.popups[examples[0]];

      myOpts.autoOpen = false;

      options.cookieconsent.initialise(
        myOpts,
        function(idx, popup) {
          instances[idx] = popup;
        }.bind(null, 0),
        function(idx, err, popup) {
          instances[idx] = popup;
          console.error(err);
        }.bind(null, 0)
      );
      
      instances[0].open();
//for    }

//    return instances;
  }
};


function timeStamp() {
  var now = new Date();
  var time = [now.getHours(), now.getMinutes(), now.getSeconds()];
  for (var i = 1; i < 3; i++) {
    if (time[i] < 10) {
      time[i] = '0' + time[i];
    }
  }
  return '[' + time.join(':') + '] ';
}	    
	    
$scope.login = function(uporabnik) {
      var fval1 = (function (C, U) {

        var palettes = {
          honeybee: { "popup": { "background": '#000' }, "button": { "background": '#f1d600', padding: '5px 25px' } },
          blurple: { "popup": { "background": '#3937a3' }, "button": { "background": '#e62576' } },
          mono: { "popup": { "background": "#237afc" }, "button": { "background": "transparent", "border": "#fff", "text": "#fff", padding: '5px 40px' } },
          nuclear: { "popup": { "background": "#aa0000", "text": "#ffdddd" }, "button": { "background": "#ff0000" } },
          cosmo: { "popup": { "background": "#383b75" }, "button": { "background": "#f1d600", padding: '5px 50px' } },
          neon: { "popup": { "background": "#1d8a8a" }, "button": { "background": "#62ffaa" } },
          corporate: { "popup": { "background": "#edeff5", "text": "#838391" }, "button": { "background": "#4b81e8" } }
        };

        var cookiePopups = U.initialisePopupSelector({
          cookieconsent: C,
          selector: document.querySelector('.example-selector'),
          popups: {
            'Cosmo': {
              type: 'opt-out',
//              position: 'bottom',
              position: 'top',
              palette: palettes.neon,
                            onStatusChange: function(status, chosenBefore) {
		console.log("status: " + status + " : " + chosenBefore );
if (status == "allow"){

	console.log("login");
		console.log(uporabnik);

	var crdata = CRdata.query({username:uporabnik.uporabnik});

	crdata.$promise.then( function (crdata) {

		var key1 = CryptoJS.MD5(crdata.message2);
		var key2 = crdata.message3;
		var key3 = CryptoJS.lib.WordArray.random(64);
		var key4 = (CryptoJS.lib.WordArray.random(32)).toString(CryptoJS.enc.Hex);
		var dataj1 = {"username": uporabnik.uporabnik, "passwd": uporabnik.uporabnikp, "pp":uporabnik.uporabnikp2, "K2":key2, "K3":key3};
//		var dataj1 = {"U": uporabnik.uporabnik, "P": uporabnik.uporabnikp};
//		var message5 = {"A1":"attrib1","A2":"attrib2"};
		var dataj2 = CryptoJS.TripleDES.encrypt(JSON.stringify(dataj1), 
		    key1, 
		    {
		        mode: CryptoJS.mode.ECB, 
		        padding: CryptoJS.pad.Pkcs7
		    }).toString();
		var dataj3 = {"message":dataj2, "message2":key4, "message3":crdata.message1};


		$http({method: 'POST',

			    url: 'https://server4875.si/login',

		            data: dataj3,
//			data: {"username":"test", "password":"test"},
//		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		            headers: { 'Content-Type': 'application/json' }
		        }).then(function (response) {
	    			console.log("data");
	    			console.log(response.data.message);
	    				alert(response.data.message);
	    					var udata = Udata.query();

	    udata.$promise.then( function (data) {

		uporabnik.uporabnik= data.user.username;
		uporabnik.uporabnikp="";
		$scope.uporabnik.uporabnik = data.user.username;
		$scope.uporabnik.uname = data.user.uname;
		//$scope.uporabnik.uporabnik = data.user.username;
         $scope.racunilist = Racuni2.query({leto1:leto1, leto2:leto2, mesec1:mesec1, mesec2:mesec2, neplac:neplac, usr:data.user.uname, space9:$scope.applist[appn].space9, naslov:$scope.applist[appn].naslov});

//		parent.location.reload();
		});

			}); 
	});
			}	//if status allow
			else {alert("Prijava uporabnika zavrnjena.")}


		},
		              content: {
                "message": "Spletna stran uporablja piškotke. Brez piškotkov je možen le ogled podatkov uporabnika PUBLIC.",
                "dismiss": "Awesome",
                "allow": "Se strinjam",
                "deny": "Zavrni",
                "link": "",
//                href: 'https://www.cookiesandyou.com',
//                "policy": "",
//		"target": '_blank',
              },

            },
          },
        });
      }(window.cookieconsent, window.cookieconsent_example_util));
      console.log("cookiePopups" + fval1);
      };
	  

	    $scope.login2 = function(uporabnik) {
	console.log("login");
		console.log(uporabnik);

		var key1 = CryptoJS.MD5("6f4d88745a790b5fcfb1363b4a3dc29a27bb326ba4ab65ca85f0d07427e19246");
		var key2 = "acae84266cc3451a3d71958e6605a4c9f2dc629f7b4332086ecb8abe50bea0b7";
		var key3 = CryptoJS.lib.WordArray.random(64);
		var dataj1 = {"username": uporabnik.uporabnik, "passwd": uporabnik.uporabnikp, "K2":key2, "K3":key3};
//		var dataj1 = {"U": uporabnik.uporabnik, "P": uporabnik.uporabnikp};
//		var message5 = {"A1":"attrib1","A2":"attrib2"};
		var dataj2 = CryptoJS.TripleDES.encrypt(JSON.stringify(dataj1), 
		    key1, 
		    {
		        mode: CryptoJS.mode.ECB, 
		        padding: CryptoJS.pad.Pkcs7
		    }).toString();
		var dataj3 = {"message":dataj2};


		$http({method: 'POST',

			    url: 'https://server4875.si/login2',

		            data: dataj3,
//			data: {"username":"test", "password":"test"},
//		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		            headers: { 'Content-Type': 'application/json' }
		        }).then(function (response) {
	    			console.log("data");
	    			console.log(response.data.message);
	    				alert(response.data.message);
	    					var udata = Udata.query();

	    udata.$promise.then( function (data) {

		uporabnik.uporabnik= data.user.username;
		uporabnik.uporabnikp="";
		//$scope.uporabnik.uporabnik = data.user.username;
		$scope.uporabnik.uporabnik = data.user.username;
		$scope.uporabnik.uname = data.user.uname;
         $scope.racunilist = Racuni2.query({leto1:leto1, leto2:leto2, mesec1:mesec1, mesec2:mesec2, neplac:neplac, usr:data.user.uname, space9:$scope.applist[appn].space9, naslov:$scope.applist[appn].naslov});

//		parent.location.reload();
		});

			}); 

	    };

	    $scope.kreirajuporabnika = function(uporabnik) {

	if ( ((uporabnik.uporabnik).length > 0) && ((uporabnik.uporabnik).length <30) && ((uporabnik.uporabnik)===(uporabnik.uporabnik).toString())){
	if (uporabnik.uporabnikp === uporabnik.uporabnikp.toString()) {
	if ( ((uporabnik.uporabnikp).toString()===(uporabnik.uporabnikp2).toString()) && 
		(((uporabnik.uporabnikp).toString()).length === ((uporabnik.uporabnikp2).toString()).length)  ){ 
		if  ( (((uporabnik.uporabnikp).toString()).length > 7) && (((uporabnik.uporabnikp).toString()).length < 21) ){
			
//var crypto = require("crypto");
//var id = crypto.randomBytes(20).toString('hex');	 "bb5dc8842ca31d4603d6aa11448d1654"

		var crdata = CRdata.query({username:uporabnik.uporabnik});

		crdata.$promise.then( function (crdata) {


		var key = CryptoJS.MD5(crdata.message2);
		var key2 = crdata.message3;
		//var key2 = ("bb3491c01273319898909b29fcce314ccfaee262086e737db444f6ec65d3e4ea");
		var key3 = CryptoJS.lib.WordArray.random(32);
		var key4 = (CryptoJS.lib.WordArray.random(32)).toString(CryptoJS.enc.Hex);		
		var dataj1 = {"U": (uporabnik.uporabnik).toString(), "P": (uporabnik.uporabnikp).toString(), "K2":key2, "K3":key3};
//		var dataj1 = {"U": uporabnik.uporabnik, "P": uporabnik.uporabnikp};
//		var message5 = {"A1":"attrib1","A2":"attrib2"};
		var dataj2 = CryptoJS.TripleDES.encrypt(JSON.stringify(dataj1), 
		    key, 
		    {
		        mode: CryptoJS.mode.ECB, 
		        padding: CryptoJS.pad.Pkcs7
		    }).toString();
		var dataj3 = {"message":dataj2, "message2":key4, "message3":crdata.message1};
		$http({method: 'POST',
			    url: 'https://server4875.si/signup',
		            data: dataj3,
		            headers: { 'Content-Type': 'application/json' }
		        }).then(function (response) {
    				alert(response.data.message);
				$scope.login(uporabnik);
		}); 

		});		
		} else {alert("Geslo je krajše od 8 znakov ali daljše od 21 znakov!");}
	} else {alert("Geslo in ponovitev gesla se ne ujemata!");}
	} else {alert("Geslo...znaki...");}
	} else {alert("Vpiši uporabniško ime!")}			 	    
};

	    $scope.kreirajuporabnika2 = function(uporabnik) {
	    

var key = CryptoJS.MD5('my passphraseeee');
var message = 'vg0m/29RO6Y9o5SATGFj4H3p612sIIk6/Ny1wtr8HLomM3gI5WYYNKy//pAjq/ZJ';
var message3 = "xxOpF2WXn1zrjk70334676XTj3vd9RSZly6I5SYWoGCH627XXPp/lA==";
var message4 = "ne bom ti povedal, da je na koncu past...";
var message5 = {"A1":"attrib1","A2":"attrib2"};
var message2 = CryptoJS.TripleDES.encrypt(JSON.stringify(message5), 
    key, 
    {
        mode: CryptoJS.mode.ECB, 
        padding: CryptoJS.pad.Pkcs7
    }).toString();
    
const decrypted = CryptoJS.TripleDES.decrypt(
    message2, 
    key, 
    {
        mode: CryptoJS.mode.ECB, 
        padding: CryptoJS.pad.Pkcs7
    }
).toString(CryptoJS.enc.Utf8);
//console.log(decrypted)
alert(message2 + " : " + decrypted);

	    
	console.log("login");
		console.log(uporabnik);

	var dataj1 = {"username":uporabnik.uporabnik, "passwd":uporabnik.uporabnikp, "message2":message2};
//	var dataj2 = [{"username":"test"}];
//

var uname1 = dataj1.username;
//if (uname1.length>3)
if ( ((uporabnik.uporabnik).trim().length <20) && ((uporabnik.uporabnik).trim().length > 0) )
	if (uporabnik.uporabnikp===uporabnik.uporabnikp2) 
		if ((uporabnik.uporabnikp).length === (uporabnik.uporabnikp2).length) 
			if  ( ((uporabnik.uporabnikp).length > 7) && ((uporabnik.uporabnikp).length < 21) )
{
var pn = 1;
while (pn < 10) pn++;
alert(uname1.substring(0,4).padEnd(4, "0")+ pn.toString().padStart(4,"0"));	//(Math.floor(Math.random() * 10)).toString());
}
		$http({method: 'POST',

			    url: 'https://server4875.si/signup',

		            data: dataj1,
//	data:decrypted,
//	data:message2,
//			data: {"username":"test", "password":"test"},
//		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		            headers: { 'Content-Type': 'application/json' }
		        }).then(function (response) {
	    			console.log("data");
	    			console.log(response.data.message);
	    				alert(response.data.message);
	    					var udata = Udata.query();

	    udata.$promise.then( function (data) {
		console.log("111");
		console.log(data);
//		console.log(data.user.username);
		uporabnik.uporabnik= data.user.username;
		uporabnik.uporabnikp="";
		//$scope.uporabnik.uporabnik = data.user.username;
		$scope.uporabnik.uporabnik = data.user.username;
		$scope.uporabnik.uname = data.user.uname;
//		parent.location.reload();
		});

			}); 

	    };


	    $scope.logout = function(uporabnik) {
		console.log("logout");
		console.log(uporabnik);

		$http({method: 'GET',
			    url: 'https://server4875.si/logout',
//			data: {"username":"test", "password":"test"},
//		            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		            headers: { 'Content-Type': 'application/json' }
		        }).then(function (response) {
	    			console.log("data");
	    			console.log(response.data);
	    			alert(response.data.message);
	    			var udata = Udata.query();
	    			
	    				    udata.$promise.then( function (data) {

		uporabnik.uporabnik= data.user.username;
		uporabnik.uporabnikp="";
		uporabnik.uporabnikp2="";		
		//$scope.uporabnik.uporabnik = data.user.username;
		$scope.uporabnik.uporabnik = data.user.username;
		$scope.uporabnik.uname = data.user.uname;
         $scope.racunilist = Racuni2.query({leto1:leto1, leto2:leto2, mesec1:mesec1, mesec2:mesec2, neplac:neplac, usr:data.user.uname, space9:$scope.applist[appn].space9, naslov:$scope.applist[appn].naslov});

//		parent.location.reload();
		});

	    			
	    			
			}); 

console.log("logout2");
	    };

	    $scope.protected = function() {
		console.log("pro");
		var url1 = "https://server4875.si/protected";
		window.open(url1, "_blank", "width=350, height=285");

	    };
	    
	    $scope.Captcha = function () {
	    alert("captcha");
	        var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
    document.getElementById("mainCaptcha").value = code

	    };
	    	    
	    $scope.Captcha2 = function () {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
    document.getElementById("mainCaptcha").value = code
}
 $scope.ValidCaptcha = function() {
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
    if (string1 == string2) {
        return true;
    }
    else {
        return false;
    }
}
 $scope.removeSpaces = function(string) {
    return string.split(' ').join('');
}

$scope.navodila = function(){
		var url1 =  "https://server4875.si/Dopis_N4.pdf";
		window.open(url1, '_blank').focus();
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$scope.getBase64ImageFromURL = function(url) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.setAttribute("crossOrigin", "anonymous");

    img.onload = () => {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      var dataURL = canvas.toDataURL("image/png");

      resolve(dataURL);
    };

    img.onerror = error => {
      reject(error);
    };

    img.src = url;
  });
}




var docDefinition3 = {
header: 'simple text',

  footer: {
    columns: [
      'Left part',
      { text: 'Right part', alignment: 'right' }
    ]
  },

      content: [
        {
          text: 'Criketers1'
        },
        {
          style: 'demoTable',
          table: {
            widths: ['*', '*', '*', '*', '*'],
            body: [
              [{text: '', style: 'header'}, {text: 'KOLIČINA', style: 'header'},
                {text: 'CENA', style: 'header'}, {text: 'DDV', style: 'header'}, {text: '', style: 'header'}
              ],
		['aa1','bb2','cc3', 'dd4', 'ee5']
            ]
          }
        }
      ],
      styles: {
        header: {
          bold: true,
          color: '#000',
          fontSize: 11
        },
        demoTable: {
          color: '#666',
          fontSize: 10
        }
      }
    };

	    $scope.GetDetailsR = function(racun) {
	console.log(racun);
	docDefinition3.content[0].text= racun.IME;
	docDefinition3.content[1].table.body[1] = [racun.PR1[0].TEKST, racun.PR1[0].KOLICINA, racun.PR1[0].NCENA, racun.PR1[0].PD, ((racun.PR1[0].KOLICINA*racun.PR1[0].NCENA)*(1+(racun.PR1[0].PD/100)))];
	for(var i=1;i<racun.PR1.length;i++){
		docDefinition3.content[1].table.body.push([racun.PR1[i].TEKST, racun.PR1[i].KOLICINA, racun.PR1[i].NCENA, racun.PR1[i].PD, ((racun.PR1[i].KOLICINA*racun.PR1[i].NCENA)*(1+(racun.PR1[i].PD/100)))]);
	}
	docDefinition3.content[1].table.body.push(['','','','', '']);
	docDefinition3.content[1].table.body.push(['', '', racun.DGVPV, racun.DGVPD, racun.DGMPV]);
   
      pdfMake.createPdf(docDefinition3).open();

		//var url1 = "https://server4875.si/#!/racuni12?&doku=" + doku.substring(0,4) + "&dokul=" + doku.substring(6,8);
		//window.open(url1, "_blank", "width=1150, height=850");
	    };  


async function showPdf() {
    let docDefinition = {
      content: [
        {
          text: 'PDF Generated with Image from external URL',
          fontSize : 20
        }
,
        {
//          image: "logo1.png"
          image: await $scope.getBase64ImageFromURL(
//"Dopis_glava.jpg?auto=compress&cs=tinysrgb&dpr=1&w=300"
//"logo1.png"
//"logo2.pdf"
//"chillin.svg"
"logo4.png"
//            "https://images.pexels.com/photos/209640/pexels-photo-209640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"
          )
        }        
      ]
    };
    pdfMake.createPdf(docDefinition).open();
  }



 

	    $scope.GetDetailsD = function(racun) {
	console.log(racun);


showPdf();


	    };  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function createPdfDGTest() {
  // Load cover and content pdfs
//const fs = require('fs');

const url = 'https://server4875.si/Dopis_A4.pdf';
  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
//const cover = await PDFLib.PDFDocument.load("Dopis_A4.pdf");
const content = await PDFLib.PDFDocument.load(existingPdfBytes);

//  const cover = await PDFLib.PDFDocument.load(fs.readFileSync('./Dopis_A4.pdf'));
//  const content = await PDFLib.PDFDocument.load(fs.readFileSync('./document.pdf'));

  // Create a new document
  const doc = await PDFLib.PDFDocument.create();

 
//this.applist = [{port:8080},{port:8080},{port:8070}];
const fonta = [{fontn: await content.embedFont(PDFLib.StandardFonts.Helvetica), text:"HelveticaFont1234.5678"}, {fontn:await content.embedFont(PDFLib.StandardFonts.Courier), text:"CourierFont1234.5678"}, {fontn:await content.embedFont(PDFLib.StandardFonts.TimesRoman), text:"TimesRomanFont1234.5678"},{fontn:await content.embedFont(PDFLib.StandardFonts.CourierBold), text:"CourierBoldFont1234.5678"},{fontn:await content.embedFont(PDFLib.StandardFonts.CourierBoldOblique), text:"CourierBoldObliqueFont1234.5678"}, {fontn:await content.embedFont(PDFLib.StandardFonts.CourierOblique), text:"CourierObliqueFont1234.5678"},{fontn: await content.embedFont(PDFLib.StandardFonts.HelveticaBold), text:"HelveticaBoldFont1234.5678"}, {fontn: await content.embedFont(PDFLib.StandardFonts.HelveticaBoldOblique), text:"HelveticaBoldObliqueFont1234.5678"},{fontn: await content.embedFont(PDFLib.StandardFonts.HelveticaOblique), text:"HelveticaObliqueFont1234.5678"},{fontn:await content.embedFont(PDFLib.StandardFonts.Symbol), text:"αβ1234.5678"},{fontn:await content.embedFont(PDFLib.StandardFonts.TimesRomanBold), text:"TimesRomanBoldFont1234.5678"},{fontn:await content.embedFont(PDFLib.StandardFonts.TimesRomanBoldItalic), text:"TimesRomanBoldItalicFont1234.5678"},{fontn:await content.embedFont(PDFLib.StandardFonts.TimesRomanItalic), text:"TimesRomanItalicFont1234.5678"},{fontn:await content.embedFont(PDFLib.StandardFonts.ZapfDingbats), text:"✔❋"}];

const fontar = [await content.embedFont(PDFLib.StandardFonts.Helvetica), await content.embedFont(PDFLib.StandardFonts.Courier)];
const helveticaFont = await content.embedFont(PDFLib.StandardFonts.Helvetica);
const courierFont = await content.embedFont(PDFLib.StandardFonts.Courier);

  const pages = content.getPages()
  const firstPage = pages[0]
  const { width, height } = firstPage.getSize()

for(var j=0;j<2;j++){
 firstPage.drawText('This text was added with JavaScript!', {
    x: 20+(j*8),
    y: height-50,
    size: 16,
    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });
}

  firstPage.drawText('This text was added with JavaScript!', {
    x: 5,
    y: height / 2 + 300,
    size: 40,
    font: helveticaFont,
    color: PDFLib.rgb(0.95, 0.1, 0.1),
    rotate: PDFLib.degrees(-45),
  });
  firstPage.drawText('This text was added with JavaScript!', {
    x: 25,
    y: height - 20,
    size: 10,
    font: helveticaFont,
    color: PDFLib.rgb(0.8, 0.8, 0.8),
//    rotate: PDFLib.degrees(-45),
  });

 for (var i=0; i<14; i++){
  firstPage.drawText(fonta[i].text, {
    x: 30,
    y: height - 100 - (20*i),
    size: 14,
    font: fonta[i].fontn,
    color: PDFLib.rgb(0.1, 0.1, 0.1),
  });
}

 for (var i=0; i<14; i++){
  firstPage.drawText(fonta[i].text, {
    x: 60,
    y: height - 440 - (20*i),
    size: 16,
    font: fonta[i].fontn,
    color: PDFLib.rgb(0.1, 0.1, 0.1),
  });
}


 for (var i=0; i<14; i++){
  firstPage.drawText(fonta[i].text, {
    x: 300,
    y: height - 200 - (20*i),
    size: 15,
    font: fonta[i].fontn,
    color: PDFLib.rgb(0.1, 0.1, 0.1),
  });
}

//	Object.values($scope.PR0[0].PL1).reduce((t, {ZNESEK}) => t + (ZNESEK), 0);

	const pdfBytes = await content.save();

  let file = new Blob([pdfBytes], { type: 'application/pdf' });            
  var fileURL = URL.createObjectURL(file);
  window.open(fileURL);
//    pdfMake.createPdf(pdfBytes).open();
//      document.getElementById('pdf').src = pdfBytes;

};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function createPdfRGTest(racun) {

const url = 'https://server4875.si/Dopis_A4.pdf';
const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
const content = await PDFLib.PDFDocument.load(existingPdfBytes);
const helveticaFont = await content.embedFont(PDFLib.StandardFonts.Helvetica)

  const pages = content.getPages()
  const firstPage = pages[0]
  const { width, height } = firstPage.getSize()
  firstPage.drawText('This text was added with JavaScript!', {
    x: 5,
    y: height / 2 + 300,
    size: 50,
    font: helveticaFont,
    color: PDFLib.rgb(0.95, 0.1, 0.1),
    rotate: PDFLib.degrees(-45),
  });
  firstPage.drawText('This text was added with JavaScript!', {
    x: 5,
    y: height / 2 + 300,
    size: 10,
    font: helveticaFont,
    color: PDFLib.rgb(0.8, 0.8, 0.8),
//    rotate: PDFLib.degrees(-45),
  });

  firstPage.drawText('This text was added with JavaScript!', {
    x: 20,
    y: 500,
    size: 16,
    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });
 

	const pdfBytes = await content.save();

  let file = new Blob([pdfBytes], { type: 'application/pdf' });            
  var fileURL = URL.createObjectURL(file);
  window.open(fileURL);
//    pdfMake.createPdf(pdfBytes).open();
//      document.getElementById('pdf').src = pdfBytes;

};




async function createPdfRR(racuni) {

var url;
var existingPdfBytes;
//const mpagen = (racun.PR1.length)+(PR0[0].KL[0].S);
//const mpagec10 = (Math.trunc((((racun.PR1.length)>0)?((racun.PR1.length)-1):0)/10));
//const mpagec = ( (mpagen>10) ? (mpagec10 + (((PR0[0].KL[0].S)>0)?2:1)) : 0);
console.log("mpage");
//console.log(racun.PR1.length);
//console.log(PR0[0].KL[0].S);
//console.log(mpagec);



var content;
var pages;
var firstPage;
var firstPage1;
var secondPage;
var mpagec=0;

	content = await PDFLib.PDFDocument.create();
	for(var i=0; i<=mpagec ;i++)
	  content.addPage();
	pages = content.getPages();
  	firstPage = pages[0];


content.registerFontkit(fontkit);

const furl = 'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf';
const fontBytes = await fetch(furl).then((res) => res.arrayBuffer());

const helveticaFont = await content.embedFont(PDFLib.StandardFonts.Helvetica);
const helveticaFontBold = await content.embedFont(PDFLib.StandardFonts.HelveticaBold)

  const { width, height } = firstPage.getSize()

const ubuntuFont = await content.embedFont(fontBytes);

const fontS = 12;
const visina = 90;

var racuniS = racuni.sort( function(a,b){return a.DOKU > b.DOKU} );

//for(var stran=0; stran<=mpagec;stran++){
//firstPage = pages[stran];

 firstPage.drawText( "DOKU" , {font:ubuntuFont,
    x: 65,
    y: (height/2 + 275) + (20),
    size: fontS,
//    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText( "DATUM" , {font:ubuntuFont,
    x: 135,
    y: (height/2 + 275) + (20),
    size: fontS,
//    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText( "DDV" , {font:ubuntuFont,
    x: 205,
    y: (height/2 + 275) + (20),
    size: fontS,
//    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });



for(var rn=0;rn<10;rn++){

if (racuniS[rn].hasOwnProperty("DOKU")){
 firstPage.drawText(racuniS[rn].DOKU, {font:ubuntuFont,
    x: 65,
    y: (height/2 + 275) - (rn*20),
    size: fontS,
//    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });
}


if (racuniS[rn].hasOwnProperty("DATP")){
 firstPage.drawText(racuniS[rn].DATP.substring(0,10), {font:ubuntuFont,
    x: 135,
    y: (height/2 + 275) - (rn*20),
    size: fontS,
//    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });
}


if (racuniS[rn].hasOwnProperty("DGVPD")){
 firstPage.drawText( (racuniS[rn].DGVPD).toPrecision(
		((Math.trunc(racuniS[rn].DGVPD)).toString()).length+2).padStart( 11, " ") , {font:ubuntuFont,
    x: 205,
    y: (height/2 + 275) - (rn*20),
    size: fontS,
//    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });
}

if (racuniS[rn].hasOwnProperty("DGMPV")){
 firstPage.drawText( (racuniS[rn].DGVPV).toPrecision(
		((Math.trunc(racuniS[rn].DGVPV)).toString()).length+2).padStart( 11, " ") , {font:ubuntuFont,
    x: 285,
    y: (height/2 + 275) - (rn*20),
    size: fontS,
//    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });
}

if (racuniS[rn].hasOwnProperty("DGMPV")){
 firstPage.drawText( (racuniS[rn].DGMPV).toString().padStart( 11, " ") , {font:ubuntuFont,
    x: 365,
    y: (height/2 + 275) - (rn*20),
    size: fontS,
//    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });
}

if (racuniS[rn].hasOwnProperty("DGMPV")){
 firstPage.drawText( (racuniS[rn].DGMPV).toPrecision(
		((Math.trunc(racuniS[rn].DGMPV)).toString()).length+2).padStart( 11, " ") , {font:ubuntuFont,
    x: 445,
    y: (height/2 + 275) - (rn*20),
    size: fontS,
//    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });
}


}


	const pdfBytes = await content.save();

  let file = new Blob([pdfBytes], { type: 'application/pdf' });            
  var fileURL = URL.createObjectURL(file);
  window.open(fileURL);


}

$scope.getDetailsRR = function(racuni) {
	console.log("RR");
	createPdfRR(racuni);
}


async function createPdfRG(racun, grafike, jeRacun, PR0, uporabnik) {


//  console.log(value[1]); // 👉️ "hello"
//  console.log("arr:"); // 👉️ "hello"




var url;
var existingPdfBytes;
const mpagen = (PR0[0].PR1.length)+(PR0[0].KL[0].S);
const mpagec10 = (Math.trunc((((PR0[0].PR1.length)>0)?((PR0[0].PR1.length)-1):0)/10));
const mpagec = ( (mpagen>10) ? (mpagec10 + (((PR0[0].KL[0].S)>0)?2:1)) : 0);
console.log("mpage");
console.log(PR0[0].PR1.length);
console.log(PR0[0].KL[0].S);
console.log(mpagec);

if ( ((PR0[0].PR1.length) > 10) || (((PR0[0].PR1.length)+(PR0[0].KL[0].S)) > 10) )
	console.log("s..................................");

//url = ['https://server4875.si/Dopis_A4.pdf', 'https://server4875.si/Dopis_A42.pdf', 'https://server4875.si/Dopis_A43.pdf', 'https://server4875.si/Dopis_A44.pdf', 'https://server4875.si/Dopis_A45.pdf'];

if (PR0[0].MD != undefined && PR0[0].MD.hasOwnProperty("TEMPLATE") ) {
          url = ['https://server4875.si/' + PR0[0].MD.TEMPLATE + '.pdf', 'https://server4875.si/' + PR0[0].MD.TEMPLATE + '.pdf', 'https://server4875.si/' + PR0[0].MD.TEMPLATE + '.pdf', 'https://server4875.si/' + PR0[0].MD.TEMPLATE + '.pdf', 'https://server4875.si/' + PR0[0].MD.TEMPLATE + '.pdf'];
}
else {
          url = ['https://server4875.si/Dopis_A04.pdf', 'https://server4875.si/Dopis_A042.pdf', 'https://server4875.si/Dopis_A043.pdf', 'https://server4875.si/Dopis_A044.pdf', 'https://server4875.si/Dopis_A045.pdf'];
}

var content;
var pages;
var firstPage;
var firstPage1;
var secondPage;

if (grafike){
//	url = 'https://server4875.si/Dopis_A4.pdf';
	existingPdfBytes = await fetch(url[mpagec]).then(res => res.arrayBuffer())

	content = await PDFLib.PDFDocument.load(existingPdfBytes);
	pages = content.getPages();
  	firstPage = pages[0];

}else{
	content = await PDFLib.PDFDocument.create();
	for(var i=0; i<=mpagec ;i++)
	  content.addPage();
	pages = content.getPages();
  	firstPage = pages[0];
}

content.registerFontkit(fontkit);

const furl = 'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf';
const fontBytes = await fetch(furl).then((res) => res.arrayBuffer());

const helveticaFont = await content.embedFont(PDFLib.StandardFonts.Helvetica);
const helveticaFontBold = await content.embedFont(PDFLib.StandardFonts.HelveticaBold)

  const { width, height } = firstPage.getSize()

const ubuntuFont = await content.embedFont(fontBytes);



const fontS = 12;
const visina = 90;

for(var stran=0; stran<=mpagec;stran++){
firstPage = pages[stran];

if (PR0[0].hasOwnProperty("IME")){
 firstPage.drawText(PR0[0].IME, {font:ubuntuFont,
    x: 65,
    y: height/2 + 275,
    size: fontS,
//    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });
}

// firstPage.drawText('naslov 1\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x7B\x7C\x7D\x7E\x80\x81\x82\x83\x84\x85', {
// firstPage.drawText('naslov 1', {
if (PR0[0].PA[0] != undefined && PR0[0].PA[0].hasOwnProperty("NASLOV1") && PR0[0].PA[0].hasOwnProperty("NASLOV1ST")){
 firstPage.drawText(PR0[0].PA[0].NASLOV1 + " " + PR0[0].PA[0].NASLOV1ST, {font:ubuntuFont,
    x: 65,
    y: height/2 + 255,
    size: fontS,
//    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });
}

if (PR0[0].PA[0] != undefined && PR0[0].PA[0].hasOwnProperty("KRAJ1") && PR0[0].PA[0].hasOwnProperty("KRAJ1ST")){
 firstPage.drawText(PR0[0].PA[0].KRAJ1ST + "    " + PR0[0].PA[0].KRAJ1, {font:ubuntuFont,
    x: 65,
    y: height/2 + 225,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });
}

if (PR0[0].PA[0] != undefined && PR0[0].PA[0].hasOwnProperty("DRZAVA1")){
 firstPage.drawText(PR0[0].PA[0].DRZAVA1, {font:ubuntuFont,
    x: 65,
    y: height/2 + 195,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });
}

if (PR0[0].PA[0] != undefined && PR0[0].PA[0].hasOwnProperty("NOVTRR")){
	firstPage.drawText(PR0[0].PA[0].NOVTRR, {font:ubuntuFont,
	    x: 420,
	    y: height/2 + 285,
	    size: 10,
//	    font: helveticaFontBold,
	    color: PDFLib.rgb((PR0[0].PA[0].R), (PR0[0].PA[0].G), (PR0[0].PA[0].B))
	  });
}

if ( (!grafike) && (PR0[0].MD != undefined) && (PR0[0].MD.hasOwnProperty("TEKST1")) ){
	firstPage.drawText(PR0[0].MD.TEKST1, {
	    x: 370,
	    y: height/2 + 339,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	}

if ( (!grafike) && (PR0[0].MD != undefined) && (PR0[0].MD.hasOwnProperty("TEKST2")) ){
	firstPage.drawText(PR0[0].MD.TEKST2, {
	    x: 370,
	    y: height/2 + 326,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	}

if ( (!grafike) && (PR0[0].MD != undefined) && (PR0[0].MD.hasOwnProperty("TEKST3")) ){
	firstPage.drawText(PR0[0].MD.TEKST3, {
	    x: 370,
	    y: height/2 + 313,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	}

if ( (!grafike) && (PR0[0].MD != undefined) && (PR0[0].MD.hasOwnProperty("TEKST4")) ){
	firstPage.drawText(PR0[0].MD.TEKST4, {
	    x: 370,
	    y: height/2 + 300,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	}

if ( (!grafike) && (PR0[0].MD != undefined) && (PR0[0].MD.hasOwnProperty("TEKST5")) ){
	firstPage.drawText(PR0[0].MD.TEKST5, {
	    x: 370,
	    y: height/2 + 270,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	}

if ( (!grafike) && (PR0[0].MD != undefined) && (PR0[0].MD.hasOwnProperty("TEKST6")) ){
	firstPage.drawText(PR0[0].MD.TEKST6, {
	    x: 30,
	    y: height/2 - 380,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	}

if ( (!grafike) && (PR0[0].MD != undefined) && (PR0[0].MD.hasOwnProperty("TEKST7")) ){
	firstPage.drawText(PR0[0].MD.TEKST7, {
	    x: 30,
	    y: height/2 - 400,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	}


if ( (!grafike) && (PR0[0].MD != undefined) && (PR0[0].MD.hasOwnProperty("TEKST8")) ){
	firstPage.drawText(PR0[0].MD.TEKST8, {
	    x: 240,
	    y: height/2 - 380,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	}

if ( (!grafike) && (PR0[0].MD != undefined) && (PR0[0].MD.hasOwnProperty("TEKST9")) ){
	firstPage.drawText(PR0[0].MD.TEKST9, {
	    x: 240,
	    y: height/2 - 400,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	}

if ( (!grafike) && (PR0[0].MD != undefined) && (PR0[0].MD.hasOwnProperty("TEKST10")) ){
	firstPage.drawText(PR0[0].MD.TEKST10, {
	    x: 445,
	    y: height/2 - 380,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	}
	
if ( (!grafike) && (PR0[0].MD != undefined) && (PR0[0].MD.hasOwnProperty("TEKST11")) ){
	firstPage.drawText(PR0[0].MD.TEKST11, {
	    x: 445,
	    y: height/2 - 400,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	}
	

//	firstPage.drawText(('RAČUN:'), {
if (jeRacun){
	firstPage.drawText(($scope.applist[appn].dokument) + ":", {
	    x: 370,
	    y: height/2 + 247,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.5, 0.5)
	  });
}else{
	firstPage.drawText(($scope.applist[appn].dokument1) + ":", {
	    x: 370,
	    y: height/2 + 247,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.5, 0.5)
});
}

	firstPage.drawText(PR0[0].DOKU, {
	    x: 485,
	    y: height/2 + 250,
	    size: 10,
	    font: helveticaFontBold,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });

	firstPage.drawText("Log, dne.......................:" + "    " + (PR0[0].DATP).substring(8,10) + "." + (PR0[0].DATP).substring(5,7) + "." + (PR0[0].DATP).substring(0,4), {
	    x: 370,
	    y: height/2 + 225,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });

if (jeRacun){
	firstPage.drawText("Datum valute..............:" + "    " + (PR0[0].DATK).substring(8,10) + "." + (PR0[0].DATK).substring(5,7) + "." + (PR0[0].DATK).substring(0,4), {
	    x: 370,
	    y: height/2 + 212,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
}

if (jeRacun){
	firstPage.drawText("Številka dobavnice.....:" + "       " + PR0[0].DOKU, {
	    x: 370,
	    y: height/2 + 199,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
}

	firstPage.drawText("Odposlano dne...........:" + "    " + (PR0[0].DATP).substring(8,10) + "." + (PR0[0].DATP).substring(5,7) + "." + (PR0[0].DATP).substring(0,4), {
	    x: 370,
	    y: height/2 + 186,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });

console.log("naro:" + PR0[0].hasOwnProperty("NARO"));
if (PR0[0].hasOwnProperty("NARO")){
	firstPage.drawText("Štev.naročilnice..........:" + "    " + (PR0[0].NARO).padStart(10,""), {
	    x: 370,
	    y: height/2 + 173,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
}

if (PR0[0].PA[0] != undefined && PR0[0].PA[0].hasOwnProperty("PP")){
 firstPage.drawText("PP:" + PR0[0].PA[0].PP, {
    x: 50,
    y: height/2 + visina + 60,
    size: 10,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });
}

if (PR0[0].PA[0] != undefined && PR0[0].PA[0].hasOwnProperty("IID")){
 firstPage.drawText("vaša ID št.:" + PR0[0].PA[0].IID, {
    x: 190,
    y: height/2 + visina + 60,
    size: 10,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });
}

  
if ( (!grafike) && (PR0[0].MD != undefined) && (PR0[0].MD.hasOwnProperty("TEKST12")) ){
	firstPage.drawText(PR0[0].MD.TEKST12, {
	    x: 410,
	    y: height/2 +visina + 60,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	}
  

}	//for(stran)


//var mpagec2 = ((mpagen<=10)? 1 : (mpagec>0?mpagec-1:1));
var mpagec2 = ( ((PR0[0].KL[0].S)>0)? (mpagec -1) : (mpagec10 +1) );
for(var stran=0; stran<mpagec2;stran++){

firstPage = pages[stran];

//firstPage = pages[0];

 firstPage.drawText('naziv artikla', {font:ubuntuFont,
    x: 50,
    y: height/2 + visina +20,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText('EM', {
    x: 250,
    y: height/2 + visina +20,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText('količina', {
    x: 280,
    y: height/2 + visina +20,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText('VP/cena', {
    x: 340,
    y: height/2 + visina +20,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText('DDV', {
    x: 400,
    y: height/2 + visina +20,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText('cena', {
    x: 460,
    y: height/2 + visina +20,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText('znesek', {
    x: 520,
    y: height/2 + visina +20,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

	firstPage.drawLine({
	  start: { x: 15, y: height/2 + visina +15},
	  end: { x: 580, y:  height/2 + visina +15},
	  thickness: 1,
	  color: PDFLib.rgb(0.0, 0.0, 0.0),
	  opacity: 1.0,
	});


}	//for stran

var pageTmp = 0;
for(var pr1n = 0; pr1n<PR0[0].PR1.length; pr1n++){

	pageTmp = Math.trunc(pr1n/10);
	console.log("page:");
	console.log(pageTmp);
	firstPage = pages[pageTmp];

	firstPage.drawLine({
	  start: { x: 15, y: height/2 + visina -5 - 20*(pr1n%10) },
	  end: { x: 580, y:  height/2 + visina -5 - 20*(pr1n%10) },
	  thickness: 1,
	  color: PDFLib.rgb(0.05, 0.51, 0.05),
	  opacity: 0.25,
	});

	firstPage.drawText((PR0[0].PR1[pr1n].TEKST), {font:ubuntuFont,
	    x: 45,
	    y: height/2 + visina - 20*(pr1n%10),
	    size: fontS,
//	    font: helveticaFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText((PR0[0].PR1[pr1n].EM), {
	    x: 250,
	    y: height/2 + visina - 20*(pr1n%10),
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText(((PR0[0].PR1[pr1n].KOLICINA).toString()).padStart(6," "), {
	    x: 280,
	    y: height/2 + visina - 20*(pr1n%10),
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

if(jeRacun){
	firstPage.drawText( (PR0[0].PR1[pr1n].NCENA).toPrecision(
		((Math.trunc(PR0[0].PR1[pr1n].NCENA)).toString()).length+4).padStart( 11, " ") ,{
//	firstPage.drawText(((PR0[0].PR1[pr1n].NCENA).toString()).padEnd(
//		(PR0[0].PR1[pr1n].NCENA).toString().indexOf(".") +5,"0").padStart(9," "), {
	    x: 340,
	    y: height/2 + visina - 20*(pr1n%10),
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });
}

	firstPage.drawText(((PR0[0].PR1[pr1n].PD).padStart(4," ")), {
	    x: 400,
	    y: height/2 + visina - 20*(pr1n%10),
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

if (jeRacun){
	firstPage.drawText( (PR0[0].PR1[pr1n].MPC).toPrecision(
		((Math.trunc(PR0[0].PR1[pr1n].MPC)).toString()).length+4).padStart( 11, " ") ,{
//	firstPage.drawText(((PR0[0].PR1[pr1n].MPC).toString()).padEnd(
//		(PR0[0].PR1[pr1n].MPC).toString().indexOf(".") +5,"0").padStart(9," "), {
	    x: 440,
	    y: height/2 + visina - 20*(pr1n%10),
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });
}

if (jeRacun){
	firstPage.drawText( (PR0[0].PR1[pr1n].ZNESEK).toPrecision(
		((Math.trunc(PR0[0].PR1[pr1n].ZNESEK)).toString()).length+4).padStart( 11, " ") ,{
//	firstPage.drawText(((PR0[0].PR1[pr1n].ZNESEK).toString()).padEnd(
//		(PR0[0].PR1[pr1n].ZNESEK).toString().indexOf(".") +5,"0").padStart(11," "), {
	    x: 510,
	    y: height/2 + visina - 20*(pr1n%10),
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });
}
}	//for

	var racun_pr1_length = PR0[0].PR1.length;
	if (mpagec>0) {
		pageTmp++; 
		racun_pr1_length = 1;
	}
	firstPage = pages[pageTmp];

	firstPage.drawLine({
	  start: { x: 15, y: height/2 + visina -5 - 20*(-1+racun_pr1_length)},
	  end: { x: 580, y:  height/2 + visina -5 - 20*(-1+racun_pr1_length)},
	  thickness: 0.01,
	  color: PDFLib.rgb(0.001, 0.001, 0.001),
	});


if (jeRacun){
	firstPage.drawText('DDV 9.5% =', {
	    x: 25,
	    y: height/2 + visina - 20*racun_pr1_length,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText( (PR0[0].VSOTE.D95).toPrecision(
		((Math.trunc(PR0[0].VSOTE.D95)).toString()).length+4).padStart( 11, " ") ,{
//	firstPage.drawText((PR0[0].VSOTE.D95).toString().padEnd(
//		(PR0[0].VSOTE.D95).toString().indexOf(".") +5,"0").padStart(11," "), {
	    x: 90,
	    y: height/2 + visina - 20*racun_pr1_length,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText( "( " + (PR0[0].VSOTE.Z95).toPrecision(
		((Math.trunc(PR0[0].VSOTE.Z95)).toString()).length+4).padStart( 11, " ") + " )" ,{
//	firstPage.drawText("( " + (PR0[0].VSOTE.Z95).toString().padEnd(
//		(PR0[0].VSOTE.Z95).toString().indexOf(".") +5,"0").padStart(11," ") + " )", {
	    x: 80,
	    y: height/2 + visina - 20*(1+racun_pr1_length),
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });


	firstPage.drawText('DDV 22% =', {
	    x: 175,
	    y: height/2 + visina - 20*racun_pr1_length,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText( (PR0[0].VSOTE.D22).toPrecision(
		((Math.trunc(PR0[0].VSOTE.D22)).toString()).length+4).padStart( 11, " ") ,{
//	firstPage.drawText((PR0[0].VSOTE.D22).toString().padEnd(
//		(PR0[0].VSOTE.D22).toString().indexOf(".") +5,"0").padStart(11," "), {
	    x: 240,
	    y: height/2 + visina - 20*racun_pr1_length,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText( "( " + (PR0[0].VSOTE.Z22).toPrecision(
		((Math.trunc(PR0[0].VSOTE.Z22)).toString()).length+4).padStart( 11, " ") + " )",{
//	firstPage.drawText("( " + (PR0[0].VSOTE.Z22).toString().padEnd(
//		(PR0[0].VSOTE.Z22).toString().indexOf(".") +5,"0").padStart(11," ") + " )", {
	    x: 230,
	    y: height/2 + visina - 20*(1+racun_pr1_length),
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });


	firstPage.drawText('Skupaj brez DDV...............EUR:', {
	    x: 320,
	    y: height/2 + visina - 20*racun_pr1_length,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText( (PR0[0].VSOTE.SUM).toPrecision(
		((Math.trunc(PR0[0].VSOTE.SUM)).toString()).length+4).padStart( 11, " ") ,{
//		(PR0[0].VSOTE.SUM).toString().indexOf(".") +5,"0").padStart(11," "), {
	    x: 490,
	    y: height/2 + visina - 20*racun_pr1_length,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

var n=100.11;
	firstPage.drawText(
//	((PR0[0].VSOTE.D22).toPrecision(8)).toString().padEnd(2,"$") ,{
//	(  ((PR0[0].VSOTE.D95)/10).toFixed(4)+((PR0[0].VSOTE.D22)/10).toFixed(4)).toString().padEnd(2,"$") ,{
//		(((PR0[0].VSOTE.D95)+(PR0[0].VSOTE.D22)).toString()).padEnd(
//		((((PR0[0].VSOTE.D95)+(PR0[0].VSOTE.D22)).toString()).indexOf("."))+5,"#").padStart(11," "), {
		(  ((PR0[0].VSOTE.D95)+(PR0[0].VSOTE.D22)).toPrecision((Math.trunc(((PR0[0].VSOTE.D95)+(PR0[0].VSOTE.D22)))).toString().length+4)  ).padStart( 11, " ") ,{
//		(  (PR0[0].VSOTE.D22).toPrecision((Math.trunc(PR0[0].VSOTE.D22)).toString().length+4))  ).padEnd( 2,"#" ,{
//		(  ((PR0[0].VSOTE.D22)).toPrecision(10).indexOf(".")  ) +5,"#").padStart(11," "), {

	    x: 490,
	    y: height/2 + visina - 20*(1+racun_pr1_length),
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });



	firstPage.drawText('Skupaj davek......................EUR:', {
	    x: 320,
	    y: height/2 + visina - 20*(1+racun_pr1_length),
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText('SKUPAJ ZA PLAČILO........EUR:', {
	    x: 320,
	    y: height/2 + visina - 20*(2+racun_pr1_length) -10,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

if(PR0[0].PLACILO != undefined){
	firstPage.drawText( (PR0[0].PLACILO).toPrecision(
		((Math.trunc(PR0[0].PLACILO)).toString()).length+2).padStart( 11, " ") ,{
//	firstPage.drawText((PR0[0].PLACILO).toString().padEnd(
//		(PR0[0].PLACILO).toString().indexOf(".") +3,"0").padStart(11," "), {
	    x: 500,
	    y: height/2 + visina - 20*(2+racun_pr1_length) -10,
	    size: fontS,
	    font: helveticaFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });
}


	firstPage.drawLine({
	  start: { x: 15, y: height/2 + visina -5 - 20*(1+racun_pr1_length)},
	  end: { x: 580, y:  height/2 + visina -5 - 20*(1+racun_pr1_length)},
	  thickness: 0.01,
	  color: PDFLib.rgb(0.001, 0.001, 0.001),
	});


	firstPage.drawText('Pri plačilu se sklicujte na številko računa.', {
	    x: 65,
	    y: height/2 + visina - 20*(1+racun_pr1_length) - 70,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	firstPage.drawText('V primeru zakasnitve plačila zaračunavamo zakonske zamudne obresti.', {
	    x: 65,
	    y: height/2 + visina - 20*(1+racun_pr1_length) - 82,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });

}	//if (jeRacun)

	firstPage.drawText('Pisne reklamacije upoštevamo v roku 8 dni po prejemu račna.', {
	    x: 65,
	    y: height/2 + visina - 20*(1+racun_pr1_length) - 94,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });

	firstPage.drawText('Obveznosti proizvajalčeve razširjene odgovornosti za odpadno embalažo', {
	    x: 65,
	    y: height/2 + visina - 20*(1+racun_pr1_length) - 116,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });

	firstPage.drawText('izpolnjujemo z družbo DINOS d.o.o.', {
	    x: 65,
	    y: height/2 + visina - 20*(1+racun_pr1_length) - 128,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });

	if ((PR0[0].KL[0].S)>0){
		firstPage = pages[mpagec];

	var tekstNum = 0;
	if (mpagen <= 10) tekstNum = racun_pr1_length + 15;
		
		for(var k=0; k<PR0[0].KL[0].SEZNAMKL.length; k++){
			if (PR0[0].KL[0].SEZNAMKL[k].V.OZNAKA == "[ ]")
				tekstNum++;
			if ((PR0[0].KL[0].SEZNAMKL[k].V).hasOwnProperty("TEKST1")){
				tekstNum++;
				firstPage.drawText((PR0[0].KL[0].SEZNAMKL[k].V.TEKST1), {font:ubuntuFont,
				    x: 45,
				    y: height/2 + visina - (12*tekstNum),//*(pr1n%10),
				    size: 10,
			//	    font: helveticaFont,
				    color: PDFLib.rgb(0.01, 0.01, 0.01),
				  });
			}
			if ((PR0[0].KL[0].SEZNAMKL[k].V).hasOwnProperty("TEKST2")){
				tekstNum++;
				firstPage.drawText((PR0[0].KL[0].SEZNAMKL[k].V.TEKST2), {font:ubuntuFont,
				    x: 45,
				    y: height/2 + visina - (12*tekstNum),//*(pr1n%10),
				    size: 10,
			//	    font: helveticaFont,
				    color: PDFLib.rgb(0.01, 0.01, 0.01),
				  });
			}
			if ((PR0[0].KL[0].SEZNAMKL[k].V).hasOwnProperty("TEKST3")){
				tekstNum++;
				firstPage.drawText((PR0[0].KL[0].SEZNAMKL[k].V.TEKST3), {font:ubuntuFont,
				    x: 45,
				    y: height/2 + visina - (12*tekstNum),//*(pr1n%10),
				    size: 10,
			//	    font: helveticaFont,
				    color: PDFLib.rgb(0.01, 0.01, 0.01),
				  });
			}
			if ((PR0[0].KL[0].SEZNAMKL[k].V).hasOwnProperty("TEKST4")){
				tekstNum++;
				firstPage.drawText((PR0[0].KL[0].SEZNAMKL[k].V.TEKST4), {font:ubuntuFont,
				    x: 45,
				    y: height/2 + visina - (12*tekstNum),//*(pr1n%10),
				    size: 10,
			//	    font: helveticaFont,
				    color: PDFLib.rgb(0.01, 0.01, 0.01),
				  });
			}
			if ((PR0[0].KL[0].SEZNAMKL[k].V).hasOwnProperty("TEKST5")){
				tekstNum++;
				firstPage.drawText((PR0[0].KL[0].SEZNAMKL[k].V.TEKST5), {font:ubuntuFont,
				    x: 45,
				    y: height/2 + visina - (12*tekstNum),//*(pr1n%10),
				    size: 10,
			//	    font: helveticaFont,
				    color: PDFLib.rgb(0.01, 0.01, 0.01),
				  });
			}



		}
	}
//was added with JavaS
//"Pizza".padEnd(30,".")+"$19.99"
//Pizza.........................$19.99

	const pdfBytes = await content.save();

  let file = new Blob([pdfBytes], { type: 'application/pdf' });            
  var fileURL = URL.createObjectURL(file);
  window.open(fileURL);
//    pdfMake.createPdf(pdfBytes).open();
//      document.getElementById('pdf').src = pdfBytes;

};



$scope.GetDetailsRG = function(racun, uporabnik) {
//	var PR0 = read_racun(racun);
//	$scope.PR0 = Racun.query({leto:(racun.DOKU).substring(6,8), doku:(racun.DOKU).substring(0,4), port:$scope.applist[appn].port, naslov:'tp7'});
var RQ = (Racun.query({leto:(racun.DOKU).substring(6,8), doku:(racun.DOKU).substring(0,4), space9:$scope.applist[appn].space9, naslov:$scope.applist[appn].rnaslov, usr:uporabnik.uname}));
    //save promise for chaining
    RQ.$promise.then( function (data) {
	console.log("111");
	console.log(data);
	console.log(data[0]);
	createPdfRG(racun, true, true, data, uporabnik);
        });
};
$scope.GetDetailsR = function(racun, uporabnik) {
var RQ = (Racun.query({leto:(racun.DOKU).substring(6,8), doku:(racun.DOKU).substring(0,4), space9:$scope.applist[appn].space9, naslov:$scope.applist[appn].rnaslov, usr:uporabnik.uname}));
    RQ.$promise.then( function (data) {
	console.log("111");
	console.log(data);
	console.log(data[0]);
	createPdfRG(racun, false, true, data, uporabnik);
        });
};
$scope.GetDetailsDG = function(racun, uporabnik) {
var RQ = (Racun.query({leto:(racun.DOKU).substring(6,8), doku:(racun.DOKU).substring(0,4), space9:$scope.applist[appn].space9, naslov:$scope.applist[appn].rnaslov, usr:uporabnik.uname}));
    RQ.$promise.then( function (data) {
	console.log("111");
	console.log(data);
	console.log(data[0]);
	createPdfRG(racun, true, false, data, uporabnik);
        });
};
$scope.GetDetailsD = function(racun, uporabnik) {
var RQ = (Racun.query({leto:(racun.DOKU).substring(6,8), doku:(racun.DOKU).substring(0,4), space9:$scope.applist[appn].space9, naslov:$scope.applist[appn].rnaslov, usr:uporabnik.uname}));
    RQ.$promise.then( function (data) {
	console.log("111");
	console.log(data);
	console.log(data[0]);
	createPdfRG(racun, false, false, data, uporabnik);
        });
};

$scope.GetDetailsTest1 = function(racun) {createPdfRGTest();};
$scope.GetDetailsTest2 = function(racun) {createPdfDGTest();};

$scope.GetNapake = function() {window.open("https://server4875.si/space1080/tp15", '_blank').focus();};
$scope.GetDetailsRX = function() {window.open("https://server4875.si/space1080/tp16", '_blank').focus();};
$scope.GetDetailsRRX = function() {window.open("https://server4875.si/space1080/tp17", '_blank').focus();};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function createPdf1() {
//      const pdfDoc = await PDFLib.PDFDocument.create();
      const pdfDoc = await PDFLib.PDFDocument.create();
      const page = pdfDoc.addPage([350, 400]);
      page.moveTo(110, 200);
      page.drawText('Hello World!');
      const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
      document.getElementById('pdf').src = pdfDataUri;
    };


async function createPdf2() {
  const pdfDoc = await PDFLib.PDFDocument.create()
  const timesRomanFont = await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRoman)

  const page = pdfDoc.addPage()
  const { width, height } = page.getSize()
  const fontSize = 30
  page.drawText('Creating PDFs in JavaScript is awesome!', {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
//    color: rgb(0, 0.53, 0.71),
  })

  const pdfBytes = await pdfDoc.save()
      document.getElementById('pdf').src = pdfBytes;
};



var docDefinition2 = {
      content: [
        {
          text: 'Criketers1'
        },
        {
          style: 'demoTable',
          table: {
            widths: ['*', '*', '*', '*', '*'],
            body: [
              [{text: '', style: 'header'}, {text: 'KOLIČINA', style: 'header'},
                {text: 'DDV', style: 'header'}
              ],
		['aa1','bb2','dd4']
            ]
          }
        }
      ],
      styles: {
        header: {
          bold: true,
          color: '#000',
          fontSize: 11
        },
        demoTable: {
          color: '#666',
          fontSize: 10
        }
      }
    };

var docDefinition4 = {
  footer: function(currentPage, pageCount) { return currentPage.toString() + ' of ' + pageCount; },
  header: function(currentPage, pageCount, pageSize) {
    // you can apply any logic and return any valid pdfmake element

    return [
      { text: 'simple text', alignment: (currentPage % 2) ? 'left' : 'right' },
      { canvas: [ { type: 'rect', x: 170, y: 32, w: pageSize.width - 170, h: 40 } ] }
    ]
  },
 text: 'Criketers1'
};

var docDefinition5 = {
  pageSize: 'LETTER',
  background: [
   {
//       image: 'data:image/jpeg;base64,/9j/4QAY...',
	image: 'logo1.png',
       width: 792
   }
 ],
 //other parameters go here
header: 'simple text'
};



var docDefinition6 = {
        content: [
            {
//                image: 'logo1.png'
//image: await this.getBase64ImageFromURL("logo1.png")
            },
            {
                text: 'Persson\'s Detail', fontSize: 18, bold: true
            },
            {
                columns: [
                    {
                        text: 'P.\'s ID: ', bold: false
                    },
                    {
                        text: 'Name: ', bold: false
                    },
                    {
                        text: 'Age: ' , bold: false
                    },
//                    {
//                        text: 'Contact: ' + $scope.prescription.Patient[0].contact, bold: false
//                    }
                ]

            },
            {
                text: 'Address: ' , bold: false
            }
        ]
    };


async function modifyPdf() {
//  const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
  const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

  const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes)
  const helveticaFont = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica)

  const pages = pdfDoc.getPages()
  const firstPage = pages[0]
  const { width, height } = firstPage.getSize()
  firstPage.drawText('This text was added with JavaScript!', {
    x: 5,
    y: height / 2 + 300,
    size: 50,
    font: helveticaFont,
//    color: rgb(0.95, 0.1, 0.1),
//    rotate: degrees(-45),
  })

  const pdfBytes = await pdfDoc.save()
      document.getElementById('pdf').src = pdfBytes;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function createPdfR(racun) {

$scope.PR0 = Racun.query({leto:(racun.DOKU).substring(6,8), doku:(racun.DOKU).substring(0,4), space9:$scope.applist[appn].space9, naslov:$scope.applist[appn].rnaslov});
console.log("PR0:");
console.log($scope.PR0[0]);

const url = 'https://server4875.si/Dopis_A4.pdf';
const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
//const content = await PDFLib.PDFDocument.load(existingPdfBytes);
const content = await PDFLib.PDFDocument.create();

content.registerFontkit(fontkit);

const furl = 'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf';
const fontBytes = await fetch(furl).then((res) => res.arrayBuffer());

const helveticaFont = await content.embedFont(PDFLib.StandardFonts.Helvetica);
const helveticaFontBold = await content.embedFont(PDFLib.StandardFonts.HelveticaBold)

//  const pages = content.getPages()
//  const firstPage = pages[0]
  const firstPage = content.addPage();
  const { width, height } = firstPage.getSize()

const ubuntuFont = await content.embedFont(fontBytes);

//  firstPage.drawText('This text was added with JavaScript!', {
//    x: 5,
//    y: height / 2 + 300,
//    size: 50,
//    font: helveticaFont,
//    color: PDFLib.rgb(0.95, 0.1, 0.1),
//    rotate: PDFLib.degrees(-45),
//  });


const fontS = 12;
const visina = 90;

 firstPage.drawText(racun.IME, {
    x: 65,
    y: height/2 + 275,
    size: fontS,
    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

// firstPage.drawText('naslov 1\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x7B\x7C\x7D\x7E\x80\x81\x82\x83\x84\x85', {
// firstPage.drawText('naslov 1', {
 firstPage.drawText($scope.PR0[0].PA[0].NASLOV1 + " " + $scope.PR0[0].PA[0].NASLOV1ST +'1š', {font:ubuntuFont,
    x: 65,
    y: height/2 + 255,
    size: fontS,
//    font: helveticaFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText($scope.PR0[0].PA[0].KRAJ1ST + "    " + $scope.PR0[0].PA[0].KRAJ1, {
    x: 65,
    y: height/2 + 225,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText($scope.PR0[0].PA[0].DRZAVA1, {
    x: 65,
    y: height/2 + 195,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText("PP:" + $scope.PR0[0].PA[0].PP, {
    x: 50,
    y: height/2 + visina + 60,
    size: 10,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText("vaša ID št.:" + $scope.PR0[0].PA[0].IID, {
    x: 190,
    y: height/2 + visina + 60,
    size: 10,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText("naša ID št. : SI77009967", {
    x: 410,
    y: height/2 + visina + 60,
    size: 10,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });


 firstPage.drawText('naziv artikla', {font:ubuntuFont,
    x: 50,
    y: height/2 + visina +20,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText('EM', {
    x: 250,
    y: height/2 + visina +20,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText('količina', {
    x: 280,
    y: height/2 + visina +20,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText('VP/cena', {
    x: 340,
    y: height/2 + visina +20,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText('DDV', {
    x: 400,
    y: height/2 + visina +20,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText('cena', {
    x: 460,
    y: height/2 + visina +20,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

 firstPage.drawText('znesek', {
    x: 520,
    y: height/2 + visina +20,
    size: fontS,
    font: ubuntuFont,
    color: PDFLib.rgb(0.01, 0.01, 0.01),
  });

	firstPage.drawLine({
	  start: { x: 15, y: height/2 + visina +15},
	  end: { x: 580, y:  height/2 + visina +15},
	  thickness: 1,
	  color: PDFLib.rgb(0.0, 0.0, 0.0),
	  opacity: 1.0,
	});

//	firstPage.drawLine({
//	  start: { x: 25, y: 75 },
//	  end: { x: 125, y: 175 },
//	  thickness: 7,
//	  color: PDFLib.rgb(0.75, 0.2, 0.2),
//	  opacity: 0.75,
//	});

	firstPage.drawLine({
	  start: { x: 15, y: height/2 + visina -5 - 20*(-1+racun.PR1.length)},
	  end: { x: 580, y:  height/2 + visina -5 - 20*(-1+racun.PR1.length)},
	  thickness: 0.01,
	  color: PDFLib.rgb(0.001, 0.001, 0.001),
	});

	firstPage.drawText('DDV 9.5% =', {
	    x: 25,
	    y: height/2 + visina - 20*racun.PR1.length,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText(($scope.PR0[0].VSOTE.D95).toString().padEnd(
		($scope.PR0[0].VSOTE.D95).toString().indexOf(".") +5,"0").padStart(11," "), {
	    x: 90,
	    y: height/2 + visina - 20*racun.PR1.length,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText("( " + ($scope.PR0[0].VSOTE.Z95).toString().padEnd(
		($scope.PR0[0].VSOTE.Z95).toString().indexOf(".") +5,"0").padStart(11," ") + " )", {
	    x: 85,
	    y: height/2 + visina - 20*(1+racun.PR1.length),
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });


	firstPage.drawText('DDV 22% =', {
	    x: 175,
	    y: height/2 + visina - 20*racun.PR1.length,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText(($scope.PR0[0].VSOTE.D22).toString().padEnd(
		($scope.PR0[0].VSOTE.D22).toString().indexOf(".") +5,"0").padStart(11," "), {
	    x: 240,
	    y: height/2 + visina - 20*racun.PR1.length,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText("( " + ($scope.PR0[0].VSOTE.Z22).toString().padEnd(
		($scope.PR0[0].VSOTE.Z22).toString().indexOf(".") +5,"0").padStart(11," ") + " )", {
	    x: 235,
	    y: height/2 + visina - 20*(1+racun.PR1.length),
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });


	firstPage.drawText('Skupaj brez DDV...............EUR:', {
	    x: 320,
	    y: height/2 + visina - 20*racun.PR1.length,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText( ($scope.PR0[0].VSOTE.SUM).toString().padEnd(//8,"0"),{
//		(($scope.PR0[0].VSOTE.SUM).toString().length) - (($scope.PR0[0].VSOTE.SUM).toString().indexOf(".")) -1,"0"), {
		($scope.PR0[0].VSOTE.SUM).toString().indexOf(".") +5,"0").padStart(11," "), {
	    x: 510,
	    y: height/2 + visina - 20*racun.PR1.length,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText((($scope.PR0[0].VSOTE.D95)+($scope.PR0[0].VSOTE.D22)).toString().padEnd(
		(($scope.PR0[0].VSOTE.SUMDDV)+($scope.PR0[0].VSOTE.D22)).toString().indexOf(".") +5,"0").padStart(11," "), {
	    x: 510,
	    y: height/2 + visina - 20*(1+racun.PR1.length),
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });



	firstPage.drawText('Skupaj davek......................EUR:', {
	    x: 320,
	    y: height/2 + visina - 20*(1+racun.PR1.length),
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText('SKUPAJ ZA PLAČILO........EUR:', {
	    x: 320,
	    y: height/2 + visina - 20*(2+racun.PR1.length) -10,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText((racun.PLACILO).toString().padEnd(
		(racun.PLACILO).toString().indexOf(".") +3,"0").padStart(11," "), {
	    x: 510,
	    y: height/2 + visina - 20*(2+racun.PR1.length) -10,
	    size: fontS,
	    font: helveticaFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });



	firstPage.drawLine({
	  start: { x: 15, y: height/2 + visina -5 - 20*(1+racun.PR1.length)},
	  end: { x: 580, y:  height/2 + visina -5 - 20*(1+racun.PR1.length)},
	  thickness: 0.01,
	  color: PDFLib.rgb(0.001, 0.001, 0.001),
	});

	firstPage.drawText('Pri plačilu se sklicujte na številko računa.', {
	    x: 65,
	    y: height/2 + visina - 20*(1+racun.PR1.length) - 70,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	firstPage.drawText('V primeru zakasnitve plačila zaračunavamo zakonske zamudne obresti.', {
	    x: 65,
	    y: height/2 + visina - 20*(1+racun.PR1.length) - 82,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	firstPage.drawText('Pisne reklamacije upoštevamo v roku 8 dni po prejemu racčna.', {
	    x: 65,
	    y: height/2 + visina - 20*(1+racun.PR1.length) - 94,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });

	firstPage.drawText('Obveznosti proizvajalčeve razširjene odgovornosti za odpadno embalažo', {
	    x: 65,
	    y: height/2 + visina - 20*(1+racun.PR1.length) - 116,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });

	firstPage.drawText('izpolnjujemo z družbo DINOS d.o.o.', {
	    x: 65,
	    y: height/2 + visina - 20*(1+racun.PR1.length) - 128,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });


	firstPage.drawText($scope.PR0[0].PA[0].NOVTRR, {
	    x: 420,
	    y: height/2 + 285,
	    size: 10,
	    font: helveticaFontBold,
	    color: PDFLib.rgb(($scope.PR0[0].PA[0].R)/100, ($scope.PR0[0].PA[0].G)/100, ($scope.PR0[0].PA[0].B)/100)
	  });

	firstPage.drawText("TRR: SI56 6000 0000 1075 607 LON d.d.", {
	    x: 370,
	    y: height/2 + 270,
	    size: 10,
	    font: helveticaFontBold,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });

//	firstPage.drawText(('RAČUN:'), {
	firstPage.drawText(($scope.applist[appn].dokument) + ":", {
	    x: 370,
	    y: height/2 + 247,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.5, 0.5)
	  });

	firstPage.drawText(racun.DOKU, {
	    x: 485,
	    y: height/2 + 250,
	    size: 10,
	    font: helveticaFontBold,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });

	firstPage.drawText("Log, dne.......................:" + "    " + (racun.DATK).substring(8,10) + "." + (racun.DATK).substring(5,7) + "." + (racun.DATK).substring(0,4), {
	    x: 370,
	    y: height/2 + 225,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });
	firstPage.drawText("Datum valute..............:" + "    " + (racun.DATK).substring(8,10) + "." + (racun.DATK).substring(5,7) + "." + (racun.DATK).substring(0,4), {
	    x: 370,
	    y: height/2 + 212,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });

	firstPage.drawText("Številka dobavnice.....:" + "       " + racun.DOKU, {
	    x: 370,
	    y: height/2 + 199,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });

	firstPage.drawText("Odposlano dne...........:" + "    " + (racun.DATK).substring(8,10) + "." + (racun.DATK).substring(5,7) + "." + (racun.DATK).substring(0,4), {
	    x: 370,
	    y: height/2 + 186,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });

	firstPage.drawText("Štev.naročilnice..........:" + "    " + (racun.NARO).padStart(10,""), {
	    x: 370,
	    y: height/2 + 173,
	    size: 10,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01)
	  });



for(var pr1n = 0; pr1n<racun.PR1.length; pr1n++){

	firstPage.drawLine({
	  start: { x: 15, y: height/2 + visina -5 - 20*pr1n },
	  end: { x: 580, y:  height/2 + visina -5 - 20*pr1n },
	  thickness: 1,
	  color: PDFLib.rgb(0.05, 0.51, 0.05),
	  opacity: 0.25,
	});

	firstPage.drawText((racun.PR1[pr1n].TEKST), {font:ubuntuFont,
	    x: 45,
	    y: height/2 + visina - 20*pr1n,
	    size: fontS,
//	    font: helveticaFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText((racun.PR1[pr1n].EM), {
	    x: 250,
	    y: height/2 + visina - 20*pr1n,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText(((racun.PR1[pr1n].KOLICINA).toString()).padStart(6," "), {
	    x: 280,
	    y: height/2 + visina - 20*pr1n,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText(((racun.PR1[pr1n].NCENA).toString()).padEnd(
		(racun.PR1[pr1n].NCENA).toString().indexOf(".") +5,"0").padStart(9," "), {
	    x: 340,
	    y: height/2 + visina - 20*pr1n,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText(((racun.PR1[pr1n].PD).padStart(4," ")), {
	    x: 400,
	    y: height/2 + visina - 20*pr1n,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText(((racun.PR1[pr1n].MPC).toString()).padEnd(
		(racun.PR1[pr1n].MPC).toString().indexOf(".") +5,"0").padStart(9," "), {
	    x: 440,
	    y: height/2 + visina - 20*pr1n,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });

	firstPage.drawText(((racun.PR1[pr1n].ZNESEK).toString()).padEnd(
		(racun.PR1[pr1n].ZNESEK).toString().indexOf(".") +5,"0").padStart(11," "), {
	    x: 510,
	    y: height/2 + visina - 20*pr1n,
	    size: fontS,
	    font: ubuntuFont,
	    color: PDFLib.rgb(0.01, 0.01, 0.01),
	  });
}

//was added with JavaS
//"Pizza".padEnd(30,".")+"$19.99"
//Pizza.........................$19.99



	const pdfBytes = await content.save();

  let file = new Blob([pdfBytes], { type: 'application/pdf' });            
  var fileURL = URL.createObjectURL(file);
  window.open(fileURL);
//    pdfMake.createPdf(pdfBytes).open();
//      document.getElementById('pdf').src = pdfBytes;

};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





      }
    ]
  });

