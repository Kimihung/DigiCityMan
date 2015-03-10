window.onload = function(){
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	hour = ((hour+'').length == 1)?('0'+hour):hour;
	minute = ((minute+'').length == 1)?('0'+minute):minute;

	// if(hour > 12){
	// 	hour -= 12;
	// }
	// var hourPnt = document.getElementById("hour");
	// var minutePnt = document.getElementById("minute");
	// document.getElementById('minute').style.webkitTransform = 'rotate(' + minute * 6 + 'deg)';
	// document.getElementById('hour').style.webkitTransform = 'rotate(' + (hour * 30 + minute / 2) + 'deg)';
	document.getElementById('clock').innerHTML = hour +':'+minute;
};
function clockRun () {
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	hour = ((hour+'').length == 1)?('0'+hour):hour;
	minute = ((minute+'').length == 1)?('0'+minute):minute;
	document.getElementById('clock').innerHTML = hour +':'+minute;
	setTimeout(clockRun,60000);
}
setTimeout(clockRun,60000);