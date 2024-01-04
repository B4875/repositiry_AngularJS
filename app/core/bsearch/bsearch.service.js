'use strict';


angular.
  module('core.bsearch').
  factory('BSearch', ['$resource',
    function($resource) {
      return $resource('https://server4875.si/space7/:test', {test:'@test'}, {

        query: {

        method: 'GET',

	params:{'q':'@q'},
          isArray: true,

	transformResponse: function (response) {

		const j1 = {'pp':'cc'};
		var j5 = [];
		var nEl = -1;
		var liElChD1 = "";
		var liElChD2 = "";
		var liElChD3 = "";
		var liElChD4 = "";
		var liElChD5 = "";

				var parser = new DOMParser();
//				//var doc = parser.parseFromString('<div>some html</div>', 'text/html');
//				//var doc = parser.parseFromString(response.data, 'text/html');
				var doc = parser.parseFromString(response, 'text/html');
//				var liElements = doc.getElementsByTagName("body");
				var nElements = doc.getElementsByClassName("col-12 b-box b-box-search-criteria");

				if ( (nElements != undefined) && (nElements[0].children != undefined) && (((nElements[0].children)[0].children) != undefined) && ((((nElements[0].children)[0].children)[0].children) != undefined) && (((((nElements[0].children)[0].children)[0].children)[0].children) != undefined) && ((((((nElements[0].children)[0].children)[0].children)[0].children)[0].children) != undefined) && (((((((nElements[0].children)[0].children)[0].children)[0].children)[0].children)[0].children) != undefined) && (((((((nElements[0].children)[0].children)[0].children)[0].children)[0].children)[0].children)[2] != undefined) && (((((((nElements[0].children)[0].children)[0].children)[0].children)[0].children)[0].children)[0].textContent == "1")){
					var nEl = ((((((nElements[0].children)[0].children)[0].children)[0].children)[0].children)[0].children)[2].textContent;
//					nEl = nEl1;
				}else
					nEl = "0";

				var liElements = doc.getElementsByClassName("col-12 b-table-body");
				var liElements0 = liElements.item(0);
				if (liElements0 != undefined){
					var liElementsChildren = liElements0.children;

			for(let itemH=0; itemH<liElementsChildren.length; itemH++){
	//		for(let itemH=0; itemH<1; itemH++){
	//				var liElCh0 = liElementsChildren.getElementsByClassName("col b-table-cell b-table-cell-title");
					var liElCh0 = liElementsChildren[itemH].children;
					var liElChD1 = liElCh0[1];
					if (liElCh0[2] != undefined){
						var liElChD2A = liElCh0[2].children;
						liElChD2 = liElChD2A[0].textContent;
						var liElChD2_ = liElChD2.split(' ');
						var liElChD2_2 = liElChD2_.pop();
						var liElChD2_1 = liElChD2.substring(0, liElChD2.length - liElChD2_2.length);
					}else
						liElChD2 = "";

					if (liElCh0[3] != undefined){
						liElChD3 = liElCh0[3].textContent;
						var liElChD3_ = liElChD3.split(' ');
						var liElChD3_2 = liElChD3_[0];
						var liElChD3_1 = liElChD3.substring(liElChD3_2.length+1, liElChD3.length);
					}
					else
						liElChD3 = "";
					if (liElCh0[4] != undefined)
						liElChD4 = liElCh0[4].textContent;
					else
						liElChD4 = "";
					if (liElCh0[4] != undefined)
						liElChD5 = liElCh0[5].textContent;
					else
						liElChD5 = "";

					if (liElChD1 != undefined){
						var cnA = liElChD1.children;
						var cnA2 = cnA[1];
						if (cnA2 != undefined){
							var nSpan = cnA2.children;
							var nSpan0 = nSpan[0];
							if (nSpan0 != undefined){
								var nval = nSpan0.textContent;
								j5.push({"title":nval,"NASLOV":liElChD2_1, "NASLOV0":liElChD2, "NASLOV_ST":liElChD2_2, "KRAJ0":liElChD3, "KRAJ1":liElChD3_1, "KRAJ1_ST":liElChD3_2, "MST":liElChD4, "DST":liElChD5, "sst":nEl});
							}
//							else j5.push({"title":"","NASLOV":liElChD2, "KRAJ1":liElChD3, "MST":liElChD4, "DST":liElChD5, "sst":nEl});
						}
//						else j5.push({"title":"","NASLOV":liElChD2, "KRAJ1":liElChD3, "MST":liElChD4, "DST":liElChD5, "sst":nEl});
					}
//					else j5.push({"title":"","NASLOV":liElChD2, "KRAJ1":liElChD3, "MST":liElChD4, "DST":liElChD5, "sst":nEl});		
			}
				}
				else j5.push({"title":"","NASLOV":"", "KRAJ1":"", "MST":"", "DST":"", "sst":nEl});

return j5;
//                return response.data;

            }	//transform response
//transformRequest: function (config) {     return config;}
        }		//query
      });	//return resource
    }	//function
  ]);
