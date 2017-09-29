var date = new Date();
/*alert(date.getDate());
alert(date.getMonth());
alert(date.getFullYear());*/

function getTime(t) {
	var d = (t.getDate() + 1) < 10 ? "0" + (t.getDate() + 1) : (t.getDate() + 1);
  var m = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : (t.getMonth() + 1);
  
  alert(t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + " " + d + "." + m + "." + t.getFullYear());
}
//getTime(date);

//alert(date.getDay());

function showDay(t) {
	var days = ['вс', 'пн', 'вт', 'ср', 'четв', 'пятн', 'суб', 'вс'];
  alert(days[t.getDay()]);
}
//showDay(date);

var date = new Date(2015, 0, 7);
//showDay(date);

var date = new Date(1970, 0, 1);
//alert(new Date().getTime() - date.getTime());

var date = new Date();
var minute = Math.floor(date.getTime() / (1000 * 60));
//alert(minute);

var time = Date.parse('1988-03-01T00:00:00');
var date = new Date();
var now = date.getTime();
var result = now - time;
result = result / (1000 * 60 * 60);
//alert(result);

var time = Date.parse('2017-09-28T00:00:00');
//alert((new Date().getTime() - time) / 1000);

