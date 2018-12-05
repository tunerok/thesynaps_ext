
function get_req() {

var xhr = new XMLHttpRequest();
      


	
}


*/
function disconn_proxy() {
	
	
        var config = {
  mode: "system",
  
};
	  
	  
chrome.proxy.settings.set(
    {value: config, scope: 'regular'},
    function() {});
	
chrome.browserAction.setIcon({path: 'icon.png'});	
	
	
}
*/


chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.msg == "get_url") get_req();
		//if(request.msg == "dis") disconn_proxy();
    }
);
