function isNumberRange($num) {
	return $num > 0 && $num < 10 ? true : false;
}

var arr = [97,4,17,63,10];
var arr1 = [];
for (i = 0; i < arr.length; i++) {
	if (isNumberRange(arr[i])) {
  	arr1.push(arr[i]);
  }
}
//alert(arr1);

function getDigitsSum(num) {
	var num = String(num);
	var sum = 0;
	for (var i = 0; i < num.length; i++) {
		sum += Number(num[i]);
	}
	return sum;
}

var arr = [];
for (i = 1; i <= 2017; i++) {
	if (getDigitsSum(i) == 13) {
  	arr.push(i);
  }
}
//alert(arr);

function isEven(even) {
	return even % 2 == 0 ? true : false;
}

var arr = [1,51,6,8,20,7,14,9];
var arr1 = [];
for (i = 0; i < arr.length; i++) {
	if (isEven(arr[i])) {
  	arr1.push(arr[i]);
  }
}

function getDivisors(num) {
	var arr = [];
  var count = 2;
  for (i = 1; i <= num; i++) {
  	if (num % i == 0) {
    	arr.push(i);
    }
  }
  return arr;
}

alert(getDivisors(506));