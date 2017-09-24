var arr = ["a", "b", "c"];
alert(arr);

alert(arr[0]);
alert(arr[1]);
alert(arr[2]);

var arr = ["a", "b", "c", "d"];
alert(arr[0] + "+" + arr[1] + ", " + arr[2] + "+" + arr[3]);

var arr = [2, 5, 3, 9];
var result = arr[0] * arr[1] + arr[2] * arr[3];
alert(result);

var obj = {a: 1, b: 2, c: 3};
alert(obj["c"]);
alert(obj.c);

var obj = {Kolja: "1000", Vasja: "500", Petja: "200"};
alert(obj["Petja"]);
alert(obj["Kolja"]);

var day = 4;
var obj = {1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday"};
alert(obj[day]);

var arr = [[1,2,3],[4,5,6],[7,8,9]];
alert(arr[1][0]);

var obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
alert(obj["js"][0]);

var obj = {
	"ru" : ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
  "en" : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
};
alert(obj["ru"][0]);
alert(obj["en"][2]);

var obj = {
	"ru" : ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
  "en" : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
};
var lang = "ru";
var day = 3;
alert(obj[lang][day - 1]);