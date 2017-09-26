var str = "hello, world!";
var result = "";
function ucfirst($str) {
	return $str[0].toUpperCase() + $str.substr(1);
} 
var arr = str.split(" ");
for(i = 0; i < arr.length; i++) {
	result += ucfirst(arr[i]) + " ";
}

var str = "var_text_hello";
var arr = str.split("_");
var result = arr[0];
for (i = 1; i < arr.length; i++) {
	result += ucfirst(arr[i]);
}
//alert(result);

function inArray(text, arr) {
	for (i = 0; i < arr.length; i++) {
  	if (text == arr[i]) {
    	return true;
    }
  }
  return false;
}

alert(inArray("t1", ["t2", "t4","t8"]));

var str = "123456";
var str1 = "";
for (i = 0; i < str.length; i = i + 2) {
	str1 = str1 + str[i+1] + str[i];
}
alert(str1);