var a = 0;
if (a == 0) {
	alert("True");
} else {
	alert("False");
}

var a = 1;
if (a > 0) {
	alert('True');
} else {
	alert('False');
}

var a = -1;
if (a < 0) {
	alert('True');
} else {
	alert('False');
}

var a = 0;
if (a >= 0) {
	alert('True');
} else {
	alert('False');
}

var a = 0;
if (a <= 0) {
	alert('True');
} else {
	alert('False');
}

var a = 1;
if (a != 0) {
	alert('True');
} else {
	alert('False');
}

var a = "Test";
if (a == "test") {
	alert("True");
} else {
	alert("False");
}

var a = 1;
if (a === "1") {
	alert("True");
} else {
	alert("False");
}

var test  = true;
if (test) {
	alert('True');
} else {
	alert('False');
}

var test  = false;
if (!test) {
	alert('True');
} else {
	alert('False');
}

var a = 5;
if (a > 0 && a < 5) {
	alert('True');
} else {
	alert('False');
}

var a = 5;
if (a == 0 || a == 2) {
	a += 7;
} else {
	a /= 10;
}
alert(a);

var a = 1;
var b = 3;
if (a <= 1 && b >= 3) {
	alert(a + b);
} else {
	alert(a - b);
}

var a = 3;
var b = 7;
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
	alert('True');
} else {
	alert('False');
}

var num = 2;
switch (num) {
	case 1:
		result = 'winter';
	break;
	case 2:
		result = 'spring';
	break;
	case 3:
		result = 'summer';
	break;
	case 4:
		result = 'fall';
	break;
}
alert(result);

var day = 12;
if (day <= 10 ) {
	var decade = 1;
}
if (day >= 11 && day <=20) {
	decade = 2;
}
if (day >= 21 && day <=30) {
	decade = 3;
}
if (day == 31) {
	decade = 4;
}
alert(decade);

var month = 6;
if (month == 12 || month <= 2) {
	var result = 'Winter';
}
if (month >= 3 && month <= 5) {
	result = 'Spring';
}
if (month >= 6 && month <= 8) {
	result = 'Summer';
}
if (month >= 9 && month <= 11) {
	result = 'Fall';
}
alert(result);

var str = 'abcde';
if (str[0] == 'à') {
	alert('Yes');
} else {
	alert('No');
}

var str = '12345';
if (str[0] == '1' || str[0] == '2' || str[0] == '3') {
	alert('Yes');
} else {
	alert('No');
}

var str = '123';
alert(Number(str[0]) + Number(str[1]) + Number(str[2]););

var str = '123456';
var str1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
var str2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
if (str1 == str2) {
	alert('Yes');
} else {
	alert('No');
}