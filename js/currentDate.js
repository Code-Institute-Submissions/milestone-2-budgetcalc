/* The following has been adapted from 3 sources:
1. an answer on github by user "Lance" SRC: https://stackoverflow.com/questions/32540044/html-display-current-date/32540196 
2. an answer on github by useres "Sirko" and "Bambam" SRC: https://stackoverflow.com/questions/8935414/getminutes-0-9-how-to-display-two-digit-numbers
3. https://tecadmin.net/get-current-date-time-javascript/ */

var curretDateTime =  new Date();
var day = curretDateTime.getDate();
var month = curretDateTime.getMonth() + 1;
var year = curretDateTime.getFullYear();
var hour = ("0"+curretDateTime.getHours()).slice(-2);
var minutes = ("0"+curretDateTime.getMinutes()).slice(-2);
var seconds = ("0"+curretDateTime.getSeconds()).slice(-2);

document.getElementById("date").innerHTML = 
"<strong>" + day + "/" + month + "/" + year + "</strong>" + " at " + "<strong>" + hour + ":" + minutes + ":" + seconds + "</strong>";