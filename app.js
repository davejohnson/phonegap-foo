function transform(){
	document.getElementById("clickbttn").className += ' tfbttn';
}

var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
    document.getElementById("otest").style.color = "red";
}, false);

//get the pixel density ratio
function pixeld(){
	var dpr = 1;
	if(window.devicePixelRatio !== undefined) dpr = window.devicePixelRatio;
	alert(dpr);
}