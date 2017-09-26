for (i = 1; i <= 100; i++) {
	document.write(i + "<br>");
}

for (i = 11; i <= 33; i++) {
	document.write(i + "<br>");
}

for (i = 0; i <= 100; i++) {
	document.write(i + "<br>");
}

var sum = 0;
for (i = 1; i <= 100; i++) {
	sum += i;
}
alert(sum);

var arr = [1, 2, 3, 4, 5];
for (i = 0; i < arr.length; i++) {
	alert(arr[i]);
}

var arr = [1, 2, 3, 4, 5];
var result = 0;
for (i = 0; i < arr.length; i++) {
	result += arr[i];
}
alert(result);

var obj = {green: "зеленый", red: "красный", blue: "синий"};
for (key in obj) {
	alert(key);
  alert(obj[key]);
}

var obj = {Kolja: "200", Vasja: "300", Petja: "400"};
for (key in obj) {
	alert(key + "'s salary $ " + obj[key]);
}

var arr = [2, 5, 9, 15, 0, 4];
for (var i = 0; i < arr.length; i++) {
	if (arr[i] > 3 && arr[i] < 10) {
		alert(arr[i]);
	}
}

var sum = 0;
var arr = [1, 0, 1, 1, 0, -1];
for (var i = 0; i < arr.length; i++) {
	if (arr[i] >= 0) {
		sum += arr[i];
	}
}
alert(sum);

var arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (var i = 0; i < arr.length; i++) {
	if (arr[i] == 4) {
		alert('Yes!');
		break;
	}
}

var arr = ['10', '20', '30', '50', '235', '3000'];
for (var i = 0; i < arr.length; i++) {
	if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5') {
		alert(arr[i]);
	}
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var str = '';
for (var i = 0; i < arr.length; i++) {
	str += '-' + arr[i];
}
document.write(str + '-');

var arr = ['Mo', 'Tu', 'Wed', 'Th', 'Fr', 'Sa', 'Su'];
for (var i = 0; i < arr.length; i++) {
	if (i == 5 || i == 6) {
		document.write('<b>' + arr[i] + '</b><br>');
	} else {
		document.write(arr[i] + '<br>');
	}
}

var arr = ['Mo', 'Tu', 'Wed', 'Th', 'Fr', 'Sa', 'Su'];
day = 5;
for (var i = 0; i < arr.length; i++) {
	if (i == day) {
		document.write('<i>' + arr[i] + '</i><br>');
	} else {
		document.write(arr[i] + '<br>');
	}
}

var n = 1000;
var num = 0;
while(n >= 50) {
	n /= 2;
  num++;
}
alert(n);
alert(num);