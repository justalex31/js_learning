var a = 10;
var b = 3;
alert(a % b);

var a = 9;
var b = 3;
if (a % b == 0) {
	alert("Делится");
} else {
	alert("Не делится");
}

var st = Math.pow(2, 10);
alert(st);

alert(Math.sqrt(245));

var num = 0;
var arr = [4, 2, 5, 19, 13, 0, 10];
for(i = 0; i < arr.length; i++) {
	num += Math.pow(arr[i], 3);
}
alert(Math.sqrt(num));

alert(Math.sqrt(379).toFixed());
alert(Math.sqrt(379).toFixed(1));
alert(Math.sqrt(379).toFixed(2));

var num = Math.sqrt(587);
var obj = {
	"floor": Math.floor(num),
  "ceil": Math.ceil(num)
};
alert(obj["ceil"]);

var arr = [4, -2, 5, 19, -130, 0, 10];
alert(Math.max.apply(null, arr));
alert(Math.min.apply(null, arr));

alert(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

var arr = Array(10);
for(i = 0; i < arr.length; i++) {
	arr[i] = Math.round(Math.random());
}
alert(arr);

var a = 10, b = 17;
alert(Math.abs(a-b));

var a = 3, b = 5;
var c = Math.abs(a-b);
alert(c);

var arr = [12, 15, 20, 25, 59, 79];
var c = 0;
for(i = 0; i < arr.length; i++) {
	c += arr[i];
}
alert(c/arr.length);

var a = 19;
var p = 1;
for(i = 2; i < a; i++) {
	p *= i;
}
alert(p);





