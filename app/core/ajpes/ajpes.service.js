'use strict';


angular.
  module('core.ajpes').
  factory('Ajpes', ['$resource',
    function($resource) {
	var rs = $resource('https://server4875.si/space2', {}, {
        query: {
//	headers: {'Access-Control-Allow-Origin': '*'},
          method: 'GET',
//	const podrobno1 = "0";
//		params:{'leto1':'@leto1', 'leto2':'@leto2', 'mesec1':'@mesec1','mesec2':'@mesec2'},
		params:{'podrobno':'0', 'id_skupina':'51', 'TipDolznika':'-1','TipPostopka':'-1', 'id_SkupinaVrsta': '-1', 'id_skupinaPodVrsta':'-1', 'Dolznik':'@naziv', 'Oblika':'', 'MS':'@MS', 'DS':'@DS', 'StStevilka':'', 'sodisce':'-1', 'DatumDejanja_od':'', 'DatuDejanja_do':'', 'sys_ZacetekObjave_od':sys_ZacetekObjave_od, 'sys_ZacetekObjave_do':sys_ZacetekObjave_do, 'MAXREC':'20'},
          isArray: true,

	transformResponse: function (response) {

		const j1 = {'pp':'cc'};
		var j5 = [];
		var j7 = {};

				var parser = new DOMParser();
				//var doc = parser.parseFromString('<div>some html</div>', 'text/html');
//				var doc = parser.parseFromString(response.data, 'text/html');
				var doc = parser.parseFromString(response, 'text/html');
				var liElements = doc.getElementsByTagName("tbody");
				var itemTBODY = liElements.item(0);
				var liTBODY = itemTBODY.children;
//				var inH = liEl.innerHTML;
				var test = liTBODY[2];
				for(let itemH=0; itemH<liTBODY.length; itemH++){
					var itemTD = liTBODY[itemH];
					//var str1 = (itemTD.children)[3].innerHTML;
					if ( (itemTD.children)[0] != undefined )
						var str0 = (itemTD.children)[0].innerText;
					else
						var str0 = "ni podatkov"
					if ( (itemTD.children)[1] != undefined )
						var str1 = (itemTD.children)[1].innerText;
					else
						var str1 = "ni podatkov"					
					if ( (itemTD.children)[2] != undefined )
						var str2 = (itemTD.children)[2].innerText;
					else
						var str2 = "ni podatkov"
					if ( (itemTD.children)[3] != undefined )						
						var str3 = (itemTD.children)[3].innerText;
					else
						var str3 = "ni podatkov"						
					if ( (itemTD.children)[4] != undefined )
						var str4 = (itemTD.children)[4].innerText;
					else
						var str4 = "ni podatkov"						
					if ( (itemTD.children)[5] != undefined )						
						var str5 = (itemTD.children)[5].innerText;
					else
						var str5 = "ni podatkov"						
					if ( (itemTD.children)[6] != undefined )						
						var str6 = (itemTD.children)[6].innerText;
					else
						var str6 = "ni podatkov"						
					if ( (itemTD.children)[7] != undefined )					
						var str7 = (itemTD.children)[7].innerText;
					else
						var str7 = "ni podatkov"

					//var str8 = (itemTD.children)[8].innerText;
					//var str3 = (itemTD.children)[5].innerText;
					//var str2 = (itemTD.children)[2].innerText + ':' + (itemTD.children)[3].innerText + ':' + (itemTD.children)[4].innerText + ':' + (itemTD.children)[5].innerText;
					//console.log(str2);
					//j5.push(str3);
				j5.push( {'id':j5.length, 'str':{'str0':str0,'str1':str1,'str1':str1,'str2':str2,'str3':str3,'str4':str4,'str5':str5,'str6':str6,'str7':str7}} );
					//console.log("TDJ:" + j5);
//					for(let itemH1 in itemTD.children){					
//						var itemTD1 = (itemTD.children)[itemH1];
//					}
				}

//		res.type('json');               // => 'application/json'
//		const response1 = buf.toString('utf8');

return j5;
            }		// return response.data;
            
        }	//query
      });	//retuen resource
      function sys_ZacetekObjave_od($resource){ //console.log("TEST");
      		var dateNow = new Date();
      		var dan = dateNow.getDate();
      		var mesec = dateNow.getMonth()-3;
      		console.log("mesec:" + dateNow.getMonth());
      		var leto = dateNow.getFullYear();
      		return dan + "." + mesec + "." + leto;
      						 //return '02.11.2023'
      						 };
      function sys_ZacetekObjave_do($resource){var dateNow2 = new Date(); var mesec=dateNow2.getMonth() +1; return dateNow2.getDate() + "." + mesec + "." + dateNow2.getFullYear()};      						 
      return rs;
    }	//function
  ]);	//factory
