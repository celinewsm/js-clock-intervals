
var now = new Date();

var secondStyle = document.getElementById("second").style
var minuteStyle =  document.getElementById("minute").style
var hourStyle = document.getElementById("hour").style;

var secondDegrees = now.getSeconds()* 6;
secondStyle.transform = "rotate(" + secondDegrees + "deg)";
var minuteDegrees = (now.getMinutes()*6);
minuteStyle.transform = "rotate(" + minuteDegrees + "deg)";
var hourDegrees = now.getHours()*30;
hourStyle.transform = "rotate(" + hourDegrees + "deg)";



var secondHand = function() {
  secondDegrees += 6;
	secondStyle.transform = "rotate(" + secondDegrees + "deg)";
}
setInterval(secondHand,1000);

var minuteHand = function() {
  minuteDegrees += 6;
	minuteStyle.transform = "rotate(" + minuteDegrees + "deg)";
}
setInterval(minuteHand,60000);


var hourHand = function() {
  secondDegrees += 6;
	hourStyle.transform = "rotate(" + hourDegrees + "deg)";
}
setInterval(hourHand,60000*60);
