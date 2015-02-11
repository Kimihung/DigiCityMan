window.onload = function(){
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	if(hour > 12){
		hour -= 12;
	}
	var hourPnt = document.getElementById("hour");
	var minutePnt = document.getElementById("minute");
	document.getElementById('minute').style.webkitTransform = 'rotate(' + minute * 6 + 'deg)';
	document.getElementById('hour').style.webkitTransform = 'rotate(' + (hour * 30 + minute / 2) + 'deg)';
};
function clockRun () {
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	if(hour > 12){
		hour -= 12;
	}
	var hourPnt = document.getElementById("hour");
	var minutePnt = document.getElementById("minute");
	document.getElementById('minute').style.webkitTransform = 'rotate(' + minute * 6 + 'deg)';
	document.getElementById('hour').style.webkitTransform = 'rotate(' + (hour * 30 + minute / 2) + 'deg)';
	setTimeout(clockRun,60000);
}
setTimeout(clockRun,60000);