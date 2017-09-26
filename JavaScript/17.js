function first(arr) {
	document.write(arr.shift() + "<br>");
  if (arr.length != 0) {
  	first(arr);
  }
}

function sumDigits($num) {
	var str = String($num);
  var digit = 0;
  for (i = 0; i < $num.length; i++) {
  	digit += Number($num[i]);
  }
  alert(digit);
  if (digit > 9) {
  	sumDigits(String(digit));
  }
}
sumDigits("123509");