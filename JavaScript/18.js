//1
for (i = 1; i <= 100; i++) {
	document.write(i + "<br>");
}

//2
for (i = 100; i >= 1; i--) {
	document.write(i + "<br>");
}

//3
for (i = 2; i <= 100; i++) {
	if (i % 2 == 0) {
  	document.write(i + "<br>");
  }
}

//4
var arr = [];
for (i = 0; i < 10; i++) {
	arr.push("x");
}
alert(arr);

//5
var arr = [];
for (i = 1; i <= 10; i++) {
	arr.push(i);
}
alert(arr);

//6
var arr = [];
for (i = 0; i < 10; i++) {
	arr.push(Math.random().toFixed(2));
}
alert(arr);

//7
var arr = [];
for (i = 0; i < 10; i++) {
	arr.push(Math.round(Math.random() * 10) + 1);
}
alert(arr);

//8
var arr = [123, 10, 5, 7, 0, -25];
for (i = 0; i < 10; i++) {
	if(arr[i] > 0 && arr[i] < 10) {
  	alert(arr[i]);
  }
}

//9
var arr = [123, 10, 5, 7, 0, -25];
for (i = 0; i < arr.length; i++) {
	if (arr[i] == 5) {
  	alert("yes");
    break;
  }
}

//10
var arr = [123, 10, 5, 7, 0, -25];
var sum = 0;
for (i = 0; i < arr.length; i++) {
	sum += arr[i];
}
alert(sum);

//11
var arr = [123, 10, 5, 7, 0, -25];
var sum = 0;
for (i = 0; i < arr.length; i++) {
	sum += Math.pow(arr[i], 2);
}
alert(sum)

//12
var arr = [123, 10, 5, 7, 0, -25, 124];
var sum = 0;
for (i = 0; i < arr.length; i++) {
	sum += arr[i];
}
alert(sum / arr.length);