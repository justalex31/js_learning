for (i = 1; i < 10; i++) {
	for (j = 1; j < 10; j++) {
		var r = i * j;
  	document.write(i + " * " + j + " = " + r + "<br>");
  }
}

var str = '';
for (var i = 1; i < 10; i++) {
	str += i;
}
alert(str);

var str = '';
for (var i = 9; i > 0; i--) {
	str += i;
}
alert(str);

var str = '-';
for (var i = 1; i < 10; i++) {
	str += i + '-';
}
alert(str);

for (i = 1; i < 6; i++) {
	for (j = 1; j < i+1; j++) {
  	document.write("x");
  }
  document.write("<br>");
}

for (var i = 1; i <= 9; i++) {
	for (var j = 0; j < i; j++) {
		document.write(i);
	}
	document.write('<br>');
}

var str = "";
for(var i = 0; i < 11; i++) {
	str += "xx";
	document.write(str + "<br>");
}



