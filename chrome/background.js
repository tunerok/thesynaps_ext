


function get_req() {

var xhr = new XMLHttpRequest();
      


	
}


function get_url_b() {

var urle;

chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
	chrome.extension.sendMessage({ msg: "out", res: tabs[0].url });

});



}


chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.msg == "get_url") get_url_b();
		//if(request.msg == "dis") disconn_proxy();
    }
);
