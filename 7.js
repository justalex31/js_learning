var arr = [1,2,3];
var arr1 = [4,5,6];
alert(arr.concat(arr1));

var arr = [1,2,3];
alert(arr.reverse());

var arr = [1,2,3];
arr.push(4,5,6)
alert(arr);

var arr = [1,2,3];
arr.unshift(4,5,6)
alert(arr);

var arr = ['js', 'css', 'jq'];
alert(arr.shift());
alert(arr.pop());

var arr = [1, 2, 3, 4, 5];
alert(arr.slice(0, 3));

var arr = [1, 2, 3, 4, 5];
alert(arr.slice(3, 5));

var arr = [1, 2, 3, 4, 5];
arr.splice(1,2)
alert(arr);

var arr = [1, 2, 3, 4, 5];
arr.splice(1, 3);
alert(arr);

var arr = [1,2,3,4,5];
arr.splice(3, 0, "a", "b", "c");
alert(arr);

var arr = [1,2,3,4,5];
arr.splice(1, 0, "a", "b");
arr.splice(6, 0, "c");
arr.splice(8, 0, "e");
alert(arr);

var arr = [3,4,1,2,7];
arr.sort();
alert(arr);

var arr = {js:"test", jq:"hello", css:"world"};
var arr1 = Object.keys(arr);
alert(arr1);