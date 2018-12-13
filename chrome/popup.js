var el = document.getElementById('btn_submit');
var s = document.getElementById('smname');

if(el){
  el.addEventListener('click', get_url);
}



function out(current_url){
 s.value = current_url;
}




function get_url(){

	chrome.extension.sendMessage({ msg: "get_url" });
	

}

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.msg == "out") out(request.res);
		//if(request.msg == "dis") disconn_proxy();
    }
);




