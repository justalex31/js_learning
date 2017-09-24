function cube($num) {
	return Math.pow($num, 2);
}
alert(cube(4));

function sum(param, param1) {
	return param + param1;
}
alert(sum(3,4));

function artif($num1, $num2, $num3) {
	return ($num1 - $num2) / $num3;
}
alert(artif(4,1,3));

function day(day) {
	switch(day) {
  	case "1":
    	alert("Monday");
      break;
    case "2":
    	alert("Tuesday");
      break;
    case "3":
    	alert("Wednesday");
      break;
    case "4":
    	alert("Thursday");
      break;
    case "5":
    	alert("Friday");
      break;
    case "6":
    	alert("Saturday");
      break;
    case "7": 
    	alert("Sunday");
      break;
    default:
    	alert("Error");
      break;
  }
}
day("2");