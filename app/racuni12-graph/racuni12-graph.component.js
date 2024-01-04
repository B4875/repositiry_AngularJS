'use strict';

angular.
  module('racuni12Graph').
  component('racuni12Graph', {
    templateUrl: 'racuni12-graph/racuni12-graph.template.html',
   controller: ['Racuni12', 'Racuni100', 'RacuniPartnerji', 'RacuniPartnerjiM', 'RacuniPartnerjiL', 'Udata', '$scope', '$routeParams', 
      function Racuni12ListController(Racuni12, Racuni100, RacuniPartnerji, RacuniPartnerjiM, RacuniPartnerjiL, Udata, $scope, route, $location) {
	$scope.tt = "11";
		//  var self = this;
		  //this.href = "tt"//this.router.url;
		  console.log("test1");
		  //var urlquerystring = $location.absUrl().split('?')[0]
		  //var tt = $RouteProvider();
//console.log(urlquerystring);
  		  //var search = $routeParams;
            console.log(route);
		  console.log("test2");
		  //this.id = this.route.snapshot.paramMap.get('id');
		  console.log(route.route1);
		  console.log($scope);
		  //$scope.recho = route.echo;
		 
		  var appn = route.app;
	if (appn == undefined)	appn=1;
		this.appn1 = route.app;
	if (this.appn1 == undefined)	this.appn1=1;
//		$scope.applist = [{port:8080},{port:8080},{port:8070}];

		$scope.applist = [{space9:'space1080', space911:'space1180', space912:'space1280', space913:'space1380', pspace9:'space1080', pspace911:'space1180', pspace912:'space1280', pportp:"local", bcolor1:'#1c87c9', bcolor2:'#1c87c9', bcolor3:'#50c0f4', bcolor4:'#007bff', dokument:"RAČUN", dokument1:"DOBAVNICA", port:8080, pport:8080, naslov:'tp7', rnaslov:'tp6', pnaslov:'tp9', apppred:4},

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

		  console.log("test3");
		this.datum = {leto:route.leto};
		 var doku = route.doku;
		 var dokul = route.dokul;
		 
	var usr, leto0, leto1, leto2, mesec1, mesec2, neplac;
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
	if (route.leto == undefined)	leto0 = "23";//"08";
		else	leto0 = route.leto;

		
//	this.datum = {leto1:route.leto1, leto2:route.leto2, mesec1:route.mesec1, mesec2:route.mesec2, neplac:route.neplac};
	this.datum = {leto1:leto1, leto2:leto2, mesec1:mesec1, mesec2:mesec2, neplac:neplac};
	$scope.uporabnik = {uporabnik:"PUBLIC", uporabnikp:"", uname:"", uporabnikp2:"" };
		 
		  this.l0 = route.leto;
		  this.l1 = leto1;
		  this.l2 = leto2;
		  this.m1 = mesec1;
		  this.m2 = mesec2;
		this.d1 = doku;
		this.d2 = dokul;

		  console.log("test4");
		  console.log($scope);
		  //$scope.leto3 = route.leto1;
		  
		  this.user1 = location;
		  this.user2 = "recho";

//		  var controller = app.controller('pdfCtrl', pdfController);

//// function pdfController($scope) {
////    // prepare the document definition using declarative approach
    var docDefinition = {
      content: [
        {
          text: 'Criketers and scores'
        },
        {
          style: 'demoTable',
          table: {
            widths: ['*', '*', '*'],
            body: [
              [{text: 'Name', style: 'header'}, {text: 'Matches', style: 'header'},
                {text: 'Score', style: 'header'}
              ],
              ['Sachin', '344', '52'],
              ['Sanga', '320', '89'],
              ['Ponting', '300', '68'] 
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

	var table2= [['Sachin', '344', '52'],
              ['Sanga', '320', '89'],
              ['Ponting', '300', '68']];

    var docDefinition2 = {
      content: [
        {
          text: 'Criketers and scores'
        },
        {
          style: 'demoTable',
          table: {
            widths: ['*', '*', '*'],
            body: [
              [{text: 'Name', style: 'header'}, {text: 'Matches', style: 'header'},
                {text: 'Score', style: 'header'}
              ],
		['','','']
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

    $scope.openPdf = function() {
      pdfMake.createPdf(docDefinition2).open();
    };

    $scope.downloadPdf = function() {
      pdfMake.createPdf(docDefinition).download();
    };



$scope.ExportPdf1 = function () {
                html2canvas(document.getElementById('tblCustomers'), {
                    onrendered: function (canvas) {
                        var data = canvas.toDataURL();
                        var docDefinition = {
                            content: [{
                                image: data,
                                width: 500
                            }]
                        };
                        pdfMake.createPdf(docDefinition).download("Table.pdf");
                    }
                });
            };

  $scope.getConvas = function() {
  console.log('fff');
    html2canvas(document.getElementById("barcodeHtml"), {
      onrendered: function(canvas) {
      console.log('gggg')
        document.body.appendChild(canvas);
      },
      width: 320,
      height: 220
    });
  };

$scope.ExportPdf2 = function () {
	console.log("export");
                html2canvas(document.getElementById('tblCustomers'), {
                    then: function (canvas) {
	console.log("then");
     var img = canvas.toDataURL()
           window.open(img);
                    }
                });
            };

$scope.ExportPdf3 = function () {
      var doc = new jsPDF();
      doc.addHTML(document.body,0,0,{},function() {
        doc.save('Testy.pdf');
      });
}

$scope.ExportPdf4 = function () {
//html2canvas(document.querySelector("#myDiv")).then(canvas => {
console.log("then1");
html2canvas(document.querySelector("#content")).then(function(canvas) {
console.log("then2");
    document.body.appendChild(canvas);
    saveImage();     //or whatever you want to execute
});
}


$scope.ExportPdf5 = function () {
//html2canvas(document.querySelector("#myDiv")).then(canvas => {
console.log("then1");

   var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");

console.log(document.querySelector('#tblCustomers'));
html2canvas(document.querySelector('#tblCustomers'),{canvas: canvas, scale: 1}).then(function(canvas){
console.log("then2");
    document.body.appendChild(canvas);
    saveImage();     //or whatever you want to execute
});
}
 
$scope.makePDF = function() {
  var doc = new jsPDF('p', 'pt', 'a4');
      var specialElementHandlers = {

      };
doc.fromHTML(document.getElementById('content'), 15, 15, {
          'width': 250,
          'margin': 1,
          'pagesplit': true,
          'elementHandlers': specialElementHandlers
        });

        doc.save('sample-file.pdf');
};


		console.log("pdf-file");


	this.udata = Udata.query();
	console.log(this.udata);

    this.udata.$promise.then( function (data) {
	console.log("111");
	console.log(data);
	console.log(data.user.username);
		$scope.uporabnik.uporabnik = data.user.username;
		        $scope.uporabnik.uname = data.user.uname;

/*
	if( (this.d1 != undefined) && (this.d2 != undefined) ){
		if( (this.d1 != undefined) && (this.d2 != undefined) && (this.l0 != undefined) )
			this.racuni12 = RacuniPartnerjiM.query({leto:leto, doku:doku, dokul:dokul, port:$scope.applist[appn].port, naslov:'tp7'});
		else{
			console.log("d1:" + this.d1);
			leto = "07";
			this.racuni12 = RacuniPartnerjiL.query({leto:leto, doku:doku, dokul:dokul, port:$scope.applist[appn].port, naslov:'tp7'});
			}
	}
	else{
	*/

/*
		if( (leto1 != undefined) && (leto2 != undefined) && (mesec1 != undefined) && (mesec2 != undefined) )
			$scope.racuni12 = RacuniPartnerji.query({leto1:leto1, leto2:leto2, mesec1:mesec1, mesec2:mesec2, port:$scope.applist[appn].port, naslov:'tp7'});
		else{
*/
			if (leto0 != undefined)
				$scope.racuni12 = Racuni12.query({leto:leto0, space9:$scope.applist[appn].space9, naslov:'tp12', usr:data.user.uname});
			else{
				leto = "07";
				$scope.racuni12 = Racuni100.query({leto:leto, port:$scope.applist[appn].port, naslov:'tp7'});
			}
//		}
//	}

        	});

		
	console.log("racuni12");
	console.log(this.l1);
	console.log(this.racuni12);
        //this.orderProp = 'age';
        
        



	$scope.reload_page1 = function(dat) {
		var url1 =  "https://server4875/#!/tisk?leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2;
		window.open(url1,"_self");
	};
	$scope.reload_page2 = function(dat) {
		var url1 =  "https://server4875/#!/tisk?leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2;
		window.open(url1, '_blank').focus();
	};
	$scope.reload_page3 = function(dat) {
		var url1 =  "https://server4875/#!/tisk?leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2;
		window.open(url1, "_blank", "width=1150, height=850");
	};

	    $scope.GetDetails = function(doku) {
	console.log(doku);
		var url1 =  "https://server4875/#!/racun2?leto=" + doku.substring(6,8) + "&doku=" + doku.substring(0,4);
		window.open(url1, "_blank", "width=1150, height=850");
	    };  

	$scope.nov_racun = function() {
		var url1 =  "https://server4875/#!/racun2";
		window.open(url1, "_blank", "width=1150, height=850");
	};
  
	$scope.partnerji = function(dat) {
		var url1 =  "https://server4875/#!/partnerji?leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2;
		window.open(url1, "_blank", "width=1150, height=850");
	};
	$scope.samo_racuni = function(dat) {
		var url1 =  "https://server4875/#!/tisk2?leto1=" + dat.leto1 + "&leto2="
				+ dat.leto2 + "&mesec1=" + dat.mesec1 +  "&mesec2=" + dat.mesec2;
		window.open(url1, "_blank", "width=1150, height=850");
	};




      }
    ]
  });
