var arr = [];
var str = "x";
for (i = 0; i < 10; i++) {
	arr.push(str);
  str += "x";
}

var arr = [];
for (i = 1; i < 10; i++) {
	var str = "";
  for(j = 0; j < i + 2; j++) {
  	str += i;
  }
  arr.push(str);
}

function arrayFill(str, num) {
	var arr = [];
  for (i = 0; i < num; i++) {
  	arr.push(str);
  }
  return arr;
}

//var arr = arrayFill(2, 9);
var sum = 0;
for (i = 0; i < arr.length; i++) {
	sum += arr[i];
  if (sum > 10) {
  	alert(i + 1);
    break;
  }
}

var arr = [1,2,3,4,5];
for (i = 0; i < arr.length / 2; i++) {
	var a = arr[i];
  arr[i] = arr[arr.length - i - 1];
  arr[arr.length - i - 1] = a;
}

var arr = [[1,2,3], [4,5], [6]];
var sum = 0; 
for (i = 0; i < arr.length; i++) {
	for (j = 0; j < arr[i].length; j++) {
  	sum += arr[i][j];
  }
}

var arr = [[[1,2],[3,4]],[[5,6],[7,8]]];
var sum = 0;
for (i = 0; i < arr.length; i++) {
	for (j = 0; j < arr[i].length; j++) {
  	for (k = 0; k < arr[i][j].length; k++) {
    	sum += arr[i][j][k];
    }
  }
}
alert(sum);