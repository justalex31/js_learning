var str = "hello, world!";
var result = str.charAt(0).toUpperCase() + str.substring(1);
alert(result);

var str = "123456";
var arr = str.split("");
arr.reverse();
alert(arr.join(""));

var str = "3751";
var arr = str.split("");
arr.sort();
alert(arr.join(""));

var str = "http://mail.ru";
if (str.indexOf("http://") == 0) {
	alert(true);
} else {
	alert(false);
}

var str = "http://kpfu.ru/name.html";
if(str.substr(-5) == ".html") {
	alert(true);
} else {
alert(false);
}