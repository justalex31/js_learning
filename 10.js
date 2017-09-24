function check5(arr) {
	for (i = 0; i < arr.length; i++) {
  	if (arr[i] == 5) {
    	return "yes";
    }
  }
  return "no";
}
var arr = [1,2,3,4,7];
alert(check5(arr));

function check1(num) {
	for (i = 2; i < (num / 2); i++) {
  	if (num % i == 0) {
    	return true;
    }
  }
  return false;
}
var num = 31;
alert(check1(num));

function equl(arr) {
	for (i = 0; i < arr.length - 1; i++) {
  	var t = arr[i];
  	for (j = i+1; j < arr.length; j++) {
    	if (arr[i] == arr[j]) {
      	return "yes";
      }
    }
  }
  return "no";
}
var arr = [2,34,5,0,0];
alert(equl(arr));