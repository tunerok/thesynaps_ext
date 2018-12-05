



var el = document.getElementById('btn_submit');
if(el){
  el.addEventListener('click', get_url);
}
*/
var el2 = document.getElementById('btn_cancel');
if(el2){
  el2.addEventListener('click', disc);
}
*/

function get_url(){

	chrome.extension.sendMessage({ msg: "get_url" });
}
*/
function disc(){
	chrome.extension.sendMessage({ msg: "dis" });
}*/

