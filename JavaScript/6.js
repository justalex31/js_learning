var str = "js";
alert(str.toUpperCase());

var str = "JS";
alert(str.toLowerCase());

var str = "Я учу javascript!";
alert(str.length);

var str = "Я учу javascript!";
alert(str.substr(2, 3));
alert(str.substr(6, 10));
alert(str.substring(2, 5));
alert(str.substring(6, 16));
alert(str.slice(2,5));
alert(str.slice(6, 16));

var str = "Я учу javascript!";
alert(str.indexOf("учу"));

var str = "Hello, World!";
var n = 4;
var result ="";
if (n > str) {
	result = str;
} else {
	result = str.substring(0, n) + "...";
}
alert(result);

var str = "Я-учу-javascript!";
var result = str.replace(/-/g, "!");
alert(result);

var str = "я учу javascript!";
var arr = str.split(" ");
alert(arr);

var str = "я учу javascript!";
var arr = str.split("");
alert(arr);

var date = "2025-12-31";
var arr = date.split("-");
alert(arr[2] + "." + arr[1] + "." + arr[0]);

var arr = ['я', 'учу', 'javascript', '!'];
var str = arr.join("+");
alert(str);

var str = "я учу javascript!";
var result = str.charAt(0).toUpperCase() + str.substring(1);
alert(result);

var str = "я учу javascript!";
var arr = str.split(" ");
for (i = 0; i < arr.length; i++) {
	arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
}
alert(arr);

var str = "var_test_text";
var arr = str.split("_");
for (i = 1; i < arr.length; i++) {
	arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
}
var result = arr.join("");
alert(result);