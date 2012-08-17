//alert("JavaScript works!");

var weekday = true;

var currentTime = 6;
var workTime = 7;
var prepTime = 1;

var activity1 = "run errands";
var activity2 = "play with kids";

if (weekday === true) {
        console.log ("Ugh. Today is a work day");
    if (workTime - currentTime === prepTime) {
        console.log ("Get up and get ready for work.");
    } else if (workTime - currentTime <= prepTime) {
        console.log ("Oh no! I'm running late!");
    } else if (workTime - currentTime >= prepTime) {
        console.log ("Yay! I can sleep longer!");
    }
}
else {
    console.log ("Yay! No work today! I can sleep in, " + activity1 + ", then I can " + activity2 + ".");
}
